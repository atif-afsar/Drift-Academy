const faculty = [
  { name: "Azim Sir", role: "Biology", image: "https://driftacademy.in/images/azim.jpg", des:"BIOLOGY is the study of life, its just not remembering the fact but connecting the dots logically" },
  { name: "Nadeem Sir", role: "Physics", image: "https://driftacademy.in/images/nadeem.jpg", des:"Learning PHYSICS for NEET-JEE is all about creating equations using physical laws and then solving those equations using basic MATHS." },
  { name: "Kush Sir", role: "Mathematics", image: "https://driftacademy.in/images/kushh.jpg", des:"MATHS is the language in which every SCIENCE is qualified.LEARN it to apply." },
  { name: "Sohaib Sir", role: "Chemistry", image: "https://driftacademy.in/images/sohaib.jpg", des:"CHEMISTRY is the science, sometimes with EXPECTATION but that too is another EXPLAINABLE science." },
];

export default function AboutFaculty() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Esteemed <span className="text-[#f6821c] ">Faculty</span></h2>

        <div className="grid md:grid-cols-4 gap-10">
          {faculty.map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={f.image}
                alt={f.name}
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{f.name}</h3>
              <p className="text-[#f6821c]">{f.role}</p>
              <p className="text-gray-600 text-sm">{f.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
