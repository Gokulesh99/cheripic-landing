import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import Eyebrow from "./Eyebrow.jsx";
import founderImage from "../assets/founder.jpg";


export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-glow" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal as={Eyebrow}>Clarity Before Connection</Reveal>
          <Reveal as="h1" delay=".08s">
            The Wrong Relationship Rarely Feels Wrong&nbsp;At&nbsp;First.
          </Reveal>
          <Reveal as="p" className="lead" delay=".16s">
            CheriPic helps you recognize patterns, understand compatibility, and
            build clarity <span className="serif-accent">before</span> emotional
            attachment takes over.
          </Reveal>
          <Reveal className="hero-actions" delay=".24s">
            <Button href="#join" variant="primary" withArrow>Join Early Access</Button>
            <Button href="#how" variant="ghost">See How It Works</Button>
          </Reveal>
          <Reveal as="p" className="hero-micro" delay=".32s">
            Built for people who want meaningful connection without repeating the
            same relationship mistakes.
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay=".2s">
          <div className="frame">
            <img src={founderImage} alt="A moment of reflection before connection" />
            <span className="hero-tag">Choose with clarity.</span>
          </div>
        </Reveal>
      </div>
    </header>
  );
}