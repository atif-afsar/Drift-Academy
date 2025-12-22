import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faculty = [
  { 
    name: "Dr. Vaqui Siddiqui (Biology)", 
    role: "11 Years of Teaching Experience", 
    image: "/about-img/azim.png", 
    des: "A BUMS graduate from Lucknow University, he brings not just academic expertise but also a strong passion for nurturing young minds. He is known for his enthusiastic approach and in-depth subject expertise, clear explanations and real-life applications that make complex concepts easy to understand. Dr. Siddiqui prioritizes conceptual clarity along with exam strategies. His teaching methodology includes interactive lessons, doubt-clearing sessions, and customized study plans for each student. Strong interpersonal skills to connect with students during individual sessions (one-on-one sessions). Dr. Siddiqui's guidance has helped students consistently achieve better ranks and confidence in one of India's toughest medical entrance exams. He is committed to making learning enjoyable and effective." 
  },
  { 
    name: "Nadeem Sir (Physics)", 
    role: "18 Years of Teaching Experience", 
    image: "/about-img/nadeem.png", 
    des: "Post-Graduate in Electrical Engineering with 9.8 CGP and two times GATE Qualified. A deep understanding of students’ mindset and vast knowledge of modern competition patterns enables him to design highly efficient content for NEET-JEE and other entrance exams. His unique teaching methodology makes Physics a strength for every student. He provides motivation, emotional support, and guidance for time management, stress reduction, and effective study techniques through sessions and discussions." 
  },
  { 
    name: "Mr. Rizwan Qadri (Mathematics)", 
    role: "8 Years of Teaching Experience", 
    image: "/about-img/kushh.png", 
    des: "B.Tech & M.Tech from Aligarh Muslim University (AMU). With extensive experience in mentoring students for JEE (Main & Advanced), AMU Entrance, and other competitive exams, he brings conceptual clarity and rigorous practice. His engaging teaching style simplifies complex problems and sharpens problem-solving skills, consistently producing top-performing students." 
  },
  { 
    name: "Nawab Sir (Chemistry)", 
    role: "10 Years of Teaching Experience", 
    image: "/about-img/Shoib.png", 
    des: "M.Tech from IIT Guwahati and B.Tech from AMU with over a decade of teaching experience in Chemistry. He has guided thousands of students toward success in AIIMS and government medical colleges. His approach emphasizes NCERT fundamentals, conceptual clarity, and simplification of complex topics. His deep subject mastery and experience make him a trusted mentor for competitive exams." 
  },
];

export default function AboutFaculty() {
  const [activeFaculty, setActiveFaculty] = useState(null);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Meet Our <span className="text-[#f6821c]">Expert Faculty</span>
        </motion.h2>

        {/* Faculty Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {faculty.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-36 h-36 mx-auto rounded-full object-cover shadow-md"
              />

              <h3 className="text-xl font-semibold mt-6">{f.name}</h3>
              <p className="text-[#f6821c] font-medium">{f.role}</p>

              {/* Short Description */}
              <p className="text-gray-600 text-sm mt-4 line-clamp-3">
                {f.des}
              </p>

              {/* Read More */}
              <button
                onClick={() => setActiveFaculty(f)}
                className="mt-4 text-[#f6821c] font-semibold hover:underline"
              >
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
     <AnimatePresence>
  {activeFaculty && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 flex items-end md:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveFaculty(null)} // tap outside to close
    >
      {/* Modal Container */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()} // prevent close on inner click
        className="
          bg-white w-full md:max-w-3xl
          rounded-t-3xl md:rounded-2xl
          max-h-[90vh]
          flex flex-col
        "
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-10 border-b px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Faculty Profile
          </h3>
          <button
            onClick={() => setActiveFaculty(null)}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6">
          <div className="text-center">
            <img
              src={activeFaculty.image}
              alt={activeFaculty.name}
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
            />

            <h4 className="text-2xl font-bold mt-5">
              {activeFaculty.name}
            </h4>
            <p className="text-[#f6821c] font-medium">
              {activeFaculty.role}
            </p>
          </div>

          <p className="text-gray-700 text-sm mt-6 leading-relaxed text-justify">
            {activeFaculty.des}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
