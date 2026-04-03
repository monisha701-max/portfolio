import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const sections = [
    { id: 'home', label: 'Home', color: '#ff6f61' },
    { id: 'about', label: 'About', color: '#6fb1fc' },
    { id: 'projects', label: 'Projects', color: '#c17aff' },
    { id: 'contact', label: 'Contact', color: '#4caf50' },
  ];

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sidebar">
      {sections.map((sec) => (
        <div
          key={sec.id}
          className="sidebar-item"
          style={{ background: sec.color }}
          onClick={() => handleClick(sec.id)}
        >
          {sec.label}
        </div>
        
      ))}
    </div>
  );
}

export default Sidebar;