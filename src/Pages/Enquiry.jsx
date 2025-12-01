import { useState } from "react";

export default function Enquiry() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error:", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-[#F5F7FB] min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">

        <h2 className="text-2xl font-semibold text-center mb-6 underline heading-primary">
          Students <span className="text-accent">Enquiry</span>
        </h2>

        {/* FORM START */}
        <form onSubmit={onSubmit}>

          {/* REQUIRED HIDDEN FIELDS */}
          <input
            type="hidden"
            name="access_key"
            value="5b2e5f7d-531f-46cb-8f70-804e36c770b5"
          />
          <input
            type="hidden"
            name="subject"
            value="New Enquiry Submission"
          />
          <input
            type="hidden"
            name="from_name"
            value="Drift Academy Enquiry Form"
          />
          <input type="hidden" name="botcheck" />

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-md p-3"
              placeholder="Enter Name"
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block mb-1 font-medium">Father's Name*</label>
            <input
              type="text"
              name="father_name"
              required
              className="w-full border rounded-md p-3"
              placeholder="Enter Father's Name"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium">Mobile_No*</label>
            <input
              type="text"
              name="mobile"
              required
              className="w-full border rounded-md p-3"
              placeholder="Enter Mobile Number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email_id</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-md p-3"
              placeholder="Enter Email"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block mb-1 font-medium">Course</label>
            <select name="course" className="w-full border rounded-md p-3">
              <option>Select Course</option>
              <option>JEE</option>
              <option>NEET</option>
              <option>Foundation (9-10)</option>
              <option>12th Board</option>
            </select>
          </div>

          <hr className="my-6" />

          <h3 className="font-semibold text-lg text-gray-700 heading-primary">
            Educational Background:
          </h3>

          {/* Class */}
          <div>
            <label className="block mb-1 font-medium">Class</label>
            <select name="class" className="w-full border rounded-md p-3">
              <option>Select Class</option>
              <option>8th</option>
              <option>9th</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select>
          </div>

          {/* Board */}
          <div>
            <label className="block mb-1 font-medium">Board</label>
            <select name="board" className="w-full border rounded-md p-3">
              <option>Select Board</option>
              <option>CBSE</option>
              <option>ICSE</option>
              <option>UP Board</option>
              <option>Other</option>
            </select>
          </div>

          {/* Year of Passing */}
          <div>
            <label className="block mb-1 font-medium">Year of Passing</label>
            <input
              type="number"
              name="year_of_passing"
              className="w-full border rounded-md p-3"
              placeholder="Enter Year of Passing"
            />
          </div>

          {/* Enquiry */}
          <div>
            <label className="block mb-1 font-medium">Enquiry</label>
            <textarea
              rows="3"
              name="enquiry"
              className="w-full border rounded-md p-3"
              placeholder="Write your enquiry..."
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-[#f6821c] text-white font-bold px-6 py-2 rounded shadow hover:bg-[#b25300] transition"
            >
              Submit
            </button>

            <p className="mt-2 text-sm text-green-700">{result}</p>
          </div>
        </form>
        {/* FORM END */}

      </div>
    </div>
  );
}
