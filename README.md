# Rohit Sharma — Portfolio Website

Static, front-end only portfolio built in Neumorphism style.

## Add the profile photo

The avatar currently shows "RS" as a placeholder because no photo was provided.

1. Rename your photo to `profile.jpg`
2. Put it inside the `assets` folder (replace nothing else)
3. Open `index.html` in a browser — your photo will now show in the circular avatar automatically

Recommended: a square photo, at least 400x400px, face centered.

## Animations included

- **Loading animation** — neumorphic spinner shown for ~1s while the page loads (`#loader` in `index.html`, styled in `style.css`, controlled in `script.js`)
- **Scroll animation** — sections fade + slide up into view as you scroll (uses `IntersectionObserver`, class `.reveal` / `.in-view`); skill bars fill only once visible
- **Contact links** — LinkedIn and Email are shown as neumorphic press-able cards (`.contact-link`) instead of a form; each opens LinkedIn in a new tab or your default mail app
- **Touch animation** — buttons, cards, chips and the contact links press inward on tap/click (`.press`, `.touch-active` classes), so it feels responsive on both mouse and touchscreens

## Update the LinkedIn link

A placeholder LinkedIn URL is currently set in `index.html`. Update it before publishing:

1. Open `index.html`, find the **Contact** section (search for `linkedin.com/in/rohit-sharma`)
2. Replace both occurrences (the `href` and the visible text) with the real profile URL, e.g. `https://www.linkedin.com/in/your-actual-handle`

No backend, no server, no cost — clicking Email just opens the visitor's own mail app addressed to `rohit.amlai96@gmail.com`.

## Files

```
index.html      → all page content
css/style.css   → Neumorphism styling + all animations
js/script.js    → loader, scroll reveal, nav, touch feedback
assets/         → profile.jpg (add this) + resume PDF (linked to "Download resume")
```

## How to view it

Just double-click `index.html` — no build step, no server needed.

## How to put it online (free options)

- **Netlify Drop**: go to app.netlify.com/drop and drag the whole folder in
- **GitHub Pages**: push this folder to a GitHub repo, enable Pages in repo settings
- **Vercel**: `vercel` CLI or drag-and-drop on vercel.com/new
