import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      <div className="cards-container">
        <div className="card">
          <div className="card-icon">🌐</div>
          <h3>Portfolio Website</h3>
          <p>My personal website built with React and Tailwind.</p>
        </div>

        <div className="card">
          <div className="card-icon">🛒</div>
          <h3>Campus Marketplace</h3>
          <p>Online platform for students to buy & sell items.</p>
        </div>

        <div className="card">
          <div className="card-icon">📚</div>
          <h3>Study Group Finder</h3>
          <p>Helps students connect and form study groups easily.</p>
        </div>

        <div className="card">
          <div className="card-icon">💡</div>
          <h3>Smart Academic Companion</h3>
          <p>An intelligent system to automate academic tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;