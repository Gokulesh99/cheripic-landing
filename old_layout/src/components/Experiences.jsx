import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { EXPERIENCES } from "../data/content.js";

export default function Experiences() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="s6-head">
          <Eyebrow>From Connection To Experience</Eyebrow>
          <h2>Where Meaningful Connections Become Memorable Moments.</h2>
          <p className="lead">
            CheriPic is building a global ecosystem of carefully selected
            experiences designed to help meaningful connections become moments
            worth remembering.
          </p>
        </Reveal>

        <Reveal className="exp-grid">
          {/* {EXPERIENCES.map(({ id, title, soon, image }) => (
            <div className="exp" key={id}>
              {soon && <span className="soon">Coming Soon</span>}
              <div>
                {image && <img src={image} alt={title} />}
                <div className="ttl">{title}</div>
              </div>
            </div>
          ))} */}

          {EXPERIENCES.map((title) => (
            <div className="exp" key={title}>
              <span className="soon">Coming Soon</span>
              <div className="ttl">{title}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}