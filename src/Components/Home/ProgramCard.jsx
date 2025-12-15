import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProgramCard({ image, title, subtitle, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* IMAGE */}
      <div className="w-full aspect-[4/3] bg-[#F7F8FA] flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-accent font-medium mt-1">
          {subtitle}
        </p>

        <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>

        {/* CTA */}
        <Link to={"https://www.youtube.com/results?search_query=drift+academy+aligarh"}>
        <span className="mt-5 inline-flex items-center text-sm font-medium text-gray-900 hover:text-accent group-hover:underline color-">
          Learn More
          <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
        </Link>
      </div>
    </motion.div>
  );
}
