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
           Drift Academy was born from a simple belief: every student deserves the right guidance to achieve big dreams. We help learners prepare for competitive exams like NEET, JEE, and AMU by building strong fundamentals, smart study habits, and the confidence needed to face exams fearlessly. Our focus isn’t just on teaching—it’s on shaping focused, motivated, and successful students.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed"
          >
            Our team is guided by experienced mentors from across the country, each bringing unique insights and years of proven teaching experience. At Drift Academy, we don’t believe in one-size-fits-all learning. Every student receives personal attention, a clear study plan, and continuous practice—so they can grow with confidence and reach their true academic potential.
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
            src="/about-img/team.png"
            alt="our team"
            className="rounded-2xl w-full shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
