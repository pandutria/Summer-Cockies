document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const parallaxImage = document.querySelector('.parallax-image');
    const speed = 0.5; 

    parallaxImage.style.transform = `translateY(-${scrollPosition * speed}px)`; 
});
