import { useEffect, useState } from 'react';

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

/**
 * Cycles through `words`, typing and deleting each one character at a time.
 * Returns the text to render. Pair it with a CSS-animated cursor.
 *
 * Implemented as a single self-scheduling timer keyed on its own state, which
 * avoids the overlapping-interval bugs of the original version.
 */
export function useTypewriter(
  words: string[],
  { typeSpeed = 90, deleteSpeed = 45, pauseMs = 1500 }: TypewriterOptions = {},
): string {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const current = words[index % words.length];

    // Done typing the full word → hold, then start deleting.
    if (!deleting && subIndex === current.length) {
      const timer = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(timer);
    }

    // Done deleting → move to the next word.
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pauseMs]);

  return words.length ? words[index % words.length].slice(0, subIndex) : '';
}
