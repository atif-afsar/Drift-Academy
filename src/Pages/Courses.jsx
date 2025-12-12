import React from "react";
import { Title, Meta } from "react-head";

import CoursesHero from "../Components/Courses/CoursesHero";
import CoursesList from "../Components/Courses/CoursesList";
import CoursesWhyChoose from "../Components/Courses/CoursesWhyChoose";
import CoursesFAQ from "../Components/Courses/CoursesFAQ";

const Courses = () => {
  return (
    <div>
      {/* --------------------- SEO TAGS --------------------- */}
      <Title>Courses | Drift Academy</Title>

      <Meta
        name="description"
        content="Explore Drift Academy’s structured learning programs designed to strengthen fundamentals, boost confidence, and improve academic performance across key subjects."
      />

      <Meta
        name="keywords"
        content="Drift Academy courses, tuition programs, learning plans, academic coaching, student improvement programs, study skills, subject coaching"
      />

      {/* OpenGraph Tags */}
      <Meta property="og:title" content="Courses at Drift Academy — Structured Learning Programs" />
      <Meta
        property="og:description"
        content="Discover Drift Academy’s expert-designed courses that help students excel through strong fundamentals, personalized learning, and concept clarity."
      />
      <Meta property="og:image" content="/images/courses.png" />
      <Meta property="og:url" content="https://drift-academy.vercel.app/courses" />
      <Meta property="og:type" content="website" />

      {/* Twitter Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Drift Academy Courses — Boost Your Child's Learning" />
      <Meta
        name="twitter:description"
        content="Structured programs, expert faculty, strong fundamentals, and consistent academic growth — explore our courses now."
      />
      <Meta name="twitter:image" content="/images/courses.png" />

      {/* --------------------- PAGE CONTENT --------------------- */}
      <CoursesHero />
      <CoursesList />
      <CoursesWhyChoose />
      <CoursesFAQ />
    </div>
  );
};

export default Courses;
