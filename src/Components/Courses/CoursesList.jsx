const courses = [
  {
    tag: "For Class XI & XII",
    title: "JEE Advanced Program",
    desc: "A 2-Year Integrated Program covering Physics, Chemistry, and Maths...",
    points: ["Live Classes", "Doubt Sessions", "Comprehensive Test Series"],
    button: "Enroll Now"
  },
  {
    tag: "For Class XI, XII & Droppers",
    title: "NEET Mastery Course",
    desc: "Focused preparation for Biology, Physics, and Chemistry...",
    points: ["Exam-Pattern Practice", "Expert Biology Faculty", "Regular Mock Tests"],
    button: "Enroll Now"
  },
  {
    tag: "For Class X Students",
    title: "AMU XI-Entrance Prep",
    desc: "Specialized coaching covering complete syllabus for AMU entrance...",
    points: ["Complete Syllabus Coverage", "Previous Year Papers", "Interview Guidance"],
    button: "Enroll Now"
  },
  {
    tag: "For Junior Classes",
    title: "NTSE / Olympiad Foundation",
    desc: "Build a strong base with focus on logical reasoning...",
    points: ["Logical Reasoning", "Advanced Concepts", "Problem-Solving Skills"],
    button: "Enquire Now"
  },
  {
    tag: "For Class IX & X",
    title: "School Foundation Program",
    desc: "Strengthen fundamentals for board exams...",
    points: ["Board Exam Focus", "Concept Clarity", "Competitive Edge"],
    button: "Enquire Now"
  },
];

export default function CoursesList() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Premier <span className="text-[#f6821c]">Courses</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

              <p className="text-xs bg-yellow-100 text-yellow-700 inline-block px-3 py-1 rounded mb-3">
                {course.tag}
              </p>

              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>

              <p className="text-gray-600 text-sm mb-4">{course.desc}</p>

              <ul className="space-y-2 mb-6">
                {course.points.map((p, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-yellow-500 text-lg">✔</span> {p}
                  </li>
                ))}
              </ul>

              <button className="w-full text-white bg-[#f6821c] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600">
                {course.button}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
