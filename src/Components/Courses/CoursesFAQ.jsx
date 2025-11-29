import { useState } from "react";

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

        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked <span className="text-[#f6821c]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="border border-gray-300 rounded-lg">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium">{faq.q}</span>
                <span>{open === i ? "▲" : "▼"}</span>
              </button>

              {open === i && (
                <p className="px-6 pb-4 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
