import { browser } from '$app/environment';

export function fadeIn(node) {
    if (browser) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    node.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

        node.classList.add('fade-in');
        observer.observe(node);

        return {
            destroy() {
                observer.unobserve(node);
            }
        };
    }
    // If not in browser, return a no-op destroy function
    return { destroy() {} };
}