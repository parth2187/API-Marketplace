# CLAUDE.md — AI Assistant Guide for API-Marketplace

This document provides essential context for AI assistants working on the API-Marketplace codebase.

---

## Project Overview

API-Marketplace is a full-stack MERN (MongoDB, Express, React, Node.js) application where developers can publish, discover, and consume APIs. It also includes an integrated Background Remover tool powered by the [remove.bg](https://www.remove.bg/) external API.

**Architecture:** Monorepo with separate `backend/` and `frontend/` directories.

---

## Repository Structure

```
API-Marketplace/
├── backend/                    # Node.js/Express REST API server
│   ├── src/
│   │   ├── index.js            # Server entry point (Express init, MongoDB connect, routes)
│   │   ├── middlewares/
│   │   │   └── auth.js         # JWT verification middleware
│   │   ├── models/
│   │   │   ├── User.js         # Mongoose User schema (email, password, createdAt)
│   │   │   └── db.js           # MongoDB connection initializer
│   │   ├── routes/
│   │   │   ├── user.js         # Auth routes: /user/signup, /user/login, /user/me
│   │   │   ├── bgremover.js    # Background remover route: /bgremover/upload
│   │   │   └── newuser.js      # Unused duplicate of user.js — do not use
│   │   └── utils/
│   │       └── index.js        # Empty utility file (placeholder)
│   ├── .env.example            # Required environment variables template
│   ├── .eslintrc.json          # ESLint config (Node.js, CommonJS, Prettier)
│   ├── .prettierrc             # Prettier config (trailing commas, semicolons, double quotes)
│   └── package.json
│
├── frontend/                   # React 19 SPA (Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── App.js              # Root component; defines all React Router routes
│   │   ├── index.js            # ReactDOM render entry point
│   │   ├── index.css           # Global CSS reset
│   │   ├── components/
│   │   │   ├── Navbar.js       # Top nav with My APIs, My Account, +New API
│   │   │   ├── ApiModal.js     # Modal form for adding a new API
│   │   │   ├── Card.js         # API card (image, title, description)
│   │   │   ├── Button.js       # Reusable button component
│   │   │   └── Banner.js       # Promotional banner for Background Remover
│   │   ├── pages/
│   │   │   ├── LoginPage.js    # Login form; stores JWT in localStorage
│   │   │   ├── Register.js     # Registration form
│   │   │   ├── MarketPlace.js  # Displays all available APIs (mock data)
│   │   │   ├── DashboardPage.js# User's uploaded APIs (mock data)
│   │   │   └── Bgremover.js    # Background removal UI (file upload)
│   │   ├── Assets/             # Images and SVGs
│   │   └── utils/
│   │       ├── data.js         # Mock API card data (6 sample entries)
│   │       └── utils.js        # Empty utility file (placeholder)
│   ├── index.html              # Vite HTML entry point (project root)
│   ├── vite.config.js          # Vite build configuration
│   ├── .env.example            # Frontend env vars template (VITE_ prefix)
│   ├── .eslintrc.js            # ESLint config (React, JSX, Prettier)
│   ├── .prettierrc             # Prettier config (same as backend)
│   └── package.json
│
├── Readme.md                   # Main project README (setup, endpoints, deployment)
└── CLAUDE.md                   # This file
```

---

## Development Setup

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB (local instance or Atlas URI)
- remove.bg API key (for background remover feature)

### Installation

```bash
# Backend
cd backend
npm install
cp .env.example .env   # then fill in values
npm run dev            # starts nodemon on port 5000

# Frontend (separate terminal)
cd frontend
npm install
cp .env.example .env   # set REACT_BACKEND_URL
npm start              # starts Vite dev server on port 3000
```

### Environment Variables

**Backend** (`backend/.env`):
```
MONGODB_URI=mongodb://localhost:27017/api-marketplace
PORT=5000
BGREMOVER_API_KEY=<your-remove.bg-api-key>
```

**Frontend** (`frontend/.env`):
```
VITE_BACKEND_URL=http://localhost:5000
```

---

## Key Conventions

### Code Style

Both frontend and backend share the same Prettier and ESLint setup:

- **Quotes:** Double quotes
- **Semicolons:** Always
- **Trailing commas:** All (ES5)
- **Bracket spacing:** Enabled
- **Print width:** 80 characters
- **Tab width:** 2 spaces

Run linting:
```bash
# Backend
cd backend && npm run lint

# Frontend (no dedicated lint script — use ESLint directly)
cd frontend && npx eslint src/
```

### Backend Conventions

- CommonJS modules (`require`/`module.exports`) — do not use ESM `import/export`
- Express route files export a Router instance
- All protected routes use the `auth` middleware from `src/middlewares/auth.js`
- Route registration happens in `src/index.js`
- MongoDB interactions use Mongoose; models live in `src/models/`
- Validation uses `express-validator` decorators on routes (see `user.js`)

### Frontend Conventions

- Functional components with React hooks only — no class components
- SCSS for component-level styling (`.scss` files colocated with components)
- React Router v6: use `<Routes>` + `<Route>` (not v5's `<Switch>`)
- Authentication token stored in `localStorage` under key `token`
- Axios for all HTTP requests; base URL from `import.meta.env.VITE_BACKEND_URL`
- No global state manager (no Redux/Context); state is component-local

---

## API Endpoints Reference

| Method | Endpoint           | Auth Required | Description                      |
|--------|--------------------|---------------|----------------------------------|
| POST   | /user/signup       | No            | Register new user                |
| POST   | /user/login        | No            | Login, returns JWT               |
| GET    | /user/me           | Yes           | Get current authenticated user   |
| POST   | /bgremover/upload  | No            | Remove background from an image  |

**Auth header format:**
```
token: <jwt-token>
```

**Signup request body:**
```json
{ "username": "...", "email": "...", "password": "..." }
```
Note: The User Mongoose schema only persists `email` and `password`; `username` is accepted but not stored.

---

## Known Issues & Technical Debt

These are existing problems. Do not work around them silently — fix them properly or note them:

1. **Hardcoded JWT secret** — `backend/src/routes/user.js` uses `"randomString"` as the secret. Should be `process.env.JWT_SECRET`.
2. **Missing `username` in User model** — The DB schema (`User.js`) lacks the `username` field despite the registration form collecting it.
3. **Unused route file** — `backend/src/routes/newuser.js` is a duplicate of `user.js` and is not registered. Do not add or modify it; it should eventually be deleted.
4. **Background remover uses hardcoded base64 image** — The `/bgremover/upload` route ignores uploaded files and sends a hardcoded test image to remove.bg. Real file upload logic needs to be wired up using the `express-fileupload` middleware already installed.
5. **Mock data only on frontend** — `MarketPlace.js` and `DashboardPage.js` read from `src/utils/data.js` (static mock data). No real API fetch is implemented for listing APIs.
6. **Frontend `.env` requires `VITE_BACKEND_URL`** — The API base URL must be set via `VITE_BACKEND_URL` in `frontend/.env` (accessed via `import.meta.env.VITE_BACKEND_URL`).
7. **No tests** — Neither backend nor frontend have any test files. The test scripts exist but run nothing meaningful.
8. **No pagination** — API listing has no server-side or client-side pagination.

---

## Workflows

### Adding a New Backend Route

1. Create `backend/src/routes/<feature>.js`
2. Export an Express `Router`
3. Register it in `backend/src/index.js`:
   ```js
   const featureRouter = require('./routes/<feature>');
   app.use('/<feature>', featureRouter);
   ```
4. Add `auth` middleware to protected endpoints:
   ```js
   const auth = require('../middlewares/auth');
   router.get('/protected', auth, (req, res) => { ... });
   ```

### Adding a New Mongoose Model

1. Create `backend/src/models/<ModelName>.js`
2. Define schema and export the model:
   ```js
   const mongoose = require('mongoose');
   const Schema = new mongoose.Schema({ ... });
   module.exports = mongoose.model('ModelName', Schema);
   ```

### Adding a New Frontend Page

1. Create `frontend/src/pages/<PageName>.js` as a functional component
2. Add SCSS in the same directory if needed
3. Register the route in `frontend/src/App.js`:
   ```jsx
   import PageName from './pages/PageName';
   // inside <Routes>:
   <Route path="/page-path" element={<PageName />} />
   ```

### Adding a New Frontend Component

1. Create `frontend/src/components/<ComponentName>.js`
2. Use functional component with hooks
3. Colocate SCSS file if styling is needed
4. Import and use in parent component or page

---

## Running in Production

There is no Docker or CI/CD configuration. Manual deployment:

**Backend:**
```bash
cd backend
npm start   # runs node src/index.js
```

**Frontend:**
```bash
cd frontend
npm run build   # outputs static files to frontend/build/
# serve build/ with any static file server (Nginx, Vercel, Netlify, etc.)
```

---

## Security Notes

When making changes, be aware of these security concerns that need addressing:

- JWT secret **must** come from environment variables, never be hardcoded
- Passwords are hashed with `bcryptjs` in route handlers (not model middleware)
- JWT tokens are stored in `localStorage` — susceptible to XSS; consider `httpOnly` cookies for a security improvement
- CORS is currently wide-open (`cors()` with no options) — should be restricted to known origins in production
- File uploads via `express-fileupload` need size limits and MIME type validation before being processed

---

## Tech Stack Summary

| Layer      | Technology                          | Version  |
|------------|-------------------------------------|----------|
| Frontend   | React                               | 19.0.0   |
| Build Tool | Vite                                | 5.x      |
| Routing    | React Router DOM                    | 6.x      |
| Styling    | SCSS (sass)                         | 1.x      |
| HTTP       | Axios                               | 1.x      |
| Backend    | Node.js + Express                   | 4.17.2   |
| Database   | MongoDB + Mongoose                  | 6.1.5    |
| Auth       | JWT (jsonwebtoken) + bcryptjs       | 8.5.1    |
| Validation | express-validator                   | 6.14.0   |
| File Upload| express-fileupload                  | 1.3.1    |
| External   | remove.bg API                       | —        |
