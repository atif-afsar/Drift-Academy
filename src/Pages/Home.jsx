import React from 'react'
import Hero from '../Components/Home/Hero'
import ProgramsSection from '../Components/Home/ProgramsSection'
import AdvantageSection from '../Components/Home/AdvantageSection'
import TestimonialsSection from '../Components/Home/TestimonialsSection'
import CTASection from '../Components/Home/CTASection'
import Footer from '../Components/Home/Footer'
import Reveal from './Reveal'

const Home = () => {
  return (
     <div>
     <Reveal>
     <Hero />
     </Reveal>
      

      <Reveal>
        <ProgramsSection />
      </Reveal>

      <Reveal>
        <AdvantageSection />
      </Reveal>

      <Reveal>
        <TestimonialsSection />
      </Reveal>

      <Reveal>
        <CTASection />
      </Reveal>

      <Footer />
    </div>
  )
}

export default Home
