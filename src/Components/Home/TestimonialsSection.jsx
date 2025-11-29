import React from "react";
import Marquee from "react-fast-marquee";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rohan Sharma",
      college: "IIT Bombay",
      text: "The faculty at Drift Academy is incredible. Their personalized approach helped me crack the JEE exam and get into my dream college.",
      img: "https://via.placeholder.com/80" // placeholder avatar
    },
    {
      id: 2,
      name: "Priya Singh",
      college: "AIIMS Delhi",
      text: "Thanks to the rigorous test series and doubt-clearing sessions, I was able to score exceptionally well in NEET. Highly recommended!",
      img: "https://via.placeholder.com/80"
    },
    {
      id: 3,
      name: "Ankit Kumar",
      college: "NTSE Scholar",
      text: "The foundation course was a game-changer for me. It built a strong base that is still helping me in my higher studies.",
      img: "https://via.placeholder.com/80"
    },
    {
      id: 4,
      name: "Sneha Verma",
      college: "JEE Topper",
      text: "The study material and consistent mentorship boosted my confidence. Drift Academy shaped my success journey.",
      img: "https://via.placeholder.com/80"
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10 heading-primary">
          Success Stories From Our <span className="text-accent">Student</span>
        </h2>

        {/* Marquee Slider */}
        <Marquee pauseOnHover={true} speed={40} gradient={false} className="py-4">

          <div className="flex gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-[320px] max-w-[350px] bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />

                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "{item.text}"
                </p>

                <h4 className="mt-4 font-semibold text-gray-900 heading-primary">{item.name}</h4>
                <p className="text-zinc-800 text-sm font-medium">{item.college}</p>
              </div>
            ))}
          </div>

        </Marquee>
      </div>
    </section>
  );
}
