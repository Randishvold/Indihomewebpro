<script>
	import { fadeIn } from '$lib/actions.js';
	let searchTerm = '';
	let filter = 'all';
	let openFaq = null;

	function toggleFaq(id) {
		openFaq = openFaq === id ? null : id;
	}

	const faqs = [
		{
			id: 1,
			category: 'paket',
			question: 'Apa saja paket Indihome yang tersedia di Majalengka dan Sumedang?',
			answer:
				'<p>Kami menyediakan berbagai paket Indihome:</p><ul><li><strong>Paket 2P:</strong> Internet + Telepon (20-50 Mbps) mulai Rp 315.000/bulan</li><li><strong>Paket 3P:</strong> Internet + TV + Telepon (30-100 Mbps) mulai Rp 395.000/bulan</li><li><strong>Paket Gamer:</strong> Internet khusus gaming (50-300 Mbps) mulai Rp 505.000/bulan</li></ul><p>Semua paket sudah termasuk WiFi router dan instalasi gratis.</p>'
		},
		{
			id: 2,
			category: 'paket',
			question: 'Apakah ada biaya instalasi untuk paket Indihome?',
			answer:
				'<p><strong>Tidak ada biaya instalasi!</strong> Semua paket Indihome di Majalengka dan Sumedang sudah termasuk:</p><ul><li>Instalasi gratis ke rumah Anda</li><li>WiFi router gratis (sesuai paket)</li><li>Kabel fiber optic dan perangkat pendukung</li><li>Setting dan testing koneksi</li></ul>'
		},
		{
			id: 3,
			category: 'paket',
			question: 'Apakah bisa upgrade atau downgrade paket?',
			answer:
				'<p>Ya, Anda bisa melakukan perubahan paket:</p><ul><li><strong>Upgrade paket:</strong> Bisa dilakukan kapan saja dengan membayar selisih harga</li><li><strong>Downgrade paket:</strong> Bisa dilakukan pada bulan berikutnya</li><li>Hubungi sales kami untuk proses perubahan paket</li><li>Tidak ada biaya administrasi untuk perubahan paket</li></ul>'
		},
		{
			id: 4,
			category: 'instalasi',
			question: 'Berapa lama proses instalasi Indihome?',
			answer:
				'<p>Proses instalasi membutuhkan waktu:</p><ul><li><strong>Survey lokasi:</strong> 1-2 hari setelah pendaftaran</li><li><strong>Instalasi:</strong> 3-7 hari kerja setelah survey (tergantung kondisi)</li><li><strong>Aktivasi:</strong> Langsung setelah instalasi selesai</li></ul><p>Total waktu dari daftar hingga internet aktif: 5-10 hari kerja.</p>'
		},
		{
			id: 5,
			category: 'instalasi',
			question: 'Apa saja syarat untuk instalasi Indihome?',
			answer:
				'<p>Syarat instalasi Indihome:</p><ul><li>KTP asli dan fotocopy</li><li>Bukti kepemilikan/sewa rumah (SHM/IMB/kontrak sewa)</li><li>Alamat harus terjangkau jaringan fiber optic</li><li>Ada aliran listrik di rumah</li><li>Akses untuk pemasangan kabel (ijin penghuni/tetangga jika perlu)</li></ul>'
		},
		{
			id: 6,
			category: 'instalasi',
			question: 'Bagaimana cara cek ketersediaan jaringan di alamat saya?',
			answer:
				'<p>Cara cek ketersediaan jaringan:</p><ul><li>Hubungi sales kami via WhatsApp dengan menyertakan alamat lengkap</li><li>Kunjungi halaman Area Layanan di website ini</li><li>Sales akan melakukan pengecekan database coverage area</li><li>Jika belum tersedia, kami akan catat untuk ekspansi jaringan selanjutnya</li></ul><a href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20cek%20ketersediaan%20jaringan" target="_blank" class="btn btn-success btn-sm"><i class="fab fa-whatsapp me-1"></i> Cek Sekarang</a>'
		},
		{
			id: 7,
			category: 'teknis',
			question: 'Apa itu teknologi fiber optic dan apa keuntungannya?',
			answer:
				'<p><strong>Fiber Optic</strong> adalah teknologi transmisi data menggunakan serat kaca yang menghantarkan cahaya.</p><p><strong>Keuntungan fiber optic:</strong></p><ul><li>Kecepatan internet super cepat dan stabil</li><li>Latensi rendah, cocok untuk gaming dan video call</li><li>Tidak terpengaruh cuaca atau gangguan elektromagnetik</li><li>Kualitas sinyal tidak menurun meski jarak jauh</li><li>Bandwidth besar untuk multiple device</li></ul>'
		},
		{
			id: 8,
			category: 'teknis',
			question: 'Mengapa internet saya kadang lambat?',
			answer:
				'<p>Beberapa faktor yang mempengaruhi kecepatan internet:</p><ul><li><strong>Jumlah device:</strong> Semakin banyak device, semakin terbagi bandwidth</li><li><strong>Aplikasi berat:</strong> Streaming, download, gaming bersamaan</li><li><strong>Posisi router:</strong> Terlalu jauh atau terhalang dinding</li><li><strong>Peak time:</strong> Jam sibuk (19.00-23.00)</li><li><strong>Perangkat lama:</strong> Device atau router yang sudah lawas</li></ul><p><strong>Solusi:</strong> Restart router, cek posisi router, atau upgrade paket jika perlu.</p>'
		},
		{
			id: 9,
			category: 'teknis',
			question: 'Bagaimana jika internet mati total?',
			answer:
				'<p><strong>Langkah troubleshooting:</strong></p><ol><li>Cek lampu indikator router (harus hijau/biru semua)</li><li>Restart router dengan mencabut kabel power 30 detik</li><li>Cek semua kabel apakah ada yang lepas</li><li>Coba akses internet dari device lain</li><li>Jika masih bermasalah, hubungi customer service</li></ol><p><strong>Customer Service 24/7:</strong> 147 atau WhatsApp sales</p>'
		},
		{
			id: 10,
			category: 'pembayaran',
			question: 'Bagaimana cara pembayaran tagihan Indihome?',
			answer:
				'<p><strong>Metode pembayaran yang tersedia:</strong></p><ul><li><strong>Online:</strong> MyIndihome app, internet banking, e-wallet</li><li><strong>ATM:</strong> Semua bank yang bekerja sama</li><li><strong>Minimarket:</strong> Alfamart, Indomaret, dll</li><li><strong>Kantor pos:</strong> Seluruh Indonesia</li><li><strong>Plasa Telkom:</strong> Bayar langsung</li><li><strong>Auto debit:</strong> Potong rekening otomatis</li></ul><p><strong>Jatuh tempo:</strong> Setiap tanggal 20 bulan berikutnya</p>'
		},
		{
			id: 11,
			category: 'pembayaran',
			question: 'Apa konsekuensi jika telat bayar tagihan?',
			answer:
				'<p><strong>Konsekuensi keterlambatan pembayaran:</strong></p><ul><li><strong>Hari ke-21:</strong> Reminder SMS/email</li><li><strong>Hari ke-25:</strong> Warning kedua</li><li><strong>Hari ke-30:</strong> Internet dibatasi (suspend)</li><li><strong>Hari ke-45:</strong> Layanan diputus sementara</li><li><strong>Hari ke-60:</strong> Terminasi permanen</li></ul><p><strong>Denda:</strong> 2% dari tagihan bulanan untuk keterlambatan > 30 hari</p>'
		},
		{
			id: 12,
			category: 'layanan',
			question: 'Bagaimana cara menghubungi customer service?',
			answer:
				'<p><strong>Kontak Customer Service Indihome:</strong></p><ul><li><strong>Telepon:</strong> 147 (24/7 gratis)</li><li><strong>WhatsApp Sales:</strong> +62 851-6972-7821</li><li><strong>MyIndihome App:</strong> Chat dengan CS</li><li><strong>Twitter:</strong> @TelkomCare</li><li><strong>Website:</strong> indihome.co.id</li></ul><p><strong>Sales lokal Majalengka & Sumedang:</strong> Hubungi WhatsApp kami untuk bantuan personal</p>'
		},
		{
			id: 13,
			category: 'layanan',
			question: 'Apakah ada kontrak minimal berlangganan?',
			answer:
				'<p><strong>Kontrak berlangganan Indihome:</strong></p><ul><li><strong>Kontrak minimal:</strong> 12 bulan (1 tahun)</li><li><strong>Perpanjangan:</strong> Otomatis setiap tahun</li><li><strong>Berhenti berlangganan:</strong> Bisa kapan saja setelah 12 bulan</li><li><strong>Pindah alamat:</strong> Gratis dalam coverage area yang sama</li><li><strong>Penalti:</strong> Jika berhenti sebelum 12 bulan</li></ul><p><strong>Catatan:</strong> Promo tertentu mungkin memiliki syarat kontrak yang berbeda</p>'
		},
		{
			id: 14,
			category: 'layanan',
			question: 'Apakah Indihome cocok untuk Work From Home?',
			answer:
				'<p><strong>Ya, Indihome sangat cocok untuk WFH!</strong></p><p><strong>Rekomendasi paket untuk WFH:</strong></p><ul><li><strong>Light user:</strong> Paket 2P 20-30 Mbps untuk email, browsing</li><li><strong>Heavy user:</strong> Paket 2P/3P 50 Mbps untuk video conference</li><li><strong>Professional:</strong> Paket Gamer 100+ Mbps untuk multiple activities</li></ul><p><strong>Keunggulan untuk WFH:</strong> Upload speed tinggi, latensi rendah, koneksi stabil 24/7</p>'
		},
		{
			id: 15,
			category: 'layanan',
			question: 'Apakah bisa request teknisi untuk kunjungan ke rumah?',
			answer:
				'<p><strong>Ya, bisa request kunjungan teknisi!</strong></p><p><strong>Layanan teknisi:</strong></p><ul><li><strong>Gratis:</strong> Perbaikan gangguan, troubleshooting</li><li><strong>Berbayar:</strong> Relokasi router, tambah titik internet</li><li><strong>Cara request:</strong> Hubungi 147 atau sales WhatsApp</li><li><strong>Waktu:</strong> Senin-Sabtu jam kerja</li><li><strong>Emergency:</strong> 24/7 untuk gangguan total</li></ul><p>Teknisi akan datang dengan jadwal yang disepakati bersama</p>'
		}
	];

	$: filteredFaqs = faqs.filter((faq) => {
		const matchesFilter = filter === 'all' || faq.category === filter;
		const matchesSearch =
			searchTerm === '' ||
			faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
			faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	function setFilter(newFilter) {
		filter = newFilter;
	}

	function trackWhatsAppClick() {
		console.log('WhatsApp link clicked');
		// In a real application, you would add your analytics tracking code here.
	}
</script>

<!-- Hero Section -->
<section class="bg-primary text-white py-12">
	<div class="container">
		<div class="text-center">
			<div class="max-w-4xl mx-auto">
				<h1 class="text-4xl lg:text-5xl fw-bold mb-4">Pertanyaan yang Sering Diajukan</h1>
				<p class="text-xl opacity-90">Temukan jawaban atas pertanyaan umum seputar layanan Indihome</p>
			</div>
		</div>
	</div>
</section>

<!-- Search FAQ Section -->
<section class="py-8 bg-light">
	<div class="container">
		<div class="flex justify-center">
			<div class="w-full lg:w-1/2">
				<div class="relative">
					<input
						type="text"
						class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
						placeholder="Cari pertanyaan..."
						bind:value={searchTerm}
					/>
					<span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
						<i class="fas fa-search"></i>
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Categories -->
<section class="py-12">
	<div class="container">
		<div class="mb-8">
			<div class="flex flex-wrap justify-center gap-2">
				<button
					class="btn btn-outline-primary"
					class:active={filter === 'all'}
					on:click={() => setFilter('all')}>Semua</button
				>
				<button
					class="btn btn-outline-primary"
					class:active={filter === 'paket'}
					on:click={() => setFilter('paket')}>Paket & Harga</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === 'instalasi'}
						on:click={() => setFilter('instalasi')}>Instalasi</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === 'teknis'}
						on:click={() => setFilter('teknis')}>Teknis</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === 'pembayaran'}
						on:click={() => setFilter('pembayaran')}>Pembayaran</button
					>
					<button
						class="btn btn-outline-primary"
						class:active={filter === 'layanan'}
						on:click={() => setFilter('layanan')}>Layanan</button
					>
				</div>
			</div>
		</div>

		<div class="max-w-4xl mx-auto">
			<div class="space-y-4">
				{#each filteredFaqs as faq, i}
					<div class="bg-white border rounded-lg shadow-sm" use:fadeIn>
						<button
							class="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-lg"
							type="button"
							on:click={() => toggleFaq(faq.id)}
						>
							<div class="flex items-center justify-between">
								<span class="text-lg fw-bold text-gray-900">{faq.question}</span>
								<i class="fas fa-chevron-down transform transition-transform duration-200" 
								   class:rotate-180={openFaq === faq.id}></i>
							</div>
						</button>
						{#if openFaq === faq.id}
							<div class="px-6 pb-6">
								<div class="prose text-gray-600">
									{@html faq.answer}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
</section>

<!-- Still Have Questions Section -->
<section class="py-12 bg-light">
	<div class="container">
		<div class="text-center">
			<div class="max-w-2xl mx-auto">
				<h3 class="fw-bold mb-4 text-2xl lg:text-3xl">Masih Ada Pertanyaan?</h3>
				<p class="text-muted mb-6 text-lg">Tim sales kami siap membantu Anda dengan pertanyaan apapun</p>
				<div class="flex flex-wrap justify-center gap-3">
					<a
						href="https://api.whatsapp.com/send?phone=6285169727821&text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20Indihome"
						target="_blank"
						class="btn btn-success btn-lg"
						on:click={trackWhatsAppClick}
					>
						<i class="fab fa-whatsapp mr-2"></i>Chat WhatsApp
					</a>
					<a href="/contact" class="btn btn-outline-primary btn-lg">
						<i class="fas fa-envelope mr-2"></i>Kontak Kami
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
