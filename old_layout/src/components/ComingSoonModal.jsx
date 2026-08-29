import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LINKS } from "../data/content.js";
import logoImage from "../assets/logo.png";

export default function ComingSoonModal({ open, onClose }) {
  const closeRef = useRef(null);
  const lastFocused = useRef(null);

  useEffect(() => {
    if (!open) return;

    lastFocused.current = document.activeElement;
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Lock background scroll without shifting the layout.
    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      lastFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  // Portalled to <body>: the section wrapping the trigger uses
  // content-visibility, which would otherwise trap a fixed overlay.
  return createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <span className="modal-halo" aria-hidden="true" />

        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          ref={closeRef}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="modal-logo">
          <img
            src={logoImage}
            alt="CheriPic"
            width="480"
            height="320"
            decoding="async"
          />
        </div>

        <p className="modal-eyebrow">Coming Soon</p>

        <h2 className="modal-title" id="coming-soon-title">
          Something Rare Is <span className="serif-accent">Taking Shape.</span>
        </h2>

        <span className="modal-rule" aria-hidden="true" />

        <p className="modal-text">
          We are building CheriPic with the care this deserves. Early access
          opens shortly — you will be among the first to know.
        </p>

        <p className="modal-contact">For anything in the meantime, write to us</p>
        <a className="modal-email" href={`mailto:${LINKS.supportEmail}`}>
          {LINKS.supportEmail}
        </a>
      </div>
    </div>,
    document.body
  );
}
