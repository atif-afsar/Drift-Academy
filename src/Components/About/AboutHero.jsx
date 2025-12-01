export default function AboutHero() {
  return (
    <section className="w-full bg-[#0A1A66] text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div className="text-center md:text-left px-2 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-8 leading-snug md:leading-tight">
            Founded by Mentors, <br className="md:hidden" />
            Focused on <span className="text-[#f6821c]">Students</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
            Discover Drift Academy’s commitment to delivering industry-ready
            skills through expert-led training and hands-on learning.
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="w-full flex justify-center mt-4 md:justify-end">
          <div className="w-full max-w-[400px] md:max-w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-white/10">
            <iframe
              className="w-full h-full "
              src="https://www.youtube.com/embed/t88fZ6u-cwM?si=_Txq5nhvhBEwZ18k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
