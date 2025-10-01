import React from 'react';
import Navbar from '../components/Navbar';
import Pfp from '../components/pfp.jpg';

function About() {
  return (
    <>
      <Navbar />
      
      <div className="page-container">
        <div className="about-container">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src={Pfp} 
              alt="Profile" 
              className="profile-image"
            />
            <div className="profile-image-overlay"></div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Khizer Khurshid Malik</h1>
            <p className="profile-title">Software Engineering (Undergrad)</p>
            <p className="profile-title">SZABIST University, Islamabad</p>
            <div className="profile-social">
              <a 
                href="https://www.linkedin.com/in/khizer-khurshid-64332533b/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/exiledftw" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://www.fiverr.com/s/2KgjvXN" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiverr
              </a>
              <a 
                href="https://www.upwork.com/freelancers/~01f652b330394a13af?mp_source=share" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upwork
              </a>
            </div>
          </div>
        </div>
        <div className="quote-section">
          <blockquote className="inspirational-quote">
            <i>"If you are going through hell, keep going." – Winston Churchill</i>
          </blockquote>
        </div>

        {/* About Content */}
        <div className="about-content-grid">
          <div className="about-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3>About Me</h3>
            <p>
              I’m Khizer, a Python automation specialist who turns messy data—web scraping, 
              PDF-to-Excel conversions, Pandas analysis—into clear, actionable insights. 
              Detail-oriented and reliable, I deliver high-quality solutions that save you time and hassle.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3.01 2.67 3.01 3.5L3 19.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-16C21 2.67 20.33 2 19.5 2zM19.5 19.5h-15V8h15v11.5z"/>
              </svg>
            </div>
            <h3>Experience</h3>
            <p>
              I have worked on numerous projects that involved data extraction,
              file conversion, Web/Data Scraping, automations, file handling, 
              QR code generation, desktop automations, and more using Python and 
              its libraries.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Skills & Passion</h3>
            <p>
              I am a fast learner and a quick thinker, 
              I make sure to deliver the best results and solutions
              you need to your problems. My core abilities include Python programming, 
              JavaScript, React, Django.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h3>Vision & Goals</h3>
            <p>
              I empower professionals to reclaim hours by automating tedious data tasks with Python—transforming complex PDFs,
               sprawling spreadsheets, and live web data into clear, actionable insights so teams can focus on innovation.
            </p>
          </div>
        </div>

        {/* Personal Touch Section */}
        <div className="personal-section">
          <h2 className="section-title">A Bit More Personal</h2>
          <div className="personal-content">
            <p>
              Add some personal details here - your hobbies, interests outside of work, 
              fun facts about yourself, or anything that helps visitors get to know 
              the real you beyond your professional accomplishments.
            </p>
            <p>
              This could include your favorite books, travel experiences, 
              side projects, or causes you care about. Make it authentic and engaging!
            </p>
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

export default About;
