import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Intro Section */}
      <section className="about-hero">
        <h2>Hi, I'm Monisha!</h2>
        <p>
          I’m a Full Stack Web Developer who loves turning ideas into interactive websites and apps. 
          Coding is my playground, and I enjoy exploring new tech, solving problems, and making things that people can actually use. 
          When I’m not coding, you’ll probably find me with music in my ears, a camera in hand, or reading about the latest tech trends.
        </p>
      </section>

      {/* Skills, Hobbies & Resume */}
      <section className="about-cards">
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>React.js</h3>
            <p>Building dynamic and responsive user interfaces.</p>
          </div>
          <div className="card">
            <div className="card-icon">🖥️</div>
            <h3>Node.js</h3>
            <p>Creating server-side applications and APIs.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎨</div>
            <h3>Hobbies</h3>
            <p>Music, Photography, Reading novels, and exploring new corners of the internet.</p>
          </div>
            <div className="card">
            <div className="card-icon">🌐</div>
            <h3>Internet / Interests</h3>
            <p>Continuously learning, building meaningful projects, and contributing to open-source communities.</p>
            </div>
          <div className="card">
            <div className="card-icon">🚀</div>
            <h3>Goals</h3>
            <p>Continuously learning and building projects that help people and communities.</p>
          </div>

           <div className="card resume-card">
            <div className="card-icon">📄</div>
            <h3>My Resume</h3>
            <p>Want to know more about me, my skills, and my work? Grab my resume below 👇</p>
            <a href="./resume.pdf" download className="resume-btn">
              Download Resume 
              </a></div>
        </div>
      </section>
    </div>
  );
};

export default About;