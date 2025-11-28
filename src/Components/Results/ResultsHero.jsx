export default function ResultsHero() {
  return (
    <section className="w-full bg-[#0A1A66] text-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl pt-3 font-bold leading-tight mb-6">
            Our Students’ Success <br /> Speaks for Itself
          </h1>
          <p className="text-gray-300 mb-6">
            Consistent top ranks and outstanding performance in JEE, NEET, AMU, NTSE, and Olympiads.
          </p>
        </div>

        <div>
          <img 
            src="./public/assets/images/results.png" 
            alt="results"
            className="w-full h-[550px] md:h-[600px] lg:pt-12 rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
