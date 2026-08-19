import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, Search, ChevronDown, ArrowRight, Laptop, Users, Timer } from 'lucide-react';
import { callCenter, team1, team2, team3 } from '../img/images';

const departments = [
  { id: 'all',            name: 'All Departments' },
  { id: 'development',    name: 'Development' },
  { id: 'design',         name: 'Design' },
  { id: 'marketing',      name: 'Marketing' },
  { id: 'infrastructure', name: 'Infrastructure' },
];

const positions = [
  {
    id: 1, title: 'Senior Full Stack Developer', department: 'development',
    location: 'Kampala, Uganda', type: 'Full-time', experience: '5+ years',
    description: "We're looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.",
    responsibilities: ['Design and implement scalable web applications', 'Write clean, maintainable, and efficient code', 'Collaborate with cross-functional teams', 'Mentor junior developers'],
    requirements: ['Experience with React, Node.js, and TypeScript', 'Strong understanding of web technologies and best practices', 'Experience with cloud platforms (AWS/GCP)', 'Excellent problem-solving skills'],
  },
  {
    id: 2, title: 'UI/UX Designer', department: 'design',
    location: 'Remote', type: 'Full-time', experience: '3+ years',
    description: "Join our design team to create beautiful and intuitive user experiences for our clients' digital products.",
    responsibilities: ['Create user-centered designs', 'Develop UI mockups and prototypes', 'Conduct user research and testing', 'Collaborate with developers'],
    requirements: ['Strong portfolio demonstrating UI/UX skills', 'Proficiency in design tools (Figma, Adobe XD)', 'Understanding of design systems', 'Experience with user research'],
  },
  {
    id: 3, title: 'Digital Marketing Manager', department: 'marketing',
    location: 'Kampala, Uganda', type: 'Full-time', experience: '4+ years',
    description: 'Lead our digital marketing initiatives and help clients achieve their marketing goals through data-driven strategies.',
    responsibilities: ['Develop marketing strategies', 'Manage social media campaigns', 'Analyze marketing metrics', 'Create content strategies'],
    requirements: ['Experience in digital marketing', 'Knowledge of SEO and analytics', 'Strong communication skills', 'Project management experience'],
  },
  {
    id: 4, title: 'DevOps Engineer', department: 'infrastructure',
    location: 'Kampala, Uganda', type: 'Full-time', experience: '3+ years',
    description: 'Help us build and maintain robust infrastructure solutions for our growing client base.',
    responsibilities: ['Manage cloud infrastructure', 'Implement CI/CD pipelines', 'Monitor system performance', 'Ensure security compliance'],
    requirements: ['Experience with AWS/GCP', 'Knowledge of Docker and Kubernetes', 'Scripting and automation skills', 'Security best practices'],
  },
];

const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm]   = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [expanded, setExpanded]       = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Careers | VORTEXX';
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const filtered = positions.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDept = selectedDept === 'all' || p.department === selectedDept;
    return matchSearch && matchDept;
  });

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section style={{
        background: 'var(--bg)', paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
        backgroundImage: `url(${callCenter})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,8,15,0.85)' }} />
        <div className="absolute pointer-events-none"
          style={{ top: 0, right: 0, width: 500, height: 500, background: 'rgba(56,189,248,0.08)', borderRadius: '50%', filter: 'blur(130px)', zIndex: 1 }}
        />
        <div className="wrap relative z-10">
          <p className="eyebrow mb-6">Join Our Team</p>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(42px,5.5vw,74px)', color: 'var(--text)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 24 }}>
            Work that matters.<br />
            <span style={{ color: 'var(--primary-ctr)' }}>Team that delivers.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 520, lineHeight: 1.7, fontWeight: 300 }}>
            We're always looking for talented individuals who share our passion for technology,
            craft, and building things that genuinely help businesses grow.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--surface-low), transparent)' }}
        />
      </section>

      {/* ── WHY JOIN US ── */}
      <section style={{ background: 'var(--surface-low)', borderTop: '1px solid var(--stroke)', borderBottom: '1px solid var(--stroke)', padding: '80px 0' }}>
        <div className="wrap">
          <div className="reveal mb-12">
            <p className="eyebrow mb-4">Why VORTEXX?</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', color: 'var(--text)' }}>Benefits &amp; Culture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon: Laptop, title: 'Modern Tech Stack',     desc: 'Work with cutting-edge technologies and tools that actually make a difference.' },
              { Icon: Users,  title: 'Collaborative Culture', desc: 'Join a team that values creativity, honest feedback, and shared ownership.' },
              { Icon: Timer,  title: 'Flexible Hours',        desc: 'We care about output and ownership, not when you clocked in.' },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="reveal vx-card rounded-2xl" style={{ padding: 28, ['--reveal-delay' as string]: `${i * 70}ms` }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={17} style={{ color: 'var(--primary-ctr)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 8 }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE AT VORTEXX ── */}
      <section style={{ background: 'var(--bg)', padding: '8px 0 64px' }}>
        <div className="wrap">
          <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[team1, team2, team3].map((src, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, border: '1px solid var(--stroke)' }}>
                <img src={src} alt="Life at VORTEXX" loading="lazy"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
                  onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,8,15,0.5), transparent)', pointerEvents: 'none' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section style={{ background: 'var(--surface-low)', borderTop: '1px solid var(--stroke)', padding: '80px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 36 }}>
            <p className="eyebrow mb-3">Open Positions</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', color: 'var(--text)' }}>Current opportunities.</h2>
          </div>

          {/* Search + Filter */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" placeholder="Search positions…" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                className="vx-input" style={{ paddingLeft: 40 }} />
            </div>
            <div style={{ position: 'relative' }}>
              <select value={selectedDept} onChange={e => setSelectedDept(e.target.value)} className="vx-input" style={{ appearance: 'none', paddingRight: 36 }}>
                {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
              <ChevronDown size={13} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
            </div>
          </div>

          {/* Listings */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {filtered.map(pos => (
              <div key={pos.id} className="glass-card rounded-2xl overflow-hidden">
                <div style={{ padding: '28px 32px' }}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                    <div>
                      <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--text)', marginBottom: 12 }}>{pos.title}</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {[
                          { Icon: MapPin,    text: pos.location },
                          { Icon: Briefcase, text: pos.type },
                          { Icon: Clock,     text: pos.experience },
                        ].map(({ Icon, text }) => (
                          <span key={text} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)', border: '1px solid var(--stroke)', background: 'var(--bg-2)', padding: '5px 12px', borderRadius: 999 }}>
                            <Icon size={10} style={{ color: 'var(--primary-ctr)' }} /> {text}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to={`/contact?position=${encodeURIComponent(pos.title)}`} className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>
                      Apply Now <ArrowRight size={13} />
                    </Link>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginTop: 14 }}>{pos.description}</p>
                </div>

                <div style={{ borderTop: '1px solid var(--stroke)' }}>
                  <button
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 32px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                    onClick={() => setExpanded(expanded === pos.id ? null : pos.id)}
                  >
                    {expanded === pos.id ? 'Hide details' : 'View details'}
                    <ChevronDown size={14} style={{ transform: expanded === pos.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                  {expanded === pos.id && (
                    <div style={{ background: 'var(--bg-2)', padding: '20px 32px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
                      <div>
                        <h4 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13.5, color: 'var(--text)', marginBottom: 14 }}>Responsibilities</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {pos.responsibilities.map(item => (
                            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13.5, color: 'var(--text-muted)' }}>
                              <span style={{ color: 'var(--primary-ctr)', marginTop: 2, flexShrink: 0 }}>•</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 13.5, color: 'var(--text)', marginBottom: 14 }}>Requirements</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {pos.requirements.map(item => (
                            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13.5, color: 'var(--text-muted)' }}>
                              <span style={{ color: 'var(--primary-ctr)', marginTop: 2, flexShrink: 0 }}>•</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--text-muted)' }}>
                <p style={{ fontFamily: 'var(--display)', fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>No positions found.</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: 13 }}>Try different search terms or check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--stroke)', padding: '80px 0' }}>
        <div className="wrap">
          <div className="reveal mb-12">
            <p className="eyebrow mb-4">How to apply</p>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', color: 'var(--text)', marginBottom: 10 }}>Application Process</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 480, lineHeight: 1.7 }}>
              Our hiring process is designed to be transparent, quick, and respectful of your time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Application',    desc: 'Submit your application through our careers portal or contact form.' },
              { step: '02', title: 'Initial Review', desc: 'Our team reviews your application and qualifications within 3 days.' },
              { step: '03', title: 'Interviews',     desc: 'Technical and cultural fit interviews with the team. No trick questions.' },
              { step: '04', title: 'Decision',       desc: 'Final decision and offer discussion. Clear, no ghosting.' },
            ].map((s, i) => (
              <div key={i} className="reveal vx-card rounded-2xl" style={{ padding: 28, ['--reveal-delay' as string]: `${i * 70}ms` }}>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 900, fontSize: 42, color: 'rgba(56,189,248,0.25)', lineHeight: 1, marginBottom: 14 }}>{s.step}</div>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
