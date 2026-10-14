document.addEventListener('DOMContentLoaded', () => {
  const catalogueView = document.querySelector('#catalogue-view');
  const detailView = document.querySelector('#detail-view');
  const cardsContainer = document.querySelector('#note-cards');
  const searchInput = document.querySelector('#note-search');
  const categoryFilter = document.querySelector('#category-filter');
  const catalogueStatus = document.querySelector('#catalogue-status');
  const catalogueCount = document.querySelector('#catalogue-count');
  const emptyState = document.querySelector('#empty-state');
  const catalogueError = document.querySelector('#catalogue-error');
  const catalogueErrorMessage = document.querySelector('#catalogue-error-message');
  const retryButton = document.querySelector('#retry-catalogue');
  const backButton = document.querySelector('#back-to-catalogue');
  const detailStatus = document.querySelector('#detail-status');
  const detailError = document.querySelector('#detail-error');
  const detailErrorMessage = document.querySelector('#detail-error-message');
  const detailContent = document.querySelector('#note-detail-content');
  const detailCategory = document.querySelector('#detail-category');
  const detailTitle = document.querySelector('#detail-title');
  const detailDescription = document.querySelector('#detail-description');
  const detailUpdated = document.querySelector('#detail-updated');
  const detailPrivacy = document.querySelector('#detail-privacy');
  const detailSections = document.querySelector('#detail-sections');

  if (
    !catalogueView ||
    !detailView ||
    !cardsContainer ||
    !searchInput ||
    !categoryFilter ||
    !catalogueStatus ||
    !catalogueCount ||
    !emptyState ||
    !catalogueError ||
    !catalogueErrorMessage ||
    !retryButton ||
    !backButton ||
    !detailStatus ||
    !detailError ||
    !detailErrorMessage ||
    !detailContent ||
    !detailCategory ||
    !detailTitle ||
    !detailDescription ||
    !detailUpdated ||
    !detailPrivacy ||
    !detailSections
  ) {
    return;
  }

  let notes = [];
  let catalogLoaded = false;
  let detailRequest = 0;

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  };

  const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

  const setMessage = (node, message) => {
    node.textContent = message || '';
  };

  const validateCatalog = (data) => {
    if (!isObject(data) || !Array.isArray(data.notes)) {
      throw new Error('Format katalog tidak valid. Pastikan list/index.json memiliki daftar catatan.');
    }

    const ids = new Set();
    data.notes.forEach((note) => {
      if (
        !isObject(note) ||
        typeof note.id !== 'string' ||
        !/^[a-z0-9-]+$/.test(note.id) ||
        typeof note.title !== 'string' ||
        typeof note.category !== 'string' ||
        typeof note.description !== 'string' ||
        typeof note.file !== 'string' ||
        !new RegExp(`^list/${note.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.json$`).test(note.file) ||
        ids.has(note.id)
      ) {
        throw new Error('Entri katalog tidak valid atau memiliki ID berulang.');
      }
      ids.add(note.id);
    });

    return data.notes;
  };

  const loadJson = async (path) => {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Gagal memuat data (${response.status}). Periksa file ${path}.`);
    }
    try {
      return await response.json();
    } catch {
      throw new Error(`Data pada ${path} bukan JSON yang valid.`);
    }
  };

  const validateNote = (data, expectedId) => {
    if (
      !isObject(data) ||
      data.id !== expectedId ||
      typeof data.title !== 'string' ||
      typeof data.category !== 'string' ||
      typeof data.description !== 'string' ||
      !Array.isArray(data.sections) ||
      !data.sections.every((section) => isObject(section) && typeof section.title === 'string')
    ) {
      throw new Error('Struktur catatan tidak valid atau ID catatan tidak cocok dengan katalog.');
    }
    return data;
  };

  const makeCard = (note) => {
    const card = element('article', 'note-card');
    card.append(element('p', 'note-card-category', note.category));
    card.append(element('h3', '', note.title));
    card.append(element('p', '', note.description));

    const link = element('a', 'note-button note-button-primary', 'Buka Catatan');
    link.href = `note.html?id=${encodeURIComponent(note.id)}`;
    link.dataset.noteId = note.id;
    card.append(link);
    return card;
  };

  const renderCatalog = () => {
    const query = searchInput.value.trim().toLocaleLowerCase('id');
    const category = categoryFilter.value;
    const matches = notes.filter((note) => {
      const searchable = `${note.title} ${note.category} ${note.description}`.toLocaleLowerCase('id');
      return (!query || searchable.includes(query)) && (!category || note.category === category);
    });

    cardsContainer.replaceChildren(...matches.map(makeCard));
    emptyState.hidden = matches.length !== 0;
    catalogueCount.textContent = `${matches.length} dari ${notes.length} catatan`;
    if (catalogLoaded) setMessage(catalogueStatus, '');
  };

  const addCategoryOptions = () => {
    const categories = [...new Set(notes.map((note) => note.category))].sort((a, b) =>
      a.localeCompare(b, 'id')
    );
    categoryFilter.replaceChildren(new Option('Semua kategori', ''));
    categories.forEach((category) => categoryFilter.add(new Option(category, category)));
  };

  const renderValue = (value, parent) => {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        parent.append(element('span', '', 'Tidak ada'));
        return;
      }
      const list = element('ul');
      value.forEach((entry) => {
        const item = element('li');
        renderValue(entry, item);
        list.append(item);
      });
      parent.append(list);
      return;
    }

    if (isObject(value)) {
      const list = element('dl', 'note-nested-fields');
      Object.entries(value).forEach(([key, entry]) => {
        const term = element('dt', '', formatLabel(key));
        const description = element('dd');
        renderValue(entry, description);
        list.append(term, description);
      });
      parent.append(list);
      return;
    }

    parent.append(document.createTextNode(value === null || value === '' ? 'Belum diketahui' : String(value)));
  };

  const formatLabel = (key) => {
    const labels = {
      benefit: 'Manfaat',
      category: 'Kategori',
      customerRelationship: 'Hubungan pelanggan',
      decision: 'Keputusan penggunaan',
      demo: 'Tautan demo',
      dependencies: 'Ketergantungan/kebutuhan',
      description: 'Deskripsi',
      evaluationStatus: 'Status evaluasi',
      files: 'File terkait',
      function: 'Fungsi',
      goal: 'Tujuan',
      impact: 'Dampak',
      location: 'Lokasi',
      maintenanceNotes: 'Catatan pemeliharaan',
      nextSteps: 'Langkah berikutnya',
      priority: 'Prioritas',
      purpose: 'Tujuan',
      reproduction: 'Langkah pemeriksaan/reproduksi',
      resolution: 'Solusi dan hasil pengujian',
      result: 'Hasil',
      resultAndUpdatedAt: 'Catatan hasil dan pembaruan',
      source: 'Sumber',
      status: 'Status',
      summary: 'Ringkasan',
      testNotes: 'Catatan pengujian',
      technology: 'Teknologi',
      updatedAt: 'Tanggal pembaruan',
      websiteType: 'Jenis website',
      limitations: 'Risiko/keterbatasan'
    };
    return labels[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase());
  };

  const renderRecord = (record) => {
    const card = element('article', 'note-record');
    const heading = element('div', 'note-record-heading');
    const title = record.title || record.name || record.id || 'Catatan';
    heading.append(element('h4', '', title));
    if (record.id) heading.append(element('span', 'note-record-id', record.id));
    card.append(heading);

    const badges = [];
    ['status', 'priority'].forEach((key) => {
      if (typeof record[key] === 'string' && record[key]) {
        badges.push(element('span', 'note-badge', `${formatLabel(key)}: ${record[key]}`));
      }
    });
    if (badges.length) {
      const badgeList = element('div', 'note-badges');
      badgeList.append(...badges);
      card.append(badgeList);
    }

    const fields = element('dl', 'note-record-fields');
    Object.entries(record).forEach(([key, value]) => {
      if (['id', 'title', 'name', 'status', 'priority'].includes(key)) return;
      const wrapper = element('div');
      wrapper.append(element('dt', '', formatLabel(key)));
      const description = element('dd');
      renderValue(value, description);
      wrapper.append(description);
      fields.append(wrapper);
    });
    if (fields.childElementCount) card.append(fields);
    return card;
  };

  const renderSection = (section) => {
    const container = element('section', 'note-section');
    container.append(element('h3', '', section.title));
    if (section.description) container.append(element('p', 'note-section-description', section.description));

    if (Array.isArray(section.paragraphs)) {
      section.paragraphs.forEach((paragraph) => container.append(element('p', 'note-section-paragraph', paragraph)));
    }

    if (Array.isArray(section.lists)) {
      section.lists.forEach((block) => {
        const wrapper = element('div', 'note-list-block');
        if (block.title) wrapper.append(element('h4', '', block.title));
        const list = element('ul');
        (Array.isArray(block.items) ? block.items : []).forEach((text) => {
          list.append(element('li', '', text));
        });
        wrapper.append(list);
        container.append(wrapper);
      });
    }

    if (Array.isArray(section.fields) && section.fields.length) {
      const fieldList = element('div', 'note-fields');
      if (section.fieldsTitle) fieldList.append(element('h4', '', section.fieldsTitle));
      section.fields.forEach((field) => {
        const item = element('div', 'note-field-card');
        item.append(element('h5', '', field.name || 'Informasi'));
        if (field.description) item.append(element('p', '', field.description));
        fieldList.append(item);
      });
      container.append(fieldList);
    }

    if (Array.isArray(section.items) && section.items.length) {
      const records = element('div', 'note-record-list');
      section.items.forEach((record) => records.append(renderRecord(record)));
      container.append(records);
    }
    return container;
  };

  const renderDetail = (note) => {
    detailCategory.textContent = note.category;
    detailTitle.textContent = note.title;
    detailDescription.textContent = note.description;
    detailUpdated.textContent = note.updatedAt ? `Pembaruan: ${note.updatedAt}` : '';
    detailUpdated.hidden = !note.updatedAt;
    detailPrivacy.textContent = note.privacyNotice || '';
    detailPrivacy.hidden = !note.privacyNotice;
    detailSections.replaceChildren(...note.sections.map(renderSection));
    detailContent.hidden = false;
    setMessage(detailStatus, '');
    detailError.hidden = true;
    detailView.hidden = false;
    catalogueView.hidden = true;
    document.title = `${note.title} | Pusat Catatan`;
    detailTitle.focus({ preventScroll: true });
  };

  const showDetailError = (message) => {
    detailContent.hidden = true;
    detailErrorMessage.textContent = message;
    detailError.hidden = false;
    setMessage(detailStatus, '');
    detailView.hidden = false;
    catalogueView.hidden = true;
    document.title = 'Catatan tidak tersedia | Pusat Catatan';
    backButton.focus({ preventScroll: true });
  };

  const showCatalogue = () => {
    detailRequest += 1;
    detailView.hidden = true;
    catalogueView.hidden = false;
    document.title = 'Pusat Catatan | AD Sharks Studio';
    renderCatalog();
    document.querySelector('#catalogue-title').focus({ preventScroll: true });
  };

  const loadDetail = async (id) => {
    const request = ++detailRequest;
    const note = notes.find((entry) => entry.id === id);
    if (!note) {
      showDetailError('Catatan tidak ditemukan di katalog. Periksa tautan atau kembali ke daftar.');
      return;
    }

    catalogueView.hidden = true;
    detailView.hidden = false;
    detailContent.hidden = true;
    detailError.hidden = true;
    setMessage(detailStatus, 'Memuat catatan…');

    try {
      const data = await loadJson(note.file);
      if (request !== detailRequest) return;
      renderDetail(validateNote(data, note.id));
    } catch (error) {
      if (request !== detailRequest) return;
      showDetailError(error instanceof Error ? error.message : 'Catatan gagal dimuat.');
    }
  };

  const syncViewWithUrl = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) loadDetail(id);
    else showCatalogue();
  };

  const loadCatalog = async () => {
    catalogueError.hidden = true;
    setMessage(catalogueStatus, 'Memuat daftar catatan…');
    try {
      notes = validateCatalog(await loadJson('./list/index.json'));
      catalogLoaded = true;
      addCategoryOptions();
      renderCatalog();
      syncViewWithUrl();
    } catch (error) {
      catalogLoaded = false;
      cardsContainer.replaceChildren();
      emptyState.hidden = true;
      catalogueCount.textContent = '';
      catalogueErrorMessage.textContent =
        error instanceof Error ? error.message : 'Daftar catatan gagal dimuat.';
      catalogueError.hidden = false;
      setMessage(catalogueStatus, '');
    }
  };

  searchInput.addEventListener('input', renderCatalog);
  categoryFilter.addEventListener('change', renderCatalog);
  retryButton.addEventListener('click', loadCatalog);
  backButton.addEventListener('click', () => {
    const url = new URL('./note.html', window.location.href);
    window.history.pushState({}, '', `${url.pathname}${url.hash}`);
    showCatalogue();
  });

  cardsContainer.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-note-id]');
    if (
      !link ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, '', link.href);
    loadDetail(link.dataset.noteId);
  });

  window.addEventListener('popstate', syncViewWithUrl);
  loadCatalog();
});
