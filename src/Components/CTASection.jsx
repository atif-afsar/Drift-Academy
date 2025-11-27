import React from "react";

export default function CTASection() {
  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-[#0A2540] text-white rounded-2xl py-12 px-6 md:px-16 text-center shadow-lg">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-extrabold leading-snug">
          Ready to Start Your Journey?
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Join Drift Academy and take the next step towards a successful academic future.
        </p>

        {/* CTA Button */}
        <a
          href="/enroll"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 font-semibold 
                     px-8 py-3 rounded-lg text-lg hover:bg-yellow-500 transition"
        >
          Enroll Now
        </a>

      </div>
    </section>
  );
}
