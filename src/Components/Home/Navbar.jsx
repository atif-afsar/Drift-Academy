import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [resultsOpen, setResultsOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setResultsOpen(false);
  };

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
          <li>
            <Link to="/" className="hover:text-blue-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-700 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-blue-700 transition">
              Courses
            </Link>
          </li>

          {/* Results with hover-dropdown */}
         <li>
  <div className="flex items-center justify-between py-2">
    
    {/* RESULTS TEXT → OPENS PAGE */}
    <Link
      to="/results"
      onClick={closeMenu}
      className="flex-1 text-left"
    >
      Results
    </Link>

    {/* DROPDOWN TOGGLE → OPENS MENU */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setResultsOpen(!resultsOpen);
      }}
      className="ml-3 text-gray-600"
      aria-label="Toggle results dropdown"
    >
      <span
        className={`inline-block transition-transform duration-200 ${
          resultsOpen ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>
  </div>

  {/* DROPDOWN CONTENT */}
  {resultsOpen && (
    <div className="mt-2 ml-3 border-l pl-4 space-y-2">

      <div className="text-sm text-gray-500 font-semibold">Exams</div>

      <Link to="/results/neet" onClick={closeMenu} className="block py-1">
        NEET
      </Link>

      <Link to="/results/jee" onClick={closeMenu} className="block py-1">
        JEE
      </Link>

      <Link to="/results/amu" onClick={closeMenu} className="block py-1">
        AMU Entrance
      </Link>

      <div className="pt-2 text-sm text-gray-500 font-semibold">
        Yearwise
      </div>

      <Link to="/results/year/2025" onClick={closeMenu} className="block py-1">
        2025
      </Link>

      <Link to="/results/year/2024" onClick={closeMenu} className="block py-1">
        2024
      </Link>

      <Link to="/results/year/2023" onClick={closeMenu} className="block py-1">
        2023
      </Link>

    </div>
  )}
</li>


          <li>
            <Link to="/contact" className="hover:text-blue-700 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-blue-700 transition">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
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
            <li>
              <Link to="/" onClick={closeMenu} className="block py-2">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu} className="block py-2">
                About
              </Link>
            </li>

            <li>
              <Link to="/courses" onClick={closeMenu} className="block py-2">
                Courses
              </Link>
            </li>

            {/* RESULTS DROPDOWN (MOBILE) */}
            <li>
              <div className="w-full flex items-center justify-between py-2">
                <Link
                  to="/results"
                  onClick={closeMenu}
                  className="flex-1 text-left"
                >
                  Results
                </Link>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setResultsOpen(!resultsOpen);
                  }}
                  className="ml-3 text-gray-600"
                  aria-label="Toggle results dropdown"
                >
                  <span
                    className={`transition-transform duration-200 ${
                      resultsOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
              </div>

              {resultsOpen && (
                <div className="mt-2 ml-3 border-l pl-4 space-y-2">
                  <div className="text-sm text-gray-500 font-semibold">
                    Exams
                  </div>

                  <Link
                    to="/results/neet"
                    onClick={closeMenu}
                    className="block py-1"
                  >
                    NEET
                  </Link>

                  <Link
                    to="/results/jee"
                    onClick={closeMenu}
                    className="block py-1"
                  >
                    JEE
                  </Link>

                  <Link
                    to="/results/amu"
                    onClick={closeMenu}
                    className="block py-1"
                  >
                    AMU Entrance
                  </Link>

                 
                </div>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu} className="block py-2">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/blogs" onClick={closeMenu} className="block py-2">
                Blogs
              </Link>
            </li>
          </ul>

          {/* MOBILE CTA BUTTON */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-5 inline-block bg-[#f6821c] w-full text-center py-3 rounded-lg font-semibold text-white hover:bg-yellow-500 transition"
          >
            ENROLL NOW
          </Link>
        </div>
      )}
    </nav>
  );
}
