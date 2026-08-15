import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, Search, ChevronDown, ArrowRight, Laptop, Users, Timer } from 'lucide-react';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [expanded, setExpanded] = useState<number | null>(null);

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

  const inputCls = 'w-full bg-gray-950 border border-white/10 rounded-xl text-white placeholder:text-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-sky-500/60 transition-colors';

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        className="relative bg-gray-950 pt-36 pb-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-950/85" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[130px] pointer-events-none z-10" />
        <div className="max-w-[1152px] mx-auto px-8 relative z-20">
          <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-6">Join Our Team</p>
          <h1 className="font-black text-white leading-none tracking-tight mb-7" style={{ fontSize: 'clamp(42px, 5.5vw, 74px)' }}>
            Work that matters.<br />
            <span className="text-sky-400">Team that delivers.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl font-light">
            We're always looking for talented individuals who share our passion for technology,
            craft, and building things that genuinely help businesses grow.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-10" />
      </section>

      {/* ── WHY JOIN US ── */}
      <section className="bg-gray-900 border-y border-white/10 py-20">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="reveal mb-12">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-4">Why VORTEXX?</p>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.025em' }}>Benefits & Culture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon: Laptop, title: 'Modern Tech Stack',     desc: 'Work with cutting-edge technologies and tools that actually make a difference.' },
              { Icon: Users,  title: 'Collaborative Culture', desc: 'Join a team that values creativity, honest feedback, and shared ownership.' },
              { Icon: Timer,  title: 'Flexible Hours',        desc: 'We care about output and ownership, not when you clocked in.' },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="reveal bg-gray-950 border border-white/10 rounded-2xl p-7" style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-sky-400" />
                </div>
                <h3 className="font-bold text-white text-base mb-2" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-3">Open Positions</p>
              <h2 className="font-black text-white" style={{ fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.025em' }}>Current opportunities.</h2>
            </div>
          </div>

          {/* search + filter */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search positions…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className={`${inputCls} pl-10`}
              />
            </div>
            <div className="relative">
              <select
                value={selectedDept}
                onChange={e => setSelectedDept(e.target.value)}
                className={`${inputCls} appearance-none pr-9`}
              >
                {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* listings */}
          <div className="reveal space-y-4">
            {filtered.map(pos => (
              <div key={pos.id} className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
                {/* top */}
                <div className="p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-white text-lg mb-3" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{pos.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { Icon: MapPin,    text: pos.location },
                          { Icon: Briefcase, text: pos.type },
                          { Icon: Clock,     text: pos.experience },
                        ].map(({ Icon, text }) => (
                          <span key={text} className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 border border-white/10 bg-gray-950 px-3 py-1.5 rounded-full">
                            <Icon size={11} className="text-sky-400" /> {text}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={`/contact?position=${encodeURIComponent(pos.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-white text-sm font-bold hover:bg-sky-400 transition-colors shrink-0"
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mt-4">{pos.description}</p>
                </div>

                {/* expandable details */}
                <div className="border-t border-white/10">
                  <button
                    className="w-full flex items-center justify-between px-7 py-4 text-sm text-gray-500 hover:text-white transition-colors"
                    onClick={() => setExpanded(expanded === pos.id ? null : pos.id)}
                  >
                    <span className="font-mono text-[11px] tracking-widest uppercase">
                      {expanded === pos.id ? 'Hide details' : 'View details'}
                    </span>
                    <ChevronDown size={15} className={`transition-transform ${expanded === pos.id ? 'rotate-180' : ''}`} />
                  </button>
                  {expanded === pos.id && (
                    <div className="bg-gray-950 px-7 pb-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>Responsibilities</h4>
                        <ul className="space-y-2">
                          {pos.responsibilities.map(item => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="text-sky-400 mt-0.5 shrink-0">•</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>Requirements</h4>
                        <ul className="space-y-2">
                          {pos.requirements.map(item => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="text-sky-400 mt-0.5 shrink-0">•</span>{item}
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
              <div className="text-center py-16 text-gray-500">
                <p className="text-base font-semibold text-white mb-2">No positions found.</p>
                <p className="text-sm">Try different search terms or check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ── */}
      <section className="bg-gray-900 border-t border-white/10 py-20">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="reveal mb-12">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-4">How to apply</p>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.025em' }}>Application Process</h2>
            <p className="text-gray-500 text-base mt-3 max-w-lg leading-relaxed">Our hiring process is designed to be transparent, quick, and respectful of your time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Application',    desc: 'Submit your application through our careers portal or contact form.' },
              { step: '02', title: 'Initial Review', desc: 'Our team reviews your application and qualifications within 3 days.' },
              { step: '03', title: 'Interviews',     desc: 'Technical and cultural fit interviews with the team. No trick questions.' },
              { step: '04', title: 'Decision',       desc: 'Final decision and offer discussion. Clear, no ghosting.' },
            ].map((s, i) => (
              <div key={i} className="reveal bg-gray-950 border border-white/10 rounded-2xl p-7" style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}>
                <div className="text-4xl font-black text-sky-400/30 mb-4" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{s.step}</div>
                <h3 className="font-bold text-white text-base mb-2" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
