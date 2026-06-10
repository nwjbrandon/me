# Brandon Ng — Portfolio

A personal portfolio site. Built with **React 19**, **TypeScript**, and **Vite**, with a
dark/light theme, a typewriter hero, a scroll-spy navbar, and scroll-reveal animations.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and builds
- CSS Modules + CSS custom properties (no UI framework — light bundle)
- [Vitest](https://vitest.dev/) + Testing Library

## Requirements

- Node `>= 24` (an `.nvmrc` is provided)

```bash
nvm use      # picks up Node 24 from .nvmrc
```

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

## Editing the content

**All site content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).** Edit that one
file to update your name, roles, about blurb, experiences, projects, awards, skills, and social
links. The shape of the data is typed in
[`src/data/portfolio.types.ts`](src/data/portfolio.types.ts), so your editor will autocomplete
fields and flag anything missing.

To show a **Resume** button, drop a PDF into `public/` and set `profile.resumeUrl`
(e.g. `'/resume.pdf'`) in the data file.

## Theming

Colours and design tokens live in [`src/styles/theme.css`](src/styles/theme.css). Light and dark
palettes are defined under `[data-theme='light']` / `[data-theme='dark']`; the toggle in the navbar
persists the choice to `localStorage`.

## Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the Vite dev server                |
| `npm run build`     | Type-check and build to `build/`         |
| `npm run preview`   | Preview the production build locally     |
| `npm test`          | Run the test suite once                  |
| `npm run test:watch`| Run tests in watch mode                  |
| `npm run lint`      | Lint with ESLint                         |
| `npm run format`    | Format with Prettier                     |
| `npm run typecheck` | Type-check without emitting              |

## Project structure

```
src/
├─ data/         # ← site content lives here (portfolio.ts)
├─ components/   # UI sections (Hero, About, Experience, Projects, Awards, Contact, …)
├─ hooks/        # useTypewriter, useReveal, useActiveSection
├─ theme/        # ThemeProvider + context
├─ styles/       # theme tokens + global styles
├─ config/       # navbar configuration
├─ App.tsx
└─ main.tsx      # entry point
```
