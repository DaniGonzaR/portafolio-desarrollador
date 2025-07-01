// Script para el cursor personalizado
document.addEventListener('DOMContentLoaded', function() {
  // Crear elementos para el cursor personalizado
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  document.body.appendChild(cursorDot);

  const cursorRing = document.createElement('div');
  cursorRing.classList.add('cursor-ring');
  document.body.appendChild(cursorRing);

  // Añadir los estilos necesarios para el cursor
  const cursorStyles = document.createElement('style');
  cursorStyles.innerHTML = `
    .cursor-dot {
      position: fixed;
      top: 0;
      left: 0;
      width: 8px;
      height: 8px;
      background-color: #22c55e;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
    }
    
    .cursor-ring {
      position: fixed;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      border: 2px solid rgba(59, 130, 246, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9998;
      transition: width 0.3s, height 0.3s, border-color 0.3s;
    }
    
    .cursor-hover {
      width: 50px;
      height: 50px;
      background-color: rgba(59, 130, 246, 0.1);
      border-color: #22c55e;
    }
    
    .cursor-down {
      transform: translate(-50%, -50%) scale(0.8);
    }
    
    /* Ocultar cursor original en enlaces e interactivos */
    a, button, input[type="button"], .tilt-card {
      cursor: none;
    }
    
    /* Solo mostrar el cursor personalizado en pantallas grandes */
    @media (max-width: 768px) {
      .cursor-dot, .cursor-ring {
        display: none;
      }
    }
  `;
  document.head.appendChild(cursorStyles);

  // Seguir el movimiento del cursor
  document.addEventListener('mousemove', (e) => {
    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // Efecto al hacer clic
  document.addEventListener('mousedown', () => {
    cursorDot.classList.add('cursor-down');
  });

  document.addEventListener('mouseup', () => {
    cursorDot.classList.remove('cursor-down');
  });

  // Efecto al pasar por elementos interactivos
  const interactiveElements = document.querySelectorAll('a, button, input[type="button"], .tilt-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseover', () => {
      cursorRing.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
      cursorRing.classList.remove('cursor-hover');
    });
  });
});
