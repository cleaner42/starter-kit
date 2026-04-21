# Copilot Instructions

## Commands

- `npm run dev` — Start dev server (Turbopack) on localhost:3000
- `npm run build` — Production build
- `npm run lint` — ESLint (includes Prettier checks via eslint-plugin-prettier)
- `npm run format` — Auto-format with Prettier
- `npm run format:check` — Check formatting without writing

No test framework is configured yet.

## Architecture

Next.js 15 App Router project with React 19, TypeScript, and Tailwind CSS v4.

- `app/` — Pages, layouts, and API routes using the App Router file-based routing
- `app/api/` — Route Handlers (e.g., `app/api/projects/route.ts` exports HTTP method functions like `GET`)
- `components/ui/` — Reusable UI components (default exports)
- `types/` — Shared TypeScript type declarations (`@types` / `@types/*` path aliases)

## Path Aliases

Defined in `tsconfig.json`:

- `@/*` → project root (e.g., `@/app/...`)
- `@/components/*` → `./components/*`
- `@types` / `@types/*` → `./types/`

## Conventions

- **Formatting**: Prettier is enforced through ESLint — single quotes, trailing commas (es5), semicolons, 2-space indent, LF line endings, no parens on single arrow params.
- **CSS**: Tailwind CSS v4 via `@import 'tailwindcss'` in `globals.css`. Custom theme tokens go in the `@theme {}` block.
- **Components**: Use default exports for UI components. Place reusable components in `components/ui/`.
- **API Routes**: Use Next.js Route Handlers — export named async functions (`GET`, `POST`, etc.) from `route.ts` files.
