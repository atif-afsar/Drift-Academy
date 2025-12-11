import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { q: "Who are the instructors?", a: "Our instructors are highly qualified teachers and industry experts with years of practical and teaching experience." },

  { q: "What is the typical class schedule?", a: "Classes follow a structured weekly timetable, and students can access recorded sessions anytime." },

  { q: "Is there a scholarship program available?", a: "Yes, we offer scholarships based on merit, academic performance, and financial background." },

  { q: "How are student doubts resolved?", a: "Students get access to one-on-one doubt-solving sessions, live chats, and dedicated doubt-clearing hours." },

  // ⭐ NEW FAQS BELOW

  { q: "Do you provide study materials?", a: "Yes, students receive digital notes, chapter summaries, formula sheets, and practice questions after every lesson." },

  { q: "Are classes available online or offline?", a: "We offer both online and offline learning options based on student preference and convenience." },

  { q: "Do students get homework and assignments?", a: "Yes, every chapter includes assignments, worksheets, and quizzes to reinforce learning." },

  { q: "Do you prepare students for board exams?", a: "Absolutely! We provide class-wise preparation plans, sample papers, revision tests, and exam-focused strategies." },

  { q: "How can parents track student progress?", a: "Parents receive monthly progress reports, test results, attendance history, and personalized feedback from teachers." },

  { q: "Are revision classes provided before exams?", a: "Yes, we conduct intensive revision sessions, mock tests, and doubt marathons before every major exam." },

  { q: "What is the maximum batch size?", a: "To ensure effective learning, we keep our batches small—usually between 20 to 30 students." },

  { q: "Do you provide career guidance?", a: "Yes, we guide students on subject selection, career options, competitive exams, and future planning." },

  { q: "Can students switch batches?", a: "Yes, students may change batches depending on availability and performance assessment." }
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
