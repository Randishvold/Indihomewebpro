<script>
  import { page } from '$app/stores';
  import { browser } from '$app/environment';

  let scrolled = false;
  let collapseEl;
  let navEl;
  let hamburgerButton;

  function handleScroll() {
    if (browser) {
      scrolled = window.scrollY > 50;
    }
  }

  function handleBodyClick(event) {
    if (browser) {
      if (navEl && !navEl.contains(event.target) && collapseEl.classList.contains('show')) {
        hamburgerButton.click();
      }
    }
  }

  function trackWhatsAppClick() {
    console.log('WhatsApp link clicked');
    // In a real application, you would add your analytics tracking code here.
  }
</script>

<svelte:window on:scroll={handleScroll} on:click={handleBodyClick}/>

<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top" class:navbar-scrolled={scrolled} bind:this={navEl}>
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="/">
            <span class="fw-bold text-primary">Pasang Indihome</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" bind:this={hamburgerButton} aria-label="Buka/Tutup navigasi">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" bind:this={collapseEl}>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Beranda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/packages'} href="/packages">Paket</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/service-areas'} href="/service-areas">Area Layanan</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/contact'} href="/contact">Kontak</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/faq'} href="/faq">FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-primary ms-2" href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Indihome" target="_blank" on:click={trackWhatsAppClick}>
                        <i class="fab fa-whatsapp me-1"></i> Chat WhatsApp
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>