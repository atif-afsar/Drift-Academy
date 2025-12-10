import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Experienced Mentors",
    desc: "Learn from industry professionals with real-world expertise.",
  },
  {
    title: "Small Batch Sizes",
    desc: "Focused attention with personalized learning experience.",
  },
  {
    title: "Proven Results",
    desc: "Our students consistently achieve amazing career outcomes.",
  },
];

export default function AboutWhyChoose() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Why Choose Drift <span className="text-[#f6821c]">Academy?</span>
        </motion.h2>

        {/* Cards with Stagger Effect */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-md rounded-xl p-8 border border-gray-100 cursor-pointer hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
