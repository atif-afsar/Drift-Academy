const items = [
  {
    title: "Experienced Mentors",
    desc: "Learn from industry professionals with real-world expertise.",
  },
  {
    title: "Small Batch Sizes",
    desc: "Focused attention with personalized learning experience.",
  },
  {
    title: "Proven Results",
    desc: "Our students consistently achieve amazing career outcomes.",
  },
];

export default function AboutWhyChoose() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Drift <span className="text-[#f6821c] "> Academy?</span></h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-8 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
