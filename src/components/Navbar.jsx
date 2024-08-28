import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" height="70px" width="120px" className="navbar-brand"/>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
        <a href="#gallery" onClick={toggleMenu}>Gallery</a>
        <a href="#reviews" onClick={toggleMenu}>Reviews</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
