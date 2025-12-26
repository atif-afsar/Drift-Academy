import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full mt-20 relative overflow-hidden">
      <div className="relative w-full h-[360px] sm:h-[450px] md:h-[550px] lg:h-[680px]">

        {/* Background Image */}
        <img
          src="/hero-img/image.jpg"
          alt="hero-bg"
          className="w-full h-full object-cover object-center brightness-90"
        />

        {/* Dark overlay for mobile readability */}
        <div className="absolute inset-0 bg-black/10 md:bg-black/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24">

            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight text-center md:text-left">
                Achieve Your{" "}
                <span className="text-[#f6821c]">Dream</span>
              </h1>

              <p className="mt-3 text-white/90 text-sm sm:text-lg md:text-2xl text-center md:text-left">
                Expert guidance and proven results to unlock your potential.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="bg-[#f6821c] hover:bg-white text-white hover:text-[#f6821c] font-semibold text-sm sm:text-lg md:text-xl px-6 py-3 rounded-lg shadow-lg transition-all duration-300 text-center"
                >
                  ENROLL NOW
                </Link>

                <a
                  href="tel:+917300666551"
                  className="bg-white hover:bg-[#f6821c] text-[#f6821c] hover:text-white font-semibold text-sm sm:text-lg md:text-xl px-6 py-3 rounded-lg shadow-lg transition-all duration-300 text-center"
                >
                  Call Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
