import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [svelte()],
  site: 'https://tiagovicente2.github.io',
  base: '/arpeggios',
  output: 'static',
});
