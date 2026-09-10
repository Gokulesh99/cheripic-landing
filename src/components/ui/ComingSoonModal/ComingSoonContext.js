import { createContext, useContext } from 'react';

/** Holds the `open` callback for the coming-soon overlay (null = no provider). */
export const ComingSoonContext = createContext(null);

/** Returns a function that opens the coming-soon overlay. */
export function useComingSoon() {
  return useContext(ComingSoonContext);
}
