import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ id, image, tag, title, description, }) => {
  return (
    <div className="bg-[#0A2540] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-700 overflow-hidden group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-[#f6821c] text-white px-3 py-1 rounded-full text-xs font-semibold">
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 ">
          {description}
        </p>

        {/* Read More Link */}
        <Link 
          to={`/blog/${id}`}
          className="text-[#f6821c] font-semibold text-sm hover:text-yellow-400 transition inline-block"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
