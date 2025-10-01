import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${isHomePage ? 'navbar-with-animation' : 'navbar-static'}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-text">My Portfolio</span>
        </div>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/youtube" 
            className={`nav-link ${location.pathname === '/youtube' ? 'active' : ''}`}
          >
            Youtube
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
