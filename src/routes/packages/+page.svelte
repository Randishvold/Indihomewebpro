<script>
	import { fadeIn } from '$lib/actions.js';
	import { packages } from '$lib/packages.ts';
	import PackageCard from '$lib/components/PackageCard.svelte';
	
	let filter = 'all';

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
<section class="bg-primary text-white py-12">
	<div class="container">
		<div class="text-center">
			<div class="max-w-4xl mx-auto">
				<h1 class="text-4xl lg:text-5xl fw-bold mb-4">Paket Indihome Terlengkap</h1>
				<p class="text-xl opacity-90">
					Pilih paket internet yang sesuai dengan kebutuhan Anda di Majalengka dan Sumedang
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Packages Section -->
<section class="py-12">
	<div class="container">
		<!-- Package Filter -->
		<div class="mb-8">
			<div class="flex flex-wrap justify-center gap-2 mb-6">
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

		<!-- Packages Container -->
		<div class="space-y-12">
			{#if filter === 'all' || filter === '1p'}
				<div class="mb-6"><h3 class="fw-bold text-center text-2xl lg:text-3xl">Paket Internet Saja (1P)</h3></div>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{#each packages.filter((p) => p.category === '1p') as pkg (pkg.id)}
						<PackageCard {pkg} />
					{/each}
				</div>
			{/if}

			{#if filter === 'all' || filter === '2p'}
				<div class="mb-6"><h3 class="fw-bold text-center text-2xl lg:text-3xl">Paket Internet + Telepon (2P)</h3></div>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{#each packages.filter((p) => p.category === '2p') as pkg (pkg.id)}
						<PackageCard {pkg} />
					{/each}
				</div>
			{/if}

			{#if filter === 'all' || filter === 'tv'}
				<div class="mb-6"><h3 class="fw-bold text-center text-2xl lg:text-3xl">Paket Internet + TV</h3></div>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{#each packages.filter((p) => p.category === 'tv') as pkg (pkg.id)}
						<PackageCard {pkg} />
					{/each}
				</div>
			{/if}

			{#if filter === 'all' || filter === '3p'}
				<div class="mb-6"><h3 class="fw-bold text-center text-2xl lg:text-3xl">Paket Internet + Telepon + TV (3P)</h3></div>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{#each packages.filter((p) => p.category === '3p') as pkg (pkg.id)}
						<PackageCard {pkg} />
					{/each}
				</div>
			{/if}

			{#if filter === 'all' || filter === 'onedynamic'}
				<div class="mb-6"><h3 class="fw-bold text-center text-2xl lg:text-3xl">Paket OneDynamic</h3></div>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{#each packages.filter((p) => p.category === 'onedynamic') as pkg (pkg.id)}
						<PackageCard {pkg} isPopular={pkg.name.includes('300 Mbps')} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="py-12 bg-light">
	<div class="container">
		<div class="text-center mb-8">
			<div class="max-w-2xl mx-auto">
				<h2 class="fw-bold text-gray-800 mb-4 text-3xl lg:text-4xl">Keuntungan Berlangganan</h2>
				<p class="text-muted text-lg">Nikmati berbagai benefit eksklusif untuk pelanggan Indihome</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="text-center" use:fadeIn>
				<div class="feature-icon mx-auto">
					<i class="fas fa-tools text-2xl"></i>
				</div>
				<h5 class="fw-bold mb-2">Fiber Optic Premium</h5>
				<p class="text-muted">Teknologi fiber optic terdepan untuk koneksi premium</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="feature-icon mx-auto">
					<i class="fas fa-wifi text-2xl"></i>
				</div>
				<h5 class="fw-bold mb-2">WiFi Router Gratis</h5>
				<p class="text-muted">Router WiFi berkualitas untuk koneksi optimal</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="feature-icon mx-auto">
					<i class="fas fa-headset text-2xl"></i>
				</div>
				<h5 class="fw-bold mb-2">Support 24/7</h5>
				<p class="text-muted">Customer service siap membantu kapan saja</p>
			</div>

			<div class="text-center" use:fadeIn>
				<div class="feature-icon mx-auto">
					<i class="fas fa-shield-alt text-2xl"></i>
				</div>
				<h5 class="fw-bold mb-2">Garansi Kualitas</h5>
				<p class="text-muted">Jaminan kualitas jaringan fiber optic terbaik</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-12 bg-primary text-white">
	<div class="container text-center">
		<div class="max-w-2xl mx-auto">
			<h2 class="fw-bold mb-4 text-3xl lg:text-4xl">Butuh Konsultasi Paket?</h2>
			<p class="text-xl mb-8 opacity-90">Tim sales kami siap membantu Anda memilih paket yang tepat</p>
			<a
				href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20konsultasi%20paket%20Indihome%20yang%20sesuai"
				target="_blank"
				class="btn btn-light btn-lg"
				on:click={trackWhatsAppClick}
			>
				<i class="fab fa-whatsapp mr-2"></i>Konsultasi Gratis
			</a>
		</div>
	</div>
</section>