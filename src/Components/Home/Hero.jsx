import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full mt-20 relative overflow-hidden">
     
      <div className="relative w-full h-[380px] sm:h-[450px] md:h-[550px] lg:h-[680px]">
       <img
          src="/hero-img/image2.jpg"
          alt="hero-bg"
          className="w-full h-full object-cover brightness-75"
        />

        {/* Content */}
        <div
          className="
          absolute inset-0 
          flex flex-col justify-center 
          px-4 sm:px-6 md:px-10 lg:px-24
          mt-28 sm:mt-32 md:mt-0
        "
        >
          {/* GRADIENT BEHIND TEXT ONLY */}
          <div
            className="
            max-w-2xl p-4 sm:p-6 
            rounded-xl 
           
          "
          >
            <h1
              className="
              text-3xl 
              sm:text-4xl 
              md:text-6xl 
              lg:text-7xl 
              font-extrabold 
              text-white leading-tight
            "
            >
             <span className="text-[#055893]">Achieve Your</span> <span className="text-[#f6821c]">Dream</span>
            </h1>

            <p
              className="
              mt-3 
              text-white/90 
              text-base 
              sm:text-lg 
              md:text-2xl
            "
            >
              With Expert Guidance & Proven Results.
            </p>

            <Link
              to="/contact"
              className="
                mt-5 inline-block 
                bg-[#f6821c] hover:bg-white 
                text-white hover:text-[#f6821c] font-semibold 
                text-sm sm:text-lg md:text-xl 
                px-6 py-3 sm:px-8 sm:py-3 
                rounded-lg shadow-lg 
                transition-all duration-300
              "
            >
              ENROLL NOW
            </Link>
            <a href="tel:+917300666551" className="ml-4 inline-block bg-white hover:bg-[#f6821c] text-[#f6821c] hover:text-white font-semibold text-sm sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-3 rounded-lg shadow-lg transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
