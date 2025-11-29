import StudentCard from "./StudentCard";

export default function StudentStories() {
  const students = [
    {
      img: "/student1.jpg",
      name: "Priya Sharma",
      rank: "AIR 12",
      story: "I improved my concepts and achieved my dream college...",
    },
    {
      img: "/student2.jpg",
      name: "Rohan Verma",
      rank: "AIR 47",
      story: "The mentors at Drift Academy guided me throughout...",
    },
    {
      img: "/student3.jpg",
      name: "Anjali Singh",
      rank: "AIR 29",
      story: "Teachers gave me the confidence and perfect strategy...",
    },
    {
      img: "/student4.jpg",
      name: "Vikram Yadav",
      rank: "AIR 78",
      story: "The test series and doubt support helped me improve...",
    },
  ];

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-8 heading-primary">What Our Students <span className="text-accent">Say</span></h2>

        {/* MARQUEE CONTAINER */}
        <div className="relative w-full overflow-hidden">
          
          {/* Marquee Track */}
          <div className="flex gap-3 sm:gap-6 animate-marquee">
            {[...students, ...students].map((s, i) => (
              <div key={i} className="min-w-[200px] sm:min-w-[280px]">
                <StudentCard {...s} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
