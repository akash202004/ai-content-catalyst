export const cleanHtmlText = (raw: string): string => {
    return raw
      .replace(/<\/?[^>]+(>|$)/g, "") 
      .replace(/\*/g, "\n") 
      .replace(/\n+/g, "\n") 
      .trim();
  };
  