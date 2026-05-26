// Custom cursor
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 4 + 'px';
    cursor.style.top  = e.clientY - 4 + 'px';
  });

  document.querySelectorAll('button, a, input, .animal-card, .help-card, .help-card-btn, .social-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('is-paw');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-paw');
    });
  });

  const petProfiles = {
    thor: {
      name: 'Thor',
      status: 'Disponivel',
      subtitle: 'Cachorro carinhoso, tranquilo e muito ligado em pessoas.',
      age: '3 anos',
      gender: 'Macho',
      location: 'Sao Paulo, SP',
      size: 'Medio',
      story: 'Thor foi encontrado proximo a uma avenida movimentada depois de alguns dias sendo alimentado por moradores. Chegou assustado, com sinais de abandono, mas respondeu muito bem aos primeiros cuidados.',
      current: 'Esta vacinado, castrado e em lar temporario. Ja aceita coleira, gosta de passeios calmos e esta pronto para uma familia paciente e afetuosa.',
      needs: ['Casa ou apartamento com rotina tranquila', 'Passeios curtos diarios', 'Adaptacao gradual com outros animais', 'Tutor disposto a manter acompanhamento veterinario anual'],
      visual: '.card-img-1'
    },
    luna: {
      name: 'Luna',
      status: 'Disponivel',
      subtitle: 'Gata jovem, curiosa e afetuosa depois que ganha confianca.',
      age: '1 ano',
      gender: 'Femea',
      location: 'Campinas, SP',
      size: 'Pequeno',
      story: 'Luna foi resgatada em uma obra, escondida com medo de chuva e barulho. Passou por avaliacao veterinaria, recebeu medicacao e hoje esta muito mais segura.',
      current: 'Esta vermifugada, testada e em processo final de socializacao. Convive bem em ambientes calmos e adora locais altos para observar tudo.',
      needs: ['Apartamento telado ou casa segura', 'Rotina de enriquecimento ambiental', 'Caixa de areia sempre limpa', 'Adaptacao paciente nos primeiros dias'],
      visual: '.card-img-2'
    },
    mel: {
      name: 'Mel',
      status: 'Disponivel',
      subtitle: 'Companheira, doce e ideal para quem busca uma amiga calma.',
      age: '2 anos',
      gender: 'Femea',
      location: 'Rio de Janeiro, RJ',
      size: 'Medio',
      story: 'Mel foi deixada em frente a uma clinica parceira, muito magra e com medo de contato. Com alimentacao adequada e carinho, recuperou peso e confianca.',
      current: 'Esta saudavel, castrada e muito sociavel com adultos. Ainda fica insegura com barulhos altos, mas evolui bem com rotina previsivel.',
      needs: ['Ambiente sem excesso de barulho', 'Tutor com disponibilidade para companhia', 'Racao de boa qualidade', 'Introducao supervisionada com criancas pequenas'],
      visual: '.card-img-3'
    },
    bolt: {
      name: 'Bolt',
      status: 'Disponivel',
      subtitle: 'Cachorro ativo, brincalhao e muito esperto.',
      age: '5 anos',
      gender: 'Macho',
      location: 'Curitiba, PR',
      size: 'Grande',
      story: 'Bolt foi resgatado apos ser visto circulando sozinho por um bairro residencial. Estava sem identificacao, mas muito receptivo ao contato humano.',
      current: 'Esta castrado, vacinado e com energia de sobra. Aprende comandos rapido e se beneficia de passeios e brincadeiras todos os dias.',
      needs: ['Espaco para gastar energia', 'Passeios diarios mais longos', 'Brinquedos resistentes', 'Familia que goste de rotina ativa'],
      visual: '.card-img-4'
    }
  };

  const modal = document.getElementById('petModal');
  const modalVisual = document.getElementById('petModalVisual');
  const modalStatus = document.getElementById('petModalStatus');
  const modalTitle = document.getElementById('petModalTitle');
  const modalSubtitle = document.getElementById('petModalSubtitle');
  const modalAge = document.getElementById('petModalAge');
  const modalGender = document.getElementById('petModalGender');
  const modalLocation = document.getElementById('petModalLocation');
  const modalSize = document.getElementById('petModalSize');
  const modalStory = document.getElementById('petModalStory');
  const modalCurrent = document.getElementById('petModalCurrent');
  const modalNeeds = document.getElementById('petModalNeeds');
  const interestModal = document.getElementById('interestModal');
  const openInterestModalButton = document.getElementById('openInterestModal');
  const openAdoptionInterestButton = document.getElementById('openAdoptionInterest');
  const interestForm = document.getElementById('interestForm');
  const interestPet = document.getElementById('interestPet');
  const interestModalSubtitle = document.getElementById('interestModalSubtitle');
  const volunteerModal = document.getElementById('volunteerModal');
  const volunteerForm = document.getElementById('volunteerForm');
  const donationModal = document.getElementById('donationModal');
  const copyPixKeyButton = document.getElementById('copyPixKey');
  const pixKey = document.getElementById('pixKey');
  let selectedPetKey = null;

  function openPetModal(petKey) {
    const pet = petProfiles[petKey];
    if (!pet || !modal) return;
    selectedPetKey = petKey;

    const sourceVisual = document.querySelector(`${pet.visual} img`) || document.querySelector(`${pet.visual} svg`);
    modalVisual.className = `pet-modal-hero ${pet.visual.replace('.', '')}`;
    modalVisual.innerHTML = sourceVisual ? sourceVisual.outerHTML : '';
    modalStatus.textContent = pet.status;
    modalTitle.textContent = pet.name;
    modalSubtitle.textContent = pet.subtitle;
    modalAge.textContent = pet.age;
    modalGender.textContent = pet.gender;
    modalLocation.textContent = pet.location;
    modalSize.textContent = pet.size;
    modalStory.textContent = pet.story;
    modalCurrent.textContent = pet.current;
    modalNeeds.innerHTML = pet.needs.map(item => `<li>${item}</li>`).join('');

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.pet-modal-close').focus();
  }

  function closePetModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (!interestModal || !interestModal.classList.contains('open')) {
      document.body.classList.remove('modal-open');
    }
  }

  function openInterestModal(petKey = selectedPetKey || 'thor') {
    if (!interestModal) return;

    selectedPetKey = petKey;
    const pet = petProfiles[selectedPetKey];
    if (!pet) return;
    interestPet.value = pet.name;
    interestModalSubtitle.textContent = `Voce esta demonstrando interesse na adocao de ${pet.name}. Preencha seus dados para a equipe seguir com a triagem.`;

    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
    interestModal.classList.add('open');
    interestModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    interestModal.querySelector('input[name="name"]').focus();
  }

  function closeInterestModal() {
    if (!interestModal) return;
    interestModal.classList.remove('open');
    interestModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function openVolunteerModal() {
    if (!volunteerModal) return;
    volunteerModal.classList.add('open');
    volunteerModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    volunteerModal.querySelector('input[name="name"]').focus();
  }

  function closeVolunteerModal() {
    if (!volunteerModal) return;
    volunteerModal.classList.remove('open');
    volunteerModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function openDonationModal() {
    if (!donationModal) return;
    donationModal.classList.add('open');
    donationModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    donationModal.querySelector('.pet-modal-close').focus();
  }

  function closeDonationModal() {
    if (!donationModal) return;
    donationModal.classList.remove('open');
    donationModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function scrollToAnimalCards() {
    const cards = document.getElementById('cardsAnimais');
    if (cards) {
      cards.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function runHelpCardAction(action) {
    if (action === 'animals') {
      scrollToAnimalCards();
      return;
    }

    if (action === 'donation') {
      openDonationModal();
      return;
    }

    if (action === 'volunteer') {
      openVolunteerModal();
    }
  }

  document.querySelectorAll('.card-action[data-pet]').forEach(button => {
    button.addEventListener('click', () => openPetModal(button.dataset.pet));
  });

  document.querySelectorAll('[data-scroll-animals]').forEach(button => {
    button.addEventListener('click', scrollToAnimalCards);
  });

  document.querySelectorAll('.help-card[data-help-action]').forEach(card => {
    card.addEventListener('click', event => {
      if (event.target.closest('button, a, input, select, textarea')) return;
      runHelpCardAction(card.dataset.helpAction);
    });

    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      runHelpCardAction(card.dataset.helpAction);
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(element => {
    element.addEventListener('click', closePetModal);
  });

  if (openInterestModalButton) {
    openInterestModalButton.addEventListener('click', () => openInterestModal());
  }

  if (openAdoptionInterestButton) {
    openAdoptionInterestButton.addEventListener('click', () => openInterestModal('thor'));
  }

  document.querySelectorAll('[data-close-interest]').forEach(element => {
    element.addEventListener('click', closeInterestModal);
  });

  if (interestForm) {
    interestForm.addEventListener('submit', event => {
      event.preventDefault();
      const petName = interestPet.value || 'este pet';
      closeInterestModal();
      alert(`Interesse enviado para ${petName}! Esta e uma simulacao do MVP.`);
      interestForm.reset();
    });
  }

  document.querySelectorAll('[data-open-volunteer]').forEach(button => {
    button.addEventListener('click', openVolunteerModal);
  });

  document.querySelectorAll('[data-close-volunteer]').forEach(element => {
    element.addEventListener('click', closeVolunteerModal);
  });

  if (volunteerForm) {
    volunteerForm.addEventListener('submit', event => {
      event.preventDefault();
      closeVolunteerModal();
      alert('Cadastro de voluntariado enviado! Esta e uma simulacao do MVP.');
      volunteerForm.reset();
    });
  }

  document.querySelectorAll('[data-open-donation]').forEach(button => {
    button.addEventListener('click', openDonationModal);
  });

  document.querySelectorAll('[data-close-donation]').forEach(element => {
    element.addEventListener('click', closeDonationModal);
  });

  if (copyPixKeyButton && pixKey) {
    copyPixKeyButton.addEventListener('click', async () => {
      const key = pixKey.textContent.trim();
      try {
        await navigator.clipboard.writeText(key);
        copyPixKeyButton.textContent = 'Chave copiada';
        setTimeout(() => {
          copyPixKeyButton.textContent = 'Copiar chave PIX';
        }, 1600);
      } catch (error) {
        alert(`Chave PIX ficticia: ${key}`);
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeDonationModal();
      closeVolunteerModal();
      closeInterestModal();
      closePetModal();
    }
  });

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Counter animation
  function animateCounters() {
    const targets = [2400, 340, 98];
    const els = document.querySelectorAll('.stat-num');
    const suffixes = ['k', '', '%'];

    els.forEach((el, i) => {
      let start = 0;
      const end = targets[i];
      const duration = 1500;
      const step = end / (duration / 16);

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        const display = i === 0 ? (start/1000).toFixed(1) : Math.floor(start);
        el.textContent = display + suffixes[i];
      }, 16);
    });
  }

  // Trigger counter when hero is visible
  const heroObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      heroObserver.disconnect();
    }
  }, { threshold: 0.5 });

  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) heroObserver.observe(statsEl);

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-inner');
    if (window.scrollY > 40) {
      nav.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
    } else {
      nav.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
    }
  });
