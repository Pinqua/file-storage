# File Storage Application

Dropbox-like file storage with upload, view, and download capabilities.

## Demo

### Screenshots

<img width="2041" height="1110" alt="Screenshot 2025-11-05 at 11 44 33 PM" src="https://github.com/user-attachments/assets/006ae2f9-5e89-405d-afb5-fc50de3c8a21" />
<img width="2056" height="1121" alt="Screenshot 2025-11-05 at 11 45 25 PM" src="https://github.com/user-attachments/assets/9dbee1b2-6d74-4705-970d-939943738f6c" />
<img width="2056" height="1115" alt="Screenshot 2025-11-06 at 3 08 47 PM" src="https://github.com/user-attachments/assets/b63597b3-eb92-4210-9550-3cbed0e3c42e" />
<img width="2034" height="1105" alt="Screenshot 2025-11-05 at 11 44 42 PM" src="https://github.com/user-attachments/assets/899b37d7-ad60-4115-81ae-567b23d85b71" />
<img width="2056" height="1108" alt="Screenshot 2025-11-05 at 11 44 52 PM" src="https://github.com/user-attachments/assets/455d7676-418e-4c50-aee3-60649ad0aa6c" />
<img width="2042" height="1105" alt="Screenshot 2025-11-05 at 11 45 05 PM" src="https://github.com/user-attachments/assets/8692fa04-56bf-4514-bfdc-4b8723f6a23c" />
<img width="2049" height="926" alt="Screenshot 2025-11-05 at 11 45 16 PM" src="https://github.com/user-attachments/assets/407aedc8-0e98-47e2-8e64-db10934b869c" />

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
