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
          <a href={LINKS.instagram} target="_blank" rel="noopener">@cheripic_official</a>
          <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
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