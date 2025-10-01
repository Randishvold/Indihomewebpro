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

<div class="max-w-md mx-auto lg:mx-0 mb-6" use:fadeIn>
	<div class="card h-full">
		<div class="card-body flex flex-col">
			<h3 class="fw-bold text-primary text-xl mb-2">{pkg.name}</h3>
			<div class="price-display my-6">
				<span class="text-4xl fw-bold">Rp {pkg.price}</span>
				<small class="text-muted text-base">/bulan</small>
			</div>
			<ul class="space-y-3 mb-6">
				{#each pkg.features as feature (feature)}
					<li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>{feature}</li>
				{/each}
			</ul>
			<div class="mt-auto">
				<!-- svelte-ignore svelte/no-navigation-without-resolve -->
				<a
					href={pkg.wa_link}
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
