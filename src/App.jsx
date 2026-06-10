import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Insights from "./components/Insights.jsx";
import NotADatingApp from "./components/NotADatingApp.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import CheriAI from "./components/CheriAI.jsx";
import Experiences from "./components/Experiences.jsx";
import WhoFor from "./components/WhoFor.jsx";
import EarlyAccess from "./components/EarlyAccess.jsx";
import Standard from "./components/Standard.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Insights />
        <NotADatingApp />
        <HowItWorks />
        <CheriAI />
        <Experiences />
        <WhoFor />
        <EarlyAccess />
        <Standard />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}