window.addEventListener("scroll", reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

document.addEventListener('DOMContentLoaded', function() {
    const img = new Image();
    img.src = '/images/dark-desk.jpg';
    img.onload = function() {
        document.body.classList.add('loaded');
    };
});
