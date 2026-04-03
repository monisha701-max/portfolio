import React from 'react';

function SkillCard({ skill, level }) {
  return (
    <div className="skill-card">
      <h4>{skill}</h4>
      <p>{level}</p>
    </div>
  );
}

export default SkillCard;