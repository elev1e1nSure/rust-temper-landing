set shell := ["powershell.exe", "-NoProfile", "-Command"]

default:
    @just --list

dev:
    pnpm dev

build:
    pnpm build

typecheck:
    pnpm typecheck

lint:
    pnpm lint

fmt:
    pnpm format

fmt-check:
    pnpm format:check

check:
    pnpm check
