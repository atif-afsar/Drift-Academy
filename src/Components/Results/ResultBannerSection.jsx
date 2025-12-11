import { motion } from "framer-motion";

export default function AmuResultSection() {
  return (
    <motion.section
      className="w-full py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT — Result Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border">
            <img
              src="/results/amu.jpg"
              alt="AMU Entrance Results"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT — Appreciation Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight heading-primary">
            Genuine Results of <span className="text-accent">AMU XI Entrance</span>
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            We are proud to showcase the outstanding performance of our students in
            the <strong>AMU XI Entrance Exam</strong>. Their dedication, consistency,
            and hard work have brought exceptional success and made Drift Academy shine.
          </p>

          <p className="text-gray-700 mt-4 italic text-sm md:text-base">
            “Unknown faces, yet known results.”
          </p>

          <p className="text-gray-900 mt-4 font-semibold">
            ✔ 45+ Selections in AMU  
            ✔ Top Ranks Achieved  
            ✔ Consistent Performance Every Year  
          </p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="bg-[#f6821c] text-white px-6 py-3 mt-3 font-semibold rounded-lg shadow-sm hover:bg-yellow-600"
          >
            <a href="https://www.youtube.com/@driftacademypvtltd/featured">Read More</a>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
