import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [svelte()],
  site: 'https://tiagovicente2.github.io',
  output: 'static',
});
