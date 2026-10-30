# Smart Gradients PBC stage demo

This is the React frontend our team built for Stat Hackathon 2025. It is now a portfolio snapshot of the project, not an active health service. The form sends example values to the companion FastAPI backend and displays the model's predicted stage and class probabilities.

The demo has not been clinically validated. Use example data only, and do not use its output to diagnose or guide care.

## Run locally

Use Node.js 20.19–20.x or 22.12+. From this repository's root:

```powershell
npm ci
npm run dev
```

Open `http://127.0.0.1:5173/`. The pages load on their own; predictions require the [backend](https://github.com/63rude/Stat-Hackathon-backend) running at `http://127.0.0.1:8000`. Vite proxies `/predict` to that local server. The form offers the category values used by the model, and the backend calculates the two product features from the other inputs.

To check the production build locally:

```powershell
npm run build
npm run preview
```

The preview server uses the same local API proxy. For a separately hosted backend, copy `.env.example` to `.env.local`, set `VITE_API_BASE_URL` to the backend's public origin, then rebuild. The backend must allow the website's origin through `CORS_ORIGINS`. `VITE_API_BASE_URL` is included in the browser bundle, so it must never contain a secret.

## Project layout

- `src/App.jsx`: the prediction form and result display.
- `src/pages/`: the About, How It Works, and Contact pages.
- `src/assets/` and `public/`: images and favicon.
- `vite.config.js`: React build and local API proxy.

The model and API live in the separate backend repository. The original training data source and any clinical validation are not documented in these repositories.
