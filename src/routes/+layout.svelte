<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import '../app.css';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
</script>

<Header />

<main>
  {#key $page.url.pathname}
    <div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
      <slot />
    </div>
  {/key}
</main>

<Footer />
