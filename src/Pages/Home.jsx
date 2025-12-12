import React from "react";
import { Title, Meta } from "react-head";

import Hero from "../Components/Home/Hero";
import ProgramsSection from "../Components/Home/ProgramsSection";
import AdvantageSection from "../Components/Home/AdvantageSection";
import TestimonialsSection from "../Components/Home/TestimonialsSection";
import CTASection from "../Components/Home/CTASection";
import Directors from "../Components/Home/Directors";
import HomeBlogPreview from "../Components/Home/HomeBlogPreview";

const Home = () => {
  return (
    <div>
      {/* -------------------- SEO TAGS -------------------- */}

      {/* STRONG SEO TITLE (Brand + What You Offer + Location Intent) */}
      <Title>
        Drift Academy – Best Coaching & Learning Programs for Students | Improve Fundamentals & Academic Growth
      </Title>

      {/* HIGH-CONVERSION DESCRIPTION */}
      <Meta
        name="description"
        content="Drift Academy provides high-quality coaching and structured learning programs designed to build strong fundamentals, improve academic performance, and help students achieve excellence with expert guidance."
      />

      {/* SEO KEYWORDS (Improved) */}
      <Meta
        name="keywords"
        content="Drift Academy, best coaching center, tuition classes, student learning programs, education academy, concept learning, fundamentals coaching, academic improvement"
      />

      {/* -------------------- OPEN GRAPH -------------------- */}
      <Meta
        property="og:title"
        content="Drift Academy – Best Coaching & Learning Programs for Students"
      />
      <Meta
        property="og:description"
        content="Boost your child’s learning journey with Drift Academy’s expert-led coaching, structured programs, and personalized academic support."
      />
      <Meta
        property="og:image"
        content="https://drift-academy.vercel.app/images/hero.png"
      />
      <Meta property="og:url" content="https://drift-academy.vercel.app/" />
      <Meta property="og:type" content="website" />

      {/* -------------------- TWITTER -------------------- */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta
        name="twitter:title"
        content="Drift Academy – High-Quality Coaching & Academic Support"
      />
      <Meta
        name="twitter:description"
        content="Expert-led programs, personalized learning, and strong concept building for student success."
      />
      <Meta
        name="twitter:image"
        content="https://drift-academy.vercel.app/images/hero.png"
      />

      {/* ------------------ PAGE CONTENT ------------------ */}
      <Hero />
      <ProgramsSection />
      <AdvantageSection />
      <TestimonialsSection />
      <Directors />
      <HomeBlogPreview />
      <CTASection />
    </div>
  );
};

export default Home;
