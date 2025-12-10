import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-[#0A1A66] text-white rounded-2xl py-12 px-6 md:px-16 text-center shadow-lg"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold leading-snug text-white"
        >
          Ready to Start Your <span className="text-accent">journey? </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="text-white/80 mt-3 text-base md:text-lg max-w-2xl mx-auto"
        >
          Join Drift Academy and take the next step towards a successful academic future.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.08, y: -3 }} transition={{ duration: 0.2 }}>
            <Link
              to="/contact"
              className="mt-6 inline-block bg-[#f6821c] text-white font-bold 
                     px-8 py-3 rounded-lg text-lg hover:bg-yellow-600 transition"
            >
              Enroll Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
