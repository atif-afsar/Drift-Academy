import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Result from "./Pages/Result";
import Contact from "./Pages/Contact";
import Enquiry from "./Pages/Enquiry";
import Loader from "./Components/Loader";
import SmoothScroll from "./Pages/SmoothScroll";
import Footer from "./Components/Home/Footer";
import EnquiryForm from "./Components/Contact/EnquiryForm";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Show loader on refresh ALSO
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <Router>
      <SmoothScroll />

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
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/enquiry" element={<EnquiryForm />} />
          </Routes>
      <Footer />

        </>
      )}
    </Router>
  );
};

export default App;
