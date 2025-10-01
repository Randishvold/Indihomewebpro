<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { PUBLIC_GA_MEASUREMENT_ID } from '$env/static/public';
	import { onMount } from 'svelte';

	export let data;

	let fontsLoaded = false;
	let fontAwesomeLoaded = false;

	// Load non-critical resources after page load
	onMount(async () => {
		if (browser) {
			// Load Google Fonts asynchronously
			const fontLink = document.createElement('link');
			fontLink.rel = 'stylesheet';
			fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap';
			document.head.appendChild(fontLink);
			fontsLoaded = true;

			// Load Font Awesome asynchronously
			const faLink = document.createElement('link');
			faLink.rel = 'stylesheet';
			faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
			document.head.appendChild(faLink);
			fontAwesomeLoaded = true;

			// Load Google Analytics asynchronously
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
		}
	});

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
	
	<!-- Preload critical resources -->
	<link rel="preload" href="/app.css" as="style" />
</svelte:head>

<Header />

<main>
	{#key $page.url.pathname}
		<div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
</main>

<Footer />
