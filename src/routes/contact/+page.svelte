<svelte:head>
    <title>Kontak Sales Indihome Majalengka & Sumedang - WhatsApp & Email</title>
    <meta name="description" content="Hubungi sales Indihome Majalengka dan Sumedang via WhatsApp, email atau telepon. Konsultasi gratis dan daftar paket internet fiber optic sekarang!" />
    <meta name="keywords" content="kontak sales Indihome Majalengka, WhatsApp Indihome Sumedang, telepon sales Indihome" />
</svelte:head>

<script>
  import { fadeIn } from '$lib/actions.js';
  let nama = '';
  let telepon = '';
  let email = '';
  let selectedKabupaten = '';
  let selectedKecamatan = '';
  let alamat = '';
  let keperluan = '';
  let pesan = '';
  let setuju = false;

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

  function handleSubmit() {
    if (nama && telepon && selectedKabupaten && selectedKecamatan && alamat && keperluan && setuju) {
      let message = `*FORMULIR KONTAK INDIHOME*\n\n`;
      message += `Nama: ${nama}\n`;
      message += `Telepon: ${telepon}\n`;
      if (email) message += `Email: ${email}\n`;
      message += `Lokasi: ${selectedKabupaten} - ${selectedKecamatan}\n`;
      message += `Alamat: ${alamat}\n`;
      message += `Keperluan: ${keperluan}\n`;
      if (pesan) message += `Pesan: ${pesan}\n`;
      message += `\nMohon diproses, terima kasih!`;

      const whatsappURL = `https://api.whatsapp.com/send?phone=6285169727821&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    } else {
      alert('Mohon lengkapi semua field yang bertanda *');
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
                <h1 class="display-5 fw-bold mb-3">Hubungi Kami</h1>
                <p class="lead">Sales profesional siap membantu Anda 24/7</p>
            </div>
        </div>
    </div>
</section>

<!-- Contact Methods Section -->
<section class="py-5">
    <div class="container">
        <div class="row g-4">
            <!-- WhatsApp -->
            <div class="col-lg-4 col-md-6" use:fadeIn>
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center p-4">
                        <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px;">
                            <i class="fab fa-whatsapp text-success fa-2x"></i>
                        </div>
                        <h5 class="fw-bold mb-3">WhatsApp</h5>
                        <p class="text-muted mb-3">Chat langsung dengan sales untuk konsultasi dan pemesanan paket</p>
                        <p class="fw-bold text-dark mb-3">+62 812-3456-7890</p>
                        <a href="https://api.whatsapp.com/send?phone=6285169727821?text=text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20Indihome" target="_blank" class="btn btn-success" on:click={trackWhatsAppClick}>
                            <i class="fab fa-whatsapp me-2"></i>Chat Sekarang
                        </a>
                    </div>
                </div>
            </div>

            <!-- Phone -->
            <div class="col-lg-4 col-md-6" use:fadeIn>
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center p-4">
                        <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px;">
                            <i class="fas fa-phone text-primary fa-2x"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Telepon</h5>
                        <p class="text-muted mb-3">Hubungi langsung untuk informasi paket dan konsultasi</p>
                        <p class="fw-bold text-dark mb-3">+62 812-3456-7890</p>
                        <a href="tel:+6285169727821" class="btn btn-primary">
                            <i class="fas fa-phone me-2"></i>Telepon Sekarang
                        </a>
                    </div>
                </div>
            </div>

            <!-- Email -->
            <div class="col-lg-4 col-md-6 mx-auto" use:fadeIn>
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body text-center p-4">
                        <div class="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px;">
                            <i class="fas fa-envelope text-info fa-2x"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Email</h5>
                        <p class="text-muted mb-3">Kirim pertanyaan atau permintaan informasi melalui email</p>
                        <p class="fw-bold text-dark mb-3">riri.sfim@protonmail.com</p>
                        <a href="mailto:riri.sfim@protonmail.com" class="btn btn-info text-white">
                            <i class="fas fa-envelope me-2"></i>Kirim Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Form Section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm" use:fadeIn>
                    <div class="card-header bg-white border-0 text-center py-4">
                        <h3 class="fw-bold mb-0">Formulir Kontak</h3>
                        <p class="text-muted mt-2">Isi formulir di bawah ini untuk mendapatkan informasi lengkap</p>
                    </div>
                    <div class="card-body p-5">
                        <form on:submit|preventDefault={handleSubmit}>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="nama" class="form-label">Nama Lengkap *</label>
                                    <input type="text" class="form-control" id="nama" bind:value={nama} required>
                                </div>
                                <div class="col-md-6">
                                    <label for="telepon" class="form-label">Nomor Telepon *</label>
                                    <input type="tel" class="form-control" id="telepon" bind:value={telepon} required>
                                </div>
                                <div class="col-12">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" bind:value={email}>
                                </div>
                                <div class="col-md-6">
                                    <label for="kabupaten" class="form-label">Kabupaten *</label>
                                    <select class="form-select" id="kabupaten" bind:value={selectedKabupaten} on:change={handleKabupatenChange} required>
                                        <option value="">Pilih Kabupaten</option>
                                        <option value="majalengka">Kabupaten Majalengka</option>
                                        <option value="sumedang">Kabupaten Sumedang</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="kecamatan" class="form-label">Kecamatan *</label>
                                    <select class="form-select" id="kecamatan" bind:value={selectedKecamatan} required disabled={!selectedKabupaten}>
                                        <option value="">Pilih Kecamatan</option>
                                        {#each kecamatanOptions as kecamatan}
                                            <option value={kecamatan}>{kecamatan}</option>
                                        {/each}
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="alamat" class="form-label">Alamat Lengkap *</label>
                                    <textarea class="form-control" id="alamat" rows="3" placeholder="Jalan, nomor rumah, RT/RW, kelurahan/desa" bind:value={alamat} required></textarea>
                                </div>
                                <div class="col-12">
                                    <label for="keperluan" class="form-label">Keperluan *</label>
                                    <select class="form-select" id="keperluan" bind:value={keperluan} required>
                                        <option value="">Pilih Keperluan</option>
                                        <option value="daftar">Daftar Paket Baru</option>
                                        <option value="upgrade">Upgrade Paket</option>
                                        <option value="konsultasi">Konsultasi Paket</option>
                                        <option value="cek_jaringan">Cek Ketersediaan Jaringan</option>
                                        <option value="keluhan">Keluhan Layanan</option>
                                        <option value="info">Informasi Umum</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="pesan" class="form-label">Pesan/Pertanyaan</label>
                                    <textarea class="form-control" id="pesan" rows="4" placeholder="Tuliskan pertanyaan atau informasi tambahan..." bind:value={pesan}></textarea>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="setuju" bind:checked={setuju} required>
                                        <label class="form-check-label" for="setuju">
                                            Saya setuju untuk dihubungi melalui WhatsApp/Telepon untuk keperluan follow up *
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary btn-lg w-100">
                                        <i class="fas fa-paper-plane me-2"></i>Kirim Pesan
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Office Hours Section -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4" use:fadeIn>
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body p-4">
                        <h4 class="fw-bold mb-4">
                            <i class="fas fa-clock text-primary me-2"></i>Jam Operasional
                        </h4>
                        
                        <div class="row">
                            <div class="col-6">
                                <div class="mb-3">
                                    <h6 class="fw-bold">WhatsApp</h6>
                                    <p class="text-muted mb-0">24 Jam / 7 Hari</p>
                                </div>
                                <div class="mb-3">
                                    <h6 class="fw-bold">Telepon</h6>
                                    <p class="text-muted mb-0">08:00 - 20:00 WIB</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <h6 class="fw-bold">Email</h6>
                                    <p class="text-muted mb-0">Respon dalam 24 jam</p>
                                </div>
                                <div class="mb-3">
                                    <h6 class="fw-bold">Survey</h6>
                                    <p class="text-muted mb-0">Senin - Sabtu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mb-4" use:fadeIn>
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body p-4">
                        <h4 class="fw-bold mb-4">
                            <i class="fas fa-info-circle text-primary me-2"></i>Informasi Penting
                        </h4>
                        
                        <ul class="list-unstyled">
                            <li class="mb-2">
                                <i class="fas fa-check text-success me-2"></i>
                                Konsultasi gratis untuk semua paket
                            </li>
                            <li class="mb-2">
                                <i class="fas fa-check text-success me-2"></i>
                                Survey lokasi tanpa biaya
                            </li>
                            <li class="mb-2">
                                <i class="fas fa-check text-success me-2"></i>
                                Proses pendaftaran mudah dan cepat
                            </li>
                            <li class="mb-2">
                                <i class="fas fa-check text-success me-2"></i>
                                Instalasi gratis untuk semua paket
                            </li>
                            <li class="mb-2">
                                <i class="fas fa-check text-success me-2"></i>
                                Sales berpengalaman dan terpercaya
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Quick Actions Section -->
<section class="py-5 bg-primary text-white">
    <div class="container">
        <div class="row text-center">
            <div class="col-12 mb-4">
                <h2 class="fw-bold mb-3">Aksi Cepat</h2>
                <p class="lead">Pilih tindakan yang ingin Anda lakukan</p>
            </div>
        </div>
        
        <div class="row g-3 justify-content-center">
            <div class="col-lg-3 col-md-6">
                <a href="https://api.whatsapp.com/send?phone=6285169727821?text=text=Halo%2C%20saya%20ingin%20daftar%20paket%20Indihome%20baru" target="_blank" class="btn btn-light btn-lg w-100" on:click={trackWhatsAppClick}>
                    <i class="fas fa-plus me-2"></i>Daftar Baru
                </a>
            </div>
            <div class="col-lg-3 col-md-6">
                <a href="https://api.whatsapp.com/send?phone=6285169727821?text=text=Halo%2C%20saya%20ingin%20upgrade%20paket%20Indihome%20saya" target="_blank" class="btn btn-light btn-lg w-100" on:click={trackWhatsAppClick}>
                    <i class="fas fa-arrow-up me-2"></i>Upgrade Paket
                </a>
            </div>
            <div class="col-lg-3 col-md-6">
                <a href="https://api.whatsapp.com/send?phone=6285169727821?text=text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20lokasi%20saya" target="_blank" class="btn btn-light btn-lg w-100" on:click={trackWhatsAppClick}>
                    <i class="fas fa-search me-2"></i>Cek Jaringan
                </a>
            </div>
            <div class="col-lg-3 col-md-6">
                <a href="https://api.whatsapp.com/send?phone=6285169727821?text=text=Halo%2C%20saya%20ingin%20konsultasi%20masalah%20internet%20saya" target="_blank" class="btn btn-light btn-lg w-100" on:click={trackWhatsAppClick}>
                    <i class="fas fa-headset me-2"></i>Bantuan
                </a>
            </div>
        </div>
    </div>
</section>
