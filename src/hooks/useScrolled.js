import { useEffect, useState } from 'react';

/**
 * True once the page has scrolled past `offset` pixels.
 * Reads scroll position inside a rAF so the listener stays cheap.
 */
export function useScrolled(offset = 30) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > offset);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [offset]);

  return isScrolled;
}
