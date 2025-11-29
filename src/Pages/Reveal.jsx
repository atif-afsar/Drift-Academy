import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: false, // 👈 plays every time
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 80, filter: "blur(8px)" }
      }
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
