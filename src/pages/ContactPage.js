import React from 'react';
import Contact from '../components/Contact';
import portfolioData from '../data/portfolioData';
import '../components/Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <Contact data={portfolioData.contact} />
    </div>
  );
};

export default ContactPage;