import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {

  const handleReadNow = () => {
    const blogsSection = document.querySelector('[data-blogs-grid]');
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: window.scrollY + 800, behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className="w-full bg-[#0A1A66] text-white py-30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

        {/* LEFT TEXT */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            Get in Touch With <br />
            <span className="text-accent">Drift Academy</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl font-medium text-gray-300"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
          >
            "Your dreams deserve the right guidance."
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-gray-300"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }}
          >
           At Drift Academy, we believe the right guidance at the right time can change everything.
           Connect with us today, and let us help your child move confidently toward JEE, NEET, and AMU goals.
          </motion.p>

          {/* Button */}
          <motion.button
            onClick={handleReadNow}
            className="bg-[#f6821c] text-white px-6 py-3 font-semibold rounded-lg shadow-sm hover:bg-yellow-600"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
            }}
          >
           Contact Now
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src="/images/contact1.png"
            alt="students discussing"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
