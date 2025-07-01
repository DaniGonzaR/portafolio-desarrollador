// Script para efectos de aparición al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.15 // al menos 15% del elemento visible
  };

  const fadeInElements = document.querySelectorAll('.fade-in-section');
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Una vez que el elemento es visible, no necesitamos seguir observándolo
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar todos los elementos con la clase fade-in-section
  fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
  });
});
