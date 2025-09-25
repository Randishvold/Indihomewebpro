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
	<div class="card h-100">
		<div class="card-body d-flex flex-column p-5">
			<h5 class="fw-bold text-primary">{pkg.name}</h5>
			<div class="price-display my-4">
				<span class="display-5 fw-bold">Rp {pkg.price}</span>
				<small class="text-muted">/bulan</small>
			</div>
			<ul class="list-unstyled mb-4">
				{#each pkg.features as feature (feature)}
					<li class="mb-2"><i class="fas fa-check text-success me-2"></i>{feature}</li>
				{/each}
			</ul>
			<div class="mt-auto">
				<!-- svelte-ignore svelte/no-navigation-without-resolve -->
				<a
					href={pkg.wa_link}
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
