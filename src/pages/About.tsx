import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { innovationLab, dataSystems, futureAi, socialInstagram } from '../img/images';

const teamMembers = [
  {
    initials: 'KA', tag: 'Leadership',
    name: 'Kamugisha Ali',
    role: 'CEO & Founder',
    bio: "Kamugisha is a visionary leader with a passion for technology and innovation. He founded VORTEXX and has been instrumental in the company's growth and success.",
  },
  {
    initials: 'NG', tag: 'Operations',
    name: 'Nassuuna Gloria',
    role: 'Operations Manager',
    bio: 'Gloria keeps VORTEXX running day to day, coordinating projects, teams, and processes so every engagement stays on track from kickoff to delivery.',
  },
  {
    initials: 'AS', tag: 'Engineering',
    name: 'Abdenigo Stephen',
    role: 'Head of Software Department',
    bio: 'Leads the engineering team at VORTEXX, setting technical direction and standards across every web and systems project we build.',
  },
];

const values = [
  ['Innovation',    'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'],
  ['Excellence',    'We are committed to the highest standards of quality in everything we do.'],
  ['Client Focus',  'We build partnerships with our clients, focusing on their unique needs and goals.'],
  ['Integrity',     'We operate with transparency, honesty, and ethical business practices.'],
  ['Collaboration', 'We believe in the power of teamwork, both internally and with our clients.'],
  ['Adaptability',  'We embrace change and continuously evolve our approaches to stay ahead.'],
];

const goals = [
  ['01', 'Regional Presence',  'Establish VORTEXX presence in key markets across Uganda by 2026.'],
  ['02', 'R&D Investment',     'Maintain a position at the forefront of technological innovation through continuous research and development.'],
  ['03', '30% YoY Growth',     'Achieve 30% year-over-year growth while maintaining high client satisfaction rates.'],
  ['04', 'World-Class Team',   'Build and nurture a world-class team through comprehensive training and development programs.'],
];

const journey = [
  ['Nov 2024', 'Foundation', 'VORTEXX was founded with a focus on web development services. The team consisted of ten passionate tech students led by Kamugisha Ali.'],
  ['Jan 2025', 'Expansion',  'Expanded services to include systems development and design, allowing VORTEXX to offer comprehensive solutions to clients.'],
  ['Mar 2025', 'Growth',     'Diversified into digital marketing and infrastructure management, taking on new clients across various sectors.'],
  ['Jun 2025', 'Innovation', 'Launched a dedicated AI and machine learning division, focused on developing AI agents and automation solutions for clients.'],
];

const About: React.FC = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    document.title = 'About Us | VORTEXX';
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => setSlide((i + teamMembers.length) % teamMembers.length);

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section style={{
        background: 'var(--bg)',
        paddingTop: 140, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
        backgroundImage: `url(${innovationLab})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,8,15,0.82)' }} />
        <div className="absolute pointer-events-none"
          style={{ top: 0, right: 0, width: 600, height: 600, background: 'rgba(56,189,248,0.08)', borderRadius: '50%', filter: 'blur(140px)' }}
        />
        <div className="wrap relative z-10">
          <p className="eyebrow mb-6">About VORTEXX</p>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(46px,6vw,80px)', color: 'var(--text)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 24 }}>
            Built in Kampala.<br />
            Built for <span style={{ color: 'var(--primary-ctr)' }}>growth.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 540, marginBottom: 44, lineHeight: 1.7, fontWeight: 300 }}>
            We're a team of passionate technologists dedicated to transforming businesses through
            innovative digital solutions — web platforms, custom systems, design, and marketing
            that actually get used.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn btn-primary">
              Start a Project <ArrowRight size={14} />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--surface-low), transparent)' }}
        />
      </section>

      {/* ── STATS ── */}
      <div style={{ background: 'var(--surface-low)', borderBottom: '1px solid var(--stroke)' }}>
        <div className="wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderLeft: '1px solid var(--stroke)', borderRight: '1px solid var(--stroke)' }}>
            {[
              ['2024',  'Founded'],
              ['50+',   'Happy Clients'],
              ['100+',  'Projects Shipped'],
              ['98%',   'Client Satisfaction'],
            ].map(([val, lbl], i) => (
              <div key={i} className="reveal text-center"
                style={{ padding: '40px 24px', borderRight: i < 3 ? '1px solid var(--stroke)' : 'none', borderBottom: i < 2 ? '1px solid var(--stroke)' : 'none' }}
              >
                <div style={{ fontFamily: 'var(--display)', fontSize: 38, fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.03em', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 8 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ORIGIN STORY ── */}
      <section style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <p className="eyebrow mb-5">How we started</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text)', marginBottom: 22 }}>
              From a student project<br />to a real company.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.75, marginBottom: 18 }}>
              Founded in 2024, VORTEXX began as a small web development agency with a team of just
              ten passionate tech students. Our founder, Kamugisha Ali, envisioned a company that
              would not just build websites, but create transformative digital experiences that
              drive business growth.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.75, marginBottom: 28 }}>
              As we gained the trust of our early clients, we expanded our services to include
              systems development, graphic design, digital marketing, and infrastructure management.
              Today, VORTEXX has grown into a comprehensive technology solutions provider serving
              clients across Uganda and beyond.
            </p>
            <blockquote style={{ borderLeft: '2px solid var(--primary-ctr)', paddingLeft: 20, color: 'rgba(224,226,237,0.70)', fontSize: 15, fontStyle: 'italic', lineHeight: 1.7 }}>
              "Our journey has been defined by a relentless commitment to innovation, excellence,
              and our clients' success — while staying true to our core mission: empowering
              businesses to thrive in the digital age."
            </blockquote>
          </div>

          <div className="reveal glass-card rounded-2xl overflow-hidden">
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '13px 18px', borderBottom: '1px solid var(--stroke)', background: 'rgba(5,8,15,0.50)' }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,100,100,0.45)' }} />
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,200,80,0.45)' }} />
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(80,200,80,0.45)' }} />
              <span style={{ marginLeft: 12, fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.18)' }}>about.vortexx.co.ug</span>
            </div>
            <div style={{ borderTop: '1px solid var(--stroke)' }}>
              {[
                ['Founded',       'Nov 2024, Kampala'],
                ['Founder',       'Kamugisha Ali'],
                ['Starting team', '10 tech students'],
                ['Services',      '6 core disciplines'],
                ['HQ',            'Bukasa-Bugiri, Kawuku'],
                ['Process',       'Discover → Design → Build → Support'],
              ].map(([lbl, val]) => (
                <div key={lbl} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 22px', borderBottom: '1px solid var(--stroke)' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.10em' }}>{lbl}</span>
                  <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13.5, color: 'var(--text)', textAlign: 'right', maxWidth: '55%' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section style={{ background: 'var(--surface-low)', borderTop: '1px solid var(--stroke)', borderBottom: '1px solid var(--stroke)', padding: '80px 0' }}>
        <div className="wrap">
          <div className="reveal mb-10">
            <p className="eyebrow mb-4">What we build</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
              Technology with real impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { src: dataSystems,     title: 'Systems & Data',    desc: 'Information platforms that help teams move faster and decide with confidence.' },
              { src: futureAi,        title: 'AI & Automation',   desc: 'Intelligent workflows and agents that take repetitive work off your plate.' },
              { src: socialInstagram, title: 'Brand & Marketing', desc: 'Digital presence and campaigns that put you in front of the right people.' },
            ].map((item, i) => (
              <div key={i} className="reveal group vx-card rounded-2xl overflow-hidden"
                style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={item.src} alt={item.title} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
                    onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
                    onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '22px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / GOALS ── */}
      <section style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div className="wrap">
          <div className="reveal mb-14">
            <p className="eyebrow mb-4">Why we're here</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
              Vision, Mission &amp; Goals
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tag: 'Vision',  title: 'Our Vision',  body: 'To be the leading creative technology company that empowers businesses and communities through smart web solutions, innovative mobile applications, impactful graphics designs, and efficient information management systems.' },
              { tag: 'Mission', title: 'Our Mission', body: 'To innovatively deliver AI-powered, user-focused systems that drive success and inclusivity across every sector we serve.' },
              { tag: 'Goals',   title: 'Our Goals',   body: "To provide top-notch quality services, deliver high-quality projects on time, and achieve our clients' satisfaction on every single engagement." },
            ].map((item, i) => (
              <div key={i} className="reveal vx-card rounded-2xl" style={{ padding: 32, ['--reveal-delay' as string]: `${i * 70}ms` }}>
                <span style={{ display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(56,189,248,0.28)', background: 'rgba(56,189,248,0.06)', padding: '5px 12px', borderRadius: 999, marginBottom: 18 }}>{item.tag}</span>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {goals.map(([num, title, desc], i) => (
              <div key={i} className="reveal vx-card rounded-xl" style={{ padding: 24, ['--reveal-delay' as string]: `${i * 60}ms` }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>{num}</div>
                <h4 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15.5, color: 'var(--text)', marginBottom: 8 }}>{title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: 'var(--surface-low)', borderTop: '1px solid var(--stroke)', padding: '96px 0' }}>
        <div className="wrap">
          <div className="reveal mb-14">
            <p className="eyebrow mb-4">What drives us</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
              Our Values
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: 12, maxWidth: 480, fontSize: 15, lineHeight: 1.7 }}>
              Our core values guide everything we do, from how we develop solutions to how we
              interact with our clients and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(([title, desc], i) => (
              <div key={i} className="reveal vx-card rounded-2xl" style={{ padding: '28px 28px', ['--reveal-delay' as string]: `${i * 60}ms` }}>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15.5, color: 'var(--primary)', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--stroke)', padding: '96px 0' }}>
        <div className="wrap grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="reveal">
            <p className="eyebrow mb-5">Our journey</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text)' }}>
              Key milestones in<br />our growth.
            </h2>
          </div>
          <div className="reveal lg:col-span-2" style={{ paddingLeft: 24, borderLeft: '1px solid var(--stroke)', display: 'flex', flexDirection: 'column', gap: 36 }}>
            {journey.map(([when, title, desc], i) => (
              <div key={i} style={{ position: 'relative', ['--reveal-delay' as string]: `${i * 80}ms` }}>
                <div style={{ position: 'absolute', left: -36, top: 2, width: 14, height: 14, borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--primary-ctr)' }} />
                <span style={{ display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(56,189,248,0.28)', background: 'rgba(56,189,248,0.06)', padding: '4px 11px', borderRadius: 999, marginBottom: 10 }}>{when}</span>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 8 }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ background: 'var(--surface-low)', borderTop: '1px solid var(--stroke)', padding: '96px 0' }}>
        <div className="wrap">
          <div className="reveal text-center mb-14">
            <p className="eyebrow center mb-4">Meet our team</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,44px)', letterSpacing: '-0.025em', color: 'var(--text)' }}>
              The people driving our vision.
            </h2>
          </div>

          {/* Carousel */}
          <div className="reveal" style={{ maxWidth: 700, margin: '0 auto', overflow: 'hidden', borderRadius: 20 }}>
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${slide * 100}%)`, transition: 'transform 0.45s cubic-bezier(0.2,0.8,0.2,1)' }}>
              {teamMembers.map(m => (
                <div key={m.name} className="shrink-0 w-full glass-card rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                  <div>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary-ctr),#0369a1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--display)', fontWeight: 900, fontSize: 20, color: 'var(--on-primary-ctr)', marginBottom: 14 }}>{m.initials}</div>
                    <span style={{ display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(56,189,248,0.28)', background: 'rgba(56,189,248,0.06)', padding: '5px 12px', borderRadius: 999 }}>{m.tag}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 20, color: 'var(--text)', marginBottom: 5 }}>{m.name}</h3>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--primary)', marginBottom: 16 }}>{m.role}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex items-center justify-center gap-4 mt-8">
            <button onClick={() => goTo(slide - 1)}
              style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--stroke)', background: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Previous"
            ><ChevronLeft size={17} /></button>
            <div style={{ display: 'flex', gap: 8 }}>
              {teamMembers.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  style={{ height: 5, borderRadius: 999, border: 'none', cursor: 'pointer', width: i === slide ? 26 : 8, background: i === slide ? 'var(--primary-ctr)' : 'rgba(255,255,255,0.14)', transition: 'all 0.3s ease' }}
                  aria-label={`Team member ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={() => goTo(slide + 1)}
              style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--primary-ctr)', border: 'none', cursor: 'pointer', color: 'var(--on-primary-ctr)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Next"
            ><ChevronRight size={17} /></button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--stroke)', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="reveal">
          <div className="glass-card rounded-2xl" style={{ padding: '56px 64px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <p className="eyebrow mb-5">Work with us</p>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3vw,42px)', letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text)', marginBottom: 14 }}>
                  Want to build<br />
                  <span style={{ color: 'var(--primary-ctr)' }}>with us?</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7, maxWidth: 440 }}>
                  Tell us what you're working on. Our team will get back to you with next steps.
                  No lengthy sales process, just a conversation.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 240 }}>
                <Link to="/contact" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  Start a Project <ArrowRight size={14} />
                </Link>
                <Link to="/services" className="btn btn-secondary btn-sm" style={{ justifyContent: 'center', textAlign: 'center' }}>
                  Our Services
                </Link>
                <a href="https://wa.me/256745231430" target="_blank" rel="noopener noreferrer"
                  style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-muted)', marginTop: 6 }}
                >
                  or chat on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
