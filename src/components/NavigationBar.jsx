import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../public/NavigationBar.css';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation-bar">
      <div className="navigation-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Billy Tunes
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="hamburger-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <div className="hamburger-lines">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`navigation-links ${isOpen ? 'open' : ''}`}
        >
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
