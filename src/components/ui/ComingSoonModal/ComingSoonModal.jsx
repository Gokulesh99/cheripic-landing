import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../Icon';
import Logo from '../Logo';
import { useLockBodyScroll } from '@hooks/useLockBodyScroll';
import { comingSoon, site } from '@data/content';
import styles from './ComingSoonModal.module.css';

/**
 * "Coming soon" overlay shown instead of sending people to the app.
 * Copy lives in data/content.js — see the `comingSoon` block.
 */
export default function ComingSoonModal({ isOpen, onClose }) {
  const closeRef = useRef(null);
  const lastFocused = useRef(null);
  const whatsappUrl = `https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}`;


  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;

    // Remember where focus came from so closing returns it to the trigger.
    lastFocused.current = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      lastFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Portalled to <body> so no transformed/clipping ancestor can trap the
  // fixed overlay (the sticky CTA bar and header both create contexts).
  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.card}>
        <span className={styles.halo} aria-hidden="true" />

        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          <Icon name="close" size={18} />
        </button>

        <Logo className={styles.logo} label={site.name} />

        <p className={styles.eyebrow}>{comingSoon.eyebrow}</p>

        <h2 className={styles.title} id="coming-soon-title">
          {comingSoon.titleLead} <span className={styles.accent}>{comingSoon.titleAccent}</span>
        </h2>

        <span className={styles.rule} aria-hidden="true" />

        <p className={styles.text}>{comingSoon.body}</p>

        <p className={styles.contactRow}>
          <span className={styles.contact}>{comingSoon.contact}</span>
          <a
            className={styles.whatsapp}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect with us on WhatsApp at ${site.whatsappNumber}`}
          >
            <Icon name="whatsapp" size={15} className={styles.whatsappMark} />
            <span className={styles.whatsappLabel}>Connect</span>
          </a>
        </p>
      </div>
    </div>,
    document.body,
  );
}
