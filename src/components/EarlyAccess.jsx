import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { LINKS } from "../data/content.js";

export default function EarlyAccess() {
  return (
    <section className="sec s8" id="join">
      <Reveal className="wrap inner">
        <Eyebrow centered>Early Access</Eyebrow>
        <h2>Become One Of The First Members.</h2>
        <p className="lead">
          CheriPic is opening early access to people who believe relationships
          deserve more clarity, care, and intention. Join us as we build a new
          category in relationship intelligence.
        </p>
        <div className="hero-actions">
          <Button href={LINKS.earlyAccessMailto} variant="primary" withArrow>
            JOIN FOR FREE
          </Button>
          <Button href={LINKS.instagram} variant="ghost" target="_blank" rel="noopener">
            Follow @cheripic_official
          </Button>
        </div>
      </Reveal>
    </section>
  );
}