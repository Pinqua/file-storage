import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import fileRoutes from "./routes/fileRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", fileRoutes);

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

interface CustomError extends Error {
  statusCode?: number;
}

app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Error:", err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Internal server error",
  });
});

export default app;

