import React from 'react'
import Navbar from '../Components/Home/Navbar'
import BlogDetail from '../Components/Blogs/BlogDetail'
import Footer from '../Components/Home/Footer'

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <BlogDetail />
    </div>
  )
}

export default Blog
