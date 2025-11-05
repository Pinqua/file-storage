import {
  API_BASE_URL,
  VIEW_TYPES,
  MIME_TYPES,
  IMAGE_MIME_PREFIX,
} from "@/lib/constants";
import type { FileData, ViewContent } from "@/types";

export async function fetchFiles(): Promise<FileData[]> {
  const response = await fetch(`${API_BASE_URL}/api/files`);
  if (!response.ok) {
    throw new Error("Failed to fetch files");
  }
  const result = await response.json();
  return result.data || [];
}

export async function uploadFile(formData: FormData): Promise<FileData> {
  const response = await fetch(`${API_BASE_URL}/api/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Upload failed");
  }

  return await response.json();
}

export async function viewFile(
  filename: string,
  mimetype: string
): Promise<ViewContent> {
  const url = `${API_BASE_URL}/api/view/${filename}`;

  if (mimetype.startsWith(IMAGE_MIME_PREFIX)) {
    return { type: VIEW_TYPES.IMAGE, url };
  }

  if (mimetype === MIME_TYPES.PDF) {
    return { type: VIEW_TYPES.PDF, url };
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to view file");
  }

  const result = await response.json();
  return { type: VIEW_TYPES.TEXT, content: result.content };
}

export function getDownloadUrl(filename: string): string {
  return `${API_BASE_URL}/api/download/${filename}`;
}
