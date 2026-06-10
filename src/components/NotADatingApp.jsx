import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { PILLARS } from "../data/content.js";

export default function NotADatingApp() {
  return (
    <section className="sec s3">
      <div className="wrap">
        <Reveal className="s3-head">
          <Eyebrow>A Different Standard</Eyebrow>
          <h2>This Is Not Another Dating App.</h2>
          <p className="lead">
            Dating apps help you meet people. CheriPic helps you understand whether
            a connection deserves your time, your attention, and your emotional
            investment.
          </p>
        </Reveal>

        <div className="cols3">
          {PILLARS.map((p, i) => (
            <Reveal className="col-card" key={p.title} delay={`${i * 0.1}s`}>
              <div className="k">{p.k}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}