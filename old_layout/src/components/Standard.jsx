import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { STANDARDS } from "../data/content.js";

export default function Standard() {
  return (
    <section className="sec-sm s9">
      <div className="wrap">
        <Reveal style={{ maxWidth: "42ch" }}>
          <Eyebrow>The Difference</Eyebrow>
          <h2>Our Standard Is Different.</h2>
        </Reveal>

        <div className="std">
          {STANDARDS.map((s, i) => (
            <Reveal className="std-i" key={s.mk} delay={`${i * 0.08}s`}>
              <div className="mk">{s.mk}</div>
              <h3>{s.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}