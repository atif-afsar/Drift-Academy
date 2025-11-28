const reasons = [
  {
    icon: "📘",
    title: "Expert Faculty",
    desc: "Learn from experienced educators who are masters in their fields."
  },
  {
    icon: "👨‍🏫",
    title: "Personalized Mentorship",
    desc: "Receive guidance tailored to your learning needs."
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    desc: "Join a legacy of success with top ranks in competitive exams."
  },
];

export default function CoursesWhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">Why Choose Drift <span className="text-yellow-400">Academy</span></h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We provide the best learning environment and resources to help our students succeed.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
