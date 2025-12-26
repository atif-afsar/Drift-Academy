import React from "react";
import { useParams, Link } from "react-router-dom";
import { Title, Meta } from "react-head";
import { RESULT_IMAGES } from "../data/resultImages";

export default function ResultExam() {
  const { exam, year } = useParams();

  const examKey = exam?.toLowerCase();
  const examData = RESULT_IMAGES[examKey];

  let images = [];

  if (examData) {
    if (year && examData[year]) {
      images = examData[year];
    } else {
      // show all years if year not selected
      images = Object.values(examData).flat();
    }
  }

  const title = `${exam?.toUpperCase() || "Results"} ${year || ""}`.trim();

  return (
    <div className="py-14 bg-white">
      <Title>{title} | Drift Academy</Title>
      <Meta name="description" content={`Drift Academy ${title} results`} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Back */}
        <Link to="/results" className="text-accent font-semibold text-sm">
          ← Back to Results
        </Link>

        {/* Heading */}
        <header className="mt-6 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold heading-primary">
            {exam?.toUpperCase()} Results
          </h1>
          {year && <p className="text-gray-600 mt-2">Year: {year}</p>}
        </header>

        {/* Result Images */}
        {images.length > 0 ? (
          <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt={`${exam} result ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </section>
        ) : (
          <div className="bg-gray-50 border rounded-lg p-8 text-center text-gray-600">
            Results will be uploaded soon for this category.
          </div>
        )}
      </div>
    </div>
  );
}
