import React from "react";
import { Title, Meta } from "react-head";

import ContactHero from "../Components/Contact/ContactHero";
import ContactInfo from "../Components/Contact/ContactInfo";
import EnquiryForm from "../Components/Contact/EnquiryForm";
import ContactMap from "../Components/Contact/ContactMap";

const Contact = () => {
  return (
    <div>
      {/* --------------------- SEO TAGS --------------------- */}
      <Title>Contact Us | Drift Academy</Title>

      <Meta
        name="description"
        content="Get in touch with Drift Academy for admissions, course details, counseling, and student support. Our team is here to assist you with all queries and guidance."
      />

      <Meta
        name="keywords"
        content="Drift Academy contact, Drift Academy address, contact details, enquiry form, coaching support, student help, academy location"
      />

      {/* OpenGraph Tags */}
      <Meta property="og:title" content="Contact Drift Academy — We're Here to Help" />
      <Meta
        property="og:description"
        content="Reach out to Drift Academy for admissions, course guidance, and support. Fill out our enquiry form or visit our location for assistance."
      />
      <Meta property="og:image" content="/images/contact1.png" />
      <Meta property="og:url" content="https://drift-academy.vercel.app/contact" />
      <Meta property="og:type" content="website" />

      {/* Twitter Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Contact Drift Academy — Let's Connect" />
      <Meta
        name="twitter:description"
        content="Have questions? We're here to help. Contact Drift Academy for admissions, course details, and support."
      />
      <Meta name="twitter:image" content="/images/contact1.png" />

      {/* --------------------- PAGE CONTENT --------------------- */}
      <ContactHero />
      <EnquiryForm />
      <ContactInfo />
      <ContactMap />
    </div>
  );
};

export default Contact;
