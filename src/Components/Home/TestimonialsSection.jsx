import React from "react";
import Marquee from "react-fast-marquee";

export default function SuccessStories() {
  const banners = [
    { id: 1, img: "/results/ABDUL MALIK neetug 16-min.jpg" },
    { id: 2, img: "/results/ABDUL MUQTADIR neetug 13-min.jpg" },
    { id: 3, img: "/results/AFREEN UROOJ neetug 19-min.jpg" },
    { id: 4, img: "/results/AKBAR USMANI  neetug 5-min.jpg" },
    { id: 5, img: "/results/ALTAMASH KHAN neetug 4-min.jpg" },

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
