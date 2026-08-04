/* ============================================================
   Bulteau Consulting & Support — Script
   Header sticky · menu mobile · slideshow hero · reveal
   ============================================================ */

(() => {
  'use strict';

  // ── Année dynamique dans le footer ──
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Header : ajout de la classe scrolled ──
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Menu mobile ──
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    const closeNav = () => {
      nav.classList.remove('mobile-open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('mobile-open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  }

  // ── Reveal on scroll ──
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in'), i * 80);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // ── Hero slideshow ──
  const slides = document.querySelectorAll('.hero-slideshow .slide');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const currentEl = document.getElementById('currentSlide');
  const totalEl = document.getElementById('totalSlides');

  if (slides.length > 0) {
    let index = 0;
    const total = slides.length;
    if (totalEl) totalEl.textContent = String(total).padStart(2, '0');

    const goTo = (i) => {
      index = (i + total) % total;
      slides.forEach((slide, idx) => slide.classList.toggle('is-active', idx === index));
      if (currentEl) currentEl.textContent = String(index + 1).padStart(2, '0');
    };

    if (prevBtn) prevBtn.addEventListener('click', () => {
      goTo(index - 1);
      restartAutoplay();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      goTo(index + 1);
      restartAutoplay();
    });

    // Autoplay (pause quand l'onglet est caché)
    let autoplay;
    const startAutoplay = () => {
      autoplay = setInterval(() => goTo(index + 1), 6000);
    };
    const restartAutoplay = () => {
      clearInterval(autoplay);
      startAutoplay();
    };
    startAutoplay();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearInterval(autoplay);
      else startAutoplay();
    });
  }

  // ── Vidéo placeholder : indication pour l'utilisateur ──
  // Quand le vrai <video> ou <iframe> sera inséré dans l'HTML, ce code n'aura aucun effet.
  const videoPlaceholder = document.querySelector('.video-placeholder');
  if (videoPlaceholder) {
    const handleClick = () => {
      // Message informatif en attendant l'intégration de la vraie vidéo
      console.info('Vidéo à intégrer. Voir index.html, section #video.');
    };
    videoPlaceholder.addEventListener('click', handleClick);
    videoPlaceholder.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); }
    });
  }
})();
