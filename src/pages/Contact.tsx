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

  const inputCls = 'w-full bg-gray-950 border border-white/10 rounded-xl text-white placeholder:text-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-sky-500/60 transition-colors';
  const labelCls = 'block text-sm text-gray-400 font-medium mb-1.5';

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-gray-950 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[1152px] mx-auto px-8 relative z-10">
          <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-6">Get in touch</p>
          <h1 className="font-black text-white leading-none tracking-tight mb-6" style={{ fontSize: 'clamp(44px, 6vw, 76px)' }}>
            Let's build something <span className="text-sky-400">great.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl font-light">
            Tell us what you're working on. Our team will get back to you with next steps.
            No lengthy sales process, just a conversation about what you need.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="bg-gray-950 pt-10 pb-24">
        <div className="max-w-[1152px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">

          {/* info column */}
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden border border-white/10 mb-8 relative">
              <img src={dataSystems} alt="" aria-hidden="true" loading="lazy" className="w-full h-44 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent pointer-events-none" />
            </div>
            <h2 className="font-bold text-white text-xl mb-8" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>Reach us directly</h2>
            <div className="space-y-4">
              {[
                { Icon: MapPin, title: 'Location',      body: 'Bukasa-Bugiri, Kawuku\nKampala, Uganda' },
                { Icon: Phone,  title: 'Phone',         body: '(+256) 745-231430\n(+256) 790-956548' },
                { Icon: Mail,   title: 'Email',         body: 'thevortexxinfo@gmail.com' },
                { Icon: Clock,  title: 'Working Hours', body: 'Mon – Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM · Sun: Closed' },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4 bg-gray-900 border border-white/10 rounded-xl p-5">
                  <div className="w-9 h-9 bg-sky-500/10 border border-sky-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-1" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-900 border border-white/10 rounded-xl p-5">
              <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-3">Prefer WhatsApp?</p>
              <a
                href="https://wa.me/256745231430"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-400 text-sm font-semibold hover:text-sky-300 transition-colors"
              >
                Chat with us → <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* form column */}
          <div className="reveal">
            <form onSubmit={handleSubmit} noValidate className="bg-gray-900 border border-white/10 rounded-2xl p-8">
              <h2 className="font-bold text-white text-xl mb-8" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>Send us a message</h2>

              {status === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl p-4 mb-6 text-sm">
                  Thanks for reaching out. Your message has been sent. We'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 mb-6 text-sm">{errorMsg}</div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className={labelCls}>Full Name *</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Doe" required className={inputCls} />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email Address *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" required className={inputCls} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="phone" className={labelCls}>Phone</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(+256) 700-000000" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="service" className={labelCls}>Service Interested In</label>
                  <div className="relative">
                    <select id="service" name="service" value={form.service} onChange={handleChange} className={`${inputCls} appearance-none pr-9`}>
                      <option value="">Select a service</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className={labelCls}>Subject *</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Project inquiry" required className={inputCls} />
              </div>

              <div className="mb-7">
                <label htmlFor="message" className={labelCls}>Message *</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project or inquiry…" required rows={5} className={`${inputCls} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-sky-500 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-sky-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? 'Sending…' : <>Send Message <ArrowRight size={15} /></>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-900 border-y border-white/10 py-20">
        <div className="max-w-[1152px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16">
          <div className="reveal">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-5">FAQ</p>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(24px, 3vw, 38px)', letterSpacing: '-0.025em' }}>
              Common questions.
            </h2>
          </div>
          <div className="reveal divide-y divide-white/10">
            {faqs.map(f => (
              <details key={f.q} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer list-none gap-4">
                  <span className="text-white font-semibold text-base leading-snug" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{f.q}</span>
                  <ChevronDown size={16} className="text-gray-500 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-gray-400 text-sm leading-relaxed pt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
