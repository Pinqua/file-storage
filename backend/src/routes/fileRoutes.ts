import express from "express";
import fileController from "../controllers/fileController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), fileController.uploadFile);
router.get("/files", fileController.getAllFiles);
router.get("/download/:filename", fileController.downloadFile);
router.get("/view/:filename", fileController.viewFile);

export default router;

