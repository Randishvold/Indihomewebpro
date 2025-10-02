<!-- src/lib/components/PackageCard.svelte -->
<script lang="ts">
	import { fadeIn } from '$lib/actions.js';

	export let pkg: {
		id: number;
		name: string;
		price: string;
		features: string[];
		details: any;
		wa_link: string;
		category?: string;
	};

	export let isPopular: boolean = false;
	export let compact: boolean = false;

	function trackWhatsAppClick() {
		console.log(`WhatsApp link clicked for package: ${pkg.name}`);
		// Analytics tracking code can be added here.
	}

	function formatStreaming(streaming: string): string[] {
		if (!streaming || streaming === '-') return [];
		return streaming.split(', ').slice(0, compact ? 3 : 999);
	}

	$: streamingApps = formatStreaming(pkg.details.streaming);
	$: hasMoreStreaming = streamingApps.length > 3 && compact;
</script>

<div class="w-full max-w-sm mx-auto lg:mx-0 mb-6" use:fadeIn>
	<div class="card h-full shadow-sm border border-gray-200 {isPopular ? 'border-2 border-primary' : ''} w-full flex flex-col">
		{#if isPopular}
			<div class="bg-primary text-white text-center py-2 text-sm fw-bold">
				<i class="fas fa-star mr-1"></i>TERPOPULER
			</div>
		{/if}

		<!-- Header with title and price -->
		<div class="card-body p-4 flex-grow">
			<div class="text-center mb-4">
				<h3 class="fw-bold text-primary mb-2 {compact ? 'text-lg' : 'text-xl'}">{pkg.name}</h3>
				<div class="price-display">
					<span class="text-3xl fw-bold text-gray-800">Rp {pkg.price}</span>
					<small class="text-muted text-base">/bulan</small>
				</div>
			</div>

			<!-- Key specs in badges -->
			<div class="flex flex-wrap gap-2 justify-center mb-4">
				{#if pkg.details.speed}
					<span class="badge badge-primary">{pkg.details.speed}</span>
				{/if}
				{#if pkg.details.devices}
					<span class="badge badge-outline-secondary">{pkg.details.devices} perangkat</span>
				{/if}
				{#if pkg.details.quota}
					<span class="badge badge-accent">{pkg.details.quota} kuota</span>
				{/if}
			</div>

			<!-- Installation fee -->
			{#if pkg.details.install_fee}
				<div class="text-center mb-4">
					<span class="badge {pkg.details.install_fee === 'GRATIS' ? 'badge-success' : 'badge-warning'}">
						<i class="fas fa-tools mr-1"></i>
						Biaya Pasang: {pkg.details.install_fee}
					</span>
				</div>
			{/if}

			<!-- Streaming apps -->
			{#if streamingApps.length > 0}
				<div class="mb-4">
					<h6 class="text-sm fw-bold text-gray-700 mb-2">
						<i class="fas fa-play-circle mr-1"></i>Bonus Streaming:
					</h6>
					<div class="flex flex-wrap gap-1">
						{#each streamingApps as app, index}
							<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{app.trim()}</span>
						{/each}
						{#if hasMoreStreaming}
							<span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">+lebih banyak</span>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Additional features -->
			{#if pkg.details.extra}
				<div class="mb-4">
					<h6 class="text-sm fw-bold text-gray-700 mb-2">
						<i class="fas fa-plus-circle mr-1"></i>Tambahan:
					</h6>
					<p class="text-sm text-gray-600">{pkg.details.extra}</p>
				</div>
			{/if}
		</div>

		<!-- CTA Button - Always at bottom -->
		<div class="card-footer bg-white border-0 p-4 pt-0 mt-auto">
			<a
				href={pkg.wa_link}
				target="_blank"
				class="btn {isPopular ? 'btn-primary' : 'btn-outline-primary'} w-full"
				on:click={trackWhatsAppClick}
			>
				<i class="fab fa-whatsapp mr-2"></i>Pesan Sekarang
			</a>
		</div>
	</div>
</div>

<style>
	.badge {
		@apply inline-block px-2 py-1 text-xs rounded-full font-medium;
	}
	.badge-primary {
		@apply bg-blue-100 text-blue-800;
	}
	.badge-outline-secondary {
		@apply border border-gray-300 text-gray-700;
	}
	.badge-accent {
		@apply bg-yellow-100 text-yellow-800;
	}
	.badge-success {
		@apply bg-green-100 text-green-800;
	}
	.badge-warning {
		@apply bg-orange-100 text-orange-800;
	}
	
	/* Ensure consistent card width only */
	.card {
		width: 100%;
		max-width: 100%;
	}

	/* Keep card footer at bottom */
	.card-footer {
		margin-top: auto;
	}

	/* Ensure grid items have equal width */
	:global(.grid .max-w-sm) {
		width: 100%;
		max-width: 100%;
		flex: 1;
	}
	
	:global(.grid.grid-cols-1 > *),
	:global(.grid.lg\\:grid-cols-3 > *) {
		width: 100%;
		max-width: 100%;
	}
</style>
