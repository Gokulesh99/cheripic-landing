import { LINKS } from "../data/content.js";
import logoImage from "../assets/logo.png";
import { navigate } from "../hooks/useRoute.js";


export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <div className="fl">
            <img
              src={logoImage}
              alt="CheriPic — Clarity Before Connection"
              width="480"
              height="320"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p>The World's First Verified Relationship Intelligence Platform.</p>
        </div>

        <div className="foot-col">
          <h4>Connect</h4>
          <div className="foot-socials">
            <a
              className="foot-social"
              href={LINKS.instagram}
              target="_blank"
              rel="noopener"
              aria-label="CheriPic on Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect
                  x="2.75"
                  y="2.75"
                  width="18.5"
                  height="18.5"
                  rx="5.25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" />
              </svg>
            </a>
            <a
              className="foot-social"
              href={LINKS.twitter}
              target="_blank"
              rel="noopener"
              aria-label="CheriPic on X"
              title="Twitter"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M2.6 2.75h6.1l4.4 5.9 5.1-5.9h2.9l-6.7 7.7 7.3 9.8h-6.1l-4.7-6.3-5.4 6.3H2.6l7-8.1L2.6 2.75z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="foot-social"
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener"
              aria-label="CheriPic on WhatsApp"
              title="WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M2.9 21.1l1.35-4.75A9.05 9.05 0 1 1 7.75 19.7L2.9 21.1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.15 7.6c.33 0 .55.12.68.44l.66 1.55c.1.24 0 .45-.13.64l-.55.66c-.14.18-.2.35 0 .66.44.77 1.32 1.65 2.2 2.09.31.14.44.11.66-.09l.55-.66c.2-.2.42-.24.66-.13l1.55.77c.24.13.35.31.35.55 0 .88-.77 1.65-1.65 1.65-2.86 0-6.27-3.41-6.27-6.27 0-.88.66-1.76 1.43-1.76z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          {/* <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a> */}
        </div>

        <div className="foot-col">
          <h4>Platform</h4>
          <a href="#how">How It Works</a>
          <a href="#join">Early Access</a>
          <a href="https://course.cheripic.net/" target="_blank" rel="noopener noreferrer">Academy</a>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <span>Clarity Before Connection</span>
        <span className="foot-legal">
          <a
            href="/privacy-policy"
            className="foot-legal-link"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy-policy");
            }}
          >
            Privacy Policy
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href="/privacy-policy"
            className="foot-legal-link"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy-policy");
            }}
          >
            Disclaimer
          </a>
        </span>
        <span>© 2026 CheriPic. All rights reserved.</span>
      </div>
    </footer>
  );
}