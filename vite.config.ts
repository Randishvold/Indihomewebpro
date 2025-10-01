import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		minify: 'esbuild', // Use esbuild instead of terser for better performance
		cssMinify: true,
		target: 'esnext',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte']
				}
			}
		}
	},
	css: {
		transformer: 'postcss'
	},
	ssr: {
		noExternal: []
	}
});
