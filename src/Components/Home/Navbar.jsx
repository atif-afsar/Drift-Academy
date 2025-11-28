import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="./public/assets/images/logo.jpeg" 
            alt="Drift Academy Logo"
            className="h-13 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center  gap-8 text-gray-700 font-medium text-xl">
          <li><Link to="/" className="hover:text-blue-700 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-700 transition">About</Link></li>
          <li><a href="/courses" className="hover:text-blue-700 transition">Courses</a></li>
          <li><a href="/testimonials" className="hover:text-blue-700 transition">Results</a></li>
          <li><a href="/contact" className="hover:text-blue-700 transition">Contact</a></li>
        </ul>

        {/* Contact Button */}
        <a
          href="/contact"
          className="hidden md:block bg-yellow-400 px-5 py-2 rounded-lg text-xl font-semibold text-gray-900 hover:bg-yellow-500 transition"
        >
          Enroll Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-inner px-5 pb-5">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link to="/" className="block py-2">Home</Link></li>
            <li><Link to="/about" className="block py-2">About</Link></li>
            <li><a href="/courses" className="block py-2">Courses</a></li>
            <li><a href="/testimonials" className="block py-2">Results</a></li>
            <li><a href="/contact" className="block py-2">Contact</a></li>
          </ul>

          <a
            href="/contact"
            className="mt-4 inline-block bg-yellow-400 w-full text-center py-2 rounded-lg font-semibold text-gray-900 hover:bg-yellow-500 transition"
          >
             Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
