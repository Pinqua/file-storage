export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const MAX_FILE_SIZE_MB = MAX_FILE_SIZE / (1024 * 1024);

const FILE_TYPES = {
  TEXT: "text/plain",
  JPEG: "image/jpeg",
  JPG: "image/jpg",
  PNG: "image/png",
  JSON: "application/json",
  PDF: "application/pdf",
} as const;

export const ALLOWED_FILE_TYPES = Object.values(FILE_TYPES);

export const FILE_TYPE_LABELS: Record<string, string> = {
  [FILE_TYPES.TEXT]: "Text",
  [FILE_TYPES.JPEG]: "JPEG Image",
  [FILE_TYPES.JPG]: "JPG Image",
  [FILE_TYPES.PNG]: "PNG Image",
  [FILE_TYPES.JSON]: "JSON",
  [FILE_TYPES.PDF]: "PDF",
};

export const ALLOWED_FILE_EXTENSIONS = ALLOWED_FILE_TYPES.map((type) => {
  const ext = type.split("/")[1];
  return ext === "plain" ? "txt" : ext;
});

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001";

export const VIEW_TYPES = {
  IMAGE: "image",
  TEXT: "text",
  PDF: "pdf",
} as const;

export const MIME_TYPES = {
  TEXT: "text/plain",
  JPEG: "image/jpeg",
  JPG: "image/jpg",
  PNG: "image/png",
  JSON: "application/json",
  PDF: "application/pdf",
} as const;

export const IMAGE_MIME_PREFIX = "image/";
