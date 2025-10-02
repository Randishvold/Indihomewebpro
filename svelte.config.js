console.log("--- Checking Environment Variables during build ---");
console.log("PUBLIC_BASE_URL:", process.env.PUBLIC_BASE_URL);
console.log("PUBLIC_GA_MEASUREMENT_ID:", process.env.PUBLIC_GA_MEASUREMENT_ID);
console.log("-------------------------------------------------");

import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
        prerender: {
            handleHttpError: 'warn',
            handleMissingId: 'warn'
        },
        csp: {
            directives: {
                'script-src': ['self', 'unsafe-inline', 'https://www.googletagmanager.com'],
                'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com', 'https://cdnjs.cloudflare.com'],
                'font-src': ['self', 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com'],
                'connect-src': ['self', 'https://www.google-analytics.com']
            }
        }
    }
};

export default config;