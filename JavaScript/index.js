document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const parallaxImage = document.querySelector('.parallax-image');
    const speed = 0.7; 

    parallaxImage.style.transform = `translateY(-${scrollPosition * speed}px)`; 
});

document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');
    const Ul = document.querySelector('.ul');

    list.addEventListener('click', function() {
        Ul.classList.toggle('active');
    });
});