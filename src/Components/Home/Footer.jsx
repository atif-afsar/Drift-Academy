import React from "react";

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
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Quick <span className="text-accent">Links</span></h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/courses" className="hover:text-yellow-400 transition">Courses</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/testimonials" className="hover:text-yellow-400 transition">Results</a></li>
            <li><a href="/testimonials" className="hover:text-yellow-400 transition">Enquiry</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Contact <span className="text-accent">Us</span></h3>
          <p className="text-white/80 text-sm">K3 Plaza, Dodhpur Main Road, Kela Nagar, Aligarh</p>
          <p className="text-white/80 text-sm mt-2">Phone: +91 9876543210</p>
          <p className="text-white/80 text-sm mt-1">Email: info@driftacademy.in</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-white/60 text-sm mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Drift Academy. All Rights Reserved.
      </div>
    </footer>
  );
}
