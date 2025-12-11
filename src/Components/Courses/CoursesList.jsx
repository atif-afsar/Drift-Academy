import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const courses = [
  {
    tag: "For Class XI & XII",
    title: "JEE Advanced Program",
    desc: "A 2-Year Integrated Program covering Physics, Chemistry, and Maths...",
    points: ["Live Classes", "Doubt Sessions", "Comprehensive Test Series"],
    button: "Enroll Now",
  },
  {
    tag: "For Class XI, XII & Droppers",
    title: "NEET Mastery Course",
    desc: "Focused preparation for Biology, Physics, and Chemistry...",
    points: ["Exam-Pattern Practice", "Expert Biology Faculty", "Regular Mock Tests"],
    button: "Enroll Now",
  },
  {
    tag: "For Class X Students",
    title: "AMU XI-Entrance Prep",
    desc: "Specialized coaching covering complete syllabus for AMU entrance...",
    points: ["Complete Syllabus Coverage", "Previous Year Papers", "Interview Guidance"],
    button: "Enroll Now",
  },
  {
    tag: "For Junior Classes",
    title: "NTSE / Olympiad Foundation",
    desc: "Build a strong base with focus on logical reasoning...",
    points: ["Logical Reasoning", "Advanced Concepts", "Problem-Solving Skills"],
    button: "Enquire Now",
  },
  {
    tag: "For Class IX & X",
    title: "School Foundation Program",
    desc: "Strengthen fundamentals for board exams...",
    points: ["Board Exam Focus", "Concept Clarity", "Competitive Edge"],
    button: "Enquire Now",
  },
];

export default function CoursesList() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Premier <span className="text-[#f6821c]">Courses</span>
        </motion.h2>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-xs bg-yellow-100 text-yellow-700 inline-block px-3 py-1 rounded mb-3">
                {course.tag}
              </p>

              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>

              <p className="text-gray-600 text-sm mb-4">{course.desc}</p>

              <ul className="space-y-2 mb-6">
                {course.points.map((p, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-yellow-500 text-lg">✔</span> {p}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link to="/contact">
                <motion.button
                  className="bg-[#f6821c] text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition w-full text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {course.button}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
