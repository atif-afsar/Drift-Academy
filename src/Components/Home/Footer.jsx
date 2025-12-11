import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-[#0A2540] text-white pt-12 pb-6 px-6"
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >

        {/* ABOUT SECTION */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-white">
            Drift <span className="text-accent">Academy</span>
          </h3>

          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Drift Academy provides expert coaching for JEE, NEET, AMU Entrance,
            and foundational school programs with proven results.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            {[ 
              { icon: <FaFacebook />, link: "https://www.facebook.com/driftacademypvtltd/" },
              { icon: <FaYoutube />, link: "https://www.youtube.com/channel/UCD1TDTD8P9YF6MYVgsULY3w" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/drift_academy_pvt.ltd/" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-yellow-400 transition text-2xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-white">
            Quick <span className="text-accent">Links</span>
          </h3>

          <ul className="space-y-2 text-white/80 text-sm">
            {["Home", "Courses", "About", "Results", "Contact", "Blogs"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-yellow-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-white">
            Contact <span className="text-accent">Us</span>
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <FaMapMarkerAlt className="text-yellow-400 shrink-0" />
              <p>K3 Plaza, Third Floor, Dodhpur Main Road, Near Kela Nagar Chauraha, Aligarh</p>
            </div>

            <div className="flex items-center gap-3 text-white/80 text-sm">
              <FaPhone className="text-yellow-400 shrink-0" />
              <a href="tel:+917300666551" className="hover:text-yellow-400 transition">
                073006 66551
              </a>
            </div>

            <div className="flex items-center gap-3 text-white/80 text-sm">
              <FaEnvelope className="text-yellow-400 shrink-0" />
              <a href="mailto:driftpvt.ltd@gmail.com" className="hover:text-yellow-400 transition">
                driftpvt.ltd@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center text-white/60 text-sm mt-10 border-t border-white/20 pt-4"
      >
        © {new Date().getFullYear()} Drift Academy. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}
