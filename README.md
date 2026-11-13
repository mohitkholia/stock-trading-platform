# Stock Trading Platform

A demo stock-trading application organized as three separate apps: a brokerage-style marketing website, a trading dashboard, and a Node.js/Express API backed by MongoDB.

> **Project scope:** The dashboard includes sample market and account data. This repository does not show integration with a live market-data feed or brokerage service; treat order entry as a demonstration, not real trading functionality.

## Repository structure

```text
.
├── backend/    # Express API and Mongoose models/schemas
├── dashboard/  # React trading dashboard
└── frontend/   # React marketing website
```

## Features

- **Marketing website:** Home, About, Product, Pricing, and Support pages, plus a not-found page.
- **Dashboard:** Watchlist, summary, holdings, positions, funds, and orders views.
- **Charts:** Watchlist doughnut chart and holdings bar chart using Chart.js.
- **Order entry:** Buy action form submits an order to the backend.
- **API:** Reads holdings and positions from MongoDB and saves submitted orders.

## Technology

- **Frontend and dashboard:** React, Vite, JavaScript, React Router; Tailwind CSS and Material UI are used by the marketing site.
- **Dashboard visualization and requests:** Chart.js, `react-chartjs-2`, and Axios.
- **Backend:** Node.js, Express, MongoDB, and Mongoose.

## Requirements

- Node.js and npm
- A MongoDB instance and connection URI for the backend

Each application has its own `package.json` and dependencies. Install them separately:

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../dashboard && npm install
```

## Configuration

The backend reads `MONGO_URL` from the environment and optionally accepts `PORT` (defaults to `3002`). Create `backend/.env`, for example:

```env
MONGO_URL=mongodb://127.0.0.1:27017/stock-trading-platform
PORT=3002
```

Use a MongoDB URI appropriate for your environment. Do not commit credentials or secrets.

## Run locally

Start the API:

```bash
cd backend
npm start
```

Start the marketing website in a separate terminal:

```bash
cd frontend
npm run dev
```

Start the dashboard in another terminal:

```bash
cd dashboard
npm run dev
```

Vite prints the local development URL for each frontend when it starts. The dashboard's API requests are currently configured for `http://localhost:3002`.

## Backend API

| Method | Path | Behavior |
| --- | --- | --- |
| `GET` | `/allHoldings` | Returns holdings stored in MongoDB. |
| `GET` | `/allPositions` | Returns positions stored in MongoDB. |
| `POST` | `/newOrder` | Saves an order with `name`, `qty`, `price`, and `mode`. |

Example order body:

```json
{
  "name": "INFY",
  "qty": 1,
  "price": 1555.45,
  "mode": "BUY"
}
```

## Application scripts

- `backend`: `npm start` starts the API with Nodemon.
- `frontend` and `dashboard`: `npm run dev` starts Vite, `npm run build` creates a production build, `npm run preview` previews a build, and `npm run lint` runs ESLint.

## Notes

- The marketing site and dashboard are separate Vite applications and must be started independently.
- Dashboard watchlist and position data are defined in `dashboard/src/data/data.jsx`; holdings are requested from the API.
- The backend requires a valid MongoDB connection before it begins listening.
- The API currently provides no authentication or order validation, and the repository does not demonstrate live trade execution. Do not use it to handle real accounts, funds, or trades.
