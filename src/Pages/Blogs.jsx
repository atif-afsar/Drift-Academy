import React from 'react'
import Navbar from '../Components/Home/Navbar'
import FeaturedBlog from '../Components/Blogs/FeaturedBlog'
import Footer from '../Components/Home/Footer'

const Blogs = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <FeaturedBlog />
    </div>
  )
}
export default Blogs
