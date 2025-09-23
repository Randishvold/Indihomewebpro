<svelte:head>
    <title>Paket Indihome Majalengka & Sumedang - Harga Terbaik</title>
    <meta name="description" content="Daftar lengkap paket Indihome untuk Majalengka dan Sumedang. Internet 1P, 2P, dan OneDynamic dengan harga terjangkau. Pesan sekarang via WhatsApp!" />
    <meta name="keywords" content="paket Indihome Majalengka, harga Indihome Sumedang, internet 1P 2P, paket OneDynamic Indihome" />
</svelte:head>

<script>
  import { fadeIn } from '$lib/actions.js';
  let filter = 'all';

  const packages = [
    // paket 1p internet saja
    { id: 1, category: '1p', name: 'EZnet 20Mbps', price: '210.800', features: ['Internet 20 Mbps', 'Ideal Untuk 5 Perangkat', 'Biaya Pasang Hanya Rp 166.500', 'Harga Sudah Termasuk PPN', 'Teknologi Fiber Optic'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%201P%2020%20Mbps%20-%20Rp%20210.800' },
    { id: 2, category: '1p', name: '50Mbps Internet', price: '266.400', features: ['Internet 50 Mbps', 'Ideal Untuk 7 Perangkat', 'Prime Video', 'Catchplay+', 'IndiHomeTV', 'Biaya Pasang Hanya Rp 166.500', 'Harga Sudah Termasuk PPN', 'Teknologi Fiber Optic'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%201P%2050%20Mbps%20-%20Rp%20266.400' },
    { id: 3, category: '1p', name: '75Mbps Internet', price: '299.700', features: ['Internet 75 Mbps', 'Ideal Untuk 10 Perangkat', 'Prime Video', 'Catchplay+', 'IndiHomeTV', 'Biaya Pasang Hanya Rp 166.500', 'Harga Sudah Termasuk PPN', 'Teknologi Fiber Optic'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%201P%2075%20Mbps%20-%20Rp%20299.700' },
    { id: 10, category: '1p', name: '150Mbps Internet', price: '416.250', features: ['Internet 150 Mbps', 'Ideal Untuk 16 Perangkat', 'Prime Video', 'Catchplay+', 'IndiHomeTV', 'Biaya Pasang Hanya Rp 166.500', 'Harga Sudah Termasuk PPN', 'Teknologi Fiber Optic'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%201P%20150%20Mbps%20-%20Rp%20416.250' },
    { id: 11, category: '1p', name: '200Mbps Internet', price: '571.650', features: ['Internet 50 Mbps', 'Ideal Untuk 20 Perangkat', 'Netflix Basic', 'Prime Video', 'Catchplay+', 'IndiHomeTV', 'Biaya Pasang Hanya Rp 166.500', 'Harga Sudah Termasuk PPN', 'Teknologi Fiber Optic'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%201P%20200%20Mbps%20-%20Rp%20571.650' },
    
    // paket 2p
    { id: 12, category: '2p', name: '2P 20Mbps + Phone', price: '250.000', features: ['Internet 20 Mbps', 'Telepon Rumah 100 menit', 'Biaya Pasang Hanya Rp 166.500', 'Harga Sudah Termasuk PPN', 'Teknologi Fiber Optic'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%202P%2020%20Mbps%20-%20Rp%20250.000' },
    { id: 13, category: '2p', name: '2P 50Mbps + Phone', price: '300.000', features: ['Internet 50 Mbps', 'Telepon Rumah 100 menit', 'Biaya Pasang Hanya Rp 166.500', 'Harga Sudah Termasuk PPN', 'Teknologi Fiber Optic'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%202P%2050%20Mbps%20-%20Rp%20300.000' },

    // paket 3p
    { id: 4, category: 'tv', name: '3P 30 Mbps', price: '395.000', features: ['Internet 30 Mbps', 'UseeTV 113 Channel', 'Telepon Rumah 300 menit', 'WiFi Router + STB Gratis', 'Fiber Optic Premium'], popular: true, wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%203P%2030%20Mbps%20-%20Rp%20395.000' },
    { id: 5, category: 'tv', name: '3P 50 Mbps', price: '525.000', features: ['Internet 50 Mbps', 'UseeTV 113 Channel', 'Telepon Rumah 300 menit', 'WiFi Router + STB Gratis', 'Fiber Optic Premium'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%203P%2050%20Mbps%20-%20Rp%20525.000' },
    { id: 6, category: 'tv', name: '3P 100 Mbps', price: '675.000', features: ['Internet 100 Mbps', 'UseeTV 113 Channel', 'Telepon Rumah 300 menit', 'WiFi Router + STB Gratis', 'Fiber Optic Premium'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%203P%20100%20Mbps%20-%20Rp%20675.000' },

    // paket 3p
    { id: 14, category: '3p', name: '3P 20Mbps + Phone + TV', price: '350.000', features: ['Internet 20 Mbps', 'Telepon Rumah 100 menit', 'UseeTV 80 Channel', 'Biaya Pasang Hanya Rp 166.500', 'Harga Sudah Termasuk PPN', 'Teknologi Fiber Optic'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%203P%2020%20Mbps%20-%20Rp%20350.000' },
    
    // paket onedynamic
    { id: 7, category: 'gamer', name: 'Gamer 50 Mbps', price: '505.000', features: ['Internet 50 Mbps Dedicated', 'Low Latency Gaming', 'Unlimited Bandwidth', 'Gaming Router', 'Fiber Optic Premium'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%20Gamer%2050%20Mbps%20-%20Rp%20505.000' },
    { id: 8, category: 'gamer', name: 'Gamer 100 Mbps', price: '755.000', features: ['Internet 100 Mbps Dedicated', 'Ultra Low Latency', 'Unlimited Bandwidth', 'Gaming Router Premium', 'Fiber Optic Premium'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%20Gamer%20100%20Mbps%20-%20Rp%20755.000' },
    { id: 9, category: 'gamer', name: 'Gamer 300 Mbps', price: '1.355.000', features: ['Internet 300 Mbps Dedicated', 'Professional Gaming', 'Unlimited Bandwidth', 'Gaming Router Ultimate', 'Fiber Optic Premium'], wa_link: 'https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%20Gamer%20300%20Mbps%20-%20Rp%201.355.000' },
  ];

  $: filteredPackages = filter === 'all' ? packages : packages.filter(p => p.category === filter);

  function setFilter(newFilter) {
    filter = newFilter;
  }

  function trackWhatsAppClick() {
    console.log('WhatsApp link clicked');
    // In a real application, you would add your analytics tracking code here.
  }
</script>

<!-- Hero Section -->
<section class="bg-primary text-white py-5">
    <div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h1 class="display-5 fw-bold mb-3">Paket Indihome Terlengkap</h1>
                <p class="lead">Pilih paket internet yang sesuai dengan kebutuhan Anda di Majalengka dan Sumedang</p>
            </div>
        </div>
    </div>
</section>

<!-- Packages Section -->
<section class="py-5">
    <div class="container">
        <!-- Package Filter -->
        <div class="row mb-5">
            <div class="col-12">
                <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
                    <button class="btn btn-outline-primary" class:active={filter === 'all'} on:click={() => setFilter('all')}>Semua Paket</button>
                    <button class="btn btn-outline-primary" class:active={filter === '1p'} on:click={() => setFilter('1p')}>Paket Internet Saja</button>
                    <button class="btn btn-outline-primary" class:active={filter === '2p'} on:click={() => setFilter('2p')}>Paket Internet + Telepon</button>
                    <button class="btn btn-outline-primary" class:active={filter === 'tv'} on:click={() => setFilter('tv')}>Paket Internet + TV</button>
                    <button class="btn btn-outline-primary" class:active={filter === '3p'} on:click={() => setFilter('3p')}>Paket Internet + Telepon + TV</button>
                    <button class="btn btn-outline-primary" class:active={filter === 'gamer'} on:click={() => setFilter('gamer')}>Paket Gamer</button>
                </div>
            </div>
        </div>

        <!-- All Packages Container -->
        <div class="row" id="packagesContainer">
            {#if filter === 'all' || filter === '1p'}
            <div class="col-12 mb-4 package-section">
                <h3 class="fw-bold text-center mb-4">Paket Internet Saja</h3>
            </div>
            {/if}
            {#each filteredPackages.filter(p => p.category === '1p') as pkg}
            <div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
                <div class="card h-100">
                    <div class="card-header bg-white border-0 text-center pt-4">
                        <h5 class="fw-bold text-primary">{pkg.name}</h5>
                        <div class="price-display">
                            <span class="h2 fw-bold text-dark">Rp {pkg.price}</span>
                            <small class="text-muted">/bulan</small>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            {#each pkg.features as feature}
                            <li class="mb-2"><i class="fas fa-check text-success me-2"></i>{feature}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class="card-footer bg-white border-0 pb-4">
                        <a href={pkg.wa_link} target="_blank" class="btn btn-primary w-100" on:click={trackWhatsAppClick}>
                            <i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>
            {/each}

            {#if filter === 'all' || filter === '2p'}
            <div class="col-12 mb-4 package-section">
                <h3 class="fw-bold text-center mb-4">Paket Internet + Telepon</h3>
            </div>
            {/if}
            {#each filteredPackages.filter(p => p.category === '2p') as pkg}
            <div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
                <div class="card h-100">
                    <div class="card-header bg-white border-0 text-center pt-4">
                        <h5 class="fw-bold text-primary">{pkg.name}</h5>
                        <div class="price-display">
                            <span class="h2 fw-bold text-dark">Rp {pkg.price}</span>
                            <small class="text-muted">/bulan</small>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            {#each pkg.features as feature}
                            <li class="mb-2"><i class="fas fa-check text-success me-2"></i>{feature}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class="card-footer bg-white border-0 pb-4">
                        <a href={pkg.wa_link} target="_blank" class="btn btn-primary w-100" on:click={trackWhatsAppClick}>
                            <i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>
            {/each}

            {#if filter === 'all' || filter === 'tv'}
            <div class="col-12 mb-4 package-section">
                <h3 class="fw-bold text-center mb-4">Paket Internet + TV</h3>
            </div>
            {/if}
            {#each filteredPackages.filter(p => p.category === 'tv') as pkg}
            <div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
                <div class="card h-100">
                    <div class="card-header text-center pt-4">
                        <h5 class="fw-bold">{pkg.name}</h5>
                        <div class="price-display">
                            <span class="h2 fw-bold">Rp {pkg.price}</span>
                            <small>/bulan</small>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            {#each pkg.features as feature}
                            <li class="mb-2"><i class="fas fa-check text-success me-2"></i>{feature}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class="card-footer bg-white border-0 pb-4">
                        <a href={pkg.wa_link} target="_blank" class="btn btn-primary w-100" on:click={trackWhatsAppClick}>
                            <i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>
            {/each}

            {#if filter === 'all' || filter === '3p'}
            <div class="col-12 mb-4 package-section">
                <h3 class="fw-bold text-center mb-4">Paket Internet + Telepon + TV</h3>
            </div>
            {/if}
            {#each filteredPackages.filter(p => p.category === '3p') as pkg}
            <div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
                <div class="card h-100">
                    <div class="card-header bg-white border-0 text-center pt-4">
                        <h5 class="fw-bold text-primary">{pkg.name}</h5>
                        <div class="price-display">
                            <span class="h2 fw-bold text-dark">Rp {pkg.price}</span>
                            <small class="text-muted">/bulan</small>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            {#each pkg.features as feature}
                            <li class="mb-2"><i class="fas fa-check text-success me-2"></i>{feature}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class="card-footer bg-white border-0 pb-4">
                        <a href={pkg.wa_link} target="_blank" class="btn btn-primary w-100" on:click={trackWhatsAppClick}>
                            <i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>
            {/each}

            {#if filter === 'all' || filter === 'gamer'}
            <div class="col-12 mb-4 package-section">
                <h3 class="fw-bold text-center mb-4">Paket Gamer (Khusus Gaming)</h3>
            </div>
            {/if}
            {#each filteredPackages.filter(p => p.category === 'gamer') as pkg}
            <div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
                <div class="card h-100">
                    <div class="card-header bg-white border-0 text-center pt-4">
                        <h5 class="fw-bold text-primary">{pkg.name}</h5>
                        <div class="price-display">
                            <span class="h2 fw-bold text-dark">Rp {pkg.price}</span>
                            <small class="text-muted">/bulan</small>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            {#each pkg.features as feature}
                            <li class="mb-2"><i class="fas fa-check text-success me-2"></i>{feature}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class="card-footer bg-white border-0 pb-4">
                        <a href={pkg.wa_link} target="_blank" class="btn btn-primary w-100" on:click={trackWhatsAppClick}>
                            <i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>

<!-- Benefits Section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="row text-center mb-5">
            <div class="col-12">
                <h2 class="fw-bold text-dark mb-3">Keuntungan Berlangganan</h2>
                <p class="text-muted">Nikmati berbagai benefit eksklusif untuk pelanggan Indihome</p>
            </div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="feature-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                        <i class="fas fa-tools text-primary fa-2x"></i>
                    </div>
                    <h5 class="fw-bold mb-2">Fiber Optic Premium</h5>
                    <p class="text-muted">Teknologi fiber optic terdepan untuk koneksi premium</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="feature-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                        <i class="fas fa-wifi text-primary fa-2x"></i>
                    </div>
                    <h5 class="fw-bold mb-2">WiFi Router Gratis</h5>
                    <p class="text-muted">Router WiFi berkualitas untuk koneksi optimal</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="feature-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                        <i class="fas fa-headset text-primary fa-2x"></i>
                    </div>
                    <h5 class="fw-bold mb-2">Support 24/7</h5>
                    <p class="text-muted">Customer service siap membantu kapan saja</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="feature-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                        <i class="fas fa-shield-alt text-primary fa-2x"></i>
                    </div>
                    <h5 class="fw-bold mb-2">Garansi Kualitas</h5>
                    <p class="text-muted">Jaminan kualitas jaringan fiber optic terbaik</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-5 bg-primary text-white">
    <div class="container text-center">
        <h2 class="fw-bold mb-3">Butuh Konsultasi Paket?</h2>
        <p class="lead mb-4">Tim sales kami siap membantu Anda memilih paket yang tepat</p>
        <a href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20Indihome%20yang%20sesuai" target="_blank" class="btn btn-light btn-lg" on:click={trackWhatsAppClick}>
            <i class="fab fa-whatsapp me-2"></i>Konsultasi Gratis
        </a>
    </div>
</section>