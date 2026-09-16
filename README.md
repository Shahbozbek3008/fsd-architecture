# FSD Architecture

Production-ready React starter template built on **Feature-Sliced Design** — a scalable structure for applications that outgrow the usual `components/` folder.

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## Why

As a React codebase grows, flat `components/` and `utils/` folders stop communicating intent: anything can import anything, and features quietly couple to each other. Feature-Sliced Design fixes this with explicit layers and a one-way import rule, so responsibility and blast radius are visible from the file path alone.

## Layers

```
src/
  app/        providers, router, global styles — composition root
  pages/      route-level screens
  widgets/    self-contained blocks composed of features and entities
  features/   user-facing actions with their own UI and logic
  entities/   business objects and their representation
  shared/     ui kit, lib, api, config — no business knowledge
```

**Import rule:** a layer may only import from the layers below it. `shared` imports nothing above it; `app` may import everything.

## What's Included

- Vite + React + TypeScript with path aliases per layer
- Tailwind CSS with a shadcn/ui-compatible setup
- ESLint configured to enforce the layer import boundaries
- Ready-to-copy slice structure for a new feature

## Getting Started

Use this repository as a template, or:

```bash
npx degit Shahbozbek3008/fsd-architecture my-app
cd my-app
yarn install
yarn dev
```

## Adding a Feature

```
src/features/booking-cancel/
  ui/          components
  model/       state and business logic
  api/         requests
  index.ts     public API of the slice
```

Import a slice only through its `index.ts` — never reach into its internals.
