import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { uploadFile } from "@/api";
import { toast } from "sonner";
import { validateFile } from "@/lib/utils";
import { ALLOWED_FILE_EXTENSIONS, MAX_FILE_SIZE_MB } from "@/lib/constants";

interface FileUploadProps {
  onUploadComplete: () => void;
}

export function FileUpload({ onUploadComplete }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateFile(file);
    if (validationError) {
      toast.error("Invalid file", {
        description: validationError,
      });
      e.target.value = "";
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await uploadFile(formData);
      toast.success("File uploaded successfully", {
        description: `${file.name} has been uploaded`,
      });
      onUploadComplete();
    } catch (error) {
      toast.error("Upload failed", {
        description: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const supportedFormats = ALLOWED_FILE_EXTENSIONS.map((ext) => `.${ext}`).join(
    ", "
  );

  return (
    <div className="space-y-2">
      <Button disabled={uploading} asChild aria-label="Upload file">
        <label className="cursor-pointer">
          <Upload className="h-4 w-4" />
          {uploading ? "Uploading..." : "Upload file"}
          <input type="file" onChange={handleUpload} className="hidden" />
        </label>
      </Button>
      <p className="text-sm text-muted-foreground">
        Supported: {supportedFormats} (Max {MAX_FILE_SIZE_MB}MB)
      </p>
    </div>
  );
}
