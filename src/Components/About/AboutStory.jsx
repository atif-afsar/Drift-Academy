import React from "react";
import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT TEXT BLOCK */}
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
            className="text-3xl font-bold mb-4"
          >
            Our Story, <span className="text-[#f6821c] ">Mission & Vision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed mb-4"
          >
            Drift Academy was founded with a vision to guide students towards top-tier entrance exams such as NEET, JEE, and AMU. Our mission is to provide high-quality coaching that equips learners with strong concepts, disciplined study strategies, and the confidence required to succeed in competitive examinations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed"
          >
            We are led by highly experienced mentors from different parts of the country, bringing diverse expertise and proven teaching methodologies. At Drift Academy, we believe in personalized guidance, structured learning plans, and consistent practice—ensuring every student reaches their full academic potential.
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            src="https://driftacademy.in/images/grp.jpg"
            alt="our team"
            className="rounded-2xl w-full shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
