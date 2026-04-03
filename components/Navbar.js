import React from 'react';
import './navbar.css';

function Navbar() {
  const handleClick = (e, section) => {
    e.preventDefault();
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <header className='header'></header>
      <div className="logo">Monisha portfolio</div>
      <ul className="nav-links">
        <li><a href="#home" onClick={(e)=>handleClick(e,'home')}>Home</a></li>
        <li><a href="#about" onClick={(e)=>handleClick(e,'about')}>About</a></li>
        <li><a href="./projects" onClick={(e)=>handleClick(e,'projects')}>Projects</a></li>
        <li><a href="./contact" onClick={(e)=>handleClick(e,'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;