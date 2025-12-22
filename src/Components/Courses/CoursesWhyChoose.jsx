import { motion } from "framer-motion";

const reasons = [
  {
    icon: "📘",
    title: "Expert Faculty",
    desc: "Learn from experienced educators who are masters in their fields.",
  },
  {
    icon: "👨‍🏫",
    title: "Personalized Mentorship",
    desc: "Receive guidance tailored to your learning needs.",
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    desc: "Join a legacy of success with top ranks in competitive exams.",
  },

  // 🔽 NEW CARDS
  {
    icon: "🧠",
    title: "NEET-Qualified Faculty",
    desc: "All our teachers have personally cleared NEET. They don’t just teach — they mentor from real exam experience.",
  },
  {
    icon: "🤝",
    title: "Dedicated Student Mentorship",
    desc: "Each student or batch is assigned a personal mentor for academic guidance and emotional support — anytime, anywhere.",
  },
  {
    icon: "📡",
    title: "Real-Time Attendance Alerts",
    desc: "Our smart biometric system instantly notifies parents when students enter or leave the institute.",
  },
  {
    icon: "📊",
    title: "DRIFT All India Test Series (DATS)",
    desc: "Students compete nationwide to assess real-time preparation, performance, and ranking.",
  },
  {
    icon: "🚀",
    title: "Foundation Programs (Class 8–10)",
    desc: "Olympiad + NEET foundation courses designed to build strong academic roots from an early stage.",
  },
];


export default function CoursesWhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading Animation */}
        <motion.h2
          className="text-3xl font-bold mb-4 heading-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Drift <span className="text-accent">Academy</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We provide the best learning environment and resources to help our students succeed.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              {/* Icon Animation */}
              <motion.div
                className="text-4xl mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2 heading-primary">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
