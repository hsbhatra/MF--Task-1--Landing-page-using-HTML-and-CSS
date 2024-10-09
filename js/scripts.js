// Loading Animation
window.addEventListener('load', function() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show 'Back to Top Button' when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
