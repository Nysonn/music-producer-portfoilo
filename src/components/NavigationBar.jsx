import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../public/NavigationBar.css';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event handler to detect scroll and change the navbar background
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Add transparent background when scrolled down
    } else {
      setIsScrolled(false); // Remove transparent background when at the top
    }
  };

  useEffect(() => {
    // Add event listener for scroll when the component is mounted
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navigation-bar ${isScrolled ? 'scrolled' : ''}`}>
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
          <div className={`hamburger-lines ${isOpen ? 'open' : ''}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul className={`navigation-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
