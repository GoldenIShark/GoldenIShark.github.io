/**
 * Aura Rasa — Interaksi Vanilla JS Ringan (Paket Basic NFShark)
 * Tanpa library berat, ramah aksesibilitas keyboard dan mobile.
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');
  const navLinks = document.querySelectorAll('.site-nav a');

  if (menuToggle && siteNav) {
    function toggleNav() {
      const isOpen = siteNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    }

    function closeNav() {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }

    menuToggle.addEventListener('click', toggleNav);

    navLinks.forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    // Tutup navigasi bila tombol Escape ditekan
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && siteNav.classList.contains('open')) {
        closeNav();
        menuToggle.focus();
      }
    });
  }
});
