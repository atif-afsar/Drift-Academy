import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import AboutMission from '../Components/About/AboutStory'
import AboutWhyChoose from '../Components/About/AboutWhyChoose'
import AboutFaculty from '../Components/About/AboutFaculty'
import AboutTeaching from '../Components/About/AboutTeaching'
import AboutCTA from '../Components/About/AboutCTA'
import Reveal from './Reveal'

const About = () => {
  return (
    <div>
      <Reveal>
         <AboutHero />
      </Reveal>
     <Reveal>
         <AboutMission />
      </Reveal>
      <Reveal>
         <AboutWhyChoose />
      </Reveal>
      <Reveal>
         <AboutFaculty />
      </Reveal>
     <Reveal>
         <AboutTeaching />
      </Reveal>
     <Reveal>
         <AboutCTA />
      </Reveal>
    </div>
  )
}

export default About
