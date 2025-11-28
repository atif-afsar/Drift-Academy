import React from 'react'
import ResultsHero from '../Components/Results/ResultsHero'
import ResultsHighlights from '../Components/Results/ResultsHighlights'
import ResultsToppers from '../Components/Results/ResultsToppers'
import ResultsYearwise from '../Components/Results/ResultsYearwise'
import ResultsCTA from '../Components/Results/ResultsCTA'

const Result = () => {
  return (
    <div>
      <ResultsHero />
      <ResultsHighlights />
      <ResultsToppers />
      <ResultsYearwise />
      <ResultsCTA />
    </div>
  )
}

export default Result
