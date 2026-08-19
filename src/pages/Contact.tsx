import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import { dataSystems } from '../img/images';

const CONTACT_ENDPOINT =
  (import.meta as { env?: { VITE_CONTACT_ENDPOINT?: string } }).env?.VITE_CONTACT_ENDPOINT ??
  'https://thevortexx.com/backend/vortexx.php';

const serviceOptions = [
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

const initialForm = { name: '', email: '', phone: '', service: '', subject: '', message: '' };
type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = 'Contact | VORTEXX';
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
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
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section style={{ background: 'var(--bg)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(56,189,248,0.10) 0%, var(--bg) 70%)' }}
        />
        <div className="wrap relative z-10 text-center">
          <h1 style={{
            fontFamily: 'var(--display)', fontWeight: 900,
            fontSize: 'clamp(44px,6vw,76px)', letterSpacing: '-0.03em',
            lineHeight: 1, marginBottom: 20,
            background: 'linear-gradient(to right, var(--text), var(--text-subtle))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Connect with Our Experts
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            Global presence, localized expertise. Reach out to discuss your next initiative
            with our team. No lengthy sales process, just a conversation about what you need.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--surface-low), transparent)' }}
        />
      </section>

      {/* ── CONTACT GRID ── */}
      <section style={{ background: 'var(--surface-low)', padding: '40px 0 96px' }}>
        <div className="wrap grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Info column */}
          <div className="reveal lg:col-span-2">
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--stroke)', marginBottom: 28, position: 'relative' }}>
              <img src={dataSystems} alt="" aria-hidden="true" loading="lazy" style={{ width: '100%', height: 176, objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,14,22,0.65), transparent)', pointerEvents: 'none' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 20, color: 'var(--text)', marginBottom: 24 }}>Reach us directly</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { Icon: MapPin, title: 'Location',      body: 'Bukasa-Bugiri, Kawuku\nKampala, Uganda' },
                { Icon: Phone,  title: 'Phone',         body: '(+256) 745-231430\n(+256) 790-956548' },
                { Icon: Mail,   title: 'Email',         body: 'thevortexxinfo@gmail.com' },
                { Icon: Clock,  title: 'Working Hours', body: 'Mon – Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM · Sun: Closed' },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="glass-panel" style={{ borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <Icon size={15} style={{ color: 'var(--primary-ctr)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13.5, color: 'var(--text)', marginBottom: 4 }}>{title}</h3>
                    <p style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-panel" style={{ borderRadius: 14, padding: '16px 18px', marginTop: 12 }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Prefer WhatsApp?</p>
              <a href="https://wa.me/256745231430" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--primary)', fontWeight: 700, fontSize: 14 }}
              >
                Chat with us <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Form column */}
          <div className="reveal lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="glass-card rounded-2xl" style={{ padding: 36 }}>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 20, color: 'var(--text)', marginBottom: 28 }}>Send a Message</h2>

              {status === 'success' && (
                <div style={{ background: 'rgba(45,212,191,0.10)', border: '1px solid rgba(45,212,191,0.30)', color: '#2DD4BF', borderRadius: 12, padding: '14px 16px', marginBottom: 22, fontSize: 13.5 }}>
                  Thanks for reaching out. Your message has been sent. We'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: 'rgba(255,180,171,0.10)', border: '1px solid rgba(255,180,171,0.30)', color: 'var(--error)', borderRadius: 12, padding: '14px 16px', marginBottom: 22, fontSize: 13.5 }}>{errorMsg}</div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="vx-label">Full Name *</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Doe" required className="vx-input" />
                </div>
                <div>
                  <label htmlFor="email" className="vx-label">Business Email *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" required className="vx-input" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className="vx-label">Phone</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(+256) 700-000000" className="vx-input" />
                </div>
                <div>
                  <label htmlFor="service" className="vx-label">Service Interest</label>
                  <div style={{ position: 'relative' }}>
                    <select id="service" name="service" value={form.service} onChange={handleChange} className="vx-input" style={{ appearance: 'none', paddingRight: 36 }}>
                      <option value="">Select a service</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={13} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="vx-label">Subject *</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Project inquiry" required className="vx-input" />
              </div>

              <div className="mb-7">
                <label htmlFor="message" className="vx-label">Message *</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="How can we help you achieve your goals?" required rows={5} className="vx-input" style={{ resize: 'none' }} />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.65 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'sending' ? 'Sending…' : <><span>Send Message</span> <ArrowRight size={14} /></>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ background: 'var(--surface-low)', borderTop: '1px solid var(--stroke)', padding: '0 0 64px' }}>
        <div className="wrap reveal">
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid var(--stroke)',
            boxShadow: '0 20px 48px -16px rgba(0,0,0,0.55)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5869.566001949094!2d32.566300051431845!3d0.12380223255422036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1787146900246!5m2!1sen!2sug"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="VORTEXX Location Map"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--stroke)', padding: '80px 0' }}>
        <div className="wrap grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="reveal">
            <p className="eyebrow mb-5">FAQ</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(24px,3vw,38px)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
              Common questions.
            </h2>
          </div>
          <div className="reveal lg:col-span-2" style={{ borderTop: '1px solid var(--stroke)' }}>
            {faqs.map(f => (
              <details key={f.q} className="group" style={{ borderBottom: '1px solid var(--stroke)', padding: '20px 0' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', listStyle: 'none', gap: 16 }}>
                  <span style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 15.5, color: 'var(--text)', lineHeight: 1.4 }}>{f.q}</span>
                  <ChevronDown size={15} style={{ color: 'var(--text-muted)', flexShrink: 0, transition: 'transform 0.2s' }} />
                </summary>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, paddingTop: 14 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
