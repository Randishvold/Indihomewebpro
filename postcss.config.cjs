// postcss.config.cjs
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.svelte'],

  // DAFTAR KELAS AMAN (TIDAK AKAN DIHAPUS)
  safelist: {
    standard: [
      'active', 
      'show', 
      'collapse', 
      'collapsing',  // <-- INI PENTING UNTUK ANIMASI BUKA/TUTUP
      'collapsed',
      'navbar-scrolled',
      'fade-in', 
      'visible'
    ],
    // Menjaga semua class yang digunakan oleh komponen JS Bootstrap
    deep: [/^modal-/, /^tooltip-/, /^popover-/, /^carousel-/, /^offcanvas-/, /^accordion-/, /^navbar-/, /^dropdown-/, /data-bs-/]
  }
});

const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('autoprefixer')(),
    // PurgeCSS hanya berjalan saat 'pnpm run build'
    ...(production ? [purgecss] : [])
  ]
};