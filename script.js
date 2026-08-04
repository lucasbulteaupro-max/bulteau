/* ============================================================
   Bulteau Consulting & Support — Script
   ============================================================ */
(() => {
  'use strict';

  // Année footer
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Header scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive:true });

  // Menu mobile
  const toggle = document.getElementById('navToggle');
  const nav    = document.querySelector('.site-nav');
  if (toggle && nav) {
    const close = () => {
      nav.classList.remove('mobile-open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('mobile-open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(l => l.addEventListener('click', close));
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 100);
          io.unobserve(e.target);
        }
      });
    }, { threshold:0.08, rootMargin:'0px 0px -30px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // ── Slider portfolio ──
  const slides   = document.querySelectorAll('.slider .slide');
  const prevBtn  = document.getElementById('prevSlide');
  const nextBtn  = document.getElementById('nextSlide');
  const countEl  = document.getElementById('ctrlCount');
  const fillEl   = document.getElementById('ctrlFill');
  const total    = slides.length;
  let current    = 0;

  function goTo(i) {
    slides[current].classList.remove('active');
    current = (i + total) % total;
    slides[current].classList.add('active');
    if (countEl) countEl.textContent =
      String(current + 1).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
    if (fillEl) fillEl.style.width = ((current + 1) / total * 100) + '%';
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  // Swipe mobile
  const sliderEl = document.getElementById('slider');
  if (sliderEl) {
    let sx = 0;
    sliderEl.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive:true });
    sliderEl.addEventListener('touchend', e => {
      const diff = sx - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });
  }

  // Init barre
  if (fillEl && total) fillEl.style.width = (1 / total * 100) + '%';

})();
