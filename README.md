# File Storage Application

Dropbox-like file storage with upload, view, and download capabilities.

## Demo

### Screenshots

<p align="center">
  <img src="Screenshot 2025-11-05 at 11.44.33 PM.png" width="45%" />
  <img src="Screenshot 2025-11-05 at 11.44.42 PM.png" width="45%" />
</p>

<p align="center">
  <img src="Screenshot 2025-11-05 at 11.44.52 PM.png" width="45%" />
  <img src="Screenshot 2025-11-05 at 11.45.05 PM.png" width="45%" />
</p>

<p align="center">
  <img src="Screenshot 2025-11-05 at 11.45.16 PM.png" width="45%" />
  <img src="Screenshot 2025-11-05 at 11.45.25 PM.png" width="45%" />
</p>

### Video Demo

[Watch Demo Video](Screen%20Recording%202025-11-05%20at%2010.50.04%20PM.mov)

## Tech Stack

**Backend:** Node.js, Express, TypeScript, Sequelize, SQLite, Multer
**Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui

## Quick Start

```bash
# Backend
cd backend
npm install
npm run dev          # Development (http://localhost:3001)
npm run build        # Production build
npm start            # Run production build

# Frontend
cd frontend
npm install
npm run dev          # Development (http://localhost:5173)
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/upload` | Upload file (multipart/form-data) |
| `GET` | `/api/files` | List all files |
| `GET` | `/api/view/:filename` | View file (text/image/PDF) |
| `GET` | `/api/download/:filename` | Download file |
| `GET` | `/health` | Health check |

**Allowed file types:** `.txt`, `.json`, `.jpg`, `.jpeg`, `.png`, `.pdf` (max 10MB)
