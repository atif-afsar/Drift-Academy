import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Home/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Result from './Pages/Result'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Result />} />



      </Routes>
    </Router>
  )
}

export default App
