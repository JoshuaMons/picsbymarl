/**
 * Pics By Marl - Landing Page Scripts
 * Handles: sticky navbar, mobile menu, smooth scroll, footer year
 */

(function () {
  'use strict';

  const NAVBAR = document.getElementById('navbar');
  const HAMBURGER = document.getElementById('hamburger');
  const NAV_MENU = document.getElementById('nav-menu');
  const YEAR_EL = document.getElementById('year');

  function onScroll() {
    if (window.scrollY > 20) {
      NAVBAR.classList.add('scrolled');
    } else {
      NAVBAR.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function toggleMenu() {
    HAMBURGER.classList.toggle('active');
    NAV_MENU.classList.toggle('open');
    document.body.style.overflow = NAV_MENU.classList.contains('open') ? 'hidden' : '';
  }

  function closeMenu() {
    HAMBURGER.classList.remove('active');
    NAV_MENU.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (HAMBURGER && NAV_MENU) {
    HAMBURGER.addEventListener('click', toggleMenu);

    NAV_MENU.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if (YEAR_EL) {
    YEAR_EL.textContent = new Date().getFullYear();
  }
})();
