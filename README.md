# File Storage Application

Dropbox-like file storage with upload, view, and download capabilities.

## Demo

### Screenshots

<p align="center">
  <img width="49%" alt="Screenshot 2025-11-05 at 11 44 33 PM" src="https://github.com/user-attachments/assets/dde7b112-bf70-435a-9040-db4bd360bcd4" />
  <img width="49%" alt="Screenshot 2025-11-05 at 11 44 42 PM" src="https://github.com/user-attachments/assets/8f8bec7b-dbff-4c08-b410-dfbb3e943352" />
</p>

<p align="center">
  <img width="49%" alt="Screenshot 2025-11-05 at 11 44 52 PM" src="https://github.com/user-attachments/assets/b7923241-c4bb-4ce2-bf78-8f8abf7363f6" />
  <img width="49%" alt="Screenshot 2025-11-05 at 11 45 05 PM" src="https://github.com/user-attachments/assets/3114de1a-2807-4b31-ad57-a708efec60d2" />
</p>

<p align="center">
  <img width="49%" alt="Screenshot 2025-11-05 at 11 45 16 PM" src="https://github.com/user-attachments/assets/e4c9dd06-e830-421f-bb7b-31dff64e5b16" />
  <img width="49%" alt="Screenshot 2025-11-05 at 11 45 25 PM" src="https://github.com/user-attachments/assets/2cc70b16-0800-46a2-bbb3-b9bc743fa0a5" />
  
</p>

### Video Demo

https://github.com/user-attachments/assets/26b9d537-56b6-4bd5-b405-e497ebde0b56

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
