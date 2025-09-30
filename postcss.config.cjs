// Menggunakan sintaks require karena ini file .cjs
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Path ke semua file komponen dan halaman Anda
  content: ['./src/**/*.html', './src/**/*.svelte'],

  // Kelas-kelas ini dibuat oleh JavaScript atau ditambahkan secara dinamis,
  // jadi kita perlu memberitahu PurgeCSS untuk tidak menghapusnya.
  safelist: {
    standard: [
      'active', 
      'show', 
      'collapse', 
      'collapsing', 
      'collapsed',
      'navbar-scrolled',
      'fade-in', 
      'visible',
      'navbar-toggler-icon',
      'accordion-button',
      'accordion-body',
      'accordion-collapse'
      ],
    // Ini untuk memastikan kelas-kelas dinamis dari Bootstrap (seperti untuk accordion/collapse) tidak terhapus
    deep: [
      /^modal-/, /^tooltip-/, /^popover-/, /^carousel-/, /^offcanvas-/, /^data-bs-/
      ]
  }
});

// Cek apakah kita sedang dalam mode produksi
const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('autoprefixer')(),
    // Hanya jalankan PurgeCSS saat 'pnpm run build'
    ...(production ? [purgecss] : [])
  ]
};