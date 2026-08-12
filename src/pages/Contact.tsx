import React, { useEffect, useState } from 'react';

// Configurable via VITE_CONTACT_ENDPOINT; falls back to the production backend.
const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ?? 'https://thevortexx.com/backend/vortexx.php';

const services = [
  'Web Design',
  'Systems Development',
  'Graphics Design',
  'Digital Marketing',
  'Infrastructure Management',
  'AI Agents',
];

const faqs = [
  {
    q: 'What types of businesses do you work with?',
    a: 'We work with businesses of all sizes across various industries, from startups to enterprise-level organizations. Our solutions are tailored to meet the specific needs and goals of each client.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary depending on the scope and complexity. A simple website might take 4–6 weeks, while a complex system could take several months. We provide detailed timelines during our planning phase.',
  },
  {
    q: 'Do you offer ongoing support and maintenance?',
    a: 'Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our team is available for updates, troubleshooting, and ongoing enhancements.',
  },
  {
    q: 'How do you handle project pricing?',
    a: "We provide customized quotes based on project requirements. Depending on the project, we may use fixed-price models, time and materials pricing, or retainer agreements. We're transparent about costs from the beginning.",
  },
  {
    q: 'Can you work with our existing systems and technology?',
    a: 'Absolutely. We specialize in both building new solutions and integrating with or enhancing existing systems. Our team has experience working with a wide range of technologies and platforms.',
  },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  subject: '',
  message: '',
};

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = 'Contact | VORTEXX';
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? `${err.message}. You can also email us directly at thevortexxinfo@gmail.com.`
          : 'Something went wrong. Please email thevortexxinfo@gmail.com.'
      );
    }
  };

  return (
    <div className="vx-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="wrap contact-hero-anim">
          <p className="eyebrow center">Get in touch</p>
          <h1>
            Let's build <span className="accent">something great.</span>
          </h1>
          <p>
            Tell us what you're working on. Our team will get back to you with next steps. No
            lengthy sales process, just a conversation about what you need.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="contact-grid">
            {/* INFO */}
            <div className="contact-info reveal">
              <div className="contact-info-card">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Bukasa-Bugiri, Kawuku, Kampala, Uganda</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+256745231430">(+256) 745-231430</a>
                    <br />
                    <a href="tel:+256790956548">(+256) 790-956548</a>
                  </p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 6l-10 7L2 6" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:thevortexxinfo@gmail.com">thevortexxinfo@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3>Working Hours</h3>
                  <p>
                    Mon – Fri: 9:00 AM – 6:00 PM
                    <br />
                    Sat: 10:00 AM – 4:00 PM · Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
              {status === 'success' && (
                <div className="form-alert success">
                  Thanks for reaching out. Your message has been sent. We'll get back to you within
                  24 hours.
                </div>
              )}
              {status === 'error' && <div className="form-alert error">{errorMsg}</div>}

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(+256) 700-000000"
                  />
                </div>
                <div className="field">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry…"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>
                    <span className="spin" aria-hidden="true"></span>
                    Sending…
                  </>
                ) : (
                  <>Send Message →</>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <p className="eyebrow center">FAQ</p>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services and process.</p>
          </div>
          <div className="faq-list reveal">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>
                  {f.q}
                  <svg
                    className="chev"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="18"
                    height="18"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="faq-body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
