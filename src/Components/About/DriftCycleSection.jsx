export default function DriftCycleSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT — Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold heading-primary mb-4">
            The <span className="text-accent">Drift Cycle</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Drift Academy follows a structured and proven learning methodology 
            called the <strong>Drift Cycle</strong> — designed to build strong 
            concepts, develop problem-solving ability, and ensure consistent 
            revision and practice. This cycle helps students stay motivated 
            and always exam-ready.
          </p>

          <p className="text-gray-700 font-medium text-base md:text-lg">
            Enter the Drift Cycle & Enjoy the Pride of Being Successful.
          </p>
        </div>

        {/* RIGHT — Image */}
        <div className="flex justify-center">
          <div className="w-full md:w-[90%] lg:w-[70%] rounded-2xl overflow-hidden shadow-xl border">
            <img
              src="about-img/image.png"
              alt="Drift Cycle Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
