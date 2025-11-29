export default function StudentCard({ img, name, rank, story }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-4 w-full">
      
      {/* Image */}
      <div className="w-full h-40 sm:h-40 md:h-44 overflow-hidden rounded-xl">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="mt-3">
        <h3 className="text-lg font-semibold heading-primary">{name}</h3>
        <p className="text-[#f6821c] font-bold text-sm mt-1">
          Rank: {rank}
        </p>

        <p className="text-gray-600 text-xs mt-2 leading-relaxed">
          {story}
        </p>
      </div>

      {/* Button */}
      <button className="mt-4 bg-gray-100 hover:bg-gray-200 transition w-full py-2 rounded-lg text-sm font-medium">
        Read Full Story
      </button>
    </div>
  );
}
