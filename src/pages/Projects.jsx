import React from 'react';
import Navbar from '../components/Navbar';

function Projects() {
  return (
    <>
      <Navbar />
      
      <div className="page-container">
        <div className="about-container">
          {/* Projects Header */}
          <div className="projects-header">
            <h1 className="projects-main-title">My Projects</h1>
            <p className="projects-subtitle">
              Here's a showcase of my work - from data automation to web scraping solutions
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
              <h3>Python Data Automation</h3>
              <p>Automated data processing pipeline that converts PDFs to Excel, performs data cleaning and generates comprehensive reports.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">PyPDF2</span>
              </div>
              <a href="#" className="project-link">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <div className="project-content">
              <h3>Web Scraping Suite</h3>
              <p>Comprehensive web scraping solution with automated data collection, processing, and storage capabilities for various websites.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">BeautifulSoup</span>
                <span className="tech-tag">Selenium</span>
              </div>
              <a href="#" className="project-link">View Project</a>
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
              <a href="#" className="project-link">View Project</a>
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
              <a href="#" className="project-link">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
              </div>
            </div>
            <div className="project-content">
              <h3>File Conversion Tool</h3>
              <p>Multi-format file conversion utility supporting PDF, Excel, CSV, and image formats with batch processing capabilities.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Pillow</span>
                <span className="tech-tag">openpyxl</span>
              </div>
              <a href="#" className="project-link">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" className="project-icon">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
              </div>
            </div>
            <div className="project-content">
              <h3>Desktop Automation Suite</h3>
              <p>Complete desktop automation solution for repetitive tasks, including file management and system monitoring.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PyAutoGUI</span>
                <span className="tech-tag">Schedule</span>
              </div>
              <a href="#" className="project-link">View Project</a>
            </div>
          </div>
        </div>

          {/* Call to Action */}
          <div className="projects-cta">
            <h2>Interested in Working Together?</h2>
            <p>I'm always excited to take on new challenges and create innovative solutions.</p>
            <a href="#contact" className="cta-button">Get In Touch</a>
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

export default Projects;
