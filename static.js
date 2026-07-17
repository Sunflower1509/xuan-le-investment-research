(() => {
  const searchInput = document.querySelector('#stocks input[type="search"]');
  const filterButtons = Array.from(
    document.querySelectorAll('.sector-filters button')
  );
  const stockGrid = document.querySelector('.stock-grid');
  const stockItems = Array.from(document.querySelectorAll('.stock-item'));

  if (!searchInput || !stockGrid || !filterButtons.length || !stockItems.length) {
    return;
  }

  let activeSector = 'Tất cả';
  const emptyMessage = document.createElement('p');
  emptyMessage.className = 'empty-state';
  emptyMessage.textContent = 'Không tìm thấy cổ phiếu phù hợp.';

  const normalize = (value) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('vi')
      .trim();

  const applyFilters = () => {
    const query = normalize(searchInput.value);
    let visibleCount = 0;

    stockItems.forEach((item) => {
      const sector = item.querySelector('div span')?.textContent?.trim() || '';
      const matchesSector = activeSector === 'Tất cả' || sector === activeSector;
      const matchesQuery = !query || normalize(item.textContent || '').includes(query);
      const visible = matchesSector && matchesQuery;

      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (visibleCount === 0) {
      stockGrid.appendChild(emptyMessage);
    } else {
      emptyMessage.remove();
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeSector = button.textContent?.trim() || 'Tất cả';
      filterButtons.forEach((candidate) => {
        candidate.setAttribute('aria-pressed', String(candidate === button));
      });
      applyFilters();
    });
  });

  searchInput.addEventListener('input', applyFilters);
})();
