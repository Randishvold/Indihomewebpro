// Font loading optimization
import { browser } from '$app/environment';

let fontsLoaded = false;

export function loadFontsOptimally() {
	if (!browser || fontsLoaded) return;

	// Load fonts with optimal strategy
	const fontFaces = [
		new FontFace('Inter', 'url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.woff2)', {
			weight: '400 700',
			display: 'swap',
			unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
		}),
		new FontFace('Poppins', 'url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)', {
			weight: '400 700',
			display: 'swap',
			unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
		})
	];

	Promise.all(fontFaces.map(font => font.load()))
		.then(fonts => {
			fonts.forEach(font => document.fonts.add(font));
			document.documentElement.classList.add('fonts-loaded');
			fontsLoaded = true;
		})
		.catch(err => {
			console.warn('Font loading failed:', err);
			// Fallback to system fonts
		});
}

export function preloadCriticalResources() {
	if (!browser) return;

	// Preload critical images if any
	const criticalImages = [];
	
	criticalImages.forEach(src => {
		const link = document.createElement('link');
		link.rel = 'preload';
		link.as = 'image';
		link.href = src;
		document.head.appendChild(link);
	});
}