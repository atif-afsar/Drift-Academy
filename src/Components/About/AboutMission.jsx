import React from "react";

export default function AboutMission() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        
        <img 
          src="/your-mission-image.jpg" 
          alt="Our mission" 
          className="rounded-2xl w-full shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to deliver high-quality solutions by combining innovation,
            design, and user-centric experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
