export default function StatsSection() {
  const stats = [
    { number: "50+", label: "Top 100 Ranks" },
    { number: "95%", label: "Selection Rate" },
    { number: "5,000+", label: "Happy Students" },
    { number: "20+", label: "Years of Experience" },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">

        {stats.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 rounded-xl text-center border"
          >
            <h2 className="text-3xl font-bold heading-primary">{s.number}</h2>
            <p className="text-gray-700">{s.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
