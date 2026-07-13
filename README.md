# rust-temper-landing

**Landing page for RustTemper — a Rust game config tweaker for Windows.**

The page is a Design Component (`.dc.html`) built with the omelette runtime. No build step, no framework — just an HTML file with embedded logic and styles.

## Quick Start

Open `RustTemper Landing.dc.html` in a browser, or serve the directory with any static server:

```
python -m http.server
```

The page can also be edited in the DC editor for visual tweaks (accent color, density, corner radius).

## Project Structure

```
.
├── RustTemper Landing.dc.html   # Main landing page (Design Component)
├── image-slot.js                # Image placeholder component (omelette)
├── support.js                   # DC runtime (omelette)
├── assets/                      # Screenshot images for the carousel
├── screens/                     # Design reference screenshots
├── uploads/                     # Uploaded images (hero background)
└── src-tauri/icons/             # Tauri icon (from the main RustTemper repo)
```

## License

GPL-3.0 — see [RustTemper](https://github.com/elev1e1nSure/rust-temper) for details.
