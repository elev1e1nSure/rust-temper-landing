## Project

`rust-temper-landing` — landing page for [RustTemper](https://github.com/elev1e1nSure/rust-temper), a Windows Tauri app for tweaking Rust game configs. The page is a single Design Component (`.dc.html`) using the omelette runtime — no build step, no framework.

Key files:
- `RustTemper Landing.dc.html` — the landing page (template + logic + styles inline)
- `image-slot.js` — omelette image placeholder component
- `support.js` — DC runtime (compiled from dc-runtime/src/*.ts, do not edit)

## Commands

- `just dev` — open the landing page in the default browser
- `just check` — validate the HTML file exists and is non-empty

## Conventions

- No emoji in code, commits, or docs
- English in code and config; page content is Russian
- Conventional Commits with mandatory scope: `type(scope): description` (types: feat, fix, chore, docs, style, refactor, perf, test, ci, build)
- One commit per logical change

## Rules

- `support.js` and `image-slot.js` are generated/scaffolded — do not hand-edit
- The HTML file is the single source of truth; there is no build pipeline
- This repo hosts only the landing page; the actual RustTemper app lives at `github.com/elev1e1nSure/rust-temper`
