import React from "react";
import { Title, Meta } from "react-head";

import Navbar from "../Components/Home/Navbar";
import FeaturedBlog from "../Components/Blogs/FeaturedBlog";
import Footer from "../Components/Home/Footer";

const Blogs = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]">
      {/* --------------------- SEO TAGS --------------------- */}
      <Title>Blogs | Drift Academy</Title>

      <Meta
        name="description"
        content="Explore insightful educational blogs from Drift Academy covering study tips, student motivation, smart learning techniques, and academic success strategies."
      />

      <Meta
        name="keywords"
        content="Drift Academy blogs, study tips, student learning blogs, education articles, academic improvement, motivation for students, coaching blogs"
      />

      {/* OpenGraph Tags */}
      <Meta property="og:title" content="Drift Academy Blogs — Learning & Education Insights" />
      <Meta
        property="og:description"
        content="Read expert-written blogs on student learning, study strategies, academic performance, and motivation — only at Drift Academy."
      />
      <Meta property="og:image" content="https://drift-academy.vercel.app/og-blogs.png" />
      <Meta property="og:url" content="https://drift-academy.vercel.app/blogs" />
      <Meta property="og:type" content="website" />

      {/* Twitter Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Drift Academy Blogs — Education & Study Tips" />
      <Meta
        name="twitter:description"
        content="Discover helpful articles on study techniques, motivation, and effective learning."
      />
      <Meta name="twitter:image" content="https://drift-academy.vercel.app/og-blogs.png" />

      {/* --------------------- PAGE CONTENT --------------------- */}
      <Navbar />
      <FeaturedBlog />
    </div>
  );
};

export default Blogs;
