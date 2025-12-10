import React from "react";
import { motion } from "framer-motion";

export default function ProgramCard({ image, title, subtitle, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col cursor-pointer"
    >
      {/* Image */}
      <motion.div
        className="w-full h-40 rounded-lg overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Text */}
      <motion.h3
        className="mt-4 text-xl font-semibold text-gray-900 heading-primary"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      <p className="text-sm text-gray-500">{subtitle}</p>

      <p className="mt-3 text-gray-700 text-sm leading-relaxed">
        {description}
      </p>

      <motion.a
        href="https://www.youtube.com/@driftacademypvtltd/videos"
        className="mt-4 text-zinc-700 font-semibold hover:underline inline-block"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.3 }}
      >
        Learn More →
      </motion.a>
    </motion.div>
  );
}
