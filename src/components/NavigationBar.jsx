import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-F8FAFC text-9AA6B2 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-D9EAFD tracking-wide">
          Billy Tunes
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-9AA6B2"></span>
            <span className="block w-8 h-1 bg-9AA6B2"></span>
            <span className="block w-8 h-1 bg-9AA6B2"></span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-F8FAFC md:bg-transparent transition-transform duration-300 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link to="/" className="block py-2 px-6 text-lg hover:text-D9EAFD transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 px-6 text-lg hover:text-D9EAFD transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="block py-2 px-6 text-lg hover:text-D9EAFD transition-colors duration-200"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block py-2 px-6 text-lg hover:text-D9EAFD transition-colors duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-6 text-lg hover:text-D9EAFD transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
