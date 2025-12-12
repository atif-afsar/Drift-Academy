import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Result from "./Pages/Result";
import Contact from "./Pages/Contact";
import Loader from "./Components/Loader";
import SmoothScroll from "./Pages/SmoothScroll";
import Footer from "./Components/Home/Footer";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
import ScrollToTop from "./Components/ScrollToTop";
import { HeadProvider } from "react-head";


const App = () => {
  const [loading, setLoading] = useState(true);

  // Show loader on refresh ALSO
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
      <HeadProvider>
    <Router>
      <SmoothScroll />
      <ScrollToTop />

      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/results" element={<Result />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
      <Footer />

        </>
      )}
    </Router>
    </HeadProvider>
  );
};

export default App;
