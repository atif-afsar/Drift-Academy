import React from "react";
import { motion } from "framer-motion";

export default function DriftCycleSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold heading-primary mb-4"
          >
            The <span className="text-accent">Drift Cycle</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-base leading-relaxed mb-6"
          >
            Drift Academy follows a structured and proven learning methodology 
            called the <strong>Drift Cycle</strong> — designed to build strong 
            concepts, develop problem-solving ability, and ensure consistent 
            revision and practice. This cycle helps students stay motivated 
            and always exam-ready.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-700 font-medium text-base md:text-lg"
          >
            Enter the Drift Cycle & Enjoy the Pride of Being Successful.
          </motion.p>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-[90%] lg:w-[70%] rounded-2xl overflow-hidden shadow-xl border"
          >
            <img
              src="about-img/image.png"
              alt="Drift Cycle Banner"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
