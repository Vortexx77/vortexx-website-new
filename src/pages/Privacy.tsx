import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Introduction',
    content: `VORTEXX ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and use our services.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect information that you provide directly to us, including:`,
    list: ['Name and contact information', 'Company details', 'Communication preferences', 'Project requirements and specifications', 'Payment information'],
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:`,
    list: ['Provide and maintain our services', 'Process your transactions', 'Send you technical notices and support messages', 'Communicate with you about products, services, and events', 'Respond to your comments and questions', 'Protect against fraudulent or illegal activity'],
  },
  {
    title: '4. Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business.`,
  },
  {
    title: '5. Data Security',
    content: `We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption, firewalls, and secure socket layer technology.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:`,
    list: ['Access your personal information', 'Correct inaccurate information', 'Request deletion of your information', 'Object to processing of your information', 'Request transfer of your information'],
  },
  {
    title: '7. Contact Us',
    content: `If you have questions about this Privacy Policy, please contact us at:\nEmail: thevortexxinfo@gmail.com\nAddress: Bukasa-Bugiri, Kawuku, Kampala, Uganda`,
  },
];

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | VORTEXX';
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ borderBottom: '1px solid var(--stroke)', paddingTop: 140, paddingBottom: 48 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 18 }}>Legal</p>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: 10 }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-muted)' }}>Last updated: March 15, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.75, marginBottom: 48 }}>
            This policy describes how VORTEXX collects, uses, and protects your personal
            information when you interact with our website and services.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
            {sections.map(sec => (
              <div key={sec.title} style={{ borderTop: '1px solid var(--stroke)', paddingTop: 28 }}>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 14 }}>
                  {sec.title}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.75, whiteSpace: 'pre-line' }}>{sec.content}</p>
                {sec.list && (
                  <ul style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 9, paddingLeft: 4 }}>
                    {sec.list.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--text-muted)', fontSize: 15 }}>
                        <span style={{ color: 'var(--primary-ctr)', marginTop: 3, flexShrink: 0 }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, paddingTop: 28, borderTop: '1px solid var(--stroke)', display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link to="/contact" className="btn btn-primary btn-sm">Contact Us</Link>
            <Link to="/terms" className="btn btn-secondary btn-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
