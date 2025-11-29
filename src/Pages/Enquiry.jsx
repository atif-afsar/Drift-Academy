export default function Enquiry() {
  return (
    <div className="bg-[#F5F7FB] min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6 underline heading-primary">
          Students <span className="text-accent">Enquiry</span>
        </h2>

        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input
              type="text"
              className="w-full border rounded-md p-3"
              placeholder="Enter Name"
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="block mb-1 font-medium">Father's Name*</label>
            <input
              type="text"
              className="w-full border rounded-md p-3"
              placeholder="Enter Father's Name"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-medium">Mobile_No*</label>
            <input
              type="text"
              className="w-full border rounded-md p-3"
              placeholder="Enter Mobile Number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email_id</label>
            <input
              type="email"
              className="w-full border rounded-md p-3"
              placeholder="Enter Email"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block mb-1 font-medium">Course</label>
            <select className="w-full border rounded-md p-3">
              <option>Select Course</option>
              <option>JEE</option>
              <option>NEET</option>
              <option>Foundation (9-10)</option>
              <option>12th Board</option>
            </select>
          </div>

          {/* Divider */}
          <hr className="my-6" />

          {/* Educational Background Title */}
          <h3 className="font-semibold text-lg text-gray-700 heading-primary">
            Educational Background:
          </h3>

          {/* Class */}
          <div>
            <label className="block mb-1 font-medium">Class</label>
            <select className="w-full border rounded-md p-3">
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
            <select className="w-full border rounded-md p-3">
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
              className="w-full border rounded-md p-3"
              placeholder="Enter Year of Passing"
            />
          </div>

          {/* Enquiry */}
          <div>
            <label className="block mb-1 font-medium">Enquiry</label>
            <textarea
              rows="3"
              className="w-full border rounded-md p-3"
              placeholder="Write your enquiry..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              className="bg-[#f6821c] text-white font-bold px-6 py-2 rounded shadow hover:bg-[#b25300] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
