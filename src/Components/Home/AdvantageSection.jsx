import React from "react";
import { HiAcademicCap, HiBookOpen, HiUserGroup, HiTrendingUp } from "react-icons/hi";
import { motion } from "framer-motion";

export default function AdvantageSection() {
  const advantages = [
    {
      id: 1,
      icon: <HiAcademicCap className="text-[#015A9A] text-4xl" />,
      title: "Experienced Faculty",
      desc: "Learn from expert mentors with years of teaching experience.",
    },
    {
      id: 2,
      icon: <HiBookOpen className="text-[#015A9A] text-4xl" />,
      title: "Quality Study Material",
      desc: "Updated notes & exam-focused learning resources.",
    },
    {
      id: 3,
      icon: <HiUserGroup className="text-[#015A9A] text-4xl" />,
      title: "Doubt Support",
      desc: "Dedicated doubt-solving sessions for every student.",
    },
    {
      id: 4,
      icon: <HiTrendingUp className="text-[#015A9A] text-4xl" />,
      title: "Performance Tracking",
      desc: "Regular tests & analytics to track student growth.",
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold heading-primary">
          The Drift Academy<span className="text-accent"> Advantages</span>
        </h2>
        <p className="text-gray-600 mt-2 md:text-lg">
          What makes us the trusted choice for competitive exam preparation.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md border hover:shadow-xl transition cursor-pointer"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              {item.icon}
            </motion.div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold text-center text-gray-900 heading-primary">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-center text-sm md:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
