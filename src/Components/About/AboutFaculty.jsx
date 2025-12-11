import React from "react";
import { motion } from "framer-motion";

const faculty = [
  { 
    name: "Azim Sir", 
    role: "Biology", 
    image: "/about-img/azim.png", 
    des: "BIOLOGY is the study of life, its just not remembering the fact but connecting the dots logically" 
  },
  { 
    name: "Nadeem Sir", 
    role: "Physics", 
    image: "/about-img/nadeem.png", 
    des: "Learning PHYSICS for NEET-JEE is all about creating equations using physical laws and then solving those equations using basic MATHS." 
  },
  { 
    name: "Kush Sir", 
    role: "Mathematics", 
    image: "/about-img/kushh.png", 
    des: "MATHS is the language in which every SCIENCE is qualified. LEARN it to apply." 
  },
  { 
    name: "Sohaib Sir", 
    role: "Chemistry", 
    image: "/about-img/Shoib.png", 
    des: "CHEMISTRY is the science, sometimes with EXPECTATION but that too is another EXPLAINABLE science." 
  },
];

export default function AboutFaculty() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Meet Our Esteemed <span className="text-[#f6821c]">Faculty</span>
        </motion.h2>

        {/* Faculty Grid with Stagger Animation */}
        <motion.div
          className="grid md:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {faculty.map((f, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <motion.img
                src={f.image}
                alt={f.name}
                className="w-32 h-32 object-cover rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <h3 className="text-lg font-semibold mt-4">{f.name}</h3>
              <p className="text-[#f6821c]">{f.role}</p>
              <p className="text-gray-600 text-sm text-center mt-1">{f.des}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
