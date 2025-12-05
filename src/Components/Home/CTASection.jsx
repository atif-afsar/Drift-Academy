import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-[#0A1A66] text-white rounded-2xl py-12 px-6 md:px-16 text-center shadow-lg">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-extrabold leading-snug text-white">
          Ready to Start Your <span className="text-accent">journey? </span>
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Join Drift Academy and take the next step towards a successful academic future.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="mt-6 inline-block bg-[#f6821c] text-white font-bold 
                     px-8 py-3 rounded-lg text-lg hover:bg-yellow-600 transition"
        >
          Enroll Now
        </Link>

      </div>
    </section>
  );
}
