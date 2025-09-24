<script>
	import { fadeIn } from '$lib/actions.js';
	function trackWhatsAppClick() {
		console.log('WhatsApp link clicked');
		// In a real application, you would add your analytics tracking code here.
	}
</script>

<section class="hero-section bg-primary text-white py-5">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-6">
				<h1 class="display-4 fw-bold mb-4">Internet Super Cepat untuk Majalengka & Sumedang</h1>
				<p class="lead mb-4">
					Dapatkan koneksi internet fiber optic terdepan dengan kecepatan hingga 300 Mbps. Sales
					resmi Indihome siap melayani Anda di wilayah Majalengka dan Sumedang.
				</p>
				<div class="d-flex flex-wrap gap-3">
					<a href="/packages" class="btn btn-light btn-lg">
						<i class="fas fa-eye me-2"></i>Lihat Paket
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20Indihome"
						target="_blank"
						class="btn btn-outline-light btn-lg"
						on:click={trackWhatsAppClick}
					>
						<i class="fab fa-whatsapp me-2"></i>Konsultasi Gratis
					</a>
				</div>
			</div>
			<div class="col-lg-6 text-center">
				<div
					class="hero-image-placeholder bg-white bg-opacity-10 rounded-3 p-5 mt-4 mt-lg-0"
					use:fadeIn
				>
					<i class="fas fa-wifi display-1 text-white mb-3"></i>
					<h3 class="text-white">Fiber Optic Technology</h3>
					<p class="text-white-50">Kecepatan stabil 24/7</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-5 bg-light">
	<div class="container">
		<div class="row text-center mb-5">
			<div class="col-12">
				<h2 class="fw-bold text-dark mb-3">Mengapa Memilih Indihome?</h2>
				<p class="text-muted">Solusi internet terbaik untuk keluarga Indonesia</p>
			</div>
		</div>

		<div class="row g-4">
			<div class="col-md-4">
				<div class="card h-100 border-0 shadow-sm" use:fadeIn>
					<div class="card-body text-center p-4">
						<div
							class="feature-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
						>
							<i class="fas fa-bolt text-primary fa-2x"></i>
						</div>
						<h5 class="fw-bold mb-3">Kecepatan Super</h5>
						<p class="text-muted">
							Internet fiber optic dengan kecepatan hingga 300 Mbps untuk semua kebutuhan digital
							Anda.
						</p>
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card h-100 border-0 shadow-sm" use:fadeIn>
					<div class="card-body text-center p-4">
						<div
							class="feature-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
						>
							<i class="fas fa-shield-alt text-primary fa-2x"></i>
						</div>
						<h5 class="fw-bold mb-3">Jaringan Stabil</h5>
						<p class="text-muted">
							Koneksi yang stabil 24/7 dengan teknologi fiber optic terdepan dari Telkom Indonesia.
						</p>
					</div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="card h-100 border-0 shadow-sm" use:fadeIn>
					<div class="card-body text-center p-4">
						<div
							class="feature-icon bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
						>
							<i class="fas fa-headset text-primary fa-2x"></i>
						</div>
						<h5 class="fw-bold mb-3">Layanan 24/7</h5>
						<p class="text-muted">
							Customer service dan technical support siap membantu Anda kapan saja dibutuhkan.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Popular Packages Section -->
<section class="py-5">
	<div class="container">
		<div class="row text-center mb-5">
			<div class="col-12">
				<h2 class="fw-bold text-dark mb-3">Paket Populer</h2>
				<p class="text-muted">Pilih paket yang sesuai dengan kebutuhan internet Anda</p>
			</div>
		</div>

		<div class="row g-4">
			<div class="col-lg-4 col-md-6">
				<div class="card h-100 border-0 shadow-sm" use:fadeIn>
					<div class="card-header bg-white border-0 text-center pt-4">
						<h5 class="fw-bold text-primary">EZnet 20Mbps</h5>
						<div class="price-display">
							<span class="h2 fw-bold text-dark">Rp 210.800</span>
							<small class="text-muted">/bulan</small>
						</div>
					</div>
					<div class="card-body">
						<ul class="list-unstyled">
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Internet 20 Mbps</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Ideal Untuk 5 Perangkat
							</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Biaya Pasang Hanya Rp 166.500
							</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Harga Sudah Termasuk PPN
							</li>
						</ul>
					</div>
					<div class="card-footer bg-white border-0 pb-4">
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%202P%20-%20Rp%20315.000"
							target="_blank"
							class="btn btn-primary w-100"
							on:click={trackWhatsAppClick}
						>
							<i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
						</a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="card h-100 border-primary shadow" use:fadeIn>
					<div class="card-header bg-primary text-white text-center pt-4">
						<div class="badge bg-warning text-dark mb-2">TERPOPULER</div>
						<h5 class="fw-bold">50Mbps Internet</h5>
						<div class="price-display">
							<span class="h2 fw-bold">Rp 266.400</span>
							<small>/bulan</small>
						</div>
					</div>
					<div class="card-body">
						<ul class="list-unstyled">
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Internet 50 Mbps</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Ideal Untuk 8 Perangkat
							</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Prime Video</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Catchplay+</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>IndiHomeTV</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Biaya Pasang Hanya Rp 166.500
							</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Harga Sudah Termasuk PPN
							</li>
						</ul>
					</div>
					<div class="card-footer bg-white border-0 pb-4">
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%203P%20-%20Rp%20395.000"
							target="_blank"
							class="btn btn-primary w-100"
							on:click={trackWhatsAppClick}
						>
							<i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
						</a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 mx-auto">
				<div class="card h-100 border-0 shadow-sm" use:fadeIn>
					<div class="card-header bg-white border-0 text-center pt-4">
						<h5 class="fw-bold text-primary">One Dynamic 50Mbps 30GB</h5>
						<div class="price-display">
							<span class="h2 fw-bold text-dark">Rp 338.550</span>
							<small class="text-muted">/bulan</small>
						</div>
					</div>
					<div class="card-body">
						<ul class="list-unstyled">
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Internet 50 Mbps</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Kuota Keluarga 30GB
							</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Prime Video</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>Catchplay+</li>
							<li class="mb-2"><i class="fas fa-check text-success me-2"></i>IndiHomeTV</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Biaya Pasang Gratis
							</li>
							<li class="mb-2">
								<i class="fas fa-check text-success me-2"></i>Harga Sudah Termasuk PPN
							</li>
						</ul>
					</div>
					<div class="card-footer bg-white border-0 pb-4">
						<a
							href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20daftar%20Paket%20Gamer%20-%20Rp%20505.000"
							target="_blank"
							class="btn btn-primary w-100"
							on:click={trackWhatsAppClick}
						>
							<i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="text-center mt-5">
			<a href="/packages" class="btn btn-outline-primary btn-lg">
				<i class="fas fa-list me-2"></i>Lihat Semua Paket
			</a>
		</div>
	</div>
</section>

<!-- Service Areas Section -->
<section class="py-5 bg-light">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-6">
				<h2 class="fw-bold text-dark mb-4">Area Layanan Kami</h2>
				<p class="text-muted mb-4">
					Kami melayani seluruh wilayah Majalengka dan Sumedang dengan jangkauan fiber optic yang
					luas.
				</p>

				<div class="row g-3">
					<div class="col-md-6">
						<div class="d-flex align-items-center">
							<i class="fas fa-map-marker-alt text-primary me-3 fa-lg"></i>
							<div>
								<h6 class="fw-bold mb-1">Majalengka</h6>
								<small class="text-muted">Semua Kecamatan</small>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="d-flex align-items-center">
							<i class="fas fa-map-marker-alt text-primary me-3 fa-lg"></i>
							<div>
								<h6 class="fw-bold mb-1">Sumedang</h6>
								<small class="text-muted">Semua Kecamatan</small>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-4">
					<a href="/service-areas" class="btn btn-primary me-3">
						<i class="fas fa-map me-2"></i>Lihat Detail Area
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan%20di%20alamat%20saya"
						target="_blank"
						class="btn btn-outline-primary"
						on:click={trackWhatsAppClick}
					>
						<i class="fas fa-search me-2"></i>Cek Ketersediaan
					</a>
				</div>
			</div>

			<div class="col-lg-6 mt-4 mt-lg-0">
				<div class="bg-white rounded-3 p-4 shadow-sm" use:fadeIn>
					<div class="text-center">
						<i class="fas fa-map text-primary" style="font-size: 4rem;"></i>
						<h4 class="mt-3 fw-bold">Jangkauan Luas</h4>
						<p class="text-muted">
							Fiber optic tersedia di seluruh wilayah Majalengka dan Sumedang
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-5 bg-primary text-white">
	<div class="container text-center">
		<h2 class="fw-bold mb-3">Siap Upgrade Internet Anda?</h2>
		<p class="lead mb-4">Dapatkan penawaran spesial dan konsultasi gratis sekarang juga!</p>
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
				<i class="fas fa-envelope me-2"></i>Kontak Kami
			</a>
		</div>
	</div>
</section>
