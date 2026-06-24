import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import Eyebrow from "./Eyebrow.jsx";

// Served from /public as an optimized WebP and preloaded in index.html so it
// can start downloading before the React bundle parses (faster LCP).
const founderImage = "/newFounder.webp";


export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-glow" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal as="h1" delay=".08s">
            Find the <span className="hl">Right Romantic Partner.</span>
          </Reveal>
          <Reveal className="hero-divider" delay=".12s">
            <span className="hero-heart" aria-hidden="true">&#9829;</span>
          </Reveal>
          <Reveal as="p" className="lead" delay=".16s">
            CheriPic helps you avoid the wrong relationships and choose the{" "}
            <span className="hl">right person</span> before you fall in love.
          </Reveal>
          <Reveal className="hero-actions" delay=".24s">
            <Button href="#join" variant="primary" withArrow>JOIN FOR FREE</Button>
            <Button href="#how" variant="ghost">See How It Works</Button>
          </Reveal>
          <Reveal as="p" className="hero-micro" delay=".32s">
            Built for people who want meaningful connection without repeating the
            same relationship mistakes.
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay=".2s">
          <div className="frame">
            <img
              src={founderImage}
              alt="A moment of reflection before connection"
              width="733"
              height="1100"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </Reveal>
      </div>
    </header>
  );
}