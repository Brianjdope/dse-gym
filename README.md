# DSE Gym

A concept site for a real-time gym availability tracker at Stevens Institute of
Technology's DSE campus recreation center: check how crowded each facility is
before you walk over.

> **Status: concept / prototype.** The occupancy numbers, heatmap, and stats on
> the page are hardcoded sample data. There is no live data feed or reservation
> backend yet. See [Roadmap](#roadmap).

## What's on the page

- **Problem** — why overcrowding at peak hours leads to wasted trips and skipped workouts
- **Features** — live occupancy tracking, smart reservations, push notifications, peak-hour insights
- **Live dashboard (mock)** — per-facility capacity cards (weight room, cardio, basketball, pool, group fitness, rock wall) with low / moderate / high / full status
- **Crowd heatmap (mock)** — hourly busyness from 6 AM to 10 PM

## Tech stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`
- ESLint

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev        # start the dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run lint       # run ESLint
```

## Project structure

```text
src/
  App.jsx      all page sections (Navbar, Hero, Problem, Features, Dashboard, About, Footer)
               plus the sample facility and heatmap data at the top of the file
  main.jsx     React entry point
  index.css    Tailwind import and theme colors
public/        favicon and icons
```

## Roadmap

- [ ] Replace sample data with a real occupancy source (door counters, card-swipe counts, or staff check-ins)
- [ ] Reservation backend for booking time slots
- [ ] Notifications when a facility drops below a chosen crowd level
- [ ] Deploy (e.g. GitHub Pages or Vercel) and add the live link here

## Related

- [Stevens DSE website](https://github.com/Brianjdope/DSE-website)
- [Codebase map](https://brianjdope.github.io/repo-maps/maps/dse-gym.html)
