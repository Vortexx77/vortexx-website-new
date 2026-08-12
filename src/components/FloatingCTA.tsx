import React from 'react';

const FloatingCTA: React.FC = () => {
  return (
    <a
      href="https://wa.me/256745231430"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-chat"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path
          d="M21 11.5C21 16.19 16.97 20 12 20C10.6 20 9.28 19.7 8.1 19.16L3 20L4.4 15.8C3.53 14.55 3 13.08 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Let's Talk</span>
    </a>
  );
};

export default FloatingCTA;
