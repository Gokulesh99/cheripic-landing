// In-page anchor scrolling.
//
// The native `#hash` jump lands in the wrong section on this site for two
// reasons:
//   1. Everything below the fold is lazy-mounted, so the target element may
//      not exist yet when the link is clicked.
//   2. `section { content-visibility: auto }` leaves off-screen sections at
//      their `contain-intrinsic-size` placeholder height, so the target's
//      offset is measured against heights that are not the real ones.
// So we wait for the element, stop the skipping while we measure, and then
// correct for whatever shifts as images and fonts settle.

const MAX_CORRECTIONS = 3;
const TOLERANCE = 6;

function navOffset() {
  const nav = document.querySelector(".nav");
  return (nav ? nav.offsetHeight : 88) + 8;
}

function topOf(el) {
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - navOffset());
}

// Resolves with the element, or null if it never shows up.
function waitForElement(id, framesLeft = 180) {
  return new Promise((resolve) => {
    const tick = (remaining) => {
      const el = document.getElementById(id);
      if (el || remaining <= 0) return resolve(el);
      requestAnimationFrame(() => tick(remaining - 1));
    };
    tick(framesLeft);
  });
}

// Calls back once the scroll position has held still for a few frames.
function onScrollSettled(cb) {
  let last = window.scrollY;
  let stillFor = 0;
  const tick = () => {
    if (window.scrollY === last) {
      if (++stillFor > 3) return cb();
    } else {
      stillFor = 0;
      last = window.scrollY;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default async function scrollToId(id) {
  const el = await waitForElement(id);
  if (!el) return;

  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Any manual scroll input hands control straight back to the user.
  let aborted = false;
  const abort = () => {
    aborted = true;
  };
  const events = ["wheel", "touchstart", "keydown"];
  events.forEach((e) => window.addEventListener(e, abort, { passive: true }));
  const release = () => {
    root.classList.remove("jump-scroll");
    events.forEach((e) => window.removeEventListener(e, abort));
  };

  root.classList.add("jump-scroll");
  // Two frames: one for the un-skipped sections to lay out, one to measure.
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  if (aborted) return release();

  window.scrollTo({ top: topOf(el), behavior: reduced ? "auto" : "smooth" });

  // Re-measure only once the animation has stopped, so corrections never
  // fight the in-flight smooth scroll.
  let rounds = 0;
  const verify = () => {
    if (aborted) return release();
    const wanted = topOf(el);
    if (Math.abs(wanted - window.scrollY) <= TOLERANCE || ++rounds > MAX_CORRECTIONS) {
      return release();
    }
    window.scrollTo({ top: wanted, behavior: "auto" });
    onScrollSettled(verify);
  };
  onScrollSettled(verify);
}
