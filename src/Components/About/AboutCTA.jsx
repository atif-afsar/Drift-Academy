import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ResultsCTA() {
  return (
    <section className="w-full py-16 bg-yellow-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 heading-primary"
        >
          Ready to Start Your Success{" "}
          <span className="text-accent">Story?</span>
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-2xl mx-auto mb-6"
        >
          Join thousands of students who trusted Drift Academy to achieve their dreams.
        </motion.p>

        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="bg-[#f6821c] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md"
          >
            <Link to="/contact">
              Explore Our Programs
            </Link>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
