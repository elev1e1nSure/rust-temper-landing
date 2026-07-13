## Project

`rust-temper-landing` — landing page for [RustTemper](https://github.com/elev1e1nSure/rust-temper), a Windows Tauri app for tweaking Rust game configs. Built with React, TypeScript, Vite, and pnpm.

Key files:

- `src/App.tsx` — root component, composes all sections
- `src/components/` — Nav, Hero, Carousel, Features, Faq, Footer
- `src/theme.ts` — design tokens (accent color, density, corner radius)
- `public/assets/` — screenshot images for the carousel
- `public/uploads/` — hero background image

## Commands

- `pnpm dev` — start Vite dev server
- `pnpm build` — typecheck + production build
- `pnpm typecheck` — TypeScript type checking
- `pnpm lint` — ESLint
- `pnpm format` — Prettier format
- `pnpm format:check` — Prettier check
- `pnpm check` — typecheck + lint + format check (CI entry point)

## Conventions

- No emoji in code, commits, or docs
- English in code and config; page content is Russian
- Conventional Commits with mandatory scope: `type(scope): description` (types: feat, fix, chore, docs, style, refactor, perf, test, ci, build)
- One commit per logical change

## Rules

- This repo hosts only the landing page; the actual RustTemper app lives at `github.com/elev1e1nSure/rust-temper`
- Use `pnpm` for all package operations
