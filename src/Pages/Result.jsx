import React from "react";
import { Title, Meta } from "react-head";

import ResultsHero from "../Components/Results/ResultsHero";
import StatsSection from "../Components/Results/StatsSection";
import StudentStories from "../Components/Results/StudentStories";
import TopperVideo from "../Components/Results/TopperVideo";
import ResultsCTA from "../Components/Results/ResultsCTA";
import ResultBannerSection from "../Components/Results/ResultBannerSection";

const Result = () => {
  return (
    <div>
      {/* --------------------- SEO TAGS --------------------- */}
      <Title>Results | Drift Academy</Title>

      <Meta
        name="description"
        content="See how Drift Academy transforms students into high achievers through structured learning, strong fundamentals, and personalized support. Explore real success stories, academic progress data, and topper journeys."
      />

      <Meta
        name="keywords"
        content="Drift Academy results, student success, academic performance, toppers, progress improvement, education results, student stories"
      />

      {/* OpenGraph Tags */}
      <Meta property="og:title" content="Drift Academy Results — Real Student Success Stories" />
      <Meta
        property="og:description"
        content="Discover inspiring student success stories, performance statistics, and topper achievements that highlight Drift Academy's commitment to academic excellence."
      />
      <Meta property="og:image" content="/images/results.png" />
      <Meta property="og:url" content="https://drift-academy.vercel.app/results" />
      <Meta property="og:type" content="website" />

      {/* Twitter Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Drift Academy Results — Student Achievements" />
      <Meta
        name="twitter:description"
        content="Real improvement. Real success. Explore Drift Academy's student progress, achievements, and transformation stories."
      />
      <Meta name="twitter:image" content="/images/results.png" />

      {/* --------------------- PAGE CONTENT --------------------- */}
      <ResultsHero />
      <StatsSection />
      <ResultBannerSection />
      <StudentStories />
      <TopperVideo />
      <ResultsCTA />
    </div>
  );
};

export default Result;
