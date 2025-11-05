import type { VIEW_TYPES } from "@/lib/constants";

export type ViewType = (typeof VIEW_TYPES)[keyof typeof VIEW_TYPES];

export interface FileData {
  id: number;
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
  uploadedAt: string;
}

export interface ViewContent {
  type: ViewType;
  url?: string;
  content?: string;
}

export interface UploadResponse {
  success: boolean;
  message: string;
  file: {
    filename: string;
    originalname: string;
    mimetype: string;
    size: number;
  };
}

export interface FileListResponse {
  success: boolean;
  count: number;
  data: FileData[];
}
