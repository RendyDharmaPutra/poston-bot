export const isValidUrl = (text: string) => {
  try {
    const url = new URL(text);

    // Allow only http or https and ensure hostname exists
    if (
      !["http:", "https:"].includes(url.protocol) ||
      !url.hostname ||
      url.hostname.includes(" ") ||
      !url.hostname.includes(".")
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};
