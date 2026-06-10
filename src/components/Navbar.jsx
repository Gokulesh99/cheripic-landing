import useScrolled from "../hooks/useScrolled.js";
import logoImage from "../assets/logo.png";

export default function Navbar() {
  const scrolled = useScrolled(40);

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo">
          <img src={logoImage} alt="CheriPic — Clarity Before Connection" />
        </a>
        <a href="#join" className="nav-cta">Join Early Access</a>
      </div>
    </nav>
  );
}