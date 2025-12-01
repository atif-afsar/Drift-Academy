import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white flex items-center justify-center z-[9999]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* LOGO ANIMATION */}
        <motion.img
          src="./public/assets/images/logo.jpeg"  // <--- CHANGE THIS TO YOUR LOGO PATH
          alt="Logo"
          className="w-40 md:w-52"
          initial={{ x: 300, opacity: 0 }}        // start from right
          animate={{
            x: 0,                                // move to center
            opacity: 1,
            scale: [1, 1.08, 1],                 // subtle bounce
          }}
          transition={{
            x: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.4 },
            scale: {
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
