import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/Vortexx.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="mark">
                <img src={logo} alt="Vortexx logo" />
              </span>
              <span className="logo-text">
                VORTE<span className="x">XX</span>
              </span>
            </Link>
            <p>
              Transforming businesses through innovative technology solutions and exceptional
              digital experiences.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.53 3H21l-7.5 8.57L22 21h-6.9l-5.4-6.62L3.5 21H0l8.03-9.18L1 3h7.06l4.87 6.05L17.53 3zm-1.21 16.17h1.9L7.77 4.73H5.73l10.59 14.44z" />
                </svg>
              </a>
              <a href="https://wa.me/256745231430" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 11.5C21 16.19 16.97 20 12 20C10.6 20 9.28 19.7 8.1 19.16L3 20L4.4 15.8C3.53 14.55 3 13.08 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Services</h4>
              <Link to="/services#web-design">Web Design</Link>
              <Link to="/services#systems-development">Systems Development</Link>
              <Link to="/services#graphics-design">Graphics Design</Link>
              <Link to="/services#digital-marketing">Digital Marketing</Link>
              <Link to="/services#infrastructure">Infrastructure Management</Link>
              <Link to="/services#ai-agents">AI Agents</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/about#team">Our Team</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <p>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Bukasa-Bugiri, Kawuku
              </p>
              <a href="tel:+256745231430">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (+256) 745-231430
              </a>
              <a href="tel:+256790956548">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (+256) 790-956548
              </a>
              <a href="mailto:thevortexxinfo@gmail.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 6l-10 7L2 6" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                thevortexxinfo@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} VORTEXX Technologies. All rights reserved.</span>
          <div className="legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
