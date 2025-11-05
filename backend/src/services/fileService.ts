import fs from "fs/promises";
import path from "path";
import type { ModelStatic } from "sequelize";
import File from "../models/File.js";
import type { FileModel, FileMetadata } from "../types/index.js";
import {
  UPLOAD_DIR,
  VIEWABLE_TEXT_TYPES,
  VIEWABLE_IMAGE_TYPES,
  VIEWABLE_PDF_TYPES,
} from "../config/constants.js";

export class FileService {
  private File: ModelStatic<FileModel>;

  constructor(fileModel: ModelStatic<FileModel> = File) {
    this.File = fileModel;
  }

  async saveFileMetadata(fileData: FileMetadata): Promise<void> {
    const { filename, originalname, mimetype, size } = fileData;
    await this.File.create({ filename, originalname, mimetype, size });
  }

  async getAllFiles(): Promise<FileModel[]> {
    return this.File.findAll({
      order: [["uploaded_at", "DESC"]],
    });
  }

  async getFileByFilename(filename: string): Promise<FileModel | null> {
    return this.File.findOne({
      where: { filename },
    });
  }

  getFilePath(filename: string): string {
    const sanitized = path.basename(filename);
    const filePath = path.join(UPLOAD_DIR, sanitized);

    if (!filePath.startsWith(UPLOAD_DIR)) {
      throw new Error("Invalid file path");
    }

    return filePath;
  }

  async fileExists(filename: string): Promise<boolean> {
    try {
      const filePath = this.getFilePath(filename);
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  async readFileContent(
    filename: string
  ): Promise<{ content: string; type: string } | null> {
    const filePath = this.getFilePath(filename);
    const ext = path.extname(filename).toLowerCase();

    if (VIEWABLE_TEXT_TYPES.includes(ext as any)) {
      const content = await fs.readFile(filePath, "utf8");
      return { content, type: ext };
    }

    return null;
  }

  isViewableFile(filename: string): boolean {
    const ext = path.extname(filename).toLowerCase();
    return (
      VIEWABLE_TEXT_TYPES.includes(ext as any) ||
      VIEWABLE_IMAGE_TYPES.includes(ext as any) ||
      VIEWABLE_PDF_TYPES.includes(ext as any)
    );
  }
}

export default new FileService();

