export const normalizePageSize = (value, allowedSizes, fallback) => {
  const options = Array.isArray(allowedSizes)
    ? allowedSizes.map(Number).filter((item) => Number.isInteger(item) && item > 0)
    : [];
  const fallbackSize = options.includes(Number(fallback))
    ? Number(fallback)
    : options[0] || 1;
  const parsed = Number.parseInt(value, 10);
  return options.includes(parsed) ? parsed : fallbackSize;
};

export const clampPage = (value, totalPages) => {
  const pages = Math.max(0, Number.parseInt(totalPages, 10) || 0);
  const parsed = Number.parseInt(value, 10);
  if (pages === 0) return 1;
  if (!Number.isInteger(parsed) || parsed < 1) return 1;
  return Math.min(parsed, pages);
};

export const paginateItems = (items, page, pageSize) => {
  const collection = Array.isArray(items) ? items : [];
  const size = Math.max(1, Number.parseInt(pageSize, 10) || 1);
  const totalItems = collection.length;
  const totalPages = totalItems === 0 ? 0 : Math.ceil(totalItems / size);
  const currentPage = clampPage(page, totalPages);
  const start = totalItems === 0 ? 0 : (currentPage - 1) * size;
  const end = Math.min(start + size, totalItems);

  return {
    page: currentPage,
    pageSize: size,
    totalItems,
    totalPages,
    start,
    end,
    items: collection.slice(start, end)
  };
};

export const paginationTokens = (page, totalPages) => {
  const pages = Math.max(0, Number.parseInt(totalPages, 10) || 0);
  if (pages <= 1) return pages === 1 ? [1] : [];
  const current = clampPage(page, pages);
  if (pages <= 7) return Array.from({ length: pages }, (_, index) => index + 1);

  const selected = new Set([1, pages, current - 1, current, current + 1]);
  if (current <= 4) [2, 3, 4, 5].forEach((item) => selected.add(item));
  if (current >= pages - 3) [pages - 4, pages - 3, pages - 2, pages - 1].forEach((item) => selected.add(item));

  const ordered = [...selected]
    .filter((item) => item >= 1 && item <= pages)
    .sort((a, b) => a - b);

  const tokens = [];
  ordered.forEach((item, index) => {
    const previous = ordered[index - 1];
    if (index > 0 && item - previous === 2) tokens.push(previous + 1);
    else if (index > 0 && item - previous > 2) tokens.push("ellipsis");
    tokens.push(item);
  });
  return tokens;
};
