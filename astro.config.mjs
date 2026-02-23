import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [svelte()],
  site: 'https://tiagovicente2.github.io',
  base: isProduction ? '/arpeggios' : '/',
  output: 'static',
});
