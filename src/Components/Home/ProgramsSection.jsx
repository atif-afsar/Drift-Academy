import React from "react";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
  const programs = [
    {
      image: "/images/jee.jpg",
      title: "JEE Preparation",
      subtitle: "Classes 11–12",
      description:
        "Advanced coaching tailored for engineering aspirants with expert mentors and structured modules.",
    },
    {
      image: "/images/neet.jpg",
      title: "NEET Preparation",
      subtitle: "Classes 11–12",
      description:
        "Comprehensive medical entrance training with weekly tests, doubt sessions, and personalized evaluation.",
    },
    {
      image: "/images/amu.jpg",
      title: "AMU Entrance",
      subtitle: "Classes 9–12",
      description:
        "Specialized preparation for AMU entrance with exam-focused notes, practice sheets, and mock tests.",
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
