import useScrolled from "../hooks/useScrolled.js";
import logoImage from "../assets/logo.png";
import { navigate } from "../hooks/useRoute.js";

export default function Navbar() {
  const scrolled = useScrolled(40);
  const onHome = window.location.pathname === "/";

  // On the landing page keep the native in-page anchors (smooth scroll);
  // from any other route, navigate home first via the router.
  const goHome = (e) => {
    if (onHome) return;
    e.preventDefault();
    navigate("/");
  };
  const goJoin = (e) => {
    if (onHome) return;
    e.preventDefault();
    navigate("/#join");
  };

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="wrap nav-inner">
        <a href={onHome ? "#top" : "/"} className="nav-logo" onClick={goHome}>
          <img
            src={logoImage}
            alt="CheriPic — Clarity Before Connection"
            width="480"
            height="320"
            fetchPriority="high"
            decoding="async"
          />
        </a>
        <a href={onHome ? "#join" : "/#join"} className="nav-cta" onClick={goJoin}>
          Join Early Access
        </a>
      </div>
    </nav>
  );
}