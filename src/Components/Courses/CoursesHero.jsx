export default function CoursesHero() {
  return (
    <section className="w-full bg-[#0A1A66] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">

        {/* Left Text */}
        <div className=" md:text-left pt-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6"> Your Path to <br /> Academic Excellence <br /> <span className="text-yellow-400">Start Here</span> </h1>

          <p className="text-gray-300 mb-8 text-base sm:text-lg">
            Expert-led coaching for JEE, NEET, and foundation courses designed for success.
          </p>

          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Explore All Courses
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://driftacademy.in/images/course.jpg"
            alt="students-learning"
            className="w-full max-w-md pt-2 sm:max-w-lg md:max-w-full rounded-xl h-64 sm:h-80 md:h-[420px] lg:h-[500px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
