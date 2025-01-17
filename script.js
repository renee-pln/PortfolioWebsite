// Initialize particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded');
});

// Initialize wow.js
new WOW().init();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});