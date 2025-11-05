import { Image, FileText, File } from "lucide-react";

export function getFileIcon(mimetype: string) {
  if (mimetype.startsWith("image/"))
    return <Image className="h-5 w-5 text-purple-500" />;
  if (mimetype === "application/pdf")
    return <FileText className="h-5 w-5 text-red-500" />;
  return <File className="h-5 w-5 text-blue-500" />;
}
