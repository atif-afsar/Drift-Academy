import { motion } from "framer-motion";

export default function ResultsShowcase() {
  const resultImages = [
    "/results/result3.png",
    "/results/result2.png",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold heading-primary">
            Our <span className="text-accent">Outstanding Results</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Celebrating the success of our students who have achieved remarkable
            results through dedication, discipline, and expert guidance.
          </p>
        </motion.div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-10">
          {resultImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt={`Result Banner ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
