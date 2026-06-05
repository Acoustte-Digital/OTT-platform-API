# OTT-platform-API

Next.js (App Router) + TypeScript backend API for an OTT platform using in-memory mock data.

## Run

```bash
npm install
npm run dev
```

## Endpoints

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/movies?category=Action&type=trending|popular`
- `GET /api/movies/:id`
- `GET /api/user/profile` (requires a bearer token returned by login)
