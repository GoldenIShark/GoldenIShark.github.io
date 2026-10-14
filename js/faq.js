document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const siteHeader = document.querySelector('.site-header');
  const searchInput = document.querySelector('#faq-search');
  const emptyMessage = document.querySelector('#faq-empty');
  const categories = Array.from(document.querySelectorAll('.faq-category'));

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (siteHeader) {
    const updateHeader = () => siteHeader.classList.toggle('scrolled', window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  if (!searchInput || !emptyMessage) return;

  const normalize = (value) => value.toLocaleLowerCase('id').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  searchInput.addEventListener('input', () => {
    const query = normalize(searchInput.value.trim());
    let visibleCount = 0;

    categories.forEach((category) => {
      const items = Array.from(category.querySelectorAll('.faq-item'));
      let categoryCount = 0;

      items.forEach((item) => {
        const matches = !query || normalize(item.textContent).includes(query);
        item.hidden = !matches;
        if (matches) {
          categoryCount += 1;
          visibleCount += 1;
        }
      });

      category.hidden = categoryCount === 0;
    });

    emptyMessage.hidden = visibleCount > 0;
  });
});