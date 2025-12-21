export const buildPageButtons = (
  current: number,
  total: number,
  windowSize = 5
) => {
  const half = Math.floor(windowSize / 2);

  let start = Math.max(1, current - half);
  let end = Math.min(total, start + windowSize - 1);

  start = Math.max(1, end - windowSize + 1);

  return Array.from({ length: end - start + 1 }, (_, i) => {
    const page = start + i;
    return {
      text: page === current ? `• ${page} •` : page.toString(),
      callback_data: page !== current ? `page:${page}` : "noop",
    };
  });
};

export const buildPagination = (current: number, total: number) => {
  const pages = buildPageButtons(current, total);

  return {
    inline_keyboard: [
      pages,
      [
        {
          text: "◀ Sebelumnya",
          callback_data: current > 1 ? `page:${current - 1}` : "noop",
        },
        {
          text: "Selanjutnya ▶",
          callback_data: current < total ? `page:${current + 1}` : "noop",
        },
      ],
    ],
  };
};
