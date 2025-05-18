// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://rodriguezlawnservicergv.pages.dev',
	vite: {
		plugins: [tailwindcss()],
	  },
	// Enable React to support React JSX components.
	integrations: [
		react(),
		sitemap()
	]
});
