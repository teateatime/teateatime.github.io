window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
  
    for (let el of reveals) {
      if (el.getBoundingClientRect().top < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    }
});
  
document.addEventListener("DOMContentLoaded", () => {
    // Preload background image as early as possible
    const preloadBg = new Image();
    preloadBg.src = '/images/dark-desk.jpg';
    preloadBg.onload = () => {
        const bgContainer = document.querySelector('.darken');
        if (bgContainer) {
            bgContainer.style.backgroundImage = `url(${preloadBg.src})`;
            bgContainer.classList.add('loaded');
        }
    };
});

  