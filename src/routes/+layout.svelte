<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import '../lib/critical-fa.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { PUBLIC_GA_MEASUREMENT_ID } from '$env/static/public';
	import { onMount } from 'svelte';

	export let data;

	let resourcesLoaded = false;

	// Load non-critical resources after initial paint
	onMount(async () => {
		if (browser) {
			// Use requestIdleCallback untuk timing yang optimal
			if (window.requestIdleCallback) {
				requestIdleCallback(loadNonCriticalResources);
			} else {
				setTimeout(loadNonCriticalResources, 100);
			}
		}
	});

	function loadNonCriticalResources() {
		// Load Font Awesome dengan subset minimal
		const faSubset = document.createElement('style');
		faSubset.textContent = `
			@font-face {
				font-family: "Font Awesome 6 Free";
				font-style: normal;
				font-weight: 900;
				font-display: swap;
				src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/webfonts/fa-solid-900.woff2") format("woff2");
			}
			@font-face {
				font-family: "Font Awesome 6 Brands";
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/webfonts/fa-brands-400.woff2") format("woff2");
			}
		`;
		document.head.appendChild(faSubset);

		// Load Google Fonts secara optimal
		const googleFonts = document.createElement('link');
		googleFonts.rel = 'stylesheet';
		googleFonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap';
		document.head.appendChild(googleFonts);

		// Load Google Analytics
		const gtag = document.createElement('script');
		gtag.async = true;
		gtag.src = `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GA_MEASUREMENT_ID}`;
		document.head.appendChild(gtag);

		gtag.onload = () => {
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', PUBLIC_GA_MEASUREMENT_ID);
		};

		resourcesLoaded = true;
		
		// Add fonts-loaded class when fonts are ready
		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(() => {
				document.documentElement.classList.add('fonts-loaded');
			});
		} else {
			// Fallback for older browsers
			setTimeout(() => {
				document.documentElement.classList.add('fonts-loaded');
			}, 1000);
		}
	}

	$: {
		if (browser && $page.url.pathname && window.gtag) {
			gtag('config', PUBLIC_GA_MEASUREMENT_ID, {
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<Header />

<main>
	{#key $page.url.pathname}
		<div in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 200 }}>
			<slot />
		</div>
	{/key}
</main>

<Footer />
