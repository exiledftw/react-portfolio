import React, { useEffect } from 'react';
import './ContactPopup.css';

function ContactPopup({ isOpen, onClose }) {
  // Close popup when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close popup when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Copy to clipboard function
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
      console.log(`${type} copied to clipboard!`);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-popup-overlay" onClick={handleBackdropClick}>
      <div className="contact-popup">
        <div className="contact-popup-header">
          <h2>Get In Touch</h2>
          <button 
            className="contact-popup-close" 
            onClick={onClose}
            aria-label="Close contact popup"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div className="contact-popup-content">
          <p className="contact-popup-subtitle">
            Feel free to reach out to me through any of the following methods:
          </p>

          <div className="contact-methods">
            {/* Email */}
            <div className="contact-method">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p className="contact-value">khizarkhurshid3@gmail.com</p>
                <div className="contact-actions">
                  <a 
                    href="mailto:exiledftw@example.com" 
                    className="contact-action-btn"
                  >
                    Send Email
                  </a>
                  <button 
                    onClick={() => copyToClipboard('exiledftw@example.com', 'Email')}
                    className="contact-action-btn secondary"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-method">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Phone</h3>
                <p className="contact-value">+92 333 5116779</p>
                <div className="contact-actions">
                  <a 
                    href="tel:+15551234567" 
                    className="contact-action-btn"
                  >
                    Call Now
                  </a>
                  <button 
                    onClick={() => copyToClipboard('+92 333 5116779', 'Phone')}
                    className="contact-action-btn secondary"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="contact-popup-footer">
            <p>I typically respond within 24 hours!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;