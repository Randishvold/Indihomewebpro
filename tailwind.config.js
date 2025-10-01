/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'heading': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#c50000',
          light: '#ffeded',
          dark: '#a00000',
        },
        secondary: '#495057',
        accent: '#ffc107',
        surface: '#f8f9fa',
        muted: '#6c757d',
        border: '#dee2e6',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0, 0, 0, 0.07)',
        'card-hover': '0 6px 20px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        '15': '15px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'visible',
    'fade-in', 
    'navbar-scrolled',
    'active',
    'fonts-loaded',
    'gpu-accelerated',
    // Font Awesome classes - all icons used in website
    'fas',
    'fab',
    'far',
    'fa-rocket',
    'fa-whatsapp',
    'fa-bolt',
    'fa-shield-alt',
    'fa-headset',
    'fa-check',
    'fa-map-marked-alt',
    'fa-map-marker-alt',
    'fa-map',
    'fa-search',
    'fa-envelope',
    'fa-tools',
    'fa-wifi',
    'fa-check-circle',
    'fa-home',
    'fa-users',
    'fa-phone',
    'fa-clock',
    'fa-info-circle',
    'fa-plus',
    'fa-arrow-up',
    'fa-paper-plane',
    // Bootstrap-like utilities
    'me-2',
    'fa-2x',
    'feature-icon-success',
    'feature-icon-info',
    'btn-success',
    'row',
    'col-12',
    'col-lg-3',
    'col-lg-4',
    'col-md-6',
    'g-4',
    'mb-5'
  ]
}