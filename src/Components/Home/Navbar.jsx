import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Function to close menu on click
  const closeMenu = () => setOpen(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/logo.jpeg" 
            alt="Drift Academy Logo"
            className="h-13 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-xl">
          <li><Link to="/" className="hover:text-blue-700 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-700 transition">About</Link></li>
          <li><Link to="/courses" className="hover:text-blue-700 transition">Courses</Link></li>
          <li><Link to="/results" className="hover:text-blue-700 transition">Results</Link></li>
          <li><Link to="/contact" className="hover:text-blue-700 transition">Contact</Link></li>
          <li><Link to="/blogs" className="hover:text-blue-700 transition">Blogs</Link></li>

        </ul>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-[#f6821c] px-5 py-2 rounded-lg text-xl font-semibold text-white hover:bg-yellow-500 transition"
        >
          ENROLL NOW
        </Link>

        {/* Mobile Menu Toggle */}
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
            <li><Link to="/" onClick={closeMenu} className="block py-2">Home</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="block py-2">About</Link></li>
            <li><Link to="/courses" onClick={closeMenu} className="block py-2">Courses</Link></li>
            <li><Link to="/results" onClick={closeMenu} className="block py-2">Results</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="block py-2">Contact</Link></li>
            <li><Link to="/blogs" onClick={closeMenu} className="block py-2">Blogs</Link></li>
          </ul>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 inline-block bg-[#f6821c] w-full text-center py-2 rounded-lg font-semibold text-gray-900 hover:bg-yellow-500 transition"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
}
