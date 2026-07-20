# Sandra & Abhiram — Wedding Invitation

Digital wedding invitation for **Sandra Menon P & Abhiram P** — Wedding Reception, 22 August 2026, Nakshatra Auditorium, Mannur, Palakkad, Kerala.
Built with **React + Vite**.

## Features

- Landing screen with invocation and "Open Invitation"
- Live countdown to the reception
- Photo gallery ("Our Moments") — images loaded from Firebase
- Reception details with Google Maps link (plus marriage ceremony note)
- Vedic verse and family details
- **Wishes wall** — guests can send blessings (Firebase Realtime Database, with localStorage fallback)
- No RSVP / no WhatsApp sections

## Project structure

```
├── index.html                 # Vite entry HTML
├── vite.config.js             # base path set to /SandraWedsAbhiram/ for GitHub Pages
├── package.json
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Page layout + toast state
    ├── config.js              # ALL editable content: names, dates, venues, Firebase
    ├── lib/
    │   └── firebase.js        # Firebase app + Realtime Database init
    ├── hooks/
    │   ├── useCountdown.js    # Live countdown timer
    │   ├── useReveal.js       # Scroll-reveal animations
    │   ├── useWishes.js       # Load/submit wishes (Firebase + localStorage)
    │   └── useMedia.js        # Gallery photos loaded from Firebase
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

1. Create a GitHub repo named `SandraWedsAbhiram` and push this project to `main`.
   (If you use a different repo name, update `base` in `vite.config.js`.)
2. Deploy the built site to the `gh-pages` branch:

```bash
npm run deploy
```

3. In the repo: Settings → Pages → Source: `gh-pages` branch, `/ (root)`.

Live URL: `https://<username>.github.io/SandraWedsAbhiram/`

## Customization

- All names, dates, venues, and map links: `src/config.js`
- Personalized guest greeting: share the link with `?to=Guest%20Name`

## Gallery photos (via Firebase)

Photos are read from the Realtime Database path `sandra-abhiram/media`.
In the Firebase console, add image URLs under that path:

```json
{
  "sandra-abhiram": {
    "media": {
      "photo1": "https://…/first.jpg",
      "photo2": "https://…/second.jpg",
      "photo3": "https://…/third.jpg"
    }
  }
}
```

Any publicly accessible image URL works (Firebase Storage, Cloudinary, etc.).
Until a URL is set, the card shows a "PHOTO n" placeholder.
