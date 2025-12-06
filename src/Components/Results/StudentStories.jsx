import React from "react";
import Marquee from "react-fast-marquee";

export default function SuccessStories() {
  const banners = [
    { id: 1, img: "/public/results/HANIYA YOUNUS neetug 9-min.jpg" },
    { id: 2, img: "/public/results/KRATIKA neetug 8-min.jpg" },
    { id: 3, img: "/public/results/LIAYBA NASEEM neetug 12-min.jpg" },
    { id: 4, img: "/public/results/MD SHAHAB ARIF neetug 15-min.jpg" },
    { id: 5, img: "/public/results/Mohd Fahmeed neetug 6-min.jpg" },
    { id: 6, img: "/public/results/MOHD. FIROZ neetug 20-min.jpg" },
    { id: 7, img: "/public/results/MOHD. KASHIF neetug 10-min.jpg" },
    { id: 8, img: "/public/results/MOHD. KUMAIL neetug 14-min.jpg" },

  ];

  // Duplicate for seamless infinite scroll
  const loopImages = [...banners];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl text-center mb-10 md:text-4xl font-bold heading-primary">
          Our <span className="text-accent">Success Stories</span>
        </h2>

        {/* Marquee Banner Slider */}
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {loopImages.map((item, index) => (
            <div key={index} className="mx-4">
              <img
                src={item.img}
                alt="student result"
                className="
                  w-[280px] 
                  md:w-[350px] 
                  lg:w-[420px]
                  h-auto 
                  rounded-xl 
                  shadow-lg 
                  object-cover
                "
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
