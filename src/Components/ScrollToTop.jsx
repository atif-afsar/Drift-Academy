// src/Components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If you use Locomotive/Lenis/etc, try to use its API first.
    // We check common globals: window.locoScroll (Locomotive) or window.lenis (Lenis).
    const smooth = window.locoScroll || window.lenis || null;

    // If GSAP ScrollTrigger exists, clear any pinned scroll memory
    if (window.gsap && window.gsap.ScrollTrigger) {
      try {
        window.gsap.ScrollTrigger.clearScrollMemory?.();
        // Refresh after a short tick so ScrollTrigger recalculates positions.
        setTimeout(() => {
          window.gsap.ScrollTrigger.refresh();
        }, 50);
      } catch (e) {
        // ignore
      }
    }

    if (smooth && typeof smooth.scrollTo === "function") {
      // Locomotive: smooth.scrollTo accepts 0 or an element
      try {
        // scroll to top (0) quickly
        smooth.scrollTo(0, { duration: 0, disableLerp: true });
      } catch (err) {
        // fallback to an element-based API
        try {
          smooth.scrollTo(document.body, { duration: 0, disableLerp: true });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }
    } else {
      // No smooth lib available — fallback to normal scroll
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // We want this effect to run whenever the route changes
  }, [pathname]);

  return null;
}
