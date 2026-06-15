import { animate, stagger } from 'motion';

export function initScreenshotGalleryAnimations() {
	document.querySelectorAll('[data-screenshot-gallery]').forEach((gallery) => {
		if (gallery.hasAttribute('data-animated')) return;

		const thumbs = gallery.querySelectorAll<HTMLElement>('.screenshot-thumb');
		thumbs.forEach((thumb) => {
			thumb.style.opacity = '0';
			thumb.style.transform = 'translateY(10px)';
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					gallery.setAttribute('data-animated', '');
					animate(
						thumbs,
						{ opacity: [0, 1], transform: ['translateY(10px)', 'translateY(0)'] },
						{ delay: stagger(0.08), duration: 0.4, easing: [0.22, 1, 0.36, 1] },
					);
					observer.unobserve(entry.target);
				});
			},
			{ threshold: 0.15 },
		);

		observer.observe(gallery);
	});
}

initScreenshotGalleryAnimations();
document.addEventListener('astro:page-load', initScreenshotGalleryAnimations);
