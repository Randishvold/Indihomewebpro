<svelte:head>
    <title>Area Layanan Indihome Majalengka & Sumedang - Jangkauan Fiber Optic</title>
    <meta name="description" content="Cek area layanan Indihome di Majalengka dan Sumedang. Jangkauan fiber optic tersedia di semua kecamatan. Cek ketersediaan jaringan sekarang!" />
    <meta name="keywords" content="area layanan Indihome Majalengka, jangkauan Indihome Sumedang, fiber optic Majalengka Sumedang" />
</svelte:head>

<script>
  import { fadeIn } from '$lib/actions.js';
  let selectedKabupaten = '';
  let selectedKecamatan = '';
  let alamat = '';

  const kecamatanData = {
    'majalengka': [
      'Majalengka',
      'Cigasong',
      'Jatiwangi',
      'Dawuan',
      'Kadipaten',
      'Kertajati',
      'Jatitujuh',
      'Ligung',
      'Sumber',
      'Panyingkiran',
      'Talaga',
      'Sukahaji',
      'Leuwimunding',
      'Palasah',
      'Cikijing',
      'Cingambul',
      'Bantarujeg',
      'Argapura',
      'Maja',
      'Rajagaluh',
      'Sindang',
      'Sindangwangi',
      'Lemahsugih',
      'Malausma'
    ],
    'sumedang': [
      'Sumedang Utara',
      'Sumedang Selatan',
      'Cimalaka',
      'Tanjungsari',
      'Pamulihan',
      'Cisitu',
      'Wado',
      'Jatigede',
      'Darmaraja',
      'Ganeas',
      'Tomo',
      'Jatinangor',
      'Cimanggung',
      'Rancakalong',
      'Sukasari',
      'Situraja',
      'Ujungjaya',
      'Cibugel',
      'Buahdua',
      'Tanjungkerta',
      'Tanjungmedar',
      'Cisarua',
      'Jatinunggal',
      'Conggeang',
      'Paseh'
    ]
  };

  let kecamatanOptions = [];

  function handleKabupatenChange(event) {
    selectedKabupaten = event.target.value;
    selectedKecamatan = '';
    if (selectedKabupaten) {
      kecamatanOptions = kecamatanData[selectedKabupaten];
    } else {
      kecamatanOptions = [];
    }
  }

  function handleCoverageCheck() {
    if (selectedKabupaten && selectedKecamatan && alamat) {
      let message = `*CEK KETERSEDIAAN JARINGAN INDIHOME*\n\n`;
      message += `Kabupaten: ${selectedKabupaten}\n`;
      message += `Kecamatan: ${selectedKecamatan}\n`;
      message += `Alamat: ${alamat}\n\n`;
      message += `Mohon dicek ketersediaan jaringan fiber optic di alamat ini. Terima kasih!`;
      
      const whatsappURL = `https://api.whatsapp.com/send?phone=6285169727821&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    } else {
      alert('Mohon lengkapi semua field');
    }
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
                <h1 class="display-5 fw-bold mb-3">Area Layanan Kami</h1>
                <p class="lead">Jangkauan fiber optic Indihome di wilayah Majalengka dan Sumedang</p>
            </div>
        </div>
    </div>
</section>

<!-- Coverage Check Section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm" use:fadeIn>
                    <div class="card-body p-5 text-center">
                        <h3 class="fw-bold mb-4">Cek Ketersediaan Jaringan</h3>
                        <p class="text-muted mb-4">Masukkan alamat lengkap Anda untuk mengecek ketersediaan jaringan fiber optic Indihome</p>
                        
                        <form on:submit|preventDefault={handleCoverageCheck} class="row g-3">
                            <div class="col-md-6">
                                <select class="form-select" bind:value={selectedKabupaten} on:change={handleKabupatenChange} required>
                                    <option value="">Pilih Kabupaten</option>
                                    <option value="majalengka">Kabupaten Majalengka</option>
                                    <option value="sumedang">Kabupaten Sumedang</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <select class="form-select" bind:value={selectedKecamatan} required disabled={!selectedKabupaten}>
                                    <option value="">Pilih Kecamatan</option>
                                    {#each kecamatanOptions as kecamatan}
                                        <option value={kecamatan}>{kecamatan}</option>
                                    {/each}
                                </select>
                            </div>
                            <div class="col-12">
                                <textarea class="form-control" bind:value={alamat} rows="3" placeholder="Alamat lengkap (nama jalan, nomor rumah, RT/RW)" required></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-lg">
                                    <i class="fas fa-search me-2"></i>Cek Ketersediaan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Service Areas Section -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <!-- Majalengka -->
            <div class="col-lg-6 mb-5" use:fadeIn>
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-header bg-primary text-white">
                        <h4 class="fw-bold mb-0">
                            <i class="fas fa-map-marker-alt me-2"></i>Kabupaten Majalengka
                        </h4>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-4">Jangkauan fiber optic tersedia di seluruh kecamatan di Kabupaten Majalengka</p>
                        
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Majalengka</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Cigasong</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Jatiwangi</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Dawuan</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Kadipaten</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Kertajati</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Jatitujuh</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Ligung</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Sumber</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Panyingkiran</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Talaga</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Sukahaji</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-4">
                            <a href="https://api.whatsapp.com/send?phone=6285169727821?text=text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20Majalengka" target="_blank" class="btn btn-outline-primary" on:click={trackWhatsAppClick}>
                                <i class="fab fa-whatsapp me-2"></i>Cek Jaringan Majalengka
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sumedang -->
            <div class="col-lg-6 mb-5" use:fadeIn>
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-header bg-primary text-white">
                        <h4 class="fw-bold mb-0">
                            <i class="fas fa-map-marker-alt me-2"></i>Kabupaten Sumedang
                        </h4>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-4">Jangkauan fiber optic tersedia di seluruh kecamatan di Kabupaten Sumedang</p>
                        
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Sumedang Utara</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Sumedang Selatan</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Cimalaka</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Tanjungsari</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Pamulihan</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Cisitu</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Wado</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Jatigede</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Darmaraja</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Ganeas</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Tomo</span>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <i class="fas fa-check-circle text-success me-2"></i>
                                    <span>Jatinangor</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-4">
                            <a href="https://api.whatsapp.com/send?phone=6285169727821?text=text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20Sumedang" target="_blank" class="btn btn-outline-primary" on:click={trackWhatsAppClick}>
                                <i class="fab fa-whatsapp me-2"></i>Cek Jaringan Sumedang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Coverage Stats Section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="row text-center">
            <div class="col-12 mb-5">
                <h2 class="fw-bold text-dark mb-3">Jangkauan Jaringan Kami</h2>
                <p class="text-muted">Statistik coverage area fiber optic Indihome</p>
            </div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                        <i class="fas fa-map text-primary fa-2x"></i>
                    </div>
                    <h3 class="fw-bold text-primary">2</h3>
                    <p class="text-muted">Kabupaten</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                        <i class="fas fa-map-marker-alt text-primary fa-2x"></i>
                    </div>
                    <h3 class="fw-bold text-primary">38</h3>
                    <p class="text-muted">Kecamatan</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                        <i class="fas fa-home text-primary fa-2x"></i>
                    </div>
                    <h3 class="fw-bold text-primary">95%</h3>
                    <p class="text-muted">Coverage Area</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                        <i class="fas fa-users text-primary fa-2x"></i>
                    </div>
                    <h3 class="fw-bold text-primary">10K+</h3>
                    <p class="text-muted">Pelanggan</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Installation Process -->
<section class="py-5">
    <div class="container">
        <div class="row text-center mb-5">
            <div class="col-12">
                <h2 class="fw-bold text-dark mb-3">Proses Instalasi</h2>
                <p class="text-muted">Langkah mudah untuk mendapatkan internet Indihome di rumah Anda</p>
            </div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="position-relative">
                        <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-3" style="width: 60px; height: 60px;">
                            1
                        </div>
                    </div>
                    <h5 class="fw-bold mb-3">Konsultasi</h5>
                    <p class="text-muted">Hubungi sales untuk konsultasi paket dan cek ketersediaan jaringan</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="position-relative">
                        <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-3" style="width: 60px; height: 60px;">
                            2
                        </div>
                    </div>
                    <h5 class="fw-bold mb-3">Survey</h5>
                    <p class="text-muted">Tim teknis melakukan survey lokasi untuk memastikan kemungkinan instalasi</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="position-relative">
                        <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-3" style="width: 60px; height: 60px;">
                            3
                        </div>
                    </div>
                    <h5 class="fw-bold mb-3">Instalasi</h5>
                    <p class="text-muted">Pemasangan kabel fiber optic dan perangkat ke rumah Anda</p>
                </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
                <div class="text-center" use:fadeIn>
                    <div class="position-relative">
                        <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white fw-bold mb-3" style="width: 60px; height: 60px;">
                            4
                        </div>
                    </div>
                    <h5 class="fw-bold mb-3">Aktivasi</h5>
                    <p class="text-muted">Testing koneksi dan aktivasi layanan internet Indihome</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-5 bg-primary text-white">
    <div class="container text-center">
        <h2 class="fw-bold mb-3">Cek Ketersediaan di Alamat Anda</h2>
        <p class="lead mb-4">Pastikan fiber optic Indihome sudah tersedia di lokasi Anda</p>
        <a href="https://api.whatsapp.com/send?phone=6285169727821?text=text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20Indihome%20di%20alamat%20saya" target="_blank" class="btn btn-light btn-lg" on:click={trackWhatsAppClick}>
            <i class="fab fa-whatsapp me-2"></i>Cek Sekarang
        </a>
    </div>
</section>