import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { q: "Who are the instructors?", a: "Our instructors are industry experts with years of teaching experience." },
  { q: "What is the typical class schedule?", a: "Classes follow a structured weekly timetable with flexibility for students." },
  { q: "Is there a scholarship program available?", a: "Yes, we offer scholarships based on merit and financial need." },
  { q: "How are student doubts resolved?", a: "Students get one-on-one doubt clearing sessions every week." },
];

export default function CoursesFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading Animation */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Frequently Asked <span className="text-[#f6821c]">Questions</span>
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-gray-300 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium">{faq.q}</span>

                {/* Arrow Rotation */}
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl"
                >
                  ▼
                </motion.span>
              </button>

              {/* Answer Animation */}
              <AnimatePresence>
                {open === i && (
                  <motion.p
                    className="px-6 pb-4 text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
