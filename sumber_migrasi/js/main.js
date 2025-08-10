// Main JavaScript file for Indihome Sales Website
// Handles form validation, interactive features, and WhatsApp integration

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initializeNavigation();
    initializePackageFilters();
    initializeFAQSearch();
    initializeFAQCategories();
    initializeContactForm();
    initializeCoverageForm();
    initializeDynamicDropdowns();
    initializeScrollAnimations();
    initializeWhatsAppIntegration();
    
    console.log('Indihome Sales Website loaded successfully');
});

// Navigation handling
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Package filter functionality
function initializePackageFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const packageCards = document.querySelectorAll('[data-category]');
    const packageSections = document.querySelectorAll('.package-section');
    
    if (filterButtons.length === 0) return;
    
    console.log('Initializing package filters...');
    console.log('Filter buttons found:', filterButtons.length);
    console.log('Package cards found:', packageCards.length);
    console.log('Package sections found:', packageSections.length);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            console.log('Filter clicked:', filter);
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter package cards
            packageCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
            
            // Filter section headers
            packageSections.forEach(section => {
                const sectionType = section.getAttribute('data-section');
                if (filter === 'all' || sectionType === filter) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}

// FAQ search functionality
function initializeFAQSearch() {
    const searchInput = document.getElementById('searchFAQ');
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        faqItems.forEach(item => {
            const question = item.querySelector('.accordion-button').textContent.toLowerCase();
            const answer = item.querySelector('.accordion-body').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = searchTerm === '' ? 'block' : 'none';
            }
        });
    });
}

// FAQ category filtering
function initializeFAQCategories() {
    const categoryButtons = document.querySelectorAll('[data-category]');
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (categoryButtons.length === 0) return;
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter FAQ items
            faqItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Clear search when category is changed
            const searchInput = document.getElementById('searchFAQ');
            if (searchInput) {
                searchInput.value = '';
            }
        });
    });
}

// Contact form validation and submission
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateContactForm()) {
            submitContactForm();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateContactForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    // Validate phone number format
    const phoneInput = document.getElementById('telepon');
    if (phoneInput && phoneInput.value) {
        const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
        if (!phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
            showFieldError(phoneInput, 'Format nomor telepon tidak valid');
            isValid = false;
        }
    }
    
    // Validate email format
    const emailInput = document.getElementById('email');
    if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showFieldError(emailInput, 'Format email tidak valid');
            isValid = false;
        }
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    // Clear previous error
    clearFieldError(field);
    
    // Check required fields
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Field ini wajib diisi');
        return false;
    }
    
    // Field-specific validation
    switch (field.id) {
        case 'nama':
            if (value.length < 2) {
                showFieldError(field, 'Nama minimal 2 karakter');
                return false;
            }
            break;
        case 'telepon':
            const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
            if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
                showFieldError(field, 'Format nomor telepon tidak valid');
                return false;
            }
            break;
        case 'email':
            if (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    showFieldError(field, 'Format email tidak valid');
                    return false;
                }
            }
            break;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('is-invalid');
    
    let errorDiv = field.parentNode.querySelector('.invalid-feedback');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        field.parentNode.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearFieldError(field) {
    field.classList.remove('is-invalid');
    const errorDiv = field.parentNode.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function submitContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Prepare WhatsApp message
    const nama = document.getElementById('nama').value;
    const telepon = document.getElementById('telepon').value;
    const email = document.getElementById('email').value;
    const kabupaten = document.getElementById('kabupaten').value;
    const kecamatan = document.getElementById('kecamatan').value;
    const alamat = document.getElementById('alamat').value;
    const keperluan = document.getElementById('keperluan').value;
    const pesan = document.getElementById('pesan').value;
    
    let message = `*FORMULIR KONTAK INDIHOME*\n\n`;
    message += `Nama: ${nama}\n`;
    message += `Telepon: ${telepon}\n`;
    if (email) message += `Email: ${email}\n`;
    message += `Lokasi: ${kabupaten} - ${kecamatan}\n`;
    message += `Alamat: ${alamat}\n`;
    message += `Keperluan: ${keperluan}\n`;
    if (pesan) message += `Pesan: ${pesan}\n`;
    message += `\nMohon diproses, terima kasih!`;
    
    // Simulate form submission delay
    setTimeout(() => {
        // Reset loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Redirect to WhatsApp
        const whatsappURL = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        
        // Show success message
        showSuccessMessage('Formulir berhasil dikirim! Anda akan diarahkan ke WhatsApp.');
        
        // Reset form
        form.reset();
    }, 1500);
}

// Coverage check form
function initializeCoverageForm() {
    const coverageForm = document.getElementById('coverageForm');
    
    if (!coverageForm) return;
    
    coverageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const kabupaten = document.getElementById('kabupaten').value;
        const kecamatan = document.getElementById('kecamatan').value;
        const alamat = document.getElementById('alamat').value;
        
        if (!kabupaten || !kecamatan || !alamat) {
            showErrorMessage('Mohon lengkapi semua field');
            return;
        }
        
        // Prepare WhatsApp message for coverage check
        let message = `*CEK KETERSEDIAAN JARINGAN INDIHOME*\n\n`;
        message += `Kabupaten: ${kabupaten}\n`;
        message += `Kecamatan: ${kecamatan}\n`;
        message += `Alamat: ${alamat}\n\n`;
        message += `Mohon dicek ketersediaan jaringan fiber optic di alamat ini. Terima kasih!`;
        
        const whatsappURL = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
}

// Dynamic dropdown handling (Kabupaten -> Kecamatan)
function initializeDynamicDropdowns() {
    const kabupatenSelect = document.getElementById('kabupaten');
    const kecamatanSelect = document.getElementById('kecamatan');
    
    if (!kabupatenSelect || !kecamatanSelect) return;
    
    const kecamatanData = {
        'majalengka': [
            'Majalengka',
            'Cigasong',
            'Jatiwangi',
            'Dawuan',
            'Kadipaten',
            'Kertajati',
            'Jatitujuh',
            'Ligung',
            'Sumber',
            'Panyingkiran',
            'Talaga',
            'Sukahaji',
            'Leuwimunding',
            'Palasah',
            'Cikijing',
            'Cingambul',
            'Bantarujeg',
            'Argapura',
            'Maja',
            'Rajagaluh',
            'Sindang',
            'Sindangwangi',
            'Lemahsugih',
            'Malausma'
        ],
        'sumedang': [
            'Sumedang Utara',
            'Sumedang Selatan',
            'Cimalaka',
            'Tanjungsari',
            'Pamulihan',
            'Cisitu',
            'Wado',
            'Jatigede',
            'Darmaraja',
            'Ganeas',
            'Tomo',
            'Jatinangor',
            'Cimanggung',
            'Rancakalong',
            'Sukasari',
            'Situraja',
            'Ujungjaya',
            'Cibugel',
            'Buahdua',
            'Tanjungkerta',
            'Tanjungmedar',
            'Cisarua',
            'Jatinunggal',
            'Conggeang',
            'Paseh'
        ]
    };
    
    kabupatenSelect.addEventListener('change', function() {
        const selectedKabupaten = this.value;
        
        // Clear kecamatan options
        kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';
        
        if (selectedKabupaten && kecamatanData[selectedKabupaten]) {
            // Enable kecamatan select
            kecamatanSelect.disabled = false;
            
            // Populate kecamatan options
            kecamatanData[selectedKabupaten].forEach(kecamatan => {
                const option = document.createElement('option');
                option.value = kecamatan.toLowerCase().replace(/\s+/g, '_');
                option.textContent = kecamatan;
                kecamatanSelect.appendChild(option);
            });
        } else {
            kecamatanSelect.disabled = true;
        }
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card, .feature-icon, .accordion-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// WhatsApp integration helpers
function initializeWhatsAppIntegration() {
    // Track WhatsApp button clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function() {
            // Analytics tracking could be added here
            console.log('WhatsApp link clicked:', this.href);
        });
    });
    
    // Add WhatsApp status checking
    checkWhatsAppStatus();
}

function checkWhatsAppStatus() {
    // Simple check to see if we're on mobile for better WhatsApp experience
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // On mobile, WhatsApp links should open the app directly
        document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
            link.href = link.href.replace('https://wa.me/', 'https://api.whatsapp.com/send?phone=');
        });
    }
}

// Utility functions
function showSuccessMessage(message) {
    showToast(message, 'success');
}

function showErrorMessage(message) {
    showToast(message, 'error');
}

function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show position-fixed`;
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    toast.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 5000);
}

// Format phone number as user types
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.startsWith('0')) {
        value = '62' + value.substring(1);
    } else if (!value.startsWith('62')) {
        value = '62' + value;
    }
    
    // Format with spaces for readability
    if (value.length > 2) {
        value = value.substring(0, 2) + ' ' + value.substring(2);
    }
    if (value.length > 6) {
        value = value.substring(0, 6) + ' ' + value.substring(6);
    }
    if (value.length > 11) {
        value = value.substring(0, 11) + ' ' + value.substring(11);
    }
    
    input.value = value;
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
});

// Lazy loading for images (if any images are added later)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Performance optimization: Debounce function
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Export functions for potential use in other scripts
window.IndihomeWebsite = {
    showSuccessMessage,
    showErrorMessage,
    formatPhoneNumber,
    validateContactForm,
    debounce
};
