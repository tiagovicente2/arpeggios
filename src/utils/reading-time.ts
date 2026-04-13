const WORDS_PER_MINUTE = 200;

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}>+\s?/gm, ' ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, ' ')
    .replace(/^\s{0,3}(?:[-*+]|\d+\.)\s+/gm, ' ')
    .replace(/[*_~]+/g, '')
    .trim();
}

export function getReadingTime(content: string): number {
  const plainText = stripMarkdown(content);
  const wordCount = plainText.length > 0 ? plainText.split(/\s+/).length : 0;

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
