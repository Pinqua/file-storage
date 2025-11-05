import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const PORT: number = Number(process.env.PORT) || 3001;
export const UPLOAD_DIR: string = path.join(__dirname, "../../uploads");

export const ALLOWED_FILE_TYPES = [
  ".txt",
  ".jpg",
  ".jpeg",
  ".png",
  ".json",
  ".pdf",
] as const;

export const ALLOWED_MIME_TYPES = [
  "text/plain",
  "image/jpeg",
  "image/png",
  "application/json",
  "application/pdf",
] as const;

export const MAX_FILE_SIZE: number = 10 * 1024 * 1024; // 10MB

export const VIEWABLE_TEXT_TYPES = [".txt", ".json"] as const;
export const VIEWABLE_IMAGE_TYPES = [".jpg", ".jpeg", ".png"] as const;
export const VIEWABLE_PDF_TYPES = [".pdf"] as const;

export type AllowedFileType = (typeof ALLOWED_FILE_TYPES)[number];
export type AllowedMimeType = (typeof ALLOWED_MIME_TYPES)[number];
export type ViewableTextType = (typeof VIEWABLE_TEXT_TYPES)[number];
export type ViewableImageType = (typeof VIEWABLE_IMAGE_TYPES)[number];
export type ViewablePdfType = (typeof VIEWABLE_PDF_TYPES)[number];

