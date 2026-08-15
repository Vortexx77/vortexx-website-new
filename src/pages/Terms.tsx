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
    list: [
      'Provide accurate and complete information',
      'Maintain the confidentiality of your account',
      'Use services in compliance with applicable laws',
      'Not engage in unauthorized access or use of our systems',
      'Not interfere with service performance or functionality',
    ],
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
    <div className="bg-gray-950 min-h-screen">

      {/* ── HERO ── */}
      <div className="border-b border-white/10 pt-36 pb-12">
        <div className="max-w-[820px] mx-auto px-8">
          <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-5">Legal</p>
          <h1 className="font-black text-white mb-3" style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.025em' }}>
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm font-mono">Last updated: March 15, 2024</p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="py-16">
        <div className="max-w-[820px] mx-auto px-8">

          <p className="text-gray-400 text-base leading-relaxed mb-12">
            Please read these terms carefully before using VORTEXX's services. By accessing or
            using our services, you agree to be bound by these terms and conditions.
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
            <Link to="/privacy" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-gray-400 text-sm font-medium hover:border-white/30 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
