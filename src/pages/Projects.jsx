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
                </div>

              {/* Projects Grid */}
                      <div className="projects-grid">
                      <div className="project-card">
                        <div className="project-image">
                        <div className="project-placeholder">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                        </div>
                        </div>
                        <div className="project-content">
                        <h3>Portfolio Website</h3>
                        <p>Modern, responsive portfolio website built with React and Vite, featuring smooth animations and mobile optimization.</p>
                        <div className="project-tech">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Vite</span>
                      <span className="tech-tag">CSS3</span>
                      <span className="tech-tag">JavaScript</span>
                        </div>
                        <a href="https://github.com/exiledftw/react-portfolio" 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer">View Project</a>
                        </div>
                      </div>

                      <div className="project-card">
                        <div className="project-image">
                        <div className="project-placeholder">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM8 8h1v1H8V8zm2 0h1v1h-1V8zm2 0h1v1h-1V8zm0 2h1v1h-1v-1zm0 2h1v1h-1v-1zm-2-2h1v1h-1v-1zm-2 0h1v1H8v-1zm0 2h1v1H8v-1zm8 4H8v-1h8v1zm0-10v5h-5V8h5z"/>
                      </svg>
                        </div>
                        </div>
                        <div className="project-content">
                        <h3>QR Code Generator</h3>
                        <p>Takes an entire row from an excel sheet or rather multiple rows and generates their QR codes, with the option to attach a logo in the middle.</p>
                        <div className="project-tech">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">pandas</span>
                      <span className="tech-tag">qrcode</span>
                        </div>
                        <a href="https://github.com/exiledftw/QR_Code_Generator" 
                        className="project-link" 
                        target="_blank"
                        rel="noopener noreferrer">View Project</a>
                        </div>
                      </div>
                      <div className="project-card">
                        <div className="project-image">
                        <div className="project-placeholder">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                        </div>
                        </div>
                        <div className="project-content">
                        <h3>Django Portfolio Example Website</h3>
                        <p>A Django website.</p>
                        <div className="project-tech">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Django</span>
                      <span className="tech-tag">Sqlite3</span>
                        </div>
                        <a href="https://exiledftw.pythonanywhere.com/" 
                        className="project-link" 
                        target="_blank"
                        rel="noopener noreferrer">View Project</a>
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
