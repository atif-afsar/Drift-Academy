import React from "react";
import { Title, Meta } from "react-head";

import Navbar from "../Components/Home/Navbar";
import BlogDetail from "../Components/Blogs/BlogDetail";

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Blog Detail Component */}
      <BlogDetail
        renderSEO={({ title, description, image, url }) => (
          <>
            {/* --------------------- DYNAMIC SEO TAGS --------------------- */}
            <Title>{title ? `${title} | Drift Academy Blog` : "Blog | Drift Academy"}</Title>

            <Meta name="description" content={description || "Read insights, tips, and learning strategies from Drift Academy."} />

            <Meta
              name="keywords"
              content="Drift Academy blog, education articles, study tips, student learning, coaching blogs"
            />

            {/* OpenGraph */}
            <Meta property="og:title" content={title || "Drift Academy Blog"} />
            <Meta property="og:description" content={description || "Explore educational insights and learning tips."} />
            <Meta property="og:image" content={image || "/images/jee.jpg"} />
            <Meta property="og:url" content={url || "https://drift-academy.vercel.app"} />
            <Meta property="og:type" content="article" />

            {/* Twitter */}
            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content={title || "Drift Academy Blog"} />
            <Meta name="twitter:description" content={description || "Educational insights and learning strategies."} />
            <Meta name="twitter:image" content={image || "/images/jee.jpg"} />
          </>
        )}
      />
    </div>
  );
};

export default Blog;
