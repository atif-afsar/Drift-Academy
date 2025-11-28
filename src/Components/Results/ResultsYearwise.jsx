const years = [
  {
    year: "2024",
    stats: ["32 JEE Mains Qualifiers", "15 NEET 600+ Scores", "4 AMU Toppers"]
  },
  {
    year: "2023",
    stats: ["28 JEE Qualifiers", "22 NEET 550+ Scores", "Top 10 NTSE Ranker"]
  },
  {
    year: "2022",
    stats: ["19 JEE Qualifiers", "18 NEET High Achievers", "AMU Rank 1 Holder"]
  },
];

export default function ResultsYearwise() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">Year-wise Results</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {years.map((y, i) => (
            <div key={i} className="bg-white p-8 border rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">{y.year}</h3>
              <ul className="space-y-2">
                {y.stats.map((s, idx) => (
                  <li key={idx} className="text-gray-600">
                    • {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
