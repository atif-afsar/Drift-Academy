import React from "react";
import { motion } from "framer-motion";

const teaching = [
  {
    title: "Foundational Concept Building",
    desc: "Every student starts with strong basics for long-term mastery.",
  },
  {
    title: "Daily Practice & Assessments",
    desc: "Hands-on tasks and structured evaluations ensure consistency.",
  },
  {
    title: "Personalized Doubt-Clearing",
    desc: "1-on-1 mentorship to resolve conceptual challenges.",
  },
  {
    title: "Advanced Problem Solving",
    desc: "Industry-grade exercises to boost real-world confidence.",
  },
];

export default function AboutTeaching() {
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
          Our Teaching
          <span className="text-[#f6821c]"> Methodology</span>
        </motion.h2>

        {/* Card Grid with Stagger */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            },
          }}
        >
          {teaching.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.04, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
              className="bg-white p-8 rounded-xl shadow-md border cursor-pointer transition"
            >
              <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
              <p className="text-gray-600">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
