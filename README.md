# File Storage Application

Dropbox-like file storage with upload, view, and download capabilities.

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
