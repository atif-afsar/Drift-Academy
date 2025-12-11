import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CoursesHero() {
  return (
    <section className="w-full bg-[#0A1A66] text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">

        {/* Left Text */}
        <motion.div 
          className="md:text-left pt-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Path to <br /> Academic Excellence <br />
            <span className="text-[#f6821c]">Start Here</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 mb-8 text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert-led coaching for JEE, NEET, AMU and foundation courses designed for success.
          </motion.p>

          <Link to="/contact">
            <motion.button
              className="bg-[#f6821c] text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Enroll Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="/images/courses.png"
            alt="students-learning"
            className="w-full max-w-md pt-2 sm:max-w-lg md:max-w-full rounded-xl h-64 sm:h-80 md:h-[420px] lg:h-[500px] object-cover shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
