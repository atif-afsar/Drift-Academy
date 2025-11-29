export default function EnquiryForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Contact Us Form</h2>

      <form className="space-y-4">
        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="border rounded-md p-3 w-full"
          />
          <input
            type="text"
            placeholder="Enter parent's name"
            className="border rounded-md p-3 w-full"
          />

          <input
            type="text"
            placeholder="Enter your contact number"
            className="border rounded-md p-3 w-full"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="border rounded-md p-3 w-full"
          />

          <select className="border rounded-md p-3 w-full">
            <option>Select a course</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>

          <input
            type="text"
            placeholder="e.g., 12th CBSE"
            className="border rounded-md p-3 w-full"
          />
        </div>

        {/* Message Box */}
        <textarea
          rows="4"
          placeholder="Write your message here..."
          className="border rounded-md p-3 w-full mt-3"
        ></textarea>

        {/* Submit Button */}
        <button className="bg-[#f6821c] text-white hover:bg-yellow-600 transition px-6 py-3 rounded-lg font-semibold">
          Submit Enquiry
        </button>

        <p className="text-xs text-gray-500">
          We respect your privacy. Your information is safe with us. Read our Privacy Policy.
        </p>
      </form>
    </div>
  );
}
