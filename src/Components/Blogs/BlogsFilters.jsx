import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const BlogsFilters = ({ onFilterChange, onSearchChange }) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filters = ['All', 'Exam Tips', 'Motivation', 'Study Hacks', 'Success Stories']

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    onSearchChange(e.target.value)
  }

  return (
    <div className="w-full bg-[#0a0a0a] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-lg px-4 py-3 mb-6 border border-gray-700">
          <CiSearch className="text-gray-400 text-xl" />
          <input 
            type="text"
            placeholder="Search articles by keyword"
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-transparent w-full text-white placeholder-gray-500 outline-none"
          />
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
                activeFilter === filter
                  ? 'bg-[#f6821c] text-white'
                  : 'bg-[#1a1a1a] text-gray-300 border border-gray-700 hover:border-[#f6821c]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsFilters
