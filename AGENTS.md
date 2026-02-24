# AGENTS.md - Agentic Coding Guidelines

This document provides guidelines for AI agents operating in this repository.

## Project Overview

This is an Astro-based blog project using Svelte for components and TypeScript. It generates static pages with blog posts, RSS feed, and supports content collections.

## Commands

### Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
```

### Code Quality
```bash
npm run lint       # Run Biome linter
npm run format     # Format code with Biome (writes in-place)
```

### Running a Single Test
This project does not have tests configured. If tests are added in the future, typically:
```bash
npm run test          # Run all tests
npm run test -- <file> # Run single test file
```

---

## Code Style Guidelines

### General Philosophy
- Keep code simple and readable
- Prefer explicit over implicit
- No comments unless absolutely necessary for explaining complex logic
- Small, focused functions and components

### Formatting (Biome)
The project uses Biome for formatting and linting with the following settings:
- **Indent style**: 2 spaces
- **Line width**: 100 characters
- **Quotes**: Single quotes
- **Trailing commas**: ES5 style

Always run `npm run format` before committing to ensure consistent formatting.

### TypeScript

#### Type Annotations
- Use explicit types for function parameters and return types when not obvious
- Prefer interfaces over types for object shapes
- Use `type` for unions, intersections, and primitives

```typescript
// Good
interface Post {
  slug: string;
  title: string;
  date: Date;
}

function getPost(slug: string): Post | undefined { ... }

// Avoid
const getPost = (slug) => { ... }
```

#### Type Safety
- Avoid `any` - use `unknown` if type is truly unknown
- Enable strict null checks
- Use optional chaining (`?.`) and nullish coalescing (`??`) appropriately

### Astro Components (.astro)

#### Frontmatter
- Always use explicit TypeScript in frontmatter
- Define Props interface for component props
- Use descriptive variable names

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "Default description" } = Astro.props;
---
```

#### Template
- Use semantic HTML elements
- Include accessible attributes (aria-label, etc.)
- Keep template logic minimal - move complex logic to the frontmatter

#### Styles
- Use scoped styles within the component
- Follow CSS naming conventions (kebab-case classes)
- Use CSS custom properties (defined in global.css)
- Keep styles at the bottom of the component file

### Svelte Components (.svelte)

- Use Svelte 5 runes (`$state`, `$derived`, `$effect`) for new components
- Follow Astro component patterns when applicable
- Keep logic in `<script>` section, styles in `<style>` section

### Imports

#### Order
1. Built-in/External imports
2. Relative imports (components, utils)
3. Relative imports (styles, assets)

```typescript
// 1. External
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

// 2. Components
import Layout from '../layouts/Layout.astro';
import PostCard from '../components/PostCard.astro';

// 3. Utils/styles
import { formatDate } from '../utils/date';
import '../styles/global.css';
```

#### Paths
- Use absolute imports from root (`@/components/...`) if configured
- Otherwise use relative imports starting from closest ancestor
- Avoid unnecessary `index` imports

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files (components) | PascalCase | `PostCard.astro`, `Header.tsx` |
| Files (utilities) | kebab-case | `date-utils.ts`, `api-helpers.ts` |
| Functions | camelCase | `getPosts()`, `formatDate()` |
| Variables | camelCase | `postList`, `isLoading` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_POSTS`, `API_BASE_URL` |
| Classes | PascalCase | `PostService`, `ApiClient` |
| CSS Classes | kebab-case | `.post-title`, `.card-container` |

### Error Handling

- Use try/catch for async operations
- Provide meaningful error messages
- Handle null/undefined cases explicitly
- Use proper HTTP status codes for API responses

```typescript
// Good
async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch('/api/posts');
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
```

### Git Conventions

This project uses conventional commits. Format:
```
<type>(<scope>): <description>

Types: feat, fix, refactor, style, docs, chore
```

Examples:
```
feat(posts): add new blog post rendering
fix(layout): resolve header alignment issue
refactor(utils): extract date formatting logic
style(css): adjust spacing in post card
```

---

## Project Structure

```
src/
├── content/
│   ├── config.ts       # Content collection definitions
│   └── posts/          # Markdown blog posts
├── layouts/
│   └── Layout.astro    # Main layout component
├── pages/
│   ├── index.astro     # Home page
│   ├── 404.astro       # Not found page
│   ├── rss.xml.js      # RSS feed
│   └── posts/
│       └── [slug].astro  # Individual post pages
├── styles/
│   └── global.css      # Global styles and CSS variables
└── astro.config.mjs   # Astro configuration
```

---

## Content Collections

Blog posts are stored in `src/content/posts/` as Markdown files with frontmatter:

```markdown
---
title: "Post Title"
description: "Post description"
date: 2024-01-15
---

Post content here...
```

---

## Common Tasks

### Adding a New Blog Post
1. Create a new `.md` file in `src/content/posts/`
2. Add required frontmatter (title, description, date)
3. Write content in Markdown
4. Run `npm run format` and verify with `npm run lint`

### Creating a New Page
1. Create a new `.astro` file in `src/pages/`
2. Use the Layout component for consistent styling
3. Export any necessary props or data

### Modifying Styles
- Global styles and CSS variables: `src/styles/global.css`
- Component-specific styles: inline in `.astro` files

---

## Environment Variables

This project currently doesn't require environment variables for deployment.

## Testing Changes

1. Run `npm run dev` to start local server
2. Make changes and verify visually
3. Run `npm run lint` to check for issues
4. Run `npm run format` to fix formatting
5. Run `npm run build` to verify production build works

---

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Biome Documentation](https://biomejs.dev)
- [Svelte Documentation](https://svelte.dev)
