import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { aiAutomation, cyberSecurity, arVr, socialAutomation, forexVps, aiWorkforce } from '../img/images';

const services = [
  {
    id: 'web-design', num: '01', badge: 'Most Requested', image: aiAutomation,
    title: 'Web Design & Development',
    desc: 'We create stunning, user-focused websites that engage visitors and drive conversions.',
    bestFor: 'businesses that need a fast, credible online presence or storefront.',
    checks: ['Responsive website design', 'E-commerce solutions', 'Web applications', 'User experience optimization'],
    icon: <path d="M9 8L4 12L9 16M15 8L20 12L15 16" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    id: 'systems-development', num: '02', image: cyberSecurity,
    title: 'Systems Development',
    desc: 'Custom software solutions designed to streamline your operations and boost productivity.',
    bestFor: 'teams that have outgrown spreadsheets or off-the-shelf tools.',
    checks: ['Custom software development', 'Enterprise solutions', 'API integration', 'Legacy system modernization'],
    icon: <><rect x="4" y="4" width="16" height="5" rx="1.2" stroke="#38bdf8" strokeWidth="1.8" /><rect x="4" y="14" width="16" height="6" rx="1.2" stroke="#38bdf8" strokeWidth="1.8" /><circle cx="7.2" cy="6.5" r="0.9" fill="#38bdf8" /><circle cx="7.2" cy="17" r="0.9" fill="#38bdf8" /></>,
  },
  {
    id: 'graphics-design', num: '03', image: arVr,
    title: 'Graphics Design',
    desc: 'Eye-catching visuals that communicate your brand message and captivate your audience.',
    bestFor: 'brands that need a consistent, professional visual identity.',
    checks: ['Brand identity design', 'Marketing materials', 'UI/UX design', 'Motion graphics'],
    icon: <path d="M17.5 3.5L20.5 6.5L8 19L4 20L5 16L17.5 3.5Z" stroke="#38bdf8" strokeWidth="1.8" strokeLinejoin="round" />,
  },
  {
    id: 'digital-marketing', num: '04', image: socialAutomation,
    title: 'Digital Marketing',
    desc: 'Data-driven marketing strategies that increase visibility, engagement, and conversion.',
    bestFor: 'businesses that need more qualified traffic, not just more traffic.',
    checks: ['SEO optimization', 'Content marketing', 'Social media management', 'PPC advertising'],
    icon: <path d="M4 19V13M10 19V9M16 19V5M4 19H20" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    id: 'infrastructure', num: '05', image: forexVps,
    title: 'Infrastructure Management',
    desc: 'Reliable IT infrastructure solutions that ensure security, scalability, and performance.',
    bestFor: "teams that need uptime and security they don't have to think about.",
    checks: ['Cloud infrastructure', 'Network management', 'Cybersecurity solutions', 'IT maintenance & support'],
    icon: <path d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8h16M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    id: 'ai-agents', num: '06', badge: 'New', image: aiWorkforce,
    title: 'AI Agents',
    desc: 'Intelligent AI-powered agents to automate tasks and enhance customer experience.',
    bestFor: 'teams ready to automate repetitive support or workflow tasks.',
    checks: ['Custom AI chatbot development', 'Process automation', 'Natural language processing', 'Integration with business systems'],
    icon: <><circle cx="12" cy="12" r="3" stroke="#38bdf8" strokeWidth="1.8" /><path d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.8 7.8M16.2 16.2L18.4 18.4M5.6 18.4L7.8 16.2M16.2 7.8L18.4 5.6" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" /></>,
  },
];

const capabilities = ['Website Hosting', 'Mobile App Development', 'E-commerce Solutions', 'Database Management', 'Cybersecurity', 'Cloud Solutions', 'Data Analytics'];

const processSteps = [
  ['01', 'Discovery',      'We start by understanding your business, goals, and challenges through in-depth consultations.'],
  ['02', 'Strategy',       'Based on our findings, we develop a tailored strategy and roadmap for your solution.'],
  ['03', 'Implementation', 'Our team brings the strategy to life with meticulous attention to detail.'],
  ['04', 'Optimization',   'We continuously refine and improve your solution based on performance data and feedback.'],
];

const techStack = [
  { head: 'Front-End',  items: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { head: 'Back-End',   items: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Ruby on Rails'] },
  { head: 'Mobile',     items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Progressive Web Apps'] },
  { head: 'Database',   items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'DynamoDB'] },
  { head: 'Cloud',      items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Digital Ocean', 'Heroku'] },
  { head: 'DevOps',     items: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform'] },
];

const quickNav: [string, string][] = [
  ['web-design', 'Web Design'],
  ['systems-development', 'Systems'],
  ['graphics-design', 'Graphics'],
  ['digital-marketing', 'Marketing'],
  ['infrastructure', 'Infrastructure'],
  ['ai-agents', 'AI Agents'],
];

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Services | VORTEXX';

    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#quickNav a'));
    const targets = navLinks
      .map(a => document.querySelector(a.getAttribute('href') || ''))
      .filter((el): el is Element => Boolean(el));

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const link = navLinks.find(a => a.getAttribute('href') === '#' + entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    targets.forEach(t => spy.observe(t));

    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    return () => { spy.disconnect(); io.disconnect(); };
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section style={{ background: 'var(--bg)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 900px 600px at 80% 30%, rgba(56,189,248,0.10), transparent 65%)' }}
        />
        <div className="wrap relative z-10">
          <p className="eyebrow mb-6">Our Services</p>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(44px,6vw,78px)', color: 'var(--text)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 24 }}>
            Comprehensive<br />Tech Solutions.
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 560, marginBottom: 44, lineHeight: 1.7, fontWeight: 300 }}>
            Six disciplines, one standard of work. We provide end-to-end technology services
            designed to help your business thrive in today's digital landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#web-design" className="btn btn-primary">
              Explore Services <ArrowRight size={15} />
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--surface-low), transparent)' }}
        />
      </section>

      {/* ── STICKY QUICK NAV ── */}
      <div style={{
        background: 'rgba(10,14,22,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--stroke)',
        position: 'sticky', top: 0, zIndex: 40,
        overflowX: 'auto',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <div id="quickNav" style={{ display: 'flex', gap: 4, padding: '10px 0' }}>
            {quickNav.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  padding: '8px 16px', borderRadius: 999, fontSize: 12.5,
                  fontFamily: 'var(--mono)', color: 'var(--text-muted)', whiteSpace: 'nowrap',
                  transition: 'color 0.2s, background 0.2s',
                }}
                className="[&.active]:text-[var(--primary)] [&.active]:bg-[rgba(56,189,248,0.10)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUE STRIP ── */}
      <div style={{ background: 'var(--surface-low)', borderBottom: '1px solid var(--stroke)' }}>
        <div className="wrap reveal">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderLeft: '1px solid var(--stroke)' }}>
            {[
              { title: 'Innovation-Led',   desc: 'We explore new technologies and approaches to deliver cutting-edge solutions.' },
              { title: 'Client-Focused',   desc: 'We build around your unique needs and goals, not a one-size-fits-all template.' },
              { title: 'Held to Excellence', desc: 'The highest standard of quality and craft, in every engagement we take on.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '36px 32px', borderRight: '1px solid var(--stroke)', borderBottom: 0 }}>
                <h4 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <div style={{ background: 'var(--bg)', padding: '64px 0' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className="reveal glass-card rounded-2xl"
              style={{ scrollMarginTop: 80, ['--reveal-delay' as string]: `${i * 40}ms`, overflow: 'hidden' }}
            >
              {/* Image banner */}
              <div style={{ margin: 0, position: 'relative', aspectRatio: '4/1', overflow: 'hidden' }}>
                <img src={svc.image} alt={svc.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,14,22,0.9) 0%, rgba(10,14,22,0.3) 60%, transparent)' }} />
              </div>

              <div style={{ padding: '36px 40px' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Left */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-muted)', letterSpacing: '0.12em' }}>{svc.num}</span>
                      {svc.badge && (
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--primary)', border: '1px solid rgba(56,189,248,0.30)', background: 'rgba(56,189,248,0.06)', padding: '4px 10px', borderRadius: 999 }}>{svc.badge}</span>
                      )}
                    </div>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">{svc.icon}</svg>
                    </div>
                    <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 22, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 14 }}>{svc.title}</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 12 }}>{svc.desc}</p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--primary)', opacity: 0.8 }}>
                      Best for: <span style={{ fontFamily: 'var(--body)', color: 'var(--text-muted)', fontWeight: 400 }}>{svc.bestFor}</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>What's included</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                      {svc.checks.map(c => (
                        <li key={c} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--text-subtle)' }}>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(56,189,248,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Check size={10} style={{ color: 'var(--primary-ctr)' }} />
                          </div>
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-secondary btn-sm">
                      Get Started <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ADDITIONAL CAPABILITIES ── */}
      <div style={{ background: 'var(--surface-low)', borderTop: '1px solid var(--stroke)', borderBottom: '1px solid var(--stroke)', padding: '64px 0' }}>
        <div className="wrap reveal" style={{ textAlign: 'center' }}>
          <p className="eyebrow center mb-4">Additional Capabilities</p>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(24px,3vw,38px)', letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 12 }}>
            Beyond our core services
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.7 }}>
            We offer specialized solutions to address your specific technology needs.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 28 }}>
            {capabilities.map(c => (
              <span key={c} style={{ fontFamily: 'var(--mono)', fontSize: 12.5, padding: '9px 18px', borderRadius: 999, border: '1px solid var(--stroke)', color: 'var(--text-muted)', background: 'var(--surface-elev)' }}>{c}</span>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary">
            Discuss Your Project <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* ── ENGAGEMENT MODEL (PROCESS) ── */}
      <section style={{ background: 'var(--bg)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 800px 500px at 50% 50%, rgba(56,189,248,0.07), transparent 70%)' }}
        />
        <div className="wrap relative z-10">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
            <p className="eyebrow center mb-5">Our Approach</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: 14 }}>
              Engagement Model
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.7 }}>
              A structured, iterative approach to delivering value and mitigating risk throughout the project lifecycle.
            </p>
          </div>

          {/* Step cards with connector line */}
          <div style={{ position: 'relative' }}>
            <div className="hidden md:block absolute"
              style={{ top: '50%', left: 0, width: '100%', height: 1, background: 'var(--stroke)', zIndex: 0 }}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal" style={{ position: 'relative', zIndex: 10 }}>
              {processSteps.map(([num, title, desc], i) => (
                <div key={num} className="eng-step" style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}>
                  <div className="eng-step-num">{num}</div>
                  <h4 className="eng-step h4" style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, marginTop: 18, marginBottom: 8, color: 'var(--text)' }}>{title}</h4>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ background: 'var(--surface-low)', borderTop: '1px solid var(--stroke)', borderBottom: '1px solid var(--stroke)', padding: '80px 0' }}>
        <div className="wrap">
          <div className="reveal mb-12">
            <p className="eyebrow mb-4">Technologies</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: 10 }}>
              Our Tech Stack
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 480, lineHeight: 1.7 }}>
              We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((t, i) => (
              <div key={t.head} className="reveal vx-card" style={{ padding: 24, ['--reveal-delay' as string]: `${i * 50}ms` }}>
                <h4 style={{ fontFamily: 'var(--mono)', fontWeight: 600, fontSize: 12, color: 'var(--text)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.head}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {t.items.map(item => (
                    <span key={item} style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)', border: '1px solid var(--stroke)', padding: '4px 10px', borderRadius: 999, background: 'var(--bg-2)' }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px', textAlign: 'center' }} className="reveal">
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 80, color: 'rgba(56,189,248,0.22)', lineHeight: 1, marginBottom: 16, userSelect: 'none' }}>"</div>
          <p style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 'clamp(18px,2.2vw,26px)', color: 'var(--text)', lineHeight: 1.6, marginBottom: 28 }}>
            VORTEXX's expertise in systems development and infrastructure management has been
            invaluable. They helped us migrate to a more robust system that supports our growth,
            and their ongoing support is top-notch.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div className="avatar" style={{ fontFamily: 'var(--display)', fontSize: 13 }}>JK</div>
            <div style={{ textAlign: 'left' }}>
              <strong style={{ display: 'block', fontFamily: 'var(--display)', fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>Jennifer Kasuku</strong>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--text-muted)' }}>Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--surface-low)', padding: '80px 40px', borderTop: '1px solid var(--stroke)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="reveal">
          <div className="glass-card rounded-2xl" style={{ padding: '56px 64px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <p className="eyebrow mb-5">Ready to start</p>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3vw,42px)', letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text)', marginBottom: 14 }}>
                  Ready to transform<br />
                  <span style={{ color: 'var(--primary-ctr)' }}>your business?</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7, maxWidth: 440 }}>
                  Partner with VORTEXX to unlock your full digital potential. Our expert team is
                  ready to help you navigate the technology landscape.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 240 }}>
                <Link to="/contact" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  Schedule a Consultation <ArrowRight size={14} />
                </Link>
                <a href="#web-design" className="btn btn-secondary btn-sm" style={{ justifyContent: 'center', textAlign: 'center' }}>
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
