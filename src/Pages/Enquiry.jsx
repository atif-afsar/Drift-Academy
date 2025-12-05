import { useState } from "react";

export default function Enquiry() {
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
    <div className="bg-[#F5F7FB] min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 shadow-lg rounded-xl">

        <h2 className="text-3xl font-semibold text-center mb-8 heading-primary underline">
          Students <span className="text-accent">Enquiry</span>
        </h2>

        <form onSubmit={onSubmit} className="space-y-6">

          {/* REQUIRED HIDDEN FIELDS */}
          <input type="hidden" name="subject" value="New Enquiry Submission" />
          <input type="hidden" name="from_name" value="Drift Academy Enquiry Form" />
          <input type="hidden" name="botcheck" />

          {/* 3 FIELD GROUP (Name, Father Name, Mobile) */}
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-md p-3"
              placeholder="Enter Name"
            />

            <input
              type="text"
              name="father_name"
              required
              className="w-full border rounded-md p-3"
              placeholder="Father's Name"
            />

            <input
              type="text"
              name="mobile"
              required
              className="w-full border rounded-md p-3"
              placeholder="Mobile Number"
            />
          </div>

          {/* EMAIL + COURSE */}
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            <input
              type="email"
              name="email"
              className="w-full border rounded-md p-3"
              placeholder="Email"
            />

            <select name="course" className="w-full border rounded-md p-3">
              <option>Select Course</option>
              <option>JEE</option>
              <option>NEET</option>
              <option>Foundation (9-10)</option>
              <option>12th Board</option>
            </select>
          </div>

          <hr className="border-gray-300" />

          <h3 className="font-semibold text-xl text-gray-700">
            Educational Background
          </h3>

          {/* EDUCATION SECTION */}
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
            <select name="student_class" className="w-full border rounded-md p-3">
              <option>Select Class</option>
              <option>8th</option>
              <option>9th</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select>

            <select name="board_type" className="w-full border rounded-md p-3">
              <option>Select Board</option>
              <option>CBSE</option>
              <option>ICSE</option>
              <option>UP Board</option>
              <option>Other</option>
            </select>

            <input
              type="number"
              name="passing_year"
              className="w-full border rounded-md p-3"
              placeholder="Year of Passing"
            />
          </div>

          {/* MESSAGE FIELD */}
          <textarea
            rows="4"
            name="enquiry_message"
            className="w-full border rounded-md p-3"
            placeholder="Write your enquiry..."
          ></textarea>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-[#f6821c] text-white w-full md:w-auto px-8 py-3 rounded-lg font-semibold hover:bg-[#b25300] transition"
          >
            Submit
          </button>

          {/* RESPONSE MESSAGE */}
          {result && (
            <p
              className={`mt-2 text-sm font-medium ${
                result.includes("Successfully") ? "text-green-700" : "text-red-600"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
