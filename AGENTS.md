# Repository Guidelines

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

## Software Engineering Patterns

Optimization patterns focused on developer experience (DX), code clarity, and maintainability.

---

### 1. Syntactic Sugar

Making existing functionality nicer to write and read without adding new capabilities.

**Real-world examples**:
| Domain | Example |
|--------|---------|
| JavaScript | `async/await` is sugar over Promises |
| CSS | `margin: 10px` is sugar for margin-top/right/bottom/left |
| React | `useState` is sugar over `useReducer` |
| TypeScript | `readonly` is sugar for getter-only properties |
| Shell | `ll` alias is sugar for `ls -la` |

---

### 2. API Ergonomics

Designing interfaces that are comfortable to use.

**Characteristics of ergonomic APIs**:

- Fewer variables to manage (one instead of two)
- Consistent mental model (same function, different arity)
- Reduced cognitive load

---

### 3. DRY (Don't Repeat Yourself)

Eliminating repetitive patterns by extracting common logic.

---

### 4. Abstraction / Encapsulation

Hiding implementation details behind a simpler interface.

---

### 5. Classification Reference

| Term                     | Applies?     | Why                                         |
| ------------------------ | ------------ | ------------------------------------------- |
| Syntactic sugar          | ✅ Yes       | Same behavior, sweeter syntax               |
| API ergonomics           | ✅ Yes       | More comfortable to use                     |
| Boilerplate reduction    | ✅ Yes       | Eliminates repetitive setup code            |
| DRY                      | ✅ Yes       | Extract repeated patterns                   |
| Abstraction              | ✅ Yes       | Hide complexity behind simple interface     |
| Facade pattern           | ✅ Partially | Simplified interface over complex subsystem |
| Utility function         | ✅ Yes       | Reusable helper for common task             |
| Wrapper                  | ✅ Yes       | Wraps existing API with different interface |
| Performance optimization | ❌ No        | No runtime improvement, just DX             |

---

### 6. What These Patterns Are NOT

- **Not performance optimizations** — same runtime behavior
- **Not new capabilities** — underlying functionality already existed
- **Not Gang of Four design patterns** — convenience utilities, not architectural patterns

---

### 7. When to Apply

**Extract when you see**:

- Same pattern repeated 3+ times
- Verbose setup code that obscures intent
- Multiple variables that logically belong together
- Complex APIs that could be simplified for common use cases

**Don't extract when**:

- One-off code that won't be reused
- Trivial patterns (< 5 lines)
- Abstraction would require many parameters (sign of over-abstraction)
- Explicitness is more valuable than brevity