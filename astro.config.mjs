import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  integrations: [svelte()],
  site: 'https://tiagovicente2.github.io',
  base: basePath,
  output: 'static',
});
