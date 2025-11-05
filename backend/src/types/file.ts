import type { Model, Optional } from "sequelize";

export interface FileAttributes {
  id: number;
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
  uploaded_at: Date;
}

export interface FileCreationAttributes
  extends Optional<FileAttributes, "id" | "uploaded_at"> {}

export interface FileModel
  extends Model<FileAttributes, FileCreationAttributes>,
    FileAttributes {}

export interface FileMetadata {
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface FileListResponse extends ApiResponse<FileAttributes[]> {
  count: number;
}

export interface FileUploadResponse extends ApiResponse {
  file: FileMetadata;
}

export interface FileViewResponse extends ApiResponse {
  content?: string;
  mimetype?: string;
}

