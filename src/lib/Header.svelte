<script lang="ts">
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    let scrolled = false;
    let mobileMenuOpen = false;

    function handleScroll() {
        if (browser) {
            scrolled = window.scrollY > 50;
        }
    }

    function handleNavLinkClick() {
        // Close mobile menu when nav link is clicked
        mobileMenuOpen = false;
    }

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    onMount(() => {
        if (browser) {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    });
</script>

<nav class="navbar fixed top-0 left-0 right-0 z-50" class:navbar-scrolled={scrolled}>
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
            <a class="navbar-brand" href="/" on:click={handleNavLinkClick}>
                <span class="fw-bold">Pasang Indihome</span>
            </a>

            <!-- Mobile menu button -->
            <button
                class="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
                type="button"
                on:click={toggleMobileMenu}
                aria-label="Toggle navigation"
            >
                <span class="block w-6 h-0.5 bg-primary transition-transform duration-300" class:rotate-45={mobileMenuOpen} class:translate-y-2={mobileMenuOpen}></span>
                <span class="block w-6 h-0.5 bg-primary transition-opacity duration-300" class:opacity-0={mobileMenuOpen}></span>
                <span class="block w-6 h-0.5 bg-primary transition-transform duration-300" class:-rotate-45={mobileMenuOpen} class:-translate-y-2={mobileMenuOpen}></span>
            </button>

            <!-- Desktop Menu -->
            <div class="hidden lg:flex lg:items-center lg:space-x-8">
                <ul class="flex items-center space-x-8">
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname === '/'} href="/" on:click={handleNavLinkClick}>Beranda</a>
                    </li>
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname.startsWith('/packages')} href="/packages" on:click={handleNavLinkClick}>Paket</a>
                    </li>
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname === '/service-areas'} href="/service-areas" on:click={handleNavLinkClick}>Area Layanan</a>
                    </li>
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname === '/contact'} href="/contact" on:click={handleNavLinkClick}>Kontak</a>
                    </li>
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname === '/faq'} href="/faq" on:click={handleNavLinkClick}>FAQ</a>
                    </li>
                    <li class="ml-3">
                        <a
                            class="btn btn-primary"
                            href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Indihome"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fab fa-whatsapp mr-2"></i>Chat WhatsApp
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Mobile Menu -->
        {#if mobileMenuOpen}
            <div class="lg:hidden navbar-collapse">
                <ul class="space-y-4 text-center">
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname === '/'} href="/" on:click={handleNavLinkClick}>Beranda</a>
                    </li>
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname.startsWith('/packages')} href="/packages" on:click={handleNavLinkClick}>Paket</a>
                    </li>
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname === '/service-areas'} href="/service-areas" on:click={handleNavLinkClick}>Area Layanan</a>
                    </li>
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname === '/contact'} href="/contact" on:click={handleNavLinkClick}>Kontak</a>
                    </li>
                    <li>
                        <a class="nav-link" class:active={$page.url.pathname === '/faq'} href="/faq" on:click={handleNavLinkClick}>FAQ</a>
                    </li>
                    <li class="mt-6">
                        <a
                            class="btn btn-primary"
                            href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Indihome"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="fab fa-whatsapp mr-2"></i>Chat WhatsApp
                        </a>
                    </li>
                </ul>
            </div>
        {/if}
    </div>
</nav>