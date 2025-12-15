import React from "react";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
  const programs = [
  {
    image: "/hero-img/Neet - 2.png",
    title: "JEE Preparation",
    subtitle: "Classes 11–12",
    description:
      "Build a solid foundation for engineering with guided learning, smart strategies, and mentors who simplify even the toughest concepts.",
  },
  {
    image: "/hero-img/Neet - 1.png",
    title: "NEET Preparation",
    subtitle: "Classes 11–12",
    description:
      "Master the NEET journey with clear explanations, regular practice, and personal support designed to boost both confidence and scores.",
  },
  {
    image: "/hero-img/Neet - 3.png",
    title: "AMU Entrance",
    subtitle: "Classes 9–12",
    description:
      "Prepare for AMU the right way with focused study material, targeted exercises, and mock tests that mirror the real exam experience.",
  },
];


  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold heading-primary">
          Explore Our Flagship <span className="text-accent">Programs</span>
        </h2>
        <p className="mt-3 text-gray-600 md:text-lg">
          Choose the path that aligns with your goals.
        </p>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((p, i) => (
          <ProgramCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
