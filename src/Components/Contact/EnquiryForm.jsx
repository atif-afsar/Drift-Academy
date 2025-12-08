import { useState } from "react";

export default function EnquiryForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Append access key ONCE
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold m-6 ">Contact Us Form</h2>

      <form onSubmit={onSubmit}>
        {/* REQUIRED HIDDEN FIELDS */}
        <input type="hidden" name="subject" value="New Enquiry Submission" />
        <input type="hidden" name="from_name" value="Drift Academy Enquiry Form" />
        <input type="hidden" name="botcheck" />

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="border rounded-md p-3 w-full"
          />

          <input
            type="text"
            name="parent_name"
            placeholder="Enter parent's name"
            required
            className="border rounded-md p-3 w-full"
          />

          <input
            type="text"
            name="contact"
            placeholder="Enter your contact number"
            required
            className="border rounded-md p-3 w-full"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="border rounded-md p-3 w-full"
          />

          <select name="course" className="border rounded-md p-3 w-full" required>
            <option value="">Select a course</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>

          <input
            type="text"
            name="education"
            placeholder="e.g., 12th CBSE"
            className="border rounded-md p-3 w-full"
          />
        </div>

        {/* Message Box */}
        <textarea
          rows="4"
          name="message"
          placeholder="Write your message here..."
          className="border rounded-md p-3 w-full mt-3"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#f6821c] text-white hover:bg-yellow-600 transition px-6 py-3 rounded-lg font-semibold mt-3"
        >
          Submit
        </button>

        {/* Response Message */}
        {result && (
          <p
            className={`mt-3 font-medium ${
              result.includes("Successfully") ? "text-green-600" : "text-red-600"
            }`}
          >
            {result}
          </p>
        )}

        <p className="text-xs text-gray-500 mt-2">
          We respect your privacy. Your information is safe with us.
        </p>
      </form>
    </div>
  );
}
