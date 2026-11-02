# Project M.

A responsive project-management dashboard built with React 19, Vite, Tailwind CSS, and Lucide icons.

## Getting started

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

## Component structure

The interface is composed from eight React components: `App`, `Sidebar`, `Header`, `ProjectHeading`, `BoardToolbar`, `TaskBoard`, `TaskColumn`, and `TaskCard`. Board data lives in `src/data/projectData.js`, and board state and task actions live in `src/hooks/useProjectBoard.js`.
