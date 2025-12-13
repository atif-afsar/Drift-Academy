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
  Real Success Stories from <span className="text-accent">AMU XI Entrance</span>
</h2>

<p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
  Every result tells a story of discipline, dedication, and belief. Our students
  have delivered remarkable performances in the <strong>AMU XI Entrance Exam</strong>,
  turning their hard work into real achievements and proud moments for their families.
</p>

<p className="text-gray-700 mt-4 italic text-sm md:text-base">
  “The names may be new, but the success speaks for itself.”
</p>

<p className="text-gray-900 mt-4 font-semibold leading-relaxed">
  ✔ Over 45 successful selections<br />
  ✔ Strong ranks year after year<br />
  ✔ A proven track record of consistent results
</p>

<motion.button
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
  className="bg-[#f6821c] text-white px-6 py-3 mt-4 font-semibold rounded-lg shadow-sm hover:bg-yellow-600"
>
  <a href="https://www.youtube.com/@driftacademypvtltd/featured">
    Watch Student Results
  </a>
</motion.button>

        </motion.div>
      </div>
    </motion.section>
  );
}
