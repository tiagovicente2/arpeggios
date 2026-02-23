import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  integrations: [svelte()],
  site: 'https://tiagovicente2.github.io',
  base: basePath,
  output: 'static',
});
