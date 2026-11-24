# Vong-Tay

Starter project with a React + Tailwind CSS frontend and a Node.js + Express backend.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

Install dependencies in `frontend` and `backend`:

```bash
cd frontend
npm install
cd ../backend
npm install
```

Start only the frontend with `npm run dev` from `frontend`, or start both services with `npm run dev:stack` from `frontend`.

The frontend runs at <http://localhost:5173> and the API at <http://localhost:3000>.

## Cloudflare Worker Preview

From `frontend`, run `npm run build` before `npx wrangler preview`. The Wrangler config serves the frontend build from `dist` and includes the required empty `previews` block. The Express API is a separate Node.js service and must be deployed separately; configure the production frontend to call that API URL.

## Structure

- `frontend/` — React, Vite, Tailwind CSS, and Wrangler config
- `backend/` — Express API

The API exposes `GET /api/health` as a starter health check.
