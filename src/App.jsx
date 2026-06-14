import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Insights from "./components/Insights.jsx";
import useRoute from "./hooks/useRoute.js";

// Lazy load below-the-fold components
const NotADatingApp = lazy(() => import("./components/NotADatingApp.jsx"));
const HowItWorks = lazy(() => import("./components/HowItWorks.jsx"));
const CheriAI = lazy(() => import("./components/CheriAI.jsx"));
const Experiences = lazy(() => import("./components/Experiences.jsx"));
const WhoFor = lazy(() => import("./components/WhoFor.jsx"));
const EarlyAccess = lazy(() => import("./components/EarlyAccess.jsx"));
const Standard = lazy(() => import("./components/Standard.jsx"));
const FinalCta = lazy(() => import("./components/FinalCta.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy.jsx"));

export default function App() {
  const path = useRoute();

  if (path === "/privacy-policy") {
    return (
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <PrivacyPolicy />
      </Suspense>
    );
  }

  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Insights />
        <Suspense fallback={<div style={{ minHeight: "50vh" }} />}>
          <NotADatingApp />
          <HowItWorks />
          <CheriAI />
          <Experiences />
          <WhoFor />
          <EarlyAccess />
          <Standard />
          <FinalCta />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}