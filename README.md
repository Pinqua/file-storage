# File Storage Application

Dropbox-like file storage with upload, view, and download capabilities.

## Demo

### Screenshots
<img width="2041" height="1110" alt="Screenshot 2025-11-05 at 11 44 33 PM" src="https://github.com/user-attachments/assets/798777e9-baee-4b34-a863-8fafae6a13ad" />
<img width="2056" height="1121" alt="Screenshot 2025-11-05 at 11 45 25 PM" src="https://github.com/user-attachments/assets/5674f832-4638-435c-a7fa-aa4a0893e7d2" />
<img width="2056" height="1115" alt="Screenshot 2025-11-06 at 3 08 47 PM" src="https://github.com/user-attachments/assets/4bde9798-4945-4b0a-b7b8-8f78f2d95e5e" />
<img width="2049" height="926" alt="Screenshot 2025-11-05 at 11 45 16 PM" src="https://github.com/user-attachments/assets/43b30f08-4757-4f56-bf8c-077cc56816b4" />
<img width="2042" height="1105" alt="Screenshot 2025-11-05 at 11 45 05 PM" src="https://github.com/user-attachments/assets/1c0e1a2e-5f7f-4b70-9e66-b201fd13b10a" />
<img width="2056" height="1108" alt="Screenshot 2025-11-05 at 11 44 52 PM" src="https://github.com/user-attachments/assets/efb6a3b2-7df8-4f4e-9e38-549e0b7cf0c3" />
<img width="2034" height="1105" alt="Screenshot 2025-11-05 at 11 44 42 PM" src="https://github.com/user-attachments/assets/e2e8c62d-30c7-4765-a4a0-4ce2751fb7c3" />




### Video Demo

https://github.com/user-attachments/assets/845c0838-e4e8-4b56-bd8b-80a3f4792078

https://github.com/user-attachments/assets/37e900d8-3cfe-46a7-84fc-6f4e780bd4f4

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
