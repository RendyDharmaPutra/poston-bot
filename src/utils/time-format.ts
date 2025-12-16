export const formatRelativeTime = (date: string): string => {
  const diff = Date.now() - new Date(date).getTime();
  const min = Math.floor(diff / 60000);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);

  if (min < 1) return "baru saja";
  if (min < 60) return `${min} menit lalu`;
  if (hour < 24) return `${hour} jam lalu`;
  if (day < 7) return `${day} hari lalu`;

  return new Date(date).toLocaleDateString("id-ID");
};
