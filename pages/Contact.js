import React from 'react';
import ContactForm from '../components/ContactForm';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;