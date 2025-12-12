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
      {/* SEO TAGS */}
      <Title>Drift Academy | Transform Your Child's Learning Journey</Title>

      <Meta
        name="description"
        content="Drift Academy helps students build strong fundamentals, master concepts, and grow through structured programs and expert guidance."
      />

      <Meta
        name="keywords"
        content="Drift Academy, tuition, coaching, programs, student learning, education support"
      />

      {/* OpenGraph */}
      <Meta property="og:title" content="Drift Academy — Transform Your Child's Learning Journey" />
      <Meta
        property="og:description"
        content="Join Drift Academy for high-quality learning programs and expert mentors."
      />
      <Meta property="og:image" content="/public/images/hero.png" />
      <Meta property="og:url" content="https://drift-academy.vercel.app/" />
      <Meta property="og:type" content="website" />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Drift Academy — Transform Your Learning" />
      <Meta
        name="twitter:description"
        content="Expert-led programs, personalized learning, and academic excellence."
      />
      <Meta name="twitter:image" content="/public/images/hero.png" />
      {/* PAGE CONTENT */}
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
