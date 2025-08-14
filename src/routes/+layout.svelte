<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import '../app.css';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { PUBLIC_GA_MEASUREMENT_ID } from '$env/static/public';

  export let data;

  $: {
    if (browser && $page.url.pathname) {
      gtag('config', PUBLIC_GA_MEASUREMENT_ID, {
        page_path: $page.url.pathname,
      });
    }
  }
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.description} />

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
