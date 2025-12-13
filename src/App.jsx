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
import ScrollToTop from "./Components/ScrollToTop";
import { HeadProvider } from "react-head";
import WhatsAppButton from "./Components/WhatsAppButton";

import { Suspense, lazy } from "react";

const Blogs = lazy(() => import("./Pages/Blogs"));
const Blog = lazy(() => import("./Pages/Blog"));

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
              {/* Lazy Loaded Routes */}
              <Route
                path="/blogs"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
                        Loading blogs...
                      </div>
                    }
                  >
                    <Blogs />
                  </Suspense>
                }
              />

              <Route
                path="/blog/:id"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
                        Loading article...
                      </div>
                    }
                  >
                    <Blog />
                  </Suspense>
                }
              />
            </Routes>
            <WhatsAppButton />
            <Footer />
          </>
        )}
      </Router>
    </HeadProvider>
  );
};

export default App;
