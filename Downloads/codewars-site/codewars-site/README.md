# CODE WARS — CYBORGS'26

A cinematic, single-page React + Vite site for the CODE WARS flagship event.

## Stack
React, Vite, Three.js / React Three Fiber / drei, Framer Motion, Lenis smooth scroll, react-icons.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

- `src/components/Hero.jsx` + `ThreeHero.jsx` — split hero with the R3F energy-core scene, typing tagline, countdown, glowing CTAs
- `src/components/BackgroundFX.jsx` — persistent animated background (starfield, nebula, light beams, holographic grid, lens flare)
- `src/components/Missions.jsx` — the three mission terminal cards
- `src/components/BattleFlow.jsx` — animated vertical/horizontal battle-flow timeline
- `src/components/About.jsx` — glassmorphism about card
- `src/components/Rules.jsx` — holographic briefing panels
- `src/components/FAQ.jsx` — accordion
- `src/components/RegisterCTA.jsx`, `Footer.jsx`, `Nav.jsx`

## Notes

- Edit the countdown target date in `src/components/Countdown.jsx` (`TARGET`).
- Edit mission/rule/FAQ copy directly in their respective component files.
- Colors and fonts are defined as CSS variables in `src/index.css`.
- Respects `prefers-reduced-motion`.
