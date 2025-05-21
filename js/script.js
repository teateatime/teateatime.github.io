document.addEventListener("DOMContentLoaded", () => {
    // Background preload optimization
    const preloadBg = new Image();
    preloadBg.src = '/images/dark-desk.jpg';
    preloadBg.onload = () => {
        const bgContainer = document.querySelector('.darken');
        if (bgContainer) {
            bgContainer.style.backgroundImage = `url(${preloadBg.src})`;
            bgContainer.classList.add('loaded');
        }
    };

    // Reveal on scroll using IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Unobserve for performance
            }
        }
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    for (const el of reveals) {
        observer.observe(el);
    }
});
