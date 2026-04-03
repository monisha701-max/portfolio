import React, { useState } from 'react';
import './contactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;