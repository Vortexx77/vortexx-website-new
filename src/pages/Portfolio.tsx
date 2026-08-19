import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects, categories } from '../data/projects';
import { DeviceMockup } from '../components/DeviceMockup';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Portfolio | VORTEXX';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section style={{ background: 'var(--bg)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern" style={{ opacity: 0.18 }} />
        <div className="absolute pointer-events-none"
          style={{ top: '25%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, background: 'rgba(56,189,248,0.09)', borderRadius: '50%', filter: 'blur(120px)' }}
        />
        <div className="wrap relative z-10 text-center">
          <div className="exp-badge w-fit mx-auto mb-6">
            <span className="dot" />
            Proven Excellence
          </div>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(38px,5.5vw,68px)', color: 'var(--text)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 20 }}>
            Projects That{' '}
            <span style={{ color: 'var(--primary-ctr)' }}>Speak for Themselves</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.7, fontWeight: 300 }}>
            From construction firms to NGOs, SACCOs to travel companies — every project we build
            is crafted with precision, purpose, and performance in mind.
          </p>

          {/* Stats */}
          <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid var(--stroke)', borderRadius: 16, background: 'rgba(255,255,255,0.02)', overflow: 'hidden', backdropFilter: 'blur(8px)', divideX: '1px solid var(--stroke)' }}>
            {[
              { value: '11+',  label: 'Projects Live' },
              { value: '8',    label: 'Industries' },
              { value: '100%', label: 'On-Time Delivery' },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: '18px 28px', textAlign: 'center', borderRight: i < 2 ? '1px solid var(--stroke)' : 'none' }}>
                <strong style={{ display: 'block', fontFamily: 'var(--display)', fontWeight: 900, fontSize: 24, color: 'var(--primary)', letterSpacing: '-0.02em' }}>{s.value}</strong>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER PILLS ── */}
      <div style={{ background: 'var(--surface-low)', borderBottom: '1px solid var(--stroke)', padding: '20px 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECT GRID ── */}
      <div style={{ background: 'var(--bg)', padding: '64px 0 96px' }}>
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, idx) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${(idx % 6) * 60}ms` }}
              >
                <div className="rounded-2xl overflow-hidden vx-card glow-hover transition-all duration-300">
                  {/* Mockup */}
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                    <DeviceMockup project={project} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(56,189,248,0.07)' }}
                    >
                      <span style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.18)', color: 'var(--text)', fontSize: 11.5, fontWeight: 700, padding: '8px 16px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 6 }}>
                        View Project <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div style={{ padding: '18px 20px' }}>
                    <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 15.5, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>
                      {project.title}
                    </h3>
                    <span style={{
                      display: 'inline-block', padding: '4px 10px', borderRadius: 999,
                      fontFamily: 'var(--mono)', fontSize: 10.5,
                      background: `${project.accentColor}15`,
                      border: `1px solid ${project.accentColor}40`,
                      color: project.accentColor,
                    }}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              <p style={{ fontFamily: 'var(--display)', fontSize: 17, fontWeight: 700, marginBottom: 8 }}>No projects in this category yet.</p>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 13 }}>Check back soon — we're always building.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <section style={{ background: 'var(--surface-low)', padding: '80px 40px', borderTop: '1px solid var(--stroke)', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 800px 400px at 50% 50%, rgba(56,189,248,0.09), transparent 70%)' }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div className="glass-card rounded-2xl reveal" style={{ padding: '64px 40px', textAlign: 'center' }}>
            <div className="exp-badge mx-auto w-fit mb-5">
              <span className="dot" />
              Ready to Launch
            </div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(28px,4vw,50px)', color: 'var(--text)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 16 }}>
              Ready to Launch a Website That{' '}
              <span style={{ color: 'var(--primary-ctr)' }}>Actually Works?</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
              Join our growing list of happy clients. Let's build something remarkable together —
              on time, on budget, and beyond expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
