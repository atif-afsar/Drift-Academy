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
          Drift Academy is the perfect amalgamation of honesty, hard work, discipline, passion, and dedication. We believe that education is the steppingstone towards the success of each student. Drift Academy is the stepping-stone that many students can step on and achieve their dreams of getting admissions in the best medical and engineering colleges. Our institute has a team of eminent faculties expert in their respective disciplines. Our mission is to give selections to most of the students and not only of the best. We have been teaching since we were graduate students; this gave us a phase of transition in which we were on either side of the table. The faculty team that has impeccable record of selections in NEET/ JEE entrance exam has been put together to continue their legacy in a grandeur manner, Due to this, Drift Academy has become a leading premier coaching institute for preparation of medical and engineering entrance exams in Aligarh.
         

          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed"
          >
            we believe that every student has the potential to crack NEET or JEE — all they need is the right guidance, personal attention, and a focused environment. Our mission is to transform sincere aspirants into confident, result-oriented NEET - JEE achievers.
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
