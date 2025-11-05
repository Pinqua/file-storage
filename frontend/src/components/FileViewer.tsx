import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VIEW_TYPES } from "@/lib/constants";
import type { FileData, ViewContent } from "@/types";

interface FileViewerProps {
  file: FileData;
  content: ViewContent;
  onClose: () => void;
}

export function FileViewer({ file, content, onClose }: FileViewerProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{file.originalname}</DialogTitle>
          <DialogDescription>
            {(file.size / 1024).toFixed(2)} KB • {file.mimetype}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {content.type === VIEW_TYPES.IMAGE ? (
            <div className="flex justify-center">
              <img
                src={content.url}
                alt={file.originalname}
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          ) : content.type === VIEW_TYPES.PDF ? (
            <div className="w-full h-[600px]">
              <iframe
                src={content.url}
                className="w-full h-full rounded-lg border"
                title={file.originalname}
              />
            </div>
          ) : (
            <pre className="bg-muted rounded-lg p-4 text-sm overflow-auto max-h-96 whitespace-pre-wrap wrap-break-word">
              {content.content}
            </pre>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
