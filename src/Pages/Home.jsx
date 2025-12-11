import React from 'react'
import Hero from '../Components/Home/Hero'
import ProgramsSection from '../Components/Home/ProgramsSection'
import AdvantageSection from '../Components/Home/AdvantageSection'
import TestimonialsSection from '../Components/Home/TestimonialsSection'
import CTASection from '../Components/Home/CTASection'
import Footer from '../Components/Home/Footer'
import Directors from '../Components/Home/Directors'
import HomeBlogPreview from '../Components/Home/HomeBlogPreview'
// import Reveal from './Reveal'

const Home = () => {
  return (
     <div>
   
     <Hero />
        <ProgramsSection />
        <AdvantageSection />
        <TestimonialsSection />
        <Directors />
        <HomeBlogPreview />
        <CTASection />

     

    </div>
  )
}

export default Home
