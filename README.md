# Vong-Tay

Starter project with a React + Tailwind CSS frontend and a Node.js + Express backend.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

The frontend runs at <http://localhost:5173> and the API at <http://localhost:3000>.

To install and run each app separately, use `npm install` and `npm run dev` in both `frontend` and `backend`.

## Structure

- `frontend/` — React, Vite, and Tailwind CSS
- `backend/` — Express API

The API exposes `GET /api/health` as a starter health check.
