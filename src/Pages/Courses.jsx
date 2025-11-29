import React from 'react'
import CoursesHero from '../Components/Courses/CoursesHero'
import CoursesList from '../Components/Courses/CoursesList'
import CoursesWhyChoose from '../Components/Courses/CoursesWhyChoose'
import CoursesFAQ from '../Components/Courses/CoursesFAQ'
import Reveal from './Reveal'

const Courses = () => {
  return (
    <div>
    <Reveal>
      <CoursesHero />
    </Reveal>
      <Reveal>
      <CoursesList />
    </Reveal>
       <Reveal>
      <CoursesWhyChoose />
    </Reveal>
      <Reveal>
      <CoursesFAQ />
    </Reveal>
    </div>
  )
}

export default Courses
