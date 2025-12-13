import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ResultsHero() {
  return (
    <motion.section
      className="w-full py-16 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SIDE */}
        <div>
          <motion.h1
            className="text-4xl pt-6 md:text-6xl font-bold leading-tight heading-primary"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Success Stories <br /> That <span className="text-accent">Inspire</span>
          </motion.h1>

          <motion.p
            className="text-gray-700 md:text-xl mt-4 max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
           Discover how Drift Academy has helped students turn their dreams into reality—earning top ranks and securing admissions through hard work and expert guidance.
          </motion.p>

          {/* BUTTONS WITH STAGGER */}
          <motion.div
            className="flex gap-4 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* Button 1 */}
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#f6821c] text-white px-6 py-3 font-semibold rounded-lg shadow-sm hover:bg-yellow-600"
            >
              <a href="https://www.youtube.com/@driftacademypvtltd/featured" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </motion.button>

            {/* Button 2 */}
            <Link to="/courses">
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-gray-200 px-6 py-3 font-semibold rounded-lg hover:bg-gray-300"
              >
                View Courses
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <motion.div
          className="w-full lg:mt-8 rounded-2xl overflow-hidden shadow-lg border"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/result.png"
            alt="Students Celebrating"
            className="w-full h-auto object-cover"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
