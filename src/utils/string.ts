export const truncate = (text: string, max = 70): string => {
  return text.length > max ? text.slice(0, max) + "…" : text;
};
