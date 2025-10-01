import { browser } from '$app/environment';

export function fadeIn(node, { delay = 0 } = {}) {
	if (browser) {
		let observer;
		let timeoutId;

		// Use requestIdleCallback for better performance
		const setupObserver = () => {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							timeoutId = setTimeout(() => {
								node.classList.add('visible');
								observer.unobserve(node);
							}, delay);
						}
					});
				},
				{ 
					threshold: 0.1, 
					rootMargin: '0px 0px -50px 0px' // Trigger earlier for mobile
				}
			);

			node.classList.add('fade-in');
			observer.observe(node);
		};

		// Use requestIdleCallback if available, otherwise setTimeout
		if (window.requestIdleCallback) {
			requestIdleCallback(setupObserver);
		} else {
			setTimeout(setupObserver, 0);
		}

		return {
			destroy() {
				if (observer) {
					observer.unobserve(node);
				}
				if (timeoutId) {
					clearTimeout(timeoutId);
				}
			}
		};
	}
	// If not in browser, return a no-op destroy function
	return { destroy() {} };
}
