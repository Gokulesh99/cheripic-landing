import { useEffect } from 'react';

/** Prevents background scroll while a modal is open. */
export function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return undefined;
    document.body.classList.add('is-locked');
    return () => document.body.classList.remove('is-locked');
  }, [isLocked]);
}
