<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { PUBLIC_GA_MEASUREMENT_ID } from '$env/static/public';
	import { onMount } from 'svelte'; // Import onMount

	export let data;

	$: {
		if (browser && $page.url.pathname) {
			gtag('config', PUBLIC_GA_MEASUREMENT_ID, {
				page_path: $page.url.pathname
			});
		}
	}

	// Dynamically import Bootstrap JS only on the client
	onMount(() => {
		if (browser) {
			import('bootstrap/dist/js/bootstrap.bundle.min.js');
		}
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />

	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
		rel="stylesheet"
	/>

	<!-- Google tag (gtag.js) -->
	<script
		async
		src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GA_MEASUREMENT_ID}"
	></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', PUBLIC_GA_MEASUREMENT_ID);
	</script>
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
