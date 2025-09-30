<script lang="ts">
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { onMount, onDestroy } from 'svelte';
    import type { Collapse as BsCollapseType } from 'bootstrap';

    let scrolled = false;
    let collapseEl: HTMLElement;
    let bsCollapse: BsCollapseType | null = null;

    function handleScroll() {
        if (browser) {
            scrolled = window.scrollY > 50;
        }
    }

    function handleNavLinkClick() {
        // Jika menu mobile terbuka, tutup menunya
        if (bsCollapse && collapseEl.classList.contains('show')) {
            bsCollapse.hide();
        }
    }

    onMount(async () => {
        if (browser) {
            // Impor modul Collapse dari Bootstrap
            const { Collapse } = await import('bootstrap');
            // Inisialisasi komponen Collapse dan simpan instance-nya
            bsCollapse = new Collapse(collapseEl, { toggle: false });
        }
    });
    
    onDestroy(() => {
        // Hancurkan instance Bootstrap saat komponen dilepas untuk mencegah memory leak
        if (bsCollapse) {
            bsCollapse.dispose();
        }
    });

</script>

<svelte:window on:scroll={handleScroll} />

<nav class="navbar navbar-expand-lg fixed-top" class:navbar-scrolled={scrolled}>
    <div class="container">
        <a class="navbar-brand" href="/" on:click={handleNavLinkClick}>
            <span class="fw-bold">Pasang Indihome</span>
        </a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav" bind:this={collapseEl}>
            <ul class="navbar-nav ms-auto align-items-lg-center text-center">
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/'} href="/" on:click={handleNavLinkClick}>Beranda</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname.startsWith('/packages')} href="/packages" on:click={handleNavLinkClick}>Paket</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/service-areas'} href="/service-areas" on:click={handleNavLinkClick}>Area Layanan</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/contact'} href="/contact" on:click={handleNavLinkClick}>Kontak</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" class:active={$page.url.pathname === '/faq'} href="/faq" on:click={handleNavLinkClick}>FAQ</a>
                </li>
                <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                    <a
                        class="btn btn-primary"
                        href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Indihome"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-whatsapp me-2"></i>Chat WhatsApp
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>