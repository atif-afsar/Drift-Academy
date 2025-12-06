import React from 'react'
import ResultsHero from '../Components/Results/ResultsHero'
import StatsSection from '../Components/Results/StatsSection'
import StudentStories from '../Components/Results/StudentStories'
import TopperVideo from '../Components/Results/TopperVideo'
import ResultsCTA from '../Components/Results/ResultsCTA'
import ResultBannerSection from '../Components/Results/ResultBannerSection'
// import Reveal from './Reveal'

const Result = () => {
  return (
    <div>
   
      <ResultsHero />
   
      <StatsSection />

      <ResultBannerSection />
    
      <StudentStories />
    
      <TopperVideo />
    
      <ResultsCTA />
    </div>
  )
}

export default Result
