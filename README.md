# rust-temper-landing

**Landing page for RustTemper — a Rust game config tweaker for Windows.**

Built with React, TypeScript, Vite, and pnpm.

## Quick Start

```
pnpm install
pnpm dev
```

## Commands

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start Vite dev server                  |
| `pnpm build`        | Typecheck + production build to `dist` |
| `pnpm typecheck`    | TypeScript type checking               |
| `pnpm lint`         | ESLint                                 |
| `pnpm format`       | Prettier format                        |
| `pnpm format:check` | Prettier check (CI)                    |
| `pnpm check`        | typecheck + lint + format check        |

## Project Structure

```
.
├── index.html
├── src/
│   ├── main.tsx              # Entry point
│   ├── App.tsx               # Root component
│   ├── theme.ts              # Design tokens
│   └── components/
│       ├── Nav.tsx           # Fixed navigation
│       ├── Hero.tsx          # Hero section with background
│       ├── Carousel.tsx      # Screenshot coverflow carousel
│       ├── Features.tsx      # Feature cards grid
│       ├── Faq.tsx           # Accordion FAQ
│       └── Footer.tsx        # Footer
├── public/
│   ├── assets/               # Screenshot images
│   ├── uploads/              # Uploaded images (hero background)
│   └── src-tauri/icons/      # Tauri icon (from main RustTemper repo)
├── justfile                  # Task runner
└── .github/workflows/ci.yml  # CI (typecheck + lint + format)
```

## License

GPL-3.0 — see [RustTemper](https://github.com/elev1e1nSure/rust-temper) for details.
