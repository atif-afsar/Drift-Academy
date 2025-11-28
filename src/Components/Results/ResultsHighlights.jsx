const highlights = [
  {
    title: "150+ Top Ranks",
    desc: "Students excelled in JEE, NEET, and competitive exams every year."
  },
  {
    title: "95% Success Rate",
    desc: "Consistent selection ratio in all foundation & advanced programs."
  },
  {
    title: "State & National Toppers",
    desc: "Multiple students secured top 100 ranks across India."
  },
];

export default function ResultsHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">Our Achievement Highlights</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white border p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
