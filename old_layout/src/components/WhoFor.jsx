import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { WHO_FOR } from "../data/content.js";

export default function WhoFor() {
  return (
    <section className="sec s7">
      <div className="wrap">
        <Reveal style={{ maxWidth: "46ch" }}>
          <Eyebrow>For The Few</Eyebrow>
          <h2>Who CheriPic Is For</h2>
        </Reveal>

        <div className="who-grid">
          {WHO_FOR.map((text, i) => (
            <Reveal className="who" key={text} delay={`${i * 0.05}s`}>
              <span>—</span>
              {text}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}