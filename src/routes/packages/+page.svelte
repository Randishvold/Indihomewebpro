<script>
	import { fadeIn } from '$lib/actions.js';
	let filter = 'all';

	const rawPackages = [
		// --- Paket Internet Saja (1P) ---
		{
			category: '1p',
			name: 'EZNet 20 Mbps',
			price: '215.900',
			details: {
				speed: '20 Mbps',
				install_fee: 'Rp 166.500',
				streaming: 'IndiHome TV',
				devices: '1-3'
			}
		},
		{
			category: '1p',
			name: '50 Mbps Internet',
			price: '271.400',
			details: {
				speed: '50 Mbps',
				install_fee: 'Rp 166.500',
				streaming: 'IndiHome TV, Prime Video, Catchplay+',
				devices: '5-7'
			}
		},
		{
			category: '1p',
			name: '75 Mbps Internet',
			price: '304.700',
			details: {
				speed: '75 Mbps',
				install_fee: 'Rp 166.500',
				streaming: 'IndiHome TV, Prime Video, Catchplay+',
				devices: '7-10'
			}
		},
		{
			category: '1p',
			name: '150 Mbps Internet',
			price: '421.250',
			details: {
				speed: '150 Mbps',
				install_fee: 'Rp 166.500',
				streaming: 'IndiHome TV, Prime Video, Catchplay+',
				devices: '15-20'
			}
		},
		{
			category: '1p',
			name: '200 Mbps Internet',
			price: '576.650',
			details: {
				speed: '200 Mbps',
				install_fee: 'Rp 166.500',
				streaming: 'IndiHome TV, Prime Video, Catchplay+, Netflix Basic',
				devices: '20+'
			}
		},
		{
			category: '1p',
			name: 'Movie Standard - 30 Mbps',
			price: '347.990',
			details: {
				speed: '30 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Vidio Platinum, WeTV, Viu, Catchplay+, dll.',
				devices: '3-5'
			}
		},
		{
			category: '1p',
			name: 'Movie Standard - 50 Mbps',
			price: '370.190',
			details: {
				speed: '50 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Vidio Platinum, WeTV, Viu, Catchplay+, dll.',
				devices: '5-7'
			}
		},
		{
			category: '1p',
			name: 'Movie Standard - 100 Mbps',
			price: '436.790',
			details: {
				speed: '100 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Vidio Platinum, WeTV, Viu, Catchplay+, dll.',
				devices: '10-15'
			}
		},
		{
			category: '1p',
			name: 'Movie Premium - 30 Mbps',
			price: '392.390',
			details: {
				speed: '30 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix Basic, Disney+ Hotstar, IndihomeTV',
				devices: '3-5'
			}
		},
		{
			category: '1p',
			name: 'Movie Premium - 50 Mbps',
			price: '414.590',
			details: {
				speed: '50 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix Basic, Disney+ Hotstar, IndihomeTV',
				devices: '5-7'
			}
		},
		{
			category: '1p',
			name: 'Movie Premium - 100 Mbps',
			price: '470.090',
			details: {
				speed: '100 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix Basic, Disney+ Hotstar, IndihomeTV',
				devices: '10-15'
			}
		},
		{
			category: '1p',
			name: 'Movie Complete - 30 Mbps',
			price: '447.890',
			details: {
				speed: '30 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix, Disney+, Prime Video, Vidio, dll.',
				devices: '3-5'
			}
		},
		{
			category: '1p',
			name: 'Movie Complete - 50 Mbps',
			price: '470.090',
			details: {
				speed: '50 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix, Disney+, Prime Video, Vidio, dll.',
				devices: '5-7'
			}
		},
		{
			category: '1p',
			name: 'Movie Complete - 100 Mbps',
			price: '525.590',
			details: {
				speed: '100 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix, Disney+, Prime Video, Vidio, dll.',
				devices: '10-15'
			}
		},

		// --- Paket Internet + TV (2P) ---
		{
			category: 'tv',
			name: '50 Mbps + IndiHomeTV',
			price: '399.050',
			details: {
				speed: '50 Mbps',
				install_fee: 'Rp166.500',
				streaming: 'IndihomeTV, Prime Video, Catchplay, Vidio',
				devices: '5-7',
				extra: 'Termasuk STB'
			}
		},
		{
			category: 'tv',
			name: '75 Mbps + IndiHomeTV',
			price: '432.350',
			details: {
				speed: '75 Mbps',
				install_fee: 'Rp166.500',
				streaming: 'IndihomeTV, Prime Video, Catchplay, Vidio',
				devices: '8-12',
				extra: 'Termasuk STB'
			}
		},
		{
			category: 'tv',
			name: '150 Mbps + IndiHomeTV',
			price: '571.100',
			details: {
				speed: '150 Mbps',
				install_fee: 'Rp166.500',
				streaming: 'IndihomeTV, Prime Video, Catchplay, Vidio, dll.',
				devices: '15-20',
				extra: 'Termasuk STB'
			}
		},
		{
			category: 'tv',
			name: '200 Mbps + IndiHomeTV',
			price: '726.500',
			details: {
				speed: '200 Mbps',
				install_fee: 'Rp166.500',
				streaming: 'Netflix, IndihomeTV, Prime Video, dll.',
				devices: '20-25',
				extra: 'Termasuk STB'
			}
		},
		{
			category: 'tv',
			name: 'Netflix 30 Mbps + TV',
			price: '410.150',
			details: {
				speed: '30 Mbps',
				install_fee: 'Rp55.500',
				streaming: 'Netflix Basic, IndihomeTV',
				devices: '3-5',
				extra: 'Termasuk STB'
			}
		},
		{
			category: 'tv',
			name: 'Netflix 50 Mbps + TV',
			price: '515.600',
			details: {
				speed: '50 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix Basic, IndihomeTV',
				devices: '5-7',
				extra: 'Termasuk STB'
			}
		},
		{
			category: 'tv',
			name: 'Netflix 100 Mbps + TV',
			price: '621.050',
			details: {
				speed: '100 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix Basic, IndihomeTV',
				devices: '12-15',
				extra: 'Termasuk STB'
			}
		},
		{
			category: 'tv',
			name: 'Movie Complete 50 Mbps + TV',
			price: '514.490',
			details: {
				speed: '50 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Vidio, WeTV, Viu, Catchplay+, dll.',
				devices: '5-7',
				extra: 'TV Interaktif 127 channel'
			}
		},
		{
			category: 'tv',
			name: 'Movie Complete 100 Mbps + TV',
			price: '592.190',
			details: {
				speed: '100 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Vidio, WeTV, Viu, Catchplay+, dll.',
				devices: '12-15',
				extra: 'TV Interaktif 127 channel'
			}
		},

		// --- Paket Internet + Phone (2P) ---
		{
			category: '2p',
			name: 'JITU 1 - 50 Mbps + Phone',
			price: '404.600',
			details: {
				speed: '50 Mbps',
				install_fee: 'Rp 166.500',
				streaming: 'Disney+ hotstar',
				devices: '8-12',
				extra: 'Bebas telepon 100 menit'
			}
		},

		// --- Paket Internet + Phone + TV (3P) ---
		{
			category: '3p',
			name: 'Netflix 30 Mbps + Phone + TV',
			price: '460.100',
			details: {
				speed: '30 Mbps',
				install_fee: 'Rp 55.500',
				streaming: 'Netflix, indihome TV',
				devices: '5-8',
				extra: 'Bebas telepon 50 menit'
			}
		},
		{
			category: '3p',
			name: 'Netflix 50 Mbps + Phone + TV',
			price: '565.550',
			details: {
				speed: '50 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix, indihome TV, Disney+ Hotstar',
				devices: '8-12',
				extra: 'Bebas telepon 100 menit'
			}
		},
		{
			category: '3p',
			name: 'Netflix 100 Mbps + Phone + TV',
			price: '659.900',
			details: {
				speed: '100 Mbps',
				install_fee: 'GRATIS',
				streaming: 'Netflix, indihome TV, Disney+ Hotstar',
				devices: '12-20',
				extra: 'Bebas telepon 50 menit'
			}
		},
		{
			category: '3p',
			name: 'JITU 1 - 50 Mbps + Phone + TV',
			price: '576.650',
			details: {
				speed: '50 Mbps',
				install_fee: 'GRATIS',
				streaming: 'indihome TV, Disney+, Catchplay, WeTV, Vidio',
				devices: '8-12',
				extra: 'Bebas telepon 100 menit, Minipack TV'
			}
		},

		// --- Paket OneDynamic ---
		{
			category: 'onedynamic',
			name: 'One Dynamic 20Mbps+30GB',
			price: '249.200',
			details: { speed: '20 Mbps', install_fee: 'Rp 166.500', quota: '30 GB', devices: '3-5' }
		},
		{
			category: 'onedynamic',
			name: 'One Dynamic 50Mbps 15GB',
			price: '315.800',
			details: { speed: '50 Mbps', install_fee: 'GRATIS', quota: '15 GB', devices: '5-10' }
		},
		{
			category: 'onedynamic',
			name: 'One Dynamic 100Mbps 30GB',
			price: '404.600',
			details: { speed: '100 Mbps', install_fee: 'GRATIS', quota: '30 GB', devices: '10-15' }
		},
		{
			category: 'onedynamic',
			name: 'One Dynamic + TV 50Mbps 15GB',
			price: '432.350',
			details: {
				speed: '50 Mbps',
				install_fee: 'GRATIS',
				quota: '15 GB',
				devices: '5-10',
				extra: 'Termasuk STB'
			}
		},
		{
			category: 'onedynamic',
			name: 'One Dynamic + TV 100Mbps 30GB',
			price: '521.150',
			details: {
				speed: '100 Mbps',
				install_fee: 'GRATIS',
				quota: '30 GB',
				devices: '10-15',
				extra: 'Termasuk STB'
			}
		}
	];

	const packages = rawPackages.map((p, index) => {
		const features = [];
		if (p.details.speed) features.push(`Internet ${p.details.speed}`);
		if (p.details.devices) features.push(`Ideal untuk ${p.details.devices} perangkat`);
		if (p.details.quota) features.push(`Kuota Keluarga ${p.details.quota}`);
		if (p.details.streaming) features.push(`Bonus Streaming: ${p.details.streaming}`);
		if (p.details.extra) features.push(p.details.extra);
		if (p.details.install_fee) features.push(`Biaya Pasang: ${p.details.install_fee}`);

		const waText = encodeURIComponent(`Halo, saya ingin daftar Paket ${p.name} - Rp ${p.price}`);
		const wa_link = `https://api.whatsapp.com/send?phone=6285169727821&text=${waText}`;

		return {
			id: index + 1,
			category: p.category,
			name: p.name,
			price: p.price,
			features,
			wa_link
		};
	});

	$: filteredPackages = filter === 'all' ? packages : packages.filter((p) => p.category === filter);

	function setFilter(newFilter) {
		filter = newFilter;
	}

	function trackWhatsAppClick() {
		console.log('WhatsApp link clicked');
		// Analytics tracking code can be added here.
	}
</script>

<svelte:head>
	<title>Paket Indihome Majalengka & Sumedang - Harga Terbaik</title>
	<meta
		name="description"
		content="Daftar lengkap paket Indihome untuk Majalengka dan Sumedang. Internet 1P, 2P, 3P, dan OneDynamic dengan harga terjangkau. Pesan sekarang via WhatsApp!"
	/>
	<meta
		name="keywords"
		content="paket Indihome Majalengka, harga Indihome Sumedang, internet 1P 2P 3P, paket OneDynamic Indihome"
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-primary text-white py-5">
	<div class="container">
		<div class="row text-center">
			<div class="col-12">
				<h1 class="display-5 fw-bold mb-3">Paket Indihome Terlengkap</h1>
				<p class="lead">
					Pilih paket internet yang sesuai dengan kebutuhan Anda di Majalengka dan Sumedang
				</p>
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
					<button
						class="btn btn-outline-primary"
						class:active={filter === 'all'}
						on:click={() => setFilter('all')}>Semua Paket</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === '1p'}
						on:click={() => setFilter('1p')}>Internet Saja</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === '2p'}
						on:click={() => setFilter('2p')}>Internet + Telepon</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === 'tv'}
						on:click={() => setFilter('tv')}>Internet + TV</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === '3p'}
						on:click={() => setFilter('3p')}>Internet + Telepon + TV</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === 'onedynamic'}
						on:click={() => setFilter('onedynamic')}>OneDynamic</button
					>
				</div>
			</div>
		</div>

		<!-- Packages Container -->
		<div class="row">
			{#if filter === 'all' || filter === '1p'}
				<div class="col-12 mb-4"><h3 class="fw-bold text-center">Paket Internet Saja (1P)</h3></div>
				{#each packages.filter((p) => p.category === '1p') as pkg (pkg.id)}
					<div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
						<div class="card h-100 shadow-sm">
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
								<a
									href={pkg.wa_link}
									target="_blank"
									class="btn btn-primary w-100"
									on:click={trackWhatsAppClick}
								>
									<i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
								</a>
							</div>
						</div>
					</div>
				{/each}
			{/if}

			{#if filter === 'all' || filter === '2p'}
				<div class="col-12 mt-4 mb-4">
					<h3 class="fw-bold text-center">Paket Internet + Telepon (2P)</h3>
				</div>
				{#each packages.filter((p) => p.category === '2p') as pkg (pkg.id)}
					<div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
						<div class="card h-100 shadow-sm">
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
								<a
									href={pkg.wa_link}
									target="_blank"
									class="btn btn-primary w-100"
									on:click={trackWhatsAppClick}
								>
									<i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
								</a>
							</div>
						</div>
					</div>
				{/each}
			{/if}

			{#if filter === 'all' || filter === 'tv'}
				<div class="col-12 mt-4 mb-4">
					<h3 class="fw-bold text-center">Paket Internet + TV (2P)</h3>
				</div>
				{#each packages.filter((p) => p.category === 'tv') as pkg (pkg.id)}
					<div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
						<div class="card h-100 shadow-sm">
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
								<a
									href={pkg.wa_link}
									target="_blank"
									class="btn btn-primary w-100"
									on:click={trackWhatsAppClick}
								>
									<i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
								</a>
							</div>
						</div>
					</div>
				{/each}
			{/if}

			{#if filter === 'all' || filter === '3p'}
				<div class="col-12 mt-4 mb-4">
					<h3 class="fw-bold text-center">Paket Internet + Telepon + TV (3P)</h3>
				</div>
				{#each packages.filter((p) => p.category === '3p') as pkg (pkg.id)}
					<div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
						<div class="card h-100 shadow-sm">
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
								<a
									href={pkg.wa_link}
									target="_blank"
									class="btn btn-primary w-100"
									on:click={trackWhatsAppClick}
								>
									<i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
								</a>
							</div>
						</div>
					</div>
				{/each}
			{/if}

			{#if filter === 'all' || filter === 'onedynamic'}
				<div class="col-12 mt-4 mb-4"><h3 class="fw-bold text-center">Paket OneDynamic</h3></div>
				{#each packages.filter((p) => p.category === 'onedynamic') as pkg (pkg.id)}
					<div class="col-lg-4 col-md-6 mb-4" use:fadeIn>
						<div class="card h-100 shadow-sm">
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
								<a
									href={pkg.wa_link}
									target="_blank"
									class="btn btn-primary w-100"
									on:click={trackWhatsAppClick}
								>
									<i class="fab fa-whatsapp me-2"></i>Pesan Sekarang
								</a>
							</div>
						</div>
					</div>
				{/each}
			{/if}
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
					<div class="feature-icon">
						<i class="fas fa-tools fa-2x"></i>
					</div>
					<h5 class="fw-bold mb-2">Fiber Optic Premium</h5>
					<p class="text-muted">Teknologi fiber optic terdepan untuk koneksi premium</p>
				</div>
			</div>

			<div class="col-lg-3 col-md-6">
				<div class="text-center" use:fadeIn>
					<div class="feature-icon">
						<i class="fas fa-wifi fa-2x"></i>
					</div>
					<h5 class="fw-bold mb-2">WiFi Router Gratis</h5>
					<p class="text-muted">Router WiFi berkualitas untuk koneksi optimal</p>
				</div>
			</div>

			<div class="col-lg-3 col-md-6">
				<div class="text-center" use:fadeIn>
					<div class="feature-icon">
						<i class="fas fa-headset fa-2x"></i>
					</div>
					<h5 class="fw-bold mb-2">Support 24/7</h5>
					<p class="text-muted">Customer service siap membantu kapan saja</p>
				</div>
			</div>

			<div class="col-lg-3 col-md-6">
				<div class="text-center" use:fadeIn>
					<div class="feature-icon">
						<i class="fas fa-shield-alt fa-2x"></i>
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
		<a
			href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20Indihome%20yang%20sesuai"
			target="_blank"
			class="btn btn-light btn-lg"
			on:click={trackWhatsAppClick}
		>
			<i class="fab fa-whatsapp me-2"></i>Konsultasi Gratis
		</a>
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