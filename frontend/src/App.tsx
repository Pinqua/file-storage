import { useState, useEffect } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileUpload } from "@/components/FileUpload";
import { FileList } from "@/components/FileList";
import { FileViewer } from "@/components/FileViewer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Folder } from "lucide-react";
import { toast } from "sonner";
import { fetchFiles as apiFetchFiles, viewFile, getDownloadUrl } from "@/api";
import type { FileData, ViewContent } from "@/types";

function App() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const [viewContent, setViewContent] = useState<ViewContent | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const files = await apiFetchFiles();
      setFiles(files);
    } catch (error) {
      toast.error("Failed to load files", {
        description: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleView = async (file: FileData) => {
    try {
      const content = await viewFile(file.filename, file.mimetype);
      setViewContent(content);
      setSelectedFile(file);
    } catch (error) {
      toast.error("Failed to view file", {
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  const handleDownload = (filename: string) => {
    window.open(getDownloadUrl(filename), "_blank");
  };

  const handleCloseViewer = () => {
    setSelectedFile(null);
    setViewContent(null);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Folder className="h-8 w-8 text-primary" />
              File Storage
            </CardTitle>
            <CardDescription>
              Upload, view, and download your files
            </CardDescription>
            <CardAction>
              <ThemeToggle />
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-6">
            <FileUpload onUploadComplete={fetchFiles} />
            <FileList
              files={files}
              onView={handleView}
              onDownload={handleDownload}
              loading={loading}
            />
          </CardContent>
        </Card>

        {selectedFile && viewContent && (
          <FileViewer
            file={selectedFile}
            content={viewContent}
            onClose={handleCloseViewer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
