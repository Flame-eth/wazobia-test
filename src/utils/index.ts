export const stripHtml = (html: string) => {
  // Check if the string contains any HTML tags
  if (!/<[^>]*>?/.test(html)) {
    // If no HTML tags are found, return an empty string
    return "";
  }
  // If HTML tags are found, replace them with an empty string
  return html.replace(/<[^>]*>?/gm, "");
};
