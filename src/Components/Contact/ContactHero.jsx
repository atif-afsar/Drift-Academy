import React from "react";
import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="w-full bg-[#0A1A66] text-white py-30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get in Touch With <br />
            <span className="text-accent">Drift Academy</span>
          </h1>

          {/* TAGLINE */}
          <p className="text-xl font-medium text-gray-300">
            "Your dreams deserve the right guidance."
          </p>

          {/* QUOTE */}
          <p className="text-gray-300">
            At Drift Academy, we believe that every student's journey starts with a single conversation.
            Reach out to us — we are here to guide you toward JEE, NEET, and AMU success.
          </p>

         <button  className="bg-[#f6821c] text-white px-6 py-3 font-semibold rounded-lg shadow-sm hover:bg-yellow-600">
             <Link to="/contact/enquiry">Read More</Link>
            </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/contact.png" // change to your own image
            alt="students discussing"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
