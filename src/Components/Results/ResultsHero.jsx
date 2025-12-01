export default function ResultsHero() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <h1 className="text-4xl pt-6 md:text-6xl  font-bold leading-tight heading-primary">
            Success Stories <br /> That <span className="text-accent">Inspire</span>
          </h1>

          <p className="text-gray-700 md:text-xl mt-4 max-w-md">
            Discover how Drift Academy has empowered students to achieve their dream
            admissions and secure top ranks through dedication and expert guidance.
          </p>

          <div className="flex gap-4 mt-6">
            <button  className="bg-[#f6821c] text-white px-6 py-3 font-semibold rounded-lg shadow-sm hover:bg-yellow-600">
             <a href="https://www.youtube.com/@driftacademypvtltd/featured"> Read More</a>
            </button>

            <button className="bg-gray-200 px-6 py-3 font-semibold rounded-lg hover:bg-gray-300">
              View Courses
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhM5ezeYU_OyJWH1Io-keZwpr-R6PDug-lEwF52hcL0X9UIQJD50-BrvjGhJUzbb4ndTjYXvaf4Ni-P5hQuP0_4rJrEm7JgQ3ib0-O7R_VKpB8sVDzyXUNRgKSrwGyLvwQ98pXB1eNXJXhZtzD6pFR3f_H1lMNXIzP-Y8wDGYE_DUhygLr-mBJAia8sqLEzGDLXMDZ6rlLcNBEPX9Ya3n33QRaxeo4242hCB60Kp4Xf9WZ4BIOMiRGHP2P_Q3kQOXGOTH8e0o-RVA" 
            alt="Students Celebrating"
            className="w-full lg:w-[700px] sm:pt-6 rounded-xl object-cover shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
