import React from "react";

export default function ProgramCard({ image, title, subtitle, description }) {
  return (
    <div className="bg-white rounded-xl  shadow-md hover:shadow-lg transition p-5 flex flex-col">
      
      {/* Image */}
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <h3 className="mt-4 text-xl font-semibold text-gray-900 heading-primary">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>

      <p className="mt-3 text-gray-700 text-sm leading-relaxed flex-grow">
        {description}
      </p>

      <a
        href="/programs"
        className="mt-4 text-zinc-700 font-semibold hover:underline"
      >
        Learn More →
      </a>
    </div>
  );
}
