import React, { useState } from 'react'
import BlogCard from './BlogCard'

const BlogsGrid = ({ filter, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 6

  const allBlogs = [
    {
      id: 1,
      image: '/blogs/Neet - 5.png',
      tag: 'Exam Tips',
      title: 'Decoding the Latest Exam Pattern',
      description: 'Stay updated with the most recent exam pattern changes and learn how to strategize your preparation accordingly.'
    },
    {
      id: 2,
      image: '/blogs/Neet - 6.png',
      tag: 'Motivation',
      title: 'How to Stay Motivated During Tough Study Sessions',
      description: 'Discover proven strategies to keep your motivation high and maintain consistent performance throughout your preparation journey.'
    },
    {
      id: 3,
      image: '/hero-img/Neet - 2.png',
      tag: 'Study Hacks',
      title: 'Revision Made Easy with Time Management',
      description: 'Master the art of revision through effective time management techniques and proven study methods for maximum retention.'
    },
    {
      id: 4,
      image: '/hero-img/Neet - 3.png',
      tag: 'Success Stories',
      title: 'From Zero to Hero: Student Success Stories',
      description: 'Read inspiring tales of students who turned their dreams into reality with dedication and smart preparation strategies.'
    },
    {
      id: 5,
      image: '/blogs/blog8.png',
      tag: 'Exam Tips',
      title: 'Quick Revision Hacks for Students',
      description: 'Learn the best time management and revision techniques to ace your exams without last-minute stress.'
    },
    {
      id: 6,
      image: '/images/result.png',
      tag: 'Study Hacks',
      title: 'Digital Tools that Make Studying Easier',
      description: 'Explore the most effective digital tools and apps that can revolutionize your study habits and improve productivity.'
    },
    {
      id: 7,
      image: '/blogs/blog7.png',
      tag: 'Motivation',
      title: 'Overcoming Anxiety Before Exams',
      description: 'Master practical techniques to manage exam anxiety and build confidence for better performance on test day.'
    },
    {
      id: 8,
      image: '/blogs/blog8.png',
      tag: 'Success Stories',
      title: 'Top Scorers Share Their Secrets',
      description: 'Get insights from top performers on their study strategies, discipline, and the mindset that led them to success.'
    },
    {
      id: 9,
      image: '/images/hero1.png',
      tag: 'Study Hacks',
      title: 'Active Learning Techniques That Work',
      description: 'Discover scientifically-proven learning methods including spaced repetition, active recall, and interleaving for better results.'
    },
    {
      id: 10,
      image: '/blogs/Neet - 6.png',
      tag: 'Exam Tips',
      title: 'Understanding Question Paper Weightage',
      description: 'Learn how to analyze question paper patterns and focus your preparation on high-weightage topics for maximum scores.'
    },
    {
      id: 11,
      image: '/blogs/Neet - 5.png',
      tag: 'Study Hacks',
      title: 'Creating an Effective Study Schedule',
      description: 'Discover how to balance multiple subjects, maintain consistency, and build a study schedule that actually works.'
    },
    {
      id: 12,
      image: '/blogs/blog9.png',
      tag: 'Motivation',
      title: 'Building Confidence During Preparation',
      description: 'Strategies to overcome self-doubt and build unshakeable confidence for your final exams.'
    }
  ]

  // Filter blogs
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesFilter = filter === 'All' || blog.tag === filter
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-8" data-blogs-grid>
      <div className="max-w-7xl mx-auto">
        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              image={blog.image}
              tag={blog.tag}
              title={blog.title}
              description={blog.description}
              link="#"
            />
          ))}
        </div>

        {/* Empty State */}
        {currentBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blogs found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg bg-[#1a1a1a] text-gray-300 disabled:opacity-50 hover:bg-[#f6821c] hover:text-white transition"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-lg font-medium transition ${
                  currentPage === page
                    ? 'bg-[#f6821c] text-white'
                    : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#f6821c] hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg bg-[#1a1a1a] text-gray-300 disabled:opacity-50 hover:bg-[#f6821c] hover:text-white transition"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogsGrid
