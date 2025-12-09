import React, { useState } from 'react'
import HeroBlog from './HeroBlog'
import BlogsFilters from './BlogsFilters'
import BlogsGrid from './BlogsGrid'
import NewsletterSection from './NewsletterSection'

const FeaturedBlog = () => {
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter)
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="w-full bg-[#0a0a0a]">
      <HeroBlog />
      <BlogsFilters 
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <BlogsGrid 
        filter={filter}
        searchQuery={searchQuery}
      />
      <NewsletterSection />
    </div>
  )
}

export default FeaturedBlog
