// Utility function to clean RTF formatting from AI responses
export const cleanRtfText = (text: string): string => {
  // Remove RTF formatting codes
  let cleanText = text
    // Remove RTF header and control sequences
    .replace(/\{\\rtf1[^}]*\}/g, "")
    .replace(/\{\\fonttbl[^}]*\}/g, "")
    .replace(/\{\\colortbl[^}]*\}/g, "")
    .replace(/\{\\stylesheet[^}]*\}/g, "")
    .replace(/\{\\info[^}]*\}/g, "")
    // Remove RTF control words and groups
    .replace(/\\[a-z]+\d*\s?/g, "")
    .replace(/\{\\[^}]*\}/g, "")
    .replace(/\{|\}/g, "")
    // Remove specific RTF formatting
    .replace(/\\par\b/g, "\n\n")
    .replace(/\\line\b/g, "\n")
    .replace(/\\tab\b/g, "\t")
    .replace(/\\b\b/g, "**")
    .replace(/\\i\b/g, "*")
    .replace(/\\ul\b/g, "")
    .replace(/\\f\d+/g, "")
    .replace(/\\fs\d+/g, "")
    .replace(/\\sa\d+/g, "")
    .replace(/\\sl\d+/g, "")
    .replace(/\\slmult\d+/g, "")
    .replace(/\\pard/g, "")
    .replace(/\\deff\d+/g, "")
    .replace(/\\ansi/g, "")
    // Clean up extra whitespace and newlines
    .replace(/\n\s*\n\s*\n/g, "\n\n")
    .replace(/^\s+|\s+$/g, "")
    .trim();

  return cleanText;
};

// Enhanced version that also handles HTML-like formatting
export const cleanAllFormatting = (text: string): string => {
  // First clean RTF
  let cleanText = cleanRtfText(text);

  // Then clean HTML tags if any
  cleanText = cleanText
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

  return cleanText;
};
