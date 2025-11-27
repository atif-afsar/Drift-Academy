import React from "react";

export default function Hero() {
  return (
    <section className="w-full mt-20 relative">
      
      {/* Hero Container */}
      <div className="relative w-full h-[420px] sm:h-[460px] md:h-[520px] lg:h-[620px]">

        {/* Background Image */}
        <img
          src="./public/assets/images/hero.jpg"  // Correct React path
          alt="students"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-24">
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-2xl leading-tight">
            Achieve Your <span className="text-yellow-400">Dream</span>
          </h1>

          <p className="mt-3 text-white/90 text-base sm:text-lg md:text-2xl max-w-xl">
            With Expert Guidance & Proven Results.
          </p>

          <a
            href="/enroll"
            className="mt-6 bg-yellow-400 text-gray-900 text-base sm:text-lg md:text-xl font-semibold px-6 py-3 rounded-md w-fit hover:bg-yellow-500 transition"
          >
            Enroll Now
          </a>
        </div>

      </div>

    </section>
  );
}
