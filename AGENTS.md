# AGENTS.md - Agentic Coding Guidelines

This document provides explicit instructions for AI agents operating within this repository. This project is an Astro-based static blog leveraging Svelte 5 for interactive components, and strict TypeScript.

## 1. Project Commands & Workflow

### Build & Dev
- **Development Server**: `bun run dev`
- **Production Build**: `bun run build`
- **Local Preview**: `bun run preview`

### Linting & Formatting (Biome)
The codebase uses Biome for both linting and formatting.
- **Lint**: `bun run lint` (Checks for unused variables, explicit `any`, etc.)
- **Format**: `bun run format` (Writes in-place)
- *Agent Rule*: Always run `bun run format` and `bun run lint` after making file modifications before considering the task complete.

### Testing
- **Current State**: Tests are not currently configured in this repository.
- **Future Convention**: If testing is introduced (e.g., via Vitest), run a single test using: `bun run test -- <path-to-test-file>`

## 2. Code Style & Standards

### Formatting Rules
- **Indentation**: 2 spaces
- **Line Width**: 100 characters max
- **Quotes**: Single quotes (`'`) for strings in TS/JS
- **Trailing Commas**: ES5 style

### TypeScript Guidelines
- **Strictness**: `strictNullChecks` is `true`. Always handle `null` and `undefined` explicitly using optional chaining (`?.`) or nullish coalescing (`??`).
- **Types**: Use explicit types for function parameters and returns. Avoid `any` at all costs; use `unknown` if the type is indeterminate.
- **Interfaces**: Prefer `interface` for defining object shapes. Use `type` for unions/primitives.

### Component Guidelines

#### Astro Components (`.astro`)
- **Frontmatter**: Must be explicitly typed TypeScript. Define an `interface Props` for any component accepting parameters.
- **Logic**: Keep template logic (HTML section) minimal. Compute derived values in the frontmatter.
- **Styling**: Prefer scoped `<style>` tags at the bottom of the file. Use kebab-case for CSS classes.

#### Svelte Components (`.svelte`)
- **Version**: We use Svelte 5.
- **State**: Use modern Svelte 5 runes (`$state`, `$derived`, `$effect`, `$props`) instead of legacy reactive declarations.
- **Structure**: Keep logic in the `<script>` block and styles in `<style>`.

### Imports & Architecture
- **Path Aliases**: Use `@/*` to reference the `src/*` directory (e.g., `import Post from '@/components/PostCard.astro'`).
- **Order**:
  1. Built-in / External library imports
  2. Relative / Alias imports for Components and Utils
  3. Style and Asset imports

### Naming Conventions
- **Components/Classes**: `PascalCase` (e.g., `PostCard.svelte`, `Layout.astro`, `PostService`)
- **Files (Utils)/CSS**: `kebab-case` (e.g., `date-utils.ts`, `.card-container`)
- **Functions/Variables**: `camelCase` (e.g., `fetchPosts()`, `isLoading`)
- **Constants**: `SCREAMING_SNAKE_CASE` (e.g., `MAX_PAGINATION`)

### Error Handling
- Use `try/catch` blocks for all async operations.
- Provide descriptive and meaningful error messages instead of silently failing.
- When throwing errors, include context (e.g., `throw new Error(\`Failed to fetch post: ${slug}\`)`).
- Use proper HTTP status codes for API responses.

## 3. Project Structure

```text
src/
├── content/
│   ├── config.ts       # Content collection schemas (Zod)
│   └── posts/          # Markdown (.md) blog posts
├── layouts/
│   └── Layout.astro    # Main page wrapper and metadata
├── pages/
│   ├── index.astro     # Homepage routing
│   ├── rss.xml.js      # RSS feed generation
│   └── posts/
│       └── [slug].astro  # Dynamic routing for individual posts
└── styles/
    └── global.css      # CSS custom properties and global resets
```

## 4. Common Tasks & Operations

### Managing Content (Blog Posts)
- Posts live in `src/content/posts/` as Markdown (`.md`) files.
- **Frontmatter Requirements**: Every post must include `title` (string), `description` (string), and `date` (YYYY-MM-DD format).

### Adding a New Page
- Create a new `.astro` file in `src/pages/`.
- Use the Layout component for consistent styling across the application.

### Modifying Styles
- **Global**: Adjust `src/styles/global.css` for app-wide CSS variables and resets.
- **Local**: Use inline `<style>` blocks in `.astro` or `.svelte` files for component-scoped changes.

### Commits (Git)
- Follow Conventional Commits format: `<type>(<scope>): <description>`
- Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`.
- Example: `feat(posts): add pagination to blog index`
