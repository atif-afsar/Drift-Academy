import { useState } from "react";

export default function EnquiryForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "5b2e5f7d-531f-46cb-8f70-804e36c770b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✔️");
      event.target.reset();
    } else {
      setResult(`Error: ${data.message || "Something went wrong"}`);
    }
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-4xl p-10 rounded-2xl shadow-xl border border-gray-200">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Contact Us
        </h2>

        <form onSubmit={onSubmit} className="space-y-6">
          
          {/* Hidden Required Fields */}
          <input type="hidden" name="subject" value="New Enquiry Submission" />
          <input type="hidden" name="from_name" value="Drift Academy Enquiry Form" />
          <input type="hidden" name="botcheck" />

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Student's Name"
              required
              className="form-input"
            />

            <input
              type="text"
              name="parent_name"
              placeholder="Parent's Name"
              required
              className="form-input"
            />

            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              required
              className="form-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-input"
            />

            <select
              name="course"
              required
              className="form-input"
            >
              <option value="">Select Course</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>

            <input
              type="text"
              name="education"
              placeholder="e.g., 12th CBSE"
              className="form-input"
            />
          </div>

          {/* Message Box */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your message..."
            className="form-input"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#f6821c] w-full md:w-auto text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#d96f14] transition"
          >
            Submit
          </button>

          {/* Response Message */}
          {result && (
            <p
              className={`mt-2 font-medium text-center ${
                result.includes("Successfully") ? "text-green-600" : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}

          <p className="text-xs text-gray-500 text-center pt-2">
            We respect your privacy. Your information is safe with us.
          </p>

        </form>
      </div>
    </div>
  );
}
