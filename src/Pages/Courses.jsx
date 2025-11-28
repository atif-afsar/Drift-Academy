import React from 'react'
import CoursesHero from '../Components/Courses/CoursesHero'
import CoursesList from '../Components/Courses/CoursesList'
import CoursesWhyChoose from '../Components/Courses/CoursesWhyChoose'
import CoursesFAQ from '../Components/Courses/CoursesFAQ'

const Courses = () => {
  return (
    <div>
      <CoursesHero />
      <CoursesList />
      <CoursesWhyChoose />
      <CoursesFAQ />
    </div>
  )
}

export default Courses
