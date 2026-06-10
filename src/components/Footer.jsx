import { LINKS } from "../data/content.js";
import logoImage from "../assets/logo.png";


export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <div className="fl">
            <img src={logoImage} alt="CheriPic — Clarity Before Connection" />
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
          <a href="#top">Relationship Intelligence</a>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <span>© 2026 CheriPic. All rights reserved.</span>
        <span>Clarity Before Connection</span>
      </div>
    </footer>
  );
}