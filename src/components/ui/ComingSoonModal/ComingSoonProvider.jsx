import { useCallback, useMemo, useState } from 'react';
import ComingSoonModal from './ComingSoonModal';
import { ComingSoonContext } from './ComingSoonContext';

/**
 * One overlay for the whole page: every Join CTA shares this state instead of
 * mounting a modal of its own. Wrap the page, then use <JoinButton>.
 */
export default function ComingSoonProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => open, [open]);

  return (
    <ComingSoonContext.Provider value={value}>
      {children}
      <ComingSoonModal isOpen={isOpen} onClose={close} />
    </ComingSoonContext.Provider>
  );
}
