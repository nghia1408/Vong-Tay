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

Run ESLint with `npm run lint` from `frontend`. GitHub Actions runs this check on every push and pull request.

The frontend runs at <http://localhost:5173> and the API at <http://localhost:3000>.

## Cloudflare Worker Preview

For Cloudflare Workers Builds, set the Worker root directory to `frontend` and the Build command to `npm run build` under **Settings → Builds**. Workers Builds runs that command before `npx wrangler preview`; without it, `dist` is never created and Wrangler reports that the assets directory is missing. Locally, run `npm run build` from `frontend` before `npx wrangler preview`. The Wrangler config serves the build from `dist` and includes the required empty `previews` block. The Express API is a separate Node.js service and must be deployed separately; configure the production frontend to call that API URL.

## Structure

- `frontend/` — React, Vite, Tailwind CSS, and Wrangler config
- `backend/` — Express API

The API exposes `GET /api/health` as a starter health check.
