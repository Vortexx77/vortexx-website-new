import React from 'react';

const FloatingCTA: React.FC = () => {
  return (
    <a
      href="https://wa.me/256745231430"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed', bottom: 84, right: 28, zIndex: 90,
        display: 'inline-flex', alignItems: 'center', gap: 9,
        background: 'var(--primary-ctr)',
        color: 'var(--on-primary-ctr)',
        fontFamily: 'var(--display)',
        fontWeight: 700,
        fontSize: 13.5,
        padding: '11px 20px',
        borderRadius: 999,
        boxShadow: '0 8px 28px -8px rgba(56,189,248,0.55)',
        transition: 'transform 0.2s, background 0.2s',
        textDecoration: 'none',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.background = 'var(--primary-dim)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.background = 'var(--primary-ctr)'; }}
    >
      <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
        <path
          d="M21 11.5C21 16.19 16.97 20 12 20C10.6 20 9.28 19.7 8.1 19.16L3 20L4.4 15.8C3.53 14.55 3 13.08 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Let's Talk
    </a>
  );
};

export default FloatingCTA;
