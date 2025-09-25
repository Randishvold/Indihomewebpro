<script>
	import { fadeIn } from '$lib/actions.js';
	function trackWhatsAppClick() {
		console.log('WhatsApp link clicked');
		// In a real application, you would add your analytics tracking code here.
	}
</script>

<section class="hero-section">
	<div class="container">
		<div class="row">
			<div class="col-lg-7 col-xl-6 text-center text-lg-start">
				<h1 class="display-4 fw-bold mb-4" use:fadeIn>
					Koneksi Internet Cepat & Stabil di Majalengka dan Sumedang
				</h1>
				<p class="lead mb-5" use:fadeIn={{ delay: 200 }}>
					Pilih paket internet fiber optik dari Indihome untuk streaming, game, dan kerja tanpa
					hambatan. Sales resmi siap membantu Anda.
				</p>
				<div class="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start" use:fadeIn={{ delay: 400 }}>
					<a href="/packages" class="btn btn-primary btn-lg">
						<i class="fas fa-rocket me-2"></i>Lihat Semua Paket
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20Indihome"
						target="_blank"
						class="btn btn-outline-secondary btn-lg"
						on:click={trackWhatsAppClick}
					>
						<i class="fab fa-whatsapp me-2"></i>Konsultasi Gratis
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-5">
	<div class="container">
		<div class="row text-center mb-5">
			<div class="col-lg-8 mx-auto">
				<h2 class="fw-bold mb-3">Solusi Internet Terbaik untuk Anda</h2>
				<p class="text-muted fs-5">
					Nikmati pengalaman digital tanpa batas dengan keunggulan teknologi fiber optic Indihome.
				</p>
			</div>
		</div>

		<div class="row g-4">
			<div class="col-md-4" use:fadeIn>
				<div class="card text-center p-4">
					<div
						class="feature-icon bg-primary-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mx-auto"
						style="width: 60px; height: 60px;"
					>
						<i class="fas fa-bolt text-primary fa-2x"></i>
					</div>
					<h5 class="fw-bold mb-3">Kecepatan Tinggi</h5>
					<p class="text-muted">
						Streaming film 4K, main game online, dan video call lancar dengan kecepatan hingga 300
						Mbps.
					</p>
				</div>
			</div>

			<div class="col-md-4" use:fadeIn={{ delay: 200 }}>
				<div class="card text-center p-4">
					<div
						class="feature-icon bg-primary-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mx-auto"
						style="width: 60px; height: 60px;"
					>
						<i class="fas fa-shield-alt text-primary fa-2x"></i>
					</div>
					<h5 class="fw-bold mb-3">Jaringan Stabil</h5>
					<p class="text-muted">
						Koneksi andal 24/7 berkat teknologi fiber optic terdepan, minim gangguan cuaca.
					</p>
				</div>
			</div>

			<div class="col-md-4" use:fadeIn={{ delay: 400 }}>
				<div class="card text-center p-4">
					<div
						class="feature-icon bg-primary-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mx-auto"
						style="width: 60px; height: 60px;"
					>
						<i class="fas fa-headset text-primary fa-2x"></i>
					</div>
					<h5 class="fw-bold mb-3">Layanan Prioritas</h5>
					<p class="text-muted">
						Sales resmi kami siap memberikan respon cepat dan bantuan profesional untuk Anda.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Popular Packages Section -->
<section class="py-5 bg-light">
	<div class="container">
		<div class="row text-center mb-5">
			<div class="col-lg-8 mx-auto">
				<h2 class="fw-bold mb-3">Paket Paling Populer</h2>
				<p class="text-muted fs-5">
					Kami telah memilihkan paket terbaik yang paling banyak diminati oleh pelanggan kami.
				</p>
			</div>
		</div>

		<div class="row g-4 justify-content-center">
			<div class="col-lg-4 col-md-6" use:fadeIn>
				<div class="card">
					<div class="card-body p-5">
						<h5 class="fw-bold text-primary">EZnet 20Mbps</h5>
						<div class="price-display my-4">
							<span class="display-5 fw-bold">Rp 210.800</span>
							<small class="text-muted">/bulan</small>
						</div>
						<ul class="list-unstyled mb-4">
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Internet 20 Mbps</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Ideal Untuk 5 Perangkat
							</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Biaya Pasang Hanya Rp 166.500
							</li>
						</ul>
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%202P%20-%20Rp%20315.000"
							target="_blank"
							class="btn btn-outline-primary w-100"
							on:click={trackWhatsAppClick}
						>
							Pesan Sekarang
						</a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6" use:fadeIn={{ delay: 200 }}>
				<div class="card border-2 border-primary">
					<div class="card-body p-5">
						<div class="badge bg-primary text-white mb-3">TERPOPULER</div>
						<h5 class="fw-bold text-primary">50Mbps Internet</h5>
						<div class="price-display my-4">
							<span class="display-5 fw-bold">Rp 266.400</span>
							<small class="text-muted">/bulan</small>
						</div>
						<ul class="list-unstyled mb-4">
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Internet 50 Mbps</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Ideal Untuk 8 Perangkat
							</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Prime Video</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>IndiHomeTV</li>
						</ul>
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%203P%20-%20Rp%20395.000"
							target="_blank"
							class="btn btn-primary w-100"
							on:click={trackWhatsAppClick}
						>
							Pesan Sekarang
						</a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6" use:fadeIn={{ delay: 400 }}>
				<div class="card">
					<div class="card-body p-5">
						<h5 class="fw-bold text-primary">One Dynamic 50Mbps</h5>
						<div class="price-display my-4">
							<span class="display-5 fw-bold">Rp 338.550</span>
							<small class="text-muted">/bulan</small>
						</div>
						<ul class="list-unstyled mb-4">
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Internet 50 Mbps</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Kuota Keluarga 30GB
							</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Prime Video</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>IndiHomeTV</li>
						</ul>
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%20Gamer%20-%20Rp%20505.000"
							target="_blank"
							class="btn btn-outline-primary w-100"
							on:click={trackWhatsAppClick}
						>
							Pesan Sekarang
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="text-center mt-5">
			<a href="/packages" class="btn btn-outline-primary btn-lg">
				Lihat Semua Paket
			</a>
		</div>
	</div>
</section>

<!-- Service Areas Section -->
<section class="py-5">
	<div class="container">
		<div class="row align-items-center g-5">
			<div class="col-lg-6" use:fadeIn>
				<div class="bg-light rounded-3 p-5">
					<i class="fas fa-map-marked-alt text-primary" style="font-size: 4rem;"></i>
					<h2 class="fw-bold text-dark my-4">Jangkauan Hingga Pelosok</h2>
					<p class="text-muted">
						Jaringan fiber optic kami terus diperluas untuk menjangkau seluruh kecamatan di
						Majalengka dan Sumedang, memastikan semua bisa menikmati internet cepat.
					</p>
				</div>
			</div>
			<div class="col-lg-6" use:fadeIn={{ delay: 200 }}>
				<h2 class="fw-bold text-dark mb-4">Area Layanan Kami</h2>
				<p class="text-muted mb-4 fs-5">
					Kami berkomitmen untuk menyediakan layanan terbaik di seluruh wilayah cakupan kami.
				</p>

				<div class="d-flex align-items-start mb-3">
					<i class="fas fa-map-marker-alt text-primary fa-2x me-3"></i>
					<div>
						<h6 class="fw-bold mb-1">Kabupaten Majalengka</h6>
						<p class="text-muted">Melayani semua kecamatan dan desa.</p>
					</div>
				</div>
				<div class="d-flex align-items-start mb-4">
					<i class="fas fa-map-marker-alt text-primary fa-2x me-3"></i>
					<div>
						<h6 class="fw-bold mb-1">Kabupaten Sumedang</h6>
						<p class="text-muted">Menjangkau seluruh wilayah perkotaan dan pedesaan.</p>
					</div>
				</div>

				<div class="d-flex flex-wrap gap-3">
					<a href="/service-areas" class="btn btn-primary">
						<i class="fas fa-map me-2"></i>Lihat Detail Area
					</a>
					<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20alamat%20saya"
						target="_blank"
						class="btn btn-outline-primary"
						on:click={trackWhatsAppClick}
					>
						<i class="fas fa-search me-2"></i>Cek Jangkauan
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-5 bg-primary text-white">
	<div class="container text-center">
		<div class="row justify-content-center">
			<div class="col-lg-8">
				<h2 class="fw-bold mb-3">Siap Beralih ke Internet Cepat?</h2>
				<p class="lead mb-4">
					Hubungi kami sekarang untuk konsultasi gratis atau langsung daftar paket Indihome pilihan
					Anda. Tim kami siap membantu!
				</p>
				<div class="d-flex flex-wrap justify-content-center gap-3">
					<a
						href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20mendapatkan%20penawaran%20spesial%20Indihome"
						target="_blank"
						class="btn btn-light btn-lg"
						on:click={trackWhatsAppClick}
					>
						<i class="fab fa-whatsapp me-2"></i>Hubungi Sales
					</a>
					<a href="/contact" class="btn btn-outline-light btn-lg">
						<i class="fas fa-envelope me-2"></i>Info Kontak Lain
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<style>
	.btn-primary:hover {
		background-color: #a00000 !important;
		border-color: #a00000 !important;
	}

	.btn-light:hover {
		background-color: #a00000 !important;
		color: white !important;
		border-color: #a00000 !important;
	}

	.btn-outline-primary:hover {
		background-color: #a00000 !important;
		color: white !important;
		border-color: #a00000 !important;
	}
</style>