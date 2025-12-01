import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A2540] text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Drift <span className="text-accent">Academy</span></h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Drift Academy provides expert coaching for JEE, NEET, AMU Entrance,
            and foundational school programs with proven results.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com/driftacademypvtltd/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition text-lg">
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/channel/UCD1TDTD8P9YF6MYVgsULY3w" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition text-lg">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/p/DPGTFjlD9kz/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition text-lg">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition text-lg">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Quick <span className="text-accent">Links</span></h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-400 transition">Courses</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link to="/results" className="hover:text-yellow-400 transition">Results</Link></li>
            <li><Link to="/enquiry" className="hover:text-yellow-400 transition">Enquiry</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Contact <span className="text-accent">Us</span></h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <FaMapMarkerAlt className="text-yellow-400 shrink-0" />
              <p>K3 Plaza, Dodhpur Main Road, Kela Nagar, Aligarh</p>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <FaPhone className="text-yellow-400 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-yellow-400 transition">+91 73006 66551</a>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <FaEnvelope className="text-yellow-400 shrink-0" />
              <a href="mailto:info@driftacademy.in" className="hover:text-yellow-400 transition">info@driftacademy.in</a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-white/60 text-sm mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Drift Academy. All Rights Reserved.
      </div>
    </footer>
  );
}
