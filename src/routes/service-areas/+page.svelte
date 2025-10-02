<script>
	import { fadeIn } from '$lib/actions.js';
	let selectedKabupaten = '';
	let selectedKecamatan = '';
	let alamat = '';

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

<svelte:head>
	<title>Area Layanan Indihome Majalengka & Sumedang - Jangkauan Fiber Optic</title>
	<meta
		name="description"
		content="Cek area layanan Indihome di Majalengka dan Sumedang. Jangkauan fiber optic tersedia di semua kecamatan. Cek ketersediaan jaringan sekarang!"
	/>
	<meta
		name="keywords"
		content="area layanan Indihome Majalengka, jangkauan Indihome Sumedang, fiber optic Majalengka Sumedang"
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-primary text-white py-12">
	<div class="container">
		<div class="text-center">
			<div class="max-w-4xl mx-auto">
				<h1 class="text-4xl lg:text-5xl fw-bold mb-4">Area Layanan Kami</h1>
				<p class="text-xl opacity-90">Jangkauan fiber optic Indihome di wilayah Majalengka dan Sumedang</p>
			</div>
		</div>
	</div>
</section>

<!-- Coverage Check Section -->
<section class="py-12 bg-light">
	<div class="container">
		<div class="flex justify-center">
			<div class="w-full lg:w-2/3">
				<div class="card border-0 shadow-sm" use:fadeIn>
					<div class="card-body p-8 text-center">
						<h3 class="fw-bold mb-6 text-2xl lg:text-3xl">Cek Ketersediaan Jaringan</h3>
						<p class="text-muted mb-6 text-lg">
							Masukkan alamat lengkap Anda untuk mengecek ketersediaan jaringan fiber optic Indihome
						</p>

						<form on:submit|preventDefault={handleCoverageCheck} class="space-y-4">
							<div class="grid grid-cols-1 gap-4">
								<div>
									<select
										class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
									<select
										class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
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
							</div>
							<div>
								<textarea
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
									bind:value={alamat}
									rows="3"
									placeholder="Alamat lengkap (nama jalan, nomor rumah, RT/RW)"
									required
								></textarea>
							</div>
							<div class="text-center">
								<button type="submit" class="btn btn-primary btn-lg">
									<i class="fas fa-search mr-2"></i>Cek Ketersediaan
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
<section class="py-12">
	<div class="container">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Majalengka -->
			<div use:fadeIn>
				<div class="card h-full border-0 shadow-sm">
					<div class="bg-primary text-white px-6 py-4">
						<h4 class="fw-bold mb-0 text-xl">
							<i class="fas fa-map-marker-alt mr-3"></i>Kabupaten Majalengka
						</h4>
					</div>
					<div class="card-body p-6">
						<p class="text-muted mb-6">
							Jangkauan fiber optic tersedia di seluruh kecamatan di Kabupaten Majalengka
						</p>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="space-y-3">
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Majalengka</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Cigasong</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Jatiwangi</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Dawuan</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Kadipaten</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Kertajati</span>
								</div>
							</div>
							<div class="space-y-3">
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Jatitujuh</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Ligung</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Sumber</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Panyingkiran</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Talaga</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Sukahaji</span>
								</div>
							</div>
						</div>

						<div class="mt-6">
							<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20Majalengka"
							target="_blank"
							class="btn btn-outline-primary"
							on:click={trackWhatsAppClick}
						>
							<i class="fab fa-whatsapp mr-2"></i>Cek Jaringan Majalengka
						</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Sumedang -->
			<div use:fadeIn>
				<div class="card h-full border-0 shadow-sm">
					<div class="bg-primary text-white px-6 py-4">
						<h4 class="fw-bold mb-0 text-xl">
							<i class="fas fa-map-marker-alt mr-3"></i>Kabupaten Sumedang
						</h4>
					</div>
					<div class="card-body p-6">
						<p class="text-muted mb-6">
							Jangkauan fiber optic tersedia di seluruh kecamatan di Kabupaten Sumedang
						</p>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="space-y-3">
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Sumedang Utara</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Sumedang Selatan</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Cimalaka</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Tanjungsari</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Pamulihan</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Cisitu</span>
								</div>
							</div>
							<div class="space-y-3">
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Wado</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Jatigede</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Darmaraja</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Ganeas</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Tomo</span>
								</div>
								<div class="flex items-center">
									<i class="fas fa-check-circle text-green-500 mr-3"></i>
									<span>Jatinangor</span>
								</div>
							</div>
						</div>

						<div class="mt-6">
							<a
								href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20Sumedang"
								target="_blank"
								class="btn btn-outline-primary"
								on:click={trackWhatsAppClick}
							>
								<i class="fab fa-whatsapp mr-2"></i>Cek Jaringan Sumedang
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Coverage Stats Section -->
<section class="py-12 bg-light">
	<div class="container">
		<div class="text-center mb-8">
			<h2 class="fw-bold text-dark mb-4 text-3xl">Jangkauan Jaringan Kami</h2>
			<p class="text-muted text-lg">Statistik coverage area fiber optic Indihome</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="text-center" use:fadeIn>
				<div class="feature-icon mx-auto">
					<i class="fas fa-map text-2xl"></i>
				</div>
				<h3 class="fw-bold text-primary">2</h3>
				<p class="text-muted">Kabupaten</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="feature-icon mx-auto">
					<i class="fas fa-map-marker-alt text-2xl"></i>
				</div>
				<h3 class="fw-bold text-primary">38</h3>
				<p class="text-muted">Kecamatan</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="feature-icon mx-auto">
					<i class="fas fa-home text-2xl"></i>
				</div>
				<h3 class="fw-bold text-primary">95%</h3>
				<p class="text-muted">Coverage Area</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="feature-icon mx-auto">
					<i class="fas fa-users text-2xl"></i>
				</div>
				<h3 class="fw-bold text-primary">10K+</h3>
				<p class="text-muted">Pelanggan</p>
			</div>
		</div>
	</div>
</section>

<!-- Installation Process -->
<section class="py-12">
	<div class="container">
		<div class="text-center mb-8">
			<h2 class="text-3xl fw-bold text-gray-800 mb-4">Proses Instalasi</h2>
			<p class="text-muted">Langkah mudah untuk mendapatkan internet Indihome di rumah Anda</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="text-center" use:fadeIn>
				<div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
					1
				</div>
				<h5 class="fw-bold mb-3">Konsultasi</h5>
				<p class="text-muted">
					Hubungi sales untuk konsultasi paket dan cek ketersediaan jaringan
				</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
					2
				</div>
				<h5 class="fw-bold mb-3">Survey</h5>
				<p class="text-muted">
					Tim teknis melakukan survey lokasi untuk memastikan kemungkinan instalasi
				</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
					3
				</div>
				<h5 class="fw-bold mb-3">Instalasi</h5>
				<p class="text-muted">Pemasangan kabel fiber optic dan perangkat ke rumah Anda</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
					4
				</div>
				<h5 class="fw-bold mb-3">Aktivasi</h5>
				<p class="text-muted">Testing koneksi dan aktivasi layanan internet Indihome</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-5 bg-primary text-white">
	<div class="container">
		<div class="text-center max-w-2xl mx-auto">
			<h2 class="fw-bold mb-3">Cek Ketersediaan di Alamat Anda</h2>
			<p class="lead mb-4">Pastikan fiber optic Indihome sudah tersedia di lokasi Anda</p>
			<a
				href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20Indihome%20di%20alamat%20saya"
				target="_blank"
				class="btn btn-light btn-lg"
				on:click={trackWhatsAppClick}
			>
				<i class="fab fa-whatsapp mr-2"></i>Cek Sekarang
			</a>
		</div>
	</div>
</section>
