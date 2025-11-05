import path from "path";
import type { Request, Response, NextFunction } from "express";
import fileService, { FileService } from "../services/fileService.js";
import {
  VIEWABLE_IMAGE_TYPES,
  VIEWABLE_PDF_TYPES,
} from "../config/constants.js";

export class FileController {
  private fileService: FileService;

  constructor(service: FileService = fileService) {
    this.fileService = service;
  }

  uploadFile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({
          success: false,
          error: "No file provided",
        });
        return;
      }

      await this.fileService.saveFileMetadata(req.file);

      res.status(201).json({
        success: true,
        message: "File uploaded successfully",
        file: {
          filename: req.file.filename,
          originalname: req.file.originalname,
          mimetype: req.file.mimetype,
          size: req.file.size,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  getAllFiles = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const files = await this.fileService.getAllFiles();

      res.status(200).json({
        success: true,
        count: files.length,
        data: files,
      });
    } catch (error) {
      next(error);
    }
  };

  downloadFile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { filename } = req.params;

      if (!filename) {
        res.status(400).json({
          success: false,
          error: "Filename is required",
        });
        return;
      }

      if (!(await this.fileService.fileExists(filename))) {
        res.status(404).json({
          success: false,
          error: "File not found",
        });
        return;
      }

      const filePath = this.fileService.getFilePath(filename);
      const fileMetadata = await this.fileService.getFileByFilename(filename);

      res.download(filePath, fileMetadata?.originalname || filename);
    } catch (error) {
      next(error);
    }
  };

  viewFile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { filename } = req.params;

      if (!filename) {
        res.status(400).json({
          success: false,
          error: "Filename is required",
        });
        return;
      }

      if (!(await this.fileService.fileExists(filename))) {
        res.status(404).json({
          success: false,
          error: "File not found",
        });
        return;
      }

      if (!this.fileService.isViewableFile(filename)) {
        res.status(400).json({
          success: false,
          error: "File type not supported for viewing",
        });
        return;
      }

      const filePath = this.fileService.getFilePath(filename);
      const ext = path.extname(filename).toLowerCase();

      // Send images and PDFs as files for browser viewing
      if (
        VIEWABLE_IMAGE_TYPES.includes(ext as any) ||
        VIEWABLE_PDF_TYPES.includes(ext as any)
      ) {
        res.sendFile(filePath);
        return;
      }

      // Send text content as JSON
      const fileContent = await this.fileService.readFileContent(filename);

      res.status(200).json({
        success: true,
        ...fileContent,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default new FileController();

