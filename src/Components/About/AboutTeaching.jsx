const teaching = [
  {
    title: "Foundational Concept Building",
    desc: "Every student starts with strong basics for long-term mastery."
  },
  {
    title: "Daily Practice & Assessments",
    desc: "Hands-on tasks and structured evaluations ensure consistency."
  },
  {
    title: "Personalized Doubt-Clearing",
    desc: "1-on-1 mentorship to resolve conceptual challenges."
  },
  {
    title: "Advanced Problem Solving",
    desc: "Industry-grade exercises to boost real-world confidence."
  },
];

export default function AboutTeaching() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-12">Our Teaching<span className="text-[#f6821c] "> Methodology</span></h2>

        <div className="grid md:grid-cols-2 gap-8">
          {teaching.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md border">
              <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
              <p className="text-gray-600">{t.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
