import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // smoothness
      smooth: true,
      lerp: 0.1,            // inertia effect
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,   // mobile smooth
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup
    };
  }, []);

  return null;
}
