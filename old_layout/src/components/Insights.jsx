import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { INSIGHTS } from "../data/content.js";

export default function Insights() {
  return (
    <section className="sec s2">
      <div className="wrap">
        <Reveal className="s2-head">
          <Eyebrow>The Real Beginning</Eyebrow>
          <h2>Most Relationship Mistakes Start Long Before The Relationship Does.</h2>
          <p className="lead">
            People rarely choose the wrong person because they are careless. They
            choose the wrong person because chemistry moves faster than clarity. By
            the time the warning signs become obvious, emotions are already
            involved. CheriPic exists to slow the decision down — just enough for
            the truth to catch up.
          </p>
        </Reveal>

        <div className="insights">
          {INSIGHTS.map((item, i) => (
            <Reveal className="insight" key={item.num} delay={`${i * 0.1}s`}>
              <div className="num">{item.num}</div>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}