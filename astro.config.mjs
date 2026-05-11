// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: { port: 6767 },
  // Hover-intent prefetch: starts loading the destination HTML
  // ~50ms after a user hovers any internal <a>, so navigation
  // feels instant without burning bandwidth pre-fetching every
  // link. Per-link opt-out: data-astro-prefetch="false".
  prefetch: { defaultStrategy: 'hover', prefetchAll: false },
  vite: {
    plugins: [tailwindcss()]
  }
});