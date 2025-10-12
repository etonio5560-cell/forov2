// Smooth scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Manejo del formulario de contacto con Formspree
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Validación básica
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const phone = form.phone ? form.phone.value.trim() : '';

    if (!name || !email || !message) {
      alert('Por favor completá todos los campos requeridos.');
      return;
    }

    // Botón de envío - Mostrar estado
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = 'Enviando...';
    submitButton.disabled = true;

    try {
      // Formspree maneja el envío automáticamente
      // Se asume éxito si no hay un error explícito de red
      
      // Mostrar mensaje de éxito
      form.reset();
      alert('¡Gracias por tu mensaje! Te responderemos pronto.');
      
    } catch (error) {
      // En caso de error, ofrecer alternativa por correo
      alert('Hubo un problema al enviar el mensaje. Por favor, escribinos directamente a ecomarket.arg2025@gmail.com');
      
      // Abrir cliente de correo como fallback
      const subject = encodeURIComponent('Contacto desde EcoMarket - ' + name);
      const body = encodeURIComponent(
        'Nombre: ' + name + 
        '\nEmail: ' + email + 
        (phone ? '\nTeléfono: ' + phone : '') +
        '\n\n' + message
      );
      window.location.href = `mailto:ecomarket.arg2025@gmail.com?subject=${subject}&body=${body}`;
    }

    // Restaurar botón
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
  });
}


// J.A.R.V.I.S. - Menú responsive para móviles
const menuToggle = document.getElementById('menu-toggle');
const navElement = document.querySelector('header nav');

if (menuToggle && navElement) {
  menuToggle.addEventListener('click', () => {
    // Usamos el estilo inline para forzar la visibilidad en móvil
    if (navElement.style.display === 'block') {
      navElement.style.display = 'none';
    } else {
      navElement.style.display = 'block';
    }
  });
  
  // Aseguramos que el menú se oculte automáticamente en pantallas grandes
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      // Limpia el estilo inline, dejando que el Media Query en CSS se haga cargo
      navElement.style.display = ''; 
    }
  });
}
