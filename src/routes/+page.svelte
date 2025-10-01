<script>
	import { fadeIn } from '$lib/actions.js';
	import { onMount } from 'svelte';
	
	let heroLoaded = false;
	
	function trackWhatsAppClick() {
		console.log('WhatsApp link clicked');
	}

	onMount(() => {
		// Ensure hero section is prioritized
		heroLoaded = true;
	});
</script>

<section class="hero-section">
	<div class="container">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-7 xl:col-span-6 text-center lg:text-left">
				<h1 class="display-4 fw-bold mb-6 text-4xl lg:text-5xl">
					Koneksi Internet Cepat & Stabil di Majalengka dan Sumedang
				</h1>
				<p class="lead mb-8">
					Pilih paket internet fiber optik dari Indihome untuk streaming, game, dan kerja tanpa
					hambatan. Sales resmi siap membantu Anda.
				</p>
				<div class="flex flex-wrap gap-3 justify-center lg:justify-start">
					<a href="/packages" class="btn btn-primary btn-lg">
						<i class="fas fa-rocket mr-2"></i>Lihat Semua Paket
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20Indihome"
						target="_blank"
						class="btn btn-outline-secondary btn-lg"
						on:click={trackWhatsAppClick}
					>
						<i class="fab fa-whatsapp mr-2"></i>Konsultasi Gratis
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-12">
	<div class="container">
		<div class="text-center mb-8 max-w-4xl mx-auto">
			<div class="max-w-2xl mx-auto">
				<h2 class="fw-bold mb-4 text-3xl lg:text-4xl">Solusi Internet Terbaik untuk Anda</h2>
				<p class="text-muted text-xl">
					Nikmati pengalaman digital tanpa batas dengan keunggulan teknologi fiber optic Indihome.
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="text-center" use:fadeIn>
				<div class="card p-6 gpu-accelerated">
					<div class="feature-icon mx-auto">
						<i class="fas fa-bolt text-2xl"></i>
					</div>
					<h3 class="fw-bold mb-4 text-xl">Kecepatan Tinggi</h3>
					<p class="text-muted">
						Streaming film 4K, main game online, dan video call lancar dengan kecepatan hingga 300
						Mbps.
					</p>
				</div>
			</div>

			<div class="text-center" use:fadeIn={{ delay: 100 }}>
				<div class="card p-6 gpu-accelerated">
					<div class="feature-icon mx-auto">
						<i class="fas fa-shield-alt text-2xl"></i>
					</div>
					<h3 class="fw-bold mb-4 text-xl">Jaringan Stabil</h3>
					<p class="text-muted">
						Koneksi andal 24/7 berkat teknologi fiber optic terdepan, minim gangguan cuaca.
					</p>
				</div>
			</div>

			<div class="text-center" use:fadeIn={{ delay: 200 }}>
				<div class="card p-6 gpu-accelerated">
					<div class="feature-icon mx-auto">
						<i class="fas fa-headset text-2xl"></i>
					</div>
					<h3 class="fw-bold mb-4 text-xl">Layanan Prioritas</h3>
					<p class="text-muted">
						Sales resmi kami siap memberikan respon cepat dan bantuan profesional untuk Anda.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Popular Packages Section -->
<section class="py-12 bg-light">
	<div class="container">
		<div class="text-center mb-8 max-w-4xl mx-auto">
			<div class="max-w-2xl mx-auto">
				<h2 class="fw-bold mb-4 text-3xl lg:text-4xl">Paket Paling Populer</h2>
				<p class="text-muted text-xl">
					Kami telah memilihkan paket terbaik yang paling banyak diminati oleh pelanggan kami.
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
			<div class="max-w-md mx-auto lg:mx-0" use:fadeIn>
				<div class="card gpu-accelerated">
					<div class="card-body">
						<h3 class="fw-bold text-primary text-xl mb-2">EZnet 20Mbps</h3>
						<div class="price-display my-6">
							<span class="text-4xl fw-bold">Rp 210.800</span>
							<small class="text-muted text-base">/bulan</small>
						</div>
						<ul class="space-y-3 mb-6">
							<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Internet 20 Mbps</li>
							<li class="flex items-center">
								<i class="fas fa-check text-green-500 mr-3"></i>Ideal Untuk 5 Perangkat
							</li>
							<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Biaya Pasang Hanya Rp 166.500
							</li>
						</ul>
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%202P%20-%20Rp%20315.000"
							target="_blank"
							class="btn btn-outline-primary w-full"
							on:click={trackWhatsAppClick}
						>
							Pesan Sekarang
						</a>
					</div>
				</div>
			</div>

			<div class="max-w-md mx-auto lg:mx-0" use:fadeIn={{ delay: 100 }}>
				<div class="card border-2 border-primary gpu-accelerated">
					<div class="card-body">
						<div class="inline-block bg-primary text-white px-3 py-1 rounded text-sm mb-4">TERPOPULER</div>
						<h3 class="fw-bold text-primary text-xl mb-2">50Mbps Internet</h3>
						<div class="price-display my-6">
							<span class="text-4xl fw-bold">Rp 266.400</span>
							<small class="text-muted text-base">/bulan</small>
						</div>
						<ul class="space-y-3 mb-6">
							<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Internet 50 Mbps</li>
							<li class="flex items-center">
								<i class="fas fa-check text-green-500 mr-3"></i>Ideal Untuk 8 Perangkat
							</li>
							<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Prime Video</li>
							<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>IndiHomeTV</li>
						</ul>
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%203P%20-%20Rp%20395.000"
							target="_blank"
							class="btn btn-primary w-full"
							on:click={trackWhatsAppClick}
						>
							Pesan Sekarang
						</a>
					</div>
				</div>
			</div>

			<div class="max-w-md mx-auto lg:mx-0" use:fadeIn={{ delay: 200 }}>
				<div class="card gpu-accelerated">
					<div class="card-body">
						<h3 class="fw-bold text-primary text-xl mb-2">One Dynamic 50Mbps</h3>
						<div class="price-display my-6">
							<span class="text-4xl fw-bold">Rp 338.550</span>
							<small class="text-muted text-base">/bulan</small>
						</div>
						<ul class="space-y-3 mb-6">
							<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Internet 50 Mbps</li>
							<li class="flex items-center">
								<i class="fas fa-check text-green-500 mr-3"></i>Kuota Keluarga 30GB
							</li>
							<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Prime Video</li>
							<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>IndiHomeTV</li>
						</ul>
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%20Gamer%20-%20Rp%20505.000"
							target="_blank"
							class="btn btn-outline-primary w-full"
							on:click={trackWhatsAppClick}
						>
							Pesan Sekarang
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="text-center mt-12">
			<a href="/packages" class="btn btn-outline-primary btn-lg">
				Lihat Semua Paket
			</a>
		</div>
	</div>
</section>

<!-- Service Areas Section -->
<section class="py-12">
	<div class="container">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
			<div use:fadeIn>
				<div class="bg-light rounded-lg p-8 gpu-accelerated">
					<i class="fas fa-map-marked-alt text-primary text-6xl block mb-6"></i>
					<h2 class="fw-bold text-gray-800 mb-6 text-2xl lg:text-3xl">Jangkauan Hingga Pelosok</h2>
					<p class="text-muted text-lg">
						Jaringan fiber optic kami terus diperluas untuk menjangkau seluruh kecamatan di
						Majalengka dan Sumedang, memastikan semua bisa menikmati internet cepat.
					</p>
				</div>
			</div>
			<div use:fadeIn={{ delay: 100 }}>
				<h2 class="fw-bold text-gray-800 mb-6 text-2xl lg:text-3xl">Area Layanan Kami</h2>
				<p class="text-muted mb-6 text-xl">
					Kami berkomitmen untuk menyediakan layanan terbaik di seluruh wilayah cakupan kami.
				</p>

				<div class="flex items-start mb-4">
					<i class="fas fa-map-marker-alt text-primary text-2xl mr-4 mt-1"></i>
					<div>
						<h6 class="fw-bold mb-1">Kabupaten Majalengka</h6>
						<p class="text-muted">Melayani semua kecamatan dan desa.</p>
					</div>
				</div>
				<div class="flex items-start mb-6">
					<i class="fas fa-map-marker-alt text-primary text-2xl mr-4 mt-1"></i>
					<div>
						<h6 class="fw-bold mb-1">Kabupaten Sumedang</h6>
						<p class="text-muted">Menjangkau seluruh wilayah perkotaan dan pedesaan.</p>
					</div>
				</div>

				<div class="flex flex-wrap gap-3">
					<a href="/service-areas" class="btn btn-primary">
						<i class="fas fa-map mr-2"></i>Lihat Detail Area
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20alamat%20saya"
						target="_blank"
						class="btn btn-outline-primary"
						on:click={trackWhatsAppClick}
					>
						<i class="fas fa-search mr-2"></i>Cek Jangkauan
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-12 bg-primary text-white">
	<div class="container text-center">
		<div class="max-w-4xl mx-auto">
			<div class="max-w-2xl mx-auto">
				<h2 class="fw-bold mb-4 text-3xl lg:text-4xl">Siap Beralih ke Internet Cepat?</h2>
				<p class="text-xl mb-8 opacity-90">
					Hubungi kami sekarang untuk konsultasi gratis atau langsung daftar paket Indihome pilihan
					Anda. Tim kami siap membantu!
				</p>
				<div class="flex flex-wrap justify-center gap-3">
					<a
						href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20mendapatkan%20penawaran%20spesial%20Indihome"
						target="_blank"
						class="btn btn-light btn-lg"
						on:click={trackWhatsAppClick}
					>
						<i class="fab fa-whatsapp mr-2"></i>Hubungi Sales
					</a>
					<a href="/contact" class="btn btn-outline-light btn-lg">
						<i class="fas fa-envelope mr-2"></i>Info Kontak Lain
					</a>
				</div>
			</div>
		</div>
	</div>
</section>