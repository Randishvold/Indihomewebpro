<!-- src/lib/components/PackageCard.svelte -->
<script lang="ts">
	import { fadeIn } from '$lib/actions.js';

	export let pkg: {
		id: number;
		name: string;
		price: string;
		features: string[];
		wa_link: string;
	};

	function trackWhatsAppClick() {
		console.log(`WhatsApp link clicked for package: ${pkg.name}`);
		// Analytics tracking code can be added here.
	}
</script>

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
				{#each pkg.features as feature (feature)}
					<li class="mb-2"><i class="fas fa-check text-success me-2"></i>{feature}</li>
				{/each}
			</ul>
		</div>
		<div class="card-footer bg-white border-0 pb-4">
			<!-- svelte-ignore svelte/no-navigation-without-resolve -->
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
