import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";
import { Eye, Download, Upload } from "lucide-react";
import type { FileData } from "@/types";
import { formatFileSize, getFileExtension } from "@/lib/utils";
import { getFileIcon } from "@/lib/file-icons";

interface FileListProps {
  files: FileData[];
  onView: (file: FileData) => void;
  onDownload: (filename: string) => void;
  loading?: boolean;
}

function FileListLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed rounded-lg">
      <Spinner className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold">Loading files...</h3>
      <p className="text-sm text-muted-foreground">
        Please wait while we fetch your files
      </p>
    </div>
  );
}

function FileListEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed rounded-lg">
      <Upload className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold">No files</h3>
      <p className="text-sm text-muted-foreground">
        Get started by uploading a file
      </p>
    </div>
  );
}

export function FileList({
  files,
  onView,
  onDownload,
  loading = false,
}: FileListProps) {
  if (loading) {
    return <FileListLoading />;
  }

  if (files.length === 0) {
    return <FileListEmpty />;
  }

  return (
    <Table className="rounded-lg border">
      <TableHeader>
        <TableRow>
          <TableHead>File</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                {getFileIcon(file.mimetype)}
                <span className="font-medium">{file.originalname}</span>
              </div>
            </TableCell>
            <TableCell>{formatFileSize(file.size)}</TableCell>
            <TableCell>
              <Badge variant="secondary">
                {getFileExtension(file.mimetype)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onView(file)}
                aria-label={`View ${file.originalname}`}
              >
                <Eye />
                <span className="sr-only">View</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDownload(file.filename)}
                aria-label={`Download ${file.originalname}`}
              >
                <Download />
                <span className="sr-only">Download</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
