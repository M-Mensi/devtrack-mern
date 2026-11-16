# DevTrack

DevTrack is a lightweight project and ticket tracker for freelance developers
and small teams. The repository is organized as a MERN application:

- `client/` — React frontend powered by Vite
- `server/` — Express API and MongoDB connection

The application is at the setup stage. The server currently exposes a health
endpoint; authentication, projects, tickets, and dashboard features still need
to be implemented.

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- MongoDB running locally, or a MongoDB Atlas connection string

## Setup

Install dependencies in both app folders:

```powershell
cd server
npm install
Copy-Item .env.example .env
cd ..\client
npm install
```

Edit `server/.env` and set `MONGO_URI` to your local MongoDB URL or Atlas
connection string. The other values have local development defaults; use a
unique, randomly generated `JWT_SECRET` before implementing or enabling
authentication. Never commit `.env` or put secrets in frontend variables.

## Run locally

Start the API in one terminal:

```powershell
cd server
npm run dev
```

Start the frontend in another terminal:

```powershell
cd client
npm run dev
```

Vite prints the frontend URL (normally `http://localhost:5173`). The API runs
on `http://localhost:5000`; visit `/api/health` to check its status.

## Production build

```powershell
cd client
npm run build
```

Configure the deployment environment with `PORT`, `MONGO_URI`, `JWT_SECRET`,
and `CLIENT_URL`. Do not deploy the example environment values.
