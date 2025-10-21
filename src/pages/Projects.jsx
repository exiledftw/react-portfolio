import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactPopup from '../components/ContactPopup/ContactPopup';

function Projects() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const handleGetInTouchClick = (e) => {
    e.preventDefault();
    setIsContactPopupOpen(true);
  };

  const closeContactPopup = () => {
    setIsContactPopupOpen(false);
  };

  return (
    <>
      <Navbar />
      
      <div className="page-container">
        <div className="about-container">
          {/* Projects Header */}
          <div className="projects-header">
            <h1 className="projects-main-title">My Projects</h1>
            <p className="projects-subtitle">
              Here is a showcase of my work - from data automation to web scraping solutions
            </p>
          </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <div className="project-content">
              <h3>PDF to TXT conversion</h3>
              <p>Extracts text from a pdf file.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">pdfplumber</span>
                <span className="tech-tag">PyPDF2</span>
              </div>
              <a href="https://github.com/exiledftw/pdf_to_text" className="project-link">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3.01 2.67 3.01 3.5L3 19.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-16C21 2.67 20.33 2 19.5 2zM19.5 19.5h-15V8h15v11.5z"/>
                </svg>
              </div>
            </div>
            <div className="project-content">
              <h3>React Portfolio Website</h3>
              <p>Modern, responsive portfolio website built with React and Vite, featuring smooth animations and mobile optimization.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vite</span>
                <span className="tech-tag">CSS3</span>
              </div>
              <a href="https://github.com/exiledftw/react-portfolio" className="project-link">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
            </div>
            <div className="project-content">
              <h3>QR Code Generator</h3>
              <p>Desktop application for generating custom QR codes with batch processing and various output formats.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Tkinter</span>
                <span className="tech-tag">qrcode</span>
              </div>
              <a href="https://github.com/exiledftw/QR_Code_Generator" className="project-link">View Project</a>
            </div>
          </div>
</div>
          {/* Call to Action */}
          <div className="projects-cta">
            <h2>Interested in Working Together?</h2>
            <p>I'm always excited to take on new challenges and create innovative solutions.</p>
            <button onClick={handleGetInTouchClick} className="cta-button">Get In Touch</button>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="page-footer">
          <p className="copyright">&copy; {new Date().getFullYear()} Project Thunder. All rights reserved.</p>
        </footer>
      </div>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={closeContactPopup} 
      />
    </>
  );
}

export default Projects;
