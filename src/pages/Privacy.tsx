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
    list: [
      'Name and contact information',
      'Company details',
      'Communication preferences',
      'Project requirements and specifications',
      'Payment information',
    ],
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:`,
    list: [
      'Provide and maintain our services',
      'Process your transactions',
      'Send you technical notices and support messages',
      'Communicate with you about products, services, and events',
      'Respond to your comments and questions',
      'Protect against fraudulent or illegal activity',
    ],
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
    list: [
      'Access your personal information',
      'Correct inaccurate information',
      'Request deletion of your information',
      'Object to processing of your information',
      'Request transfer of your information',
    ],
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
    <div className="bg-gray-950 min-h-screen">

      {/* ── HERO ── */}
      <div className="border-b border-white/10 pt-36 pb-12">
        <div className="max-w-[820px] mx-auto px-8">
          <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-5">Legal</p>
          <h1 className="font-black text-white mb-3" style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.025em' }}>
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm font-mono">Last updated: March 15, 2024</p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="py-16">
        <div className="max-w-[820px] mx-auto px-8">

          <p className="text-gray-400 text-base leading-relaxed mb-12">
            This policy describes how VORTEXX collects, uses, and protects your personal
            information when you interact with our website and services.
          </p>

          <div className="space-y-12">
            {sections.map(sec => (
              <div key={sec.title}>
                <h2 className="font-bold text-white text-lg mb-4 pt-6 border-t border-white/10" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>
                  {sec.title}
                </h2>
                <p className="text-gray-400 text-base leading-relaxed whitespace-pre-line">{sec.content}</p>
                {sec.list && (
                  <ul className="mt-3 space-y-2 pl-4">
                    {sec.list.map(item => (
                      <li key={item} className="flex items-start gap-2 text-gray-400 text-base">
                        <span className="text-sky-400 mt-1 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white text-sm font-bold hover:bg-sky-400 transition-colors">
              Contact Us
            </Link>
            <Link to="/terms" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-gray-400 text-sm font-medium hover:border-white/30 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
