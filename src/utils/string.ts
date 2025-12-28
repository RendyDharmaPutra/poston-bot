export const truncate = (text: string, max = 70): string => {
  if (!text) return "No Caption";
  return text.length > max ? text.slice(0, max) + "…" : text;
};
