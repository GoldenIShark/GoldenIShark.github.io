document.addEventListener('DOMContentLoaded', () => {
  const whatsappNumber = '6289630984238';
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');
  const scrollTopBtn = document.querySelector('.scroll-top');
  const revealItems = document.querySelectorAll('.reveal');
  const siteHeader = document.querySelector('.site-header');
  const packageList = document.querySelector('#package-list');
  const portfolioGrid = document.querySelector('.portfolio-grid');
  const portfolioToggle = document.querySelector('.portfolio-toggle');
  const portfolioCards = portfolioGrid ? Array.from(portfolioGrid.querySelectorAll('.portfolio-card')) : [];
  const portfolioLimit = 10;

  const renderPackageCard = (pkg) => {
    const tierClass = `package-card--${pkg.name.toLowerCase()}`;
    const domainMessage = pkg.domainIncluded
      ? 'Domain termasuk dalam paket ini.'
      : 'Domain dibeli dan dibayar terpisah.';

    return `
      <article class="package-card ${tierClass}${pkg.featured ? ' featured' : ''} reveal">
        <div class="package-badge">${pkg.badge}</div>
        <div>
          <h3>${pkg.name}</h3>
          <p class="package-price">${pkg.price}</p>
          ${pkg.estimate ? `<p class="package-estimate">Estimasi: ${pkg.estimate}</p>` : ''}
        </div>
        <ul class="package-features">
          ${pkg.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="package-domain-info" role="note">
          <strong>Domain</strong>
          <span>${domainMessage}</span>
        </div>
        ${pkg.customNote ? `<p class="package-custom-note">${pkg.customNote}</p>` : ''}
        <a href="${pkg.href}" data-package-name="${pkg.name}" data-package-price="${pkg.price}" class="btn package-order ${pkg.name === 'Custom' ? 'btn-secondary' : 'btn-primary'}">${pkg.button}</a>
      </article>
    `;
  };

  const pesanPaket = (namaPaket, harga) => {
    const message = namaPaket === 'Custom'
      ? 'Halo Shark Studio, saya ingin berkonsultasi mengenai Paket Custom. Saya memiliki kebutuhan website yang ingin saya diskusikan. Domain dapat dibahas atau dipesan secara terpisah.'
      : `Halo Shark Studio, saya tertarik dengan Paket ${namaPaket} seharga ${harga} untuk jasa pembuatan website. Saya ingin mengetahui informasi lebih lanjut; domain dapat dibahas atau dipesan secara terpisah.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const bindPackageButtons = () => {
    if (!packageList) return;

    packageList.querySelectorAll('.package-order').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        pesanPaket(button.dataset.packageName, button.dataset.packagePrice);
      });
    });
  };

  // Toggle hamburger menu pada layar mobile
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  if (portfolioGrid && portfolioToggle) {
    portfolioCards.forEach((card, index) => {
      card.hidden = index >= portfolioLimit;
    });
    portfolioToggle.hidden = portfolioCards.length <= portfolioLimit;
    portfolioToggle.addEventListener('click', () => {
      const showAll = portfolioToggle.getAttribute('aria-expanded') !== 'true';
      portfolioCards.forEach((card, index) => {
        card.hidden = !showAll && index >= portfolioLimit;
        if (card.hidden) {
          card.classList.remove('visible');
        } else if (showAll && !card.classList.contains('visible')) {
          observer.observe(card);
        }
      });
      portfolioToggle.setAttribute('aria-expanded', String(showAll));
      portfolioToggle.textContent = showAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Semua';
    });
  }

  // Tutup menu setelah link navigasi diklik
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mainNav) {
        mainNav.classList.remove('open');
      }
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Smooth scrolling untuk tautan internal
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      const targetElement = targetId ? document.querySelector(targetId) : null;

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Render daftar paket dari file JSON
  if (packageList) {
    fetch('data/packages.json')
      .then((response) => {
        if (!response.ok) throw new Error('Gagal memuat data paket');
        return response.json();
      })
      .then((packages) => {
        packageList.innerHTML = packages.map(renderPackageCard).join('');

        const newRevealItems = packageList.querySelectorAll('.reveal');
        newRevealItems.forEach((item) => observer.observe(item));
        bindPackageButtons();
      })
      .catch(() => {
        packageList.innerHTML = renderPackageCard({
          name: 'Basic',
          price: 'Rp100.000',
          domainIncluded: false,
          badge: 'Starter',
          featured: false,
          features: [
            '1 halaman website',
            'Responsive untuk HP',
            'Desain sederhana',
            'Informasi/profil',
            'Tombol kontak',
          ],
          button: 'Pesan Paket',
          href: '#contact',
        });
        const fallbackItem = packageList.querySelector('.reveal');
        if (fallbackItem) observer.observe(fallbackItem);
        bindPackageButtons();
      });
  }

  // Animasi saat section masuk tampilan
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));

  // Tombol kembali ke atas
  const toggleScrollTop = () => {
    if (!scrollTopBtn) return;

    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleScrollTop);

  if (siteHeader) {
    const toggleHeaderState = () => {
      siteHeader.classList.toggle('scrolled', window.scrollY > 24);
    };

    toggleHeaderState();
    window.addEventListener('scroll', toggleHeaderState);
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
