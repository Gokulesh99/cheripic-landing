import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { STEPS } from "../data/content.js";

export default function HowItWorks() {
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <Reveal style={{ maxWidth: "50ch" }}>
          <Eyebrow>The Journey</Eyebrow>
          <h2>How CheriPic Works</h2>
        </Reveal>

        <div className="steps">
          {STEPS.map((step, i) => (
            <Reveal className="step" key={step.si} delay={`${i * 0.1}s`}>
              <div className="si">{step.si}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}