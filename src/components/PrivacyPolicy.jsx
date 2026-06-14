import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { navigate } from "../hooks/useRoute.js";
import {
  PRIVACY_META,
  PRIVACY_SECTIONS,
  PRIVACY_ACKNOWLEDGEMENT,
} from "../data/privacy.js";

function Block({ block }) {
  switch (block.type) {
    case "sub":
      return <h3 className="legal-sub">{block.text}</h3>;
    case "ul":
      return (
        <ul className="legal-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "email":
      return (
        <p className="legal-p">
          <a className="legal-link" href={`mailto:${block.text}`}>
            {block.text}
          </a>
        </p>
      );
    default:
      return <p className="legal-p">{block.text}</p>;
  }
}

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="legal">
        <header className="legal-hero">
          <div className="wrap">
            <p className="eyebrow">Legal</p>
            <h1>{PRIVACY_META.title}</h1>
            <p className="legal-scope">{PRIVACY_META.scope}</p>

            <dl className="legal-meta">
              <div>
                <dt>Effective Date</dt>
                <dd>{PRIVACY_META.effectiveDate}</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>{PRIVACY_META.platform}</dd>
              </div>
              <div>
                <dt>Owned &amp; Operated By</dt>
                <dd>{PRIVACY_META.operatedBy}</dd>
              </div>
              <div>
                <dt>Websites</dt>
                <dd>{PRIVACY_META.websites.join(" · ")}</dd>
              </div>
              <div>
                <dt>Support</dt>
                <dd>
                  <a
                    className="legal-link"
                    href={`mailto:${PRIVACY_META.supportEmail}`}
                  >
                    {PRIVACY_META.supportEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="wrap legal-body">
          {PRIVACY_SECTIONS.map((section) => (
            <section key={section.n} className="legal-section">
              <h2>
                <span className="legal-num">{section.n}</span>
                {section.title}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}

          <section className="legal-section legal-ack">
            <h2>Final Acknowledgement</h2>
            <p className="legal-p">{PRIVACY_ACKNOWLEDGEMENT.intro}</p>
            <ul className="legal-list">
              {PRIVACY_ACKNOWLEDGEMENT.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="legal-copyright">
              © 2026 Cave Xpert Inc. All Rights Reserved.
            </p>
          </section>

          <div className="legal-back">
            <a
              href="/"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
