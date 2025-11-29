import React from "react";
import { HiAcademicCap, HiBookOpen, HiUserGroup, HiTrendingUp } from "react-icons/hi";

export default function AdvantageSection() {
  const advantages = [
    {
      id: 1,
      icon: <HiAcademicCap className="text-[#015A9A] text-4xl" />,
      title: "Experienced Faculty",
      desc: "Learn from expert mentors with years of teaching experience."
    },
    {
      id: 2,
      icon: <HiBookOpen className="text-[#015A9A] text-4xl" />,
      title: "Quality Study Material",
      desc: "Updated notes & exam-focused learning resources."
    },
    {
      id: 3,
      icon: <HiUserGroup className="text-[#015A9A] text-4xl" />,
      title: "Doubt Support",
      desc: "Dedicated doubt-solving sessions for every student."
    },
    {
      id: 4,
      icon: <HiTrendingUp className="text-[#015A9A] text-4xl" />,
      title: "Performance Tracking",
      desc: "Regular tests & analytics to track student growth."
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold heading-primary">
          The Drift Academy<span className="text-accent"> Advantages</span>
        </h2>
        <p className="text-gray-600 mt-2 md:text-lg">
          What makes us the trusted choice for competitive exam preparation.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <div className="flex justify-center">{item.icon}</div>

            <h3 className="mt-4 text-xl font-semibold text-center text-gray-900 heading-primary">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 text-center text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
