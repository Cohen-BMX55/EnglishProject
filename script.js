// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

// ===== Subscribe Button Alert =====
const subscribeBtn = document.querySelector('.subscribe-btn');
subscribeBtn.addEventListener('click', () => {
    alert("Thanks for subscribing! We'll keep you updated.");
});

// ===== Reading Progress Bar =====
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});
