import React from 'react'
import ContactHero from '../Components/Contact/ContactHero'
import ContactInfo from '../Components/Contact/ContactInfo'
import EnquiryForm from '../Components/Contact/EnquiryForm'
import ContactMap from '../Components/Contact/ContactMap'

const Contact = () => {
  return (
    <div>
      <ContactHero />
       <EnquiryForm />
      <ContactInfo />
      <ContactMap />
    </div>
  )
}

export default Contact
