import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { AI_FEATURES } from "../data/content.js";

export default function CheriAI() {
  return (
    <section className="sec s5">
      <div className="wrap s5-grid">
        <Reveal>
          <Eyebrow>Meet CheriAI</Eyebrow>
          <h2>CheriAI</h2>
          <div className="sub">Your Relationship Clarity Coach</div>
          <p className="lead">
            CheriAI helps you reflect more clearly, ask better questions, identify
            patterns, and make calmer relationship decisions.
          </p>
          <p className="note">
            It does not replace human connection. It helps you enter connection
            with greater awareness.
          </p>
        </Reveal>

        <Reveal delay=".12s">
          <ul className="ai-features">
            {AI_FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}