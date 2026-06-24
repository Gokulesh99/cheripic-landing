import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import Eyebrow from "./Eyebrow.jsx";

export default function FinalCta() {
  return (
    <section className="final">
      <Reveal className="wrap">
        <Eyebrow centered>In Closing</Eyebrow>
        <h2>Choose With Clarity Before You Connect With Your Heart.</h2>
        <p className="lead">
          Because the right relationship is too important to leave entirely to
          chemistry.
        </p>
        <Button href="#join" variant="primary" withArrow>JOIN FOR FREE</Button>
      </Reveal>
    </section>
  );
}