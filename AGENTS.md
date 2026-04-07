# Repository Guidelines

## Philosophy
This codebase will outlive you. Every shortcut becomes someone else's burden. Every hack compounds into technical debt that slows the whole team down. 

You are not just writing code, you are shaping the future of this project. The patterns you establish will be copied. The corners you cut will be cut again.

Fight entropy. Leave the codebase better than you found it.

Do not write plausible code, write accurate code backed by the reality of this codebase

## Code Thinking

Review your implementation before stopping. Check whether there is a better or simpler approach whether any redundant code remains, whether duplicate logic was introduced, and whether any dead or unused code was left behind. If you find issues, fix them now; if not, briefly confirm the implementation is clean.
                
Think carefully and only action the specific task I have given you with the most concise and elegant solution that takes into consideration existing code across codebase.

Prefer the most concise and elegant solutions that changes or adds as little code as possible.

## Engineering Rules (Non-Negotiable)

- Functional style first: prefer pure functions, immutable updates, explicit inputs/outputs.
- Single responsibility: each function/module should have one reason to change.
- Complexity budget:
  - Target `O(1)` or `O(log n)` where practical.
  - Avoid accidental `O(n^2+)` (nested scans in hot paths).
  - Use `Map`/`Set` for membership and indexing instead of repeated linear lookups.
- Performance footgun policy:
  - Do not introduce `setTimeout`, `setInterval`, `requestAnimationFrame`, or self-rescheduling loops unless explicitly justified in code comments and cleaned up deterministically.
  - No polling loops when event-driven/reactive alternatives exist.
- Avoid hidden side effects: no mutation of shared module state unless clearly documented.

## Code Maintainability

- Two things that make code actually maintainable:
  1. reduce the layers a reader has to trace
  2. reduce the state a reader has to hold in their head

## Code Organization

- Keep app-specific logic organized.
- Prefer composition over inheritance; avoid god-modules.
- Keep adapters thin and deterministic; isolate I/O at boundaries.

## Change Quality Bar

- Keep diffs focused; do not mix refactors with feature behavior changes unless requested.
- Preserve public contracts unless change is intentional and documented.
- Validate before finishing

## Project Structure & Module Organization
This is an Astro site with React components and Tailwind styling.
- `src/pages/` contains route entries (`.astro` and `.tsx`).
- `src/components/` holds reusable UI components.
- `src/layouts/` provides page layouts.
- `src/styles/` contains global styles and Tailwind layers.
- `src/assets/` stores images and other build-time assets.
- `public/` is for static files served as-is (e.g., `public/favicon.svg`).
- `dist/` is the build output.

## Build, Test, and Development Commands
Run all commands from the repo root.
- `bun install` installs dependencies.
- `bun run dev` starts the local dev server (`astro dev`).
- `bun run build` installs deps then builds the production site (`astro build`).
- `bun run preview` serves the production build locally (`astro preview`).

## Coding Style & Naming Conventions
- Use 2-space indentation across JS/TS, Astro, and JSON files.
- Prefer semicolons in JS/TS to match existing files.
- Components are PascalCase (`HeroSection.tsx`), helpers are camelCase (`formatPhone.ts`).
- Astro pages follow route-based naming under `src/pages/` (e.g., `about.astro`).
- Use the `@/` alias for `src/` imports (configured in `tsconfig.json`).

## Testing Guidelines
There is no automated test runner configured yet. If you add tests, document the framework and command in this file, and keep tests close to their modules (e.g., `src/components/Button.test.tsx`).

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries and sometimes include a type prefix:
`feat:`, `fix:`, or `update`. Keep messages concise and scoped.
For pull requests:
- Include a clear description of changes and the user impact.
- Link related issues if available.
- Add screenshots for any UI changes (before/after where helpful).
- Note how you validated changes (e.g., `bun run build`, `bun run preview`).

## Configuration Notes
- Astro config lives in `astro.config.mjs` (React integration, sitemap, Tailwind via Vite).
- The site URL for sitemap generation is set in `astro.config.mjs`.