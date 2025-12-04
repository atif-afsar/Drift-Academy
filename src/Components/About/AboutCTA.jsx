import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="w-full py-14 bg-[#0E1A2A] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Begin Your Success Story?
        </h2>
        <p className="text-gray-300 mb-6">
          Join Drift Academy and transform your skills into a successful career.
        </p>

        <Link to="/enquiry">
          <button className="bg-[#f6821c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
            Enroll for Course
          </button>
        </Link>
      </div>
    </section>
  );
}
