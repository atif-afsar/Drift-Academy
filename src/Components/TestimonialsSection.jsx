import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Student 1",
      text: "Drift Academy helped me stay consistent and focused throughout my exam preparation.",
      img: "https://via.placeholder.com/80" // placeholder image
    },
    {
      name: "Student 2",
      text: "The teachers are highly supportive, and the study material is very helpful.",
      img: "https://via.placeholder.com/80"
    },
    {
      name: "Student 3",
      text: "Regular mock tests and doubt classes made a huge difference in my preparation.",
      img: "https://via.placeholder.com/80"
    },
    {
      name: "Student 4",
      text: "A great environment to learn and grow with excellent faculty guidance.",
      img: "https://via.placeholder.com/80"
    },
    {
      name: "Student 5",
      text: "Personalized feedback and consistent improvements helped me boost my confidence.",
      img: "https://via.placeholder.com/80"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        What Our Students Say
      </h2>

      {/* Marquee Container */}
      <div className="relative overflow-hidden whitespace-nowrap py-6">
        
        <div className="animate-marquee inline-flex gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border"
                />
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              </div>
              <p className="text-gray-600">{t.text}</p>
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {testimonials.map((t, index) => (
            <div
              key={"dup-" + index}
              className="min-w-[300px] bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border"
                />
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              </div>
              <p className="text-gray-600">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
