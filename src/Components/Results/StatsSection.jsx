import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: "50+", label: "Top 100 Ranks" },
    { number: "95%", label: "Selection Rate" },
    { number: "5,000+", label: "Happy Students" },
    { number: "20+", label: "Years of Experience" },
  ];

  // Parent container animation (stagger)
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card animation
  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="w-full py-12 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            className="p-6 bg-gray-100 rounded-xl text-center border shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-3xl font-bold heading-primary">{s.number}</h2>
            <p className="text-gray-700">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
