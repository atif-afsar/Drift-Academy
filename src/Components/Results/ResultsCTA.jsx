import { Link } from "react-router-dom";

export default function ResultsCTA() {
  return (
    <section className="w-full py-16 bg-yellow-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4 heading-primary">
          Ready to Start Your Success <span className="text-accent">Story?</span>
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Join thousands of students who trusted Drift Academy to achieve their dreams.
        </p>
        <Link to="/enquiry">
        <button className="bg-[#f6821c] text-white px-8 py-3 rounded-lg text-lg font-semibold">
          Explore Our Programs
        </button>
        </Link>

      </div>
    </section>
  );
}
