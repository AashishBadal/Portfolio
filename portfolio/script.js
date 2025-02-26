particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#E94560' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: 'none', random: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' } }
    }
});

const typed = new Typed('.typing-text', {
    strings: ['Frontend Developer', 'UI Designer','Problem Solver'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

const toggle = document.querySelector('.mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Projects Gallery Navigation
const galleryItems = document.querySelectorAll('.gallery-item');
const nextButtons = document.querySelectorAll('.next-btn');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showProject(index) {
    galleryItems.forEach((item, i) => {
        item.classList.remove('active');
        item.style.opacity = '0';
        if (i === index) {
            item.classList.add('active');
            setTimeout(() => {
                item.style.opacity = '1';
            }, 10); // Small delay for fade effect
        }
    });
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) dot.classList.add('active');
    });
}

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showProject(currentIndex);
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showProject(currentIndex);
    });
});

// Initialize first project
showProject(currentIndex);