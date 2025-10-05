import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import brilliance from "../assets/brilliance.svg";
import light from '../assets/lightning-charge-fill.svg'
import play from '../assets/play-btn-fill.svg'

function Home() {
  return (
    <>
      <Navbar />

      {/* Main content container */}
      <div className="page-container">
        <div className="home">
          <div className="home-container">
            <h1 className="home-title">Hello there!</h1>
            <p className="home-subtitle">Thank you for taking a keen interest!</p>

            {/* Cards row */}
            <div className="home-content">
              <div className="feature-card">
                <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={ brilliance } alt="bril icon" width={32} height={32} />
                  <p>About me.</p>
                </Link>
              </div>

              <div className="feature-card">
                <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={ light } alt="light icon" width={32} height={32}/>
                  <p>My vision.</p>
                </Link>
              </div>

              <div className="feature-card">
                <Link to="/youtube" style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={ play } alt="play btn" width={32} height={32}/>
                  <p>My YouTube channel.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="page-footer">
          <p className="copyright">&copy; {new Date().getFullYear()} Project Thunder. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
