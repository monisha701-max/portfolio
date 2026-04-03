import React from 'react';
import './home.css';

function Home() {

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <div className="home-card home">
        <h1>
          Welcome to My <span className="highlight">Portfolio</span>
        </h1>
        <h1>Hi, I'm Monisha</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build modern, responsive web applications using JavaScript, React, and Node.js
        </p>

        {/* Buttons inside the card */}
        <div className="home-buttons">
          <button 
            className="btn primary" 
            onClick={() => scrollToSection('about')}
          >
            About Me
          </button>

          <button 
            className="btn primary" 
            onClick={() => scrollToSection('projects')}
          >
            My Projects
          </button>

          <button 
            className="btn secondary" 
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default Home;