# Arpeggios

An Astro-based static blog using Svelte 5 for interactive components and TypeScript.

## Stack

- Astro
- Svelte 5
- TypeScript
- Biome
- Bun

## Commands

| Command | Action |
| :--- | :--- |
| `bun run dev` | Starts local dev server at `localhost:4321` |
| `bun run build` | Build your production site to `./dist/` |

## Content Management

Blog posts live in `src/content/posts/` as Markdown (`.md`) files.

Every post must include the following in its frontmatter:
- `title` (string)
- `description` (string)
- `date` (YYYY-MM-DD format)
