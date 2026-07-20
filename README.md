# Shahda & Rafi — Wedding Invitation

Digital wedding invitation for **Shahda Sherin & Mohamed Rafi** — 25 July 2026, Tirur, Kerala.
Built with **React + Vite**.

## Features

- Landing screen with Bismillah and "Open Invitation"
- Live countdown to the Nikah
- Photo gallery ("Our Moments") with admin upload
- Nikah & Reception details with Google Maps links
- Quran verse and family details
- **Wishes wall** — guests can send blessings (Firebase Realtime Database, with localStorage fallback)
- No RSVP / no WhatsApp sections

## Project structure

```
├── index.html                 # Vite entry HTML
├── vite.config.js             # base path set to /ShahdaWedsRafi/ for GitHub Pages
├── package.json
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Page layout + admin mode + toast state
    ├── config.js              # ALL editable content: names, dates, venues, Firebase
    ├── lib/
    │   └── firebase.js        # Firebase app + Realtime Database init
    ├── hooks/
    │   ├── useCountdown.js    # Live countdown timer
    │   ├── useReveal.js       # Scroll-reveal animations
    │   ├── useWishes.js       # Load/submit wishes (Firebase + localStorage)
    │   └── useMedia.js        # Gallery photo load/save
    ├── styles/
    │   └── global.css         # Theme variables + shared styles
    └── components/            # One component + CSS file per section
        ├── Landing.jsx / .css
        ├── Invite.jsx / .css
        ├── Countdown.jsx / .css
        ├── Moments.jsx / .css
        ├── Events.jsx / .css
        ├── Verse.jsx / .css
        ├── Families.jsx / .css
        ├── Wishes.jsx / .css
        ├── Footer.jsx / .css
        ├── MonogramBadge.jsx / .css
        └── Toast.jsx / .css
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Deploy to GitHub Pages (manual)

1. Create a GitHub repo named `ShahdaWedsRafi` and push this project to `main`.
   (If you use a different repo name, update `base` in `vite.config.js`.)
2. Deploy the built site to the `gh-pages` branch:

```bash
npm run deploy
```

3. In the repo: Settings → Pages → Source: `gh-pages` branch, `/ (root)`.

Live URL: `https://<username>.github.io/ShahdaWedsRafi/`

## Customization

- All names, dates, venues, and map links: `src/config.js`
- Personalized guest greeting: share the link with `?to=Guest%20Name`
- Admin mode (upload gallery photos): footer → **ADMIN** → PIN `2026SR` (change `ADMIN_PIN` in `src/config.js`)
