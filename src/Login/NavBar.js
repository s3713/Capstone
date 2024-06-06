import React from 'react';
import './login.css';


const NavBar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">Tesseract</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a href="/emi" className="nav-link">EMI</a>
        </li>
        
      </ul>
    </nav>
    </>
  );
};

export default NavBar;


