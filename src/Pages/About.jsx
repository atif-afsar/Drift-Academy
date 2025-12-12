import React from "react";
import { Title, Meta } from "react-head";

import AboutHero from "../Components/About/AboutHero";
import AboutMission from "../Components/About/AboutStory";
import AboutWhyChoose from "../Components/About/AboutWhyChoose";
import AboutFaculty from "../Components/About/AboutFaculty";
import AboutTeaching from "../Components/About/AboutTeaching";
import AboutCTA from "../Components/About/AboutCTA";
import DriftCycleSection from "../Components/About/DriftCycleSection";

const About = () => {
  return (
    <div>
      {/* --------------------- SEO TAGS --------------------- */}
      <Title>About Us | Drift Academy</Title>

      <Meta
        name="description"
        content="Learn about Drift Academy's mission, teaching philosophy, experienced faculty, and our commitment to transforming students into confident, high-performing learners."
      />

      <Meta
        name="keywords"
        content="Drift Academy, about Drift Academy, teaching philosophy, education institute, learning methods, faculty, student success, mission"
      />

      {/* OpenGraph Tags */}
      <Meta property="og:title" content="About Drift Academy — Our Mission & Teaching Approach" />
      <Meta
        property="og:description"
        content="Discover Drift Academy’s mission-driven teaching approach, expert faculty, and commitment to student growth and excellence."
      />
      <Meta property="og:image" content="/public/about-img/team.png" />
      <Meta property="og:url" content="https://drift-academy.vercel.app/about" />
      <Meta property="og:type" content="website" />

      {/* Twitter Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="About Drift Academy — Learn Our Vision & Values" />
      <Meta
        name="twitter:description"
        content="Drift Academy focuses on structured learning, strong fundamentals, expert faculty, and a mission to guide students toward academic success."
      />
      <Meta name="twitter:image" content="/public/about-img/team.png" />

      {/* --------------------- PAGE CONTENT --------------------- */}
      <AboutHero />
      <AboutMission />
      <AboutWhyChoose />
      <AboutFaculty />
      <DriftCycleSection />
      <AboutTeaching />
      <AboutCTA />
    </div>
  );
};

export default About;
