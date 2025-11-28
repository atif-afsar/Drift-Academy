const toppers = [
  { name: "Ayaan Khan", exam: "JEE Advanced", rank: "AIR 112", image: "/toppers/t1.jpg" },
  { name: "Sara Sheikh", exam: "NEET", rank: "AIR 85", image: "/toppers/t2.jpg" },
  { name: "Rohan Verma", exam: "AMU Entrance", rank: "Rank 1", image: "/toppers/t3.jpg" },
  { name: "Nisha Patel", exam: "NTSE Stage 2", rank: "Top 10", image: "/toppers/t4.jpg" },
];

export default function ResultsToppers() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">Meet Our Top Performers</h2>

        <div className="grid md:grid-cols-4 gap-10">
          {toppers.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-36 h-36 rounded-full object-cover mb-4 shadow-lg"
              />
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-gray-500">{t.exam}</p>
              <p className="font-bold text-yellow-600">{t.rank}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
