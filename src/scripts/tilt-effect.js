// Tilt effect para las tarjetas de proyectos
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.tilt-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
  });
  
  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;
    
    const maxRotation = 8;
    const rotateX = maxRotation * -percentY;
    const rotateY = maxRotation * percentX;
    
    card.style.transform = 
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Efecto de resaltado
    const maxMove = 10;
    const glare = card.querySelector('.card-glare');
    if (glare) {
      const glareX = percentX * 150 + 50;
      const glareY = percentY * 150 + 50;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)`;
    }
  }
  
  function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.boxShadow = '';
    
    const glare = card.querySelector('.card-glare');
    if (glare) {
      glare.style.background = 'none';
    }
  }
  
  function handleMouseEnter(e) {
    const card = e.currentTarget;
    // Asegurar que haya un elemento para el efecto de brillo
    if (!card.querySelector('.card-glare')) {
      const glare = document.createElement('div');
      glare.classList.add('card-glare');
      glare.style.position = 'absolute';
      glare.style.top = 0;
      glare.style.left = 0;
      glare.style.right = 0;
      glare.style.bottom = 0;
      glare.style.pointerEvents = 'none';
      glare.style.borderRadius = 'inherit';
      glare.style.zIndex = 2;
      card.appendChild(glare);
    }
  }
});
