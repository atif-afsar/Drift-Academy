export default function TopperVideo() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 heading-primary">
          Hear From Our <span className="text-accent">Toppers</span>
        </h2>

        <div className="aspect-video w-full rounded-xl overflow-hidden topper-video-frame">
          <iframe
            src="https://www.youtube.com/embed/7HGv6TWQ8ZQ?si=xKhgxinZkdGYuTt_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>

        <p className="text-center text-gray-600 mt-3">
          Watch Arisha Tasneem (NEET 2025 Topper) share her preparation
          strategy.
        </p>
      </div>
    </section>
  );
}
