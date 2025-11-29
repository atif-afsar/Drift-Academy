export default function TopperVideo() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Hear From Our Toppers</h2>

        <div class="aspect-video w-full rounded-xl overflow-hidden">
          <video
            src="/public/assets/videos/videoplayback (9).mp4"
            controls
            class="w-full h-full object-cover"
          />
        </div>

        <p className="text-center text-gray-600 mt-3">
          Watch Priya Sharma (JEE Advanced, Rank 2) share her preparation
          strategy.
        </p>
      </div>
    </section>
  );
}
