import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProgramsSection from './Components/ProgramsSection'
import AdvantageSection from './Components/AdvantageSection'
import TestimonialsSection from './Components/TestimonialsSection'
import CTASection from './Components/CTASection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <ProgramsSection />
    <AdvantageSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
    </div>
  )
}

export default App
