// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Simple form handler: muestra confirmación y abre mailto como fallback
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      alert('Por favor completá todos los campos.');
      return;
    }
    alert('¡Gracias, ' + name + '! Tu mensaje fue recibido (simulado).');
    const subject = encodeURIComponent('Contacto desde EcoMarket - ' + name);
    const body = encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:ecomarket.arg2025@gmail.com?subject=' + subject + '&body=' + body;
    form.reset();
  });
}
