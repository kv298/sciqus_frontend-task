# sciqus_frontend-task

# Sciqus AMS — Desktop Layout

A static desktop web layout for **Sciqus AMS**, an AI-powered account management solution. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Structure

```
├── index.html   Markup
├── style.css    Styling
└── script.js    Carousel / slider interactions
```

Keep all three files in the same folder — `index.html` links to the other two by relative path.

## Layout

Matches a fixed desktop shell:

- **Header** — logo/brand, "Watch Video" and "Book A Demo" actions
- **Sidebar** — left-hand navigation, always visible
- **Content grid** — six containers:
  1. Autoplay fade carousel
  2. Text / info block
  3. Arrow-driven interactive slider
  4. Static industry grid
  5. Two action buttons (A / B)
  6. Second arrow slider (resources)

## Running it

No build step required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder locally, e.g.:
  ```bash
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`

## Notes

- Desktop-only layout — no responsive breakpoints or mobile navigation included.
- Fonts (Space Grotesk, Inter, IBM Plex Mono) are loaded from Google Fonts via `<link>` tags in `index.html`; an internet connection is needed for them to load, otherwise the page falls back to system sans-serif/monospace fonts.
- Colors, spacing, and type scale are defined as CSS custom properties at the top of `style.css` (`:root`) for easy re-theming.
