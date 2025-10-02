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
		majalengka: [
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
		sumedang: [
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
		if (
			nama &&
			telepon &&
			selectedKabupaten &&
			selectedKecamatan &&
			alamat &&
			keperluan &&
			setuju
		) {
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

<svelte:head>
	<title>Kontak Sales Indihome Majalengka & Sumedang - WhatsApp & Email</title>
	<meta
		name="description"
		content="Hubungi sales Indihome Majalengka dan Sumedang via WhatsApp, email atau telepon. Konsultasi gratis dan daftar paket internet fiber optic sekarang!"
	/>
	<meta
		name="keywords"
		content="kontak sales Indihome Majalengka, WhatsApp Indihome Sumedang, telepon sales Indihome"
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-primary text-white py-12">
	<div class="container">
		<div class="text-center">
			<div class="max-w-4xl mx-auto">
				<h1 class="text-4xl lg:text-5xl fw-bold mb-4">Hubungi Kami</h1>
				<p class="text-xl opacity-90">Sales profesional siap membantu Anda 24/7</p>
			</div>
		</div>
	</div>
</section>

<!-- Contact Methods Section -->
<section class="py-12">
	<div class="container">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- WhatsApp -->
			<div use:fadeIn>
				<div class="card h-full border-0 shadow-sm">
					<div class="card-body text-center p-6">
						<div class="feature-icon-success mx-auto">
							<i class="fab fa-whatsapp text-2xl"></i>
						</div>
						<h5 class="fw-bold mb-3">WhatsApp</h5>
						<p class="text-muted mb-3">Chat langsung dengan sales untuk konsultasi dan informasi</p>
						<p class="fw-bold text-dark mb-3">+62 851-6972-7821</p>						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20Indihome"
							target="_blank"
							class="btn btn-success"
							on:click={trackWhatsAppClick}
						>
							<i class="fab fa-whatsapp mr-2"></i>Chat Sekarang
						</a>
					</div>
				</div>
			</div>

			<!-- Phone -->
			<div use:fadeIn>
				<div class="card h-full border-0 shadow-sm">
					<div class="card-body text-center p-6">
						<div class="feature-icon mx-auto">
							<i class="fas fa-phone text-2xl"></i>
						</div>
						<h5 class="fw-bold mb-3">Telepon</h5>
						<p class="text-muted mb-3">Hubungi langsung untuk informasi paket dan konsultasi</p>
						<p class="fw-bold text-dark mb-3">+62 851-6972-7821</p>
						<a href="tel:+6285169727821" class="btn btn-primary d-inline-flex align-items-center">
							<i class="fas fa-phone mr-2"></i>Telepon Sekarang
						</a>
					</div>
				</div>
			</div>

			<!-- Email -->
			<div use:fadeIn>
				<div class="card h-full border-0 shadow-sm">
					<div class="card-body text-center p-6">
						<div class="feature-icon-info mx-auto">
							<i class="fas fa-envelope text-2xl"></i>
						</div>
						<h5 class="fw-bold mb-3">Email</h5>
						<p class="text-muted mb-3">Kirim pertanyaan atau permintaan informasi melalui email</p>
						<p class="fw-bold text-dark mb-3">riri.sfim@protonmail.com</p>
						<a href="mailto:riri.sfim@protonmail.com" class="btn btn-primary d-inline-flex align-items-center">
							<i class="fas fa-envelope mr-2"></i>Kirim Email
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section class="py-12 bg-light">
	<div class="container">
		<div class="flex justify-center">
			<div class="w-full lg:w-2/3">
				<div class="card border-0 shadow-sm" use:fadeIn>
					<div class="bg-white border-0 text-center py-6">
						<h3 class="fw-bold mb-0 text-2xl lg:text-3xl">Formulir Kontak</h3>
						<p class="text-muted mt-2">
							Isi formulir di bawah ini untuk mendapatkan informasi lengkap
						</p>
					</div>
					<div class="card-body p-8">
						<form on:submit|preventDefault={handleSubmit} class="space-y-4">
							<div>
								<label for="nama" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
								<input type="text" class="form-control" id="nama" bind:value={nama} required />
							</div>
							<div>
								<label for="telepon" class="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon *</label>
								<input type="tel" class="form-control" id="telepon" bind:value={telepon} required />
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
								<input type="email" class="form-control" id="email" bind:value={email} />
							</div>
							<div>
								<label for="kabupaten" class="block text-sm font-medium text-gray-700 mb-2">Kabupaten *</label>
								<select
									class="form-select"
									id="kabupaten"
									bind:value={selectedKabupaten}
									on:change={handleKabupatenChange}
									required
								>
									<option value="">Pilih Kabupaten</option>
									<option value="majalengka">Kabupaten Majalengka</option>
									<option value="sumedang">Kabupaten Sumedang</option>
								</select>
							</div>
							<div>
								<label for="kecamatan" class="block text-sm font-medium text-gray-700 mb-2">Kecamatan *</label>
								<select
									class="form-select"
									id="kecamatan"
									bind:value={selectedKecamatan}
									required
									disabled={!selectedKabupaten}
								>
									<option value="">Pilih Kecamatan</option>
									{#each kecamatanOptions as kecamatan}
										<option value={kecamatan}>{kecamatan}</option>
									{/each}
								</select>
							</div>
							<div>
								<label for="alamat" class="block text-sm font-medium text-gray-700 mb-2">Alamat Lengkap *</label>
								<textarea
									class="form-control"
									id="alamat"
									rows="3"
									placeholder="Jalan, nomor rumah, RT/RW, kelurahan/desa"
									bind:value={alamat}
									required
								></textarea>
							</div>
							<div>
								<label for="keperluan" class="block text-sm font-medium text-gray-700 mb-2">Keperluan *</label>
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
							<div>
								<label for="pesan" class="block text-sm font-medium text-gray-700 mb-2">Pesan/Pertanyaan</label>
								<textarea
									class="form-control"
									id="pesan"
									rows="4"
									placeholder="Tuliskan pertanyaan atau informasi tambahan..."
									bind:value={pesan}
								></textarea>
							</div>
							<div>
								<div class="flex items-start">
									<input
										class="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
										type="checkbox"
										id="setuju"
										bind:checked={setuju}
										required
									/>
									<label class="ml-3 text-sm text-gray-700" for="setuju">
										Saya setuju untuk dihubungi melalui WhatsApp/Telepon untuk keperluan follow up *
									</label>
								</div>
							</div>
							<div>
								<button type="submit" class="btn btn-success btn-lg w-full">
									<i class="fab fa-whatsapp mr-2"></i>Kirim ke WhatsApp
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Office Hours Section -->
<section class="py-12">
	<div class="container">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<div use:fadeIn>
				<div class="card h-full border-0 shadow-sm">
					<div class="card-body p-6">
						<h4 class="fw-bold mb-6 text-xl">
							<i class="fas fa-clock text-primary mr-3"></i>Jam Operasional
						</h4>

						<div class="grid grid-cols-2 gap-6">
							<div>
								<div class="mb-4">
									<h6 class="fw-bold">WhatsApp</h6>
									<p class="text-muted mb-0">24 Jam / 7 Hari</p>
								</div>
								<div class="mb-4">
									<h6 class="fw-bold">Telepon</h6>
									<p class="text-muted mb-0">08:00 - 20:00 WIB</p>
								</div>
							</div>
							<div>
								<div class="mb-4">
									<h6 class="fw-bold">Email</h6>
									<p class="text-muted mb-0">Respon dalam 24 jam</p>
								</div>
								<div class="mb-4">
									<h6 class="fw-bold">Survey</h6>
									<p class="text-muted mb-0">Senin - Sabtu</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div use:fadeIn>
				<div class="card h-full border-0 shadow-sm">
					<div class="card-body p-6">
						<h4 class="fw-bold mb-6 text-xl">
							<i class="fas fa-info-circle text-primary mr-3"></i>Informasi Penting
						</h4>

						<ul class="space-y-3">
							<li class="flex items-center">
								<i class="fas fa-check text-green-500 mr-3"></i>
								Konsultasi gratis untuk semua paket
							</li>
							<li class="flex items-center">
								<i class="fas fa-check text-green-500 mr-3"></i>
								Survey lokasi tanpa biaya
							</li>
							<li class="flex items-center">
								<i class="fas fa-check text-green-500 mr-3"></i>
								Proses pendaftaran mudah dan cepat
							</li>
							<li class="flex items-center">
								<i class="fas fa-check text-green-500 mr-3"></i>
								Instalasi gratis untuk semua paket
							</li>
							<li class="flex items-center">
								<i class="fas fa-check text-green-500 mr-3"></i>
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
<section class="py-12 bg-primary text-white">
	<div class="container">
		<div class="text-center mb-8">
			<div class="max-w-2xl mx-auto">
				<h2 class="fw-bold mb-4 text-3xl lg:text-4xl">Aksi Cepat</h2>
				<p class="text-xl opacity-90">Pilih tindakan yang ingin Anda lakukan</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
			<div>
				<a
					href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20paket%20Indihome%20baru"
					target="_blank"
					class="btn btn-light btn-lg w-full d-flex align-items-center justify-content-center"
					style="min-height: 3.5rem;"
					on:click={trackWhatsAppClick}
				>
					<i class="fas fa-plus mr-2"></i>Daftar Baru
				</a>
			</div>
			<div>
				<a
					href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20upgrade%20paket%20Indihome%20saya"
					target="_blank"
					class="btn btn-light btn-lg w-full d-flex align-items-center justify-content-center"
					style="min-height: 3.5rem;"
					on:click={trackWhatsAppClick}
				>
					<i class="fas fa-arrow-up mr-2"></i>Upgrade Paket
				</a>
			</div>
			<div>
				<a
					href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20lokasi%20saya"
					target="_blank"
					class="btn btn-light btn-lg w-full d-flex align-items-center justify-content-center"
					style="min-height: 3.5rem;"
					on:click={trackWhatsAppClick}
				>
					<i class="fas fa-search mr-2"></i>Cek Jaringan
				</a>
			</div>
			<div>
				<a
					href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20konsultasi%20masalah%20internet%20saya"
					target="_blank"
					class="btn btn-light btn-lg w-full d-flex align-items-center justify-content-center"
					style="min-height: 3.5rem;"
					on:click={trackWhatsAppClick}
				>
					<i class="fas fa-headset mr-2"></i>Bantuan
				</a>
			</div>
		</div>
	</div>
</section>
