 // Smooth scroll para navegación y botones
  document.querySelectorAll('.nav-links a, #navContactBtn, #heroAboutBtn, #heroContactBtn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      let targetId = '';
      if (this === document.getElementById('navContactBtn')) {
        targetId = 'contacto';
      } else if (this === document.getElementById('heroContactBtn')) {
        targetId = 'proyectos';
      } else if (this === document.getElementById('heroAboutBtn')) {
        targetId = 'about';
      } else {
        const href = this.getAttribute('href');
        if (href && href !== '#') targetId = href.substring(1);
      }
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const logo = document.querySelector('.logo');
  if(logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const contactForm = document.getElementById('contactForm');
  const feedbackDiv = document.getElementById('formFeedback');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const msg = document.getElementById('msgInput').value.trim();

    if (!name || !email || !msg) {
      feedbackDiv.innerHTML = '<span style="color:#dc2626;">❌ Por favor completa todos los campos.</span>';
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      feedbackDiv.innerHTML = '<span style="color:#dc2626;">📧 Correo electrónico no válido.</span>';
      return;
    }

    const btnSubmit = document.getElementById('submitBtn');
    const originalText = btnSubmit.innerHTML;
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = 'Enviando... <i class="fas fa-spinner fa-pulse"></i>';

    setTimeout(() => {
      feedbackDiv.innerHTML = '<span style="color:#16a34a;">✅ ¡Mensaje enviado! Te responderé a la brevedad.</span>';
      contactForm.reset();
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = originalText;
      setTimeout(() => {
        if(feedbackDiv.innerHTML.includes('✅')) feedbackDiv.innerHTML = '';
      }, 5000);
    }, 800);
  });