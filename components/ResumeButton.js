import React from "react";
import "./ResumeButton.css";

const ResumeButton = () => {
  return (
    <div className="resume-container">
      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default ResumeButton;