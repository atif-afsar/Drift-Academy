export default function StudentCard({ img, name, rank, story }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-4 w-[250px] md:w-[280px]">
      
      {/* Image */}
      <div className="w-full h-40 overflow-hidden rounded-xl">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-yellow-600 font-bold text-sm mt-1">
          Rank: {rank}
        </p>

        <p className="text-gray-500 text-xs mt-2 leading-relaxed">
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
