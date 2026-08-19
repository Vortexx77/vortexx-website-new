import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Agreement to Terms',
    content: `By accessing or using VORTEXX's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.`,
  },
  {
    title: '2. Services',
    content: `VORTEXX provides technology solutions including web design, systems development, graphics design, digital marketing, and infrastructure management services. All services are subject to these terms and any additional agreements specific to the service.`,
  },
  {
    title: '3. Intellectual Property',
    content: `All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of VORTEXX and protected by international copyright, trademark, and other intellectual property laws.`,
  },
  {
    title: '4. User Responsibilities',
    content: `You agree to:`,
    list: ['Provide accurate and complete information', 'Maintain the confidentiality of your account', 'Use services in compliance with applicable laws', 'Not engage in unauthorized access or use of our systems', 'Not interfere with service performance or functionality'],
  },
  {
    title: '5. Payment Terms',
    content: `Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise stated. We reserve the right to modify our pricing with appropriate notice.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `VORTEXX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.`,
  },
  {
    title: '7. Termination',
    content: `We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.`,
  },
  {
    title: '8. Changes to Terms',
    content: `We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms on this page.`,
  },
  {
    title: '9. Contact Information',
    content: `For questions about these Terms, please contact us at:\nEmail: thevortexxinfo@gmail.com\nAddress: Bukasa-Bugiri, Kawuku, Kampala, Uganda`,
  },
];

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms of Service | VORTEXX';
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ borderBottom: '1px solid var(--stroke)', paddingTop: 140, paddingBottom: 48 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 18 }}>Legal</p>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: 10 }}>
            Terms of Service
          </h1>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-muted)' }}>Last updated: March 15, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '64px 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.75, marginBottom: 48 }}>
            Please read these terms carefully before using VORTEXX's services. By accessing or
            using our services, you agree to be bound by these terms and conditions.
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
            <Link to="/privacy" className="btn btn-secondary btn-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
