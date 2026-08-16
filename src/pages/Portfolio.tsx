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
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#32b3f5]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1152px] mx-auto px-8 relative z-10 text-center">
          <p className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] uppercase text-[#7dd3ff] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7dd3ff] shadow-[0_0_8px_#7dd3ff]" />
            Our Work
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Projects That{' '}
            <span className="text-[#32b3f5]">Speak for Themselves</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From construction firms to NGOs, SACCOs to travel companies — every project we build
            is crafted with precision, purpose, and performance in mind.
          </p>

          {/* Stats row */}
          <div className="inline-grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden backdrop-blur-sm">
            {[
              { value: '11+', label: 'Projects Live' },
              { value: '8', label: 'Industries' },
              { value: '100%', label: 'On-Time Delivery' },
            ].map((s) => (
              <div key={s.label} className="px-8 py-4 text-center">
                <strong className="block font-black text-2xl text-[#7dd3ff]">{s.value}</strong>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER PILLS ─────────────────────────────────────────────────── */}
      <div className="max-w-[1152px] mx-auto px-8 pb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-[#32b3f5] text-gray-900 border-[#32b3f5] font-bold shadow-[0_0_18px_rgba(50,179,245,0.4)]'
                  : 'border-white/10 text-gray-400 bg-white/[0.03] hover:border-[#32b3f5]/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECT GRID ──────────────────────────────────────────────────── */}
      <div className="max-w-[1152px] mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32b3f5]"
              style={{ transitionDelay: `${(idx % 6) * 60}ms` }}
            >
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#101728] hover:border-[#32b3f5]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(50,179,245,0.18)]">
                {/* Mockup visual */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <DeviceMockup project={project} />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-[#32b3f5]/0 group-hover:bg-[#32b3f5]/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5">
                      View Project <ArrowRight size={12} />
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-[#7dd3ff] transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-[11px] font-mono border"
                    style={{
                      background: `${project.accentColor}15`,
                      borderColor: `${project.accentColor}40`,
                      color: project.accentColor,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg font-semibold">No projects in this category yet.</p>
            <p className="text-sm mt-2">Check back soon — we're always building.</p>
          </div>
        )}
      </div>

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#32b3f5]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[1152px] mx-auto relative z-10">
          <div className="bg-[#090d18] border border-white/10 rounded-2xl p-10 md:p-16 text-center hover:border-[#32b3f5]/30 transition-colors">
            <p className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[#7dd3ff] mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7dd3ff] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7dd3ff]" />
              </span>
              Ready to Launch
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Ready to Launch a Website That{' '}
              <span className="text-[#32b3f5]">Actually Works?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Join our growing list of happy clients. Let's build something remarkable together —
              on time, on budget, and beyond expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#32b3f5] text-gray-900 text-sm font-bold hover:bg-[#7dd3ff] hover:-translate-y-0.5 transition-all shadow-[0_0_24px_rgba(50,179,245,0.35)]"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/15 text-gray-300 text-sm font-semibold hover:border-white/30 hover:bg-white/5 transition-all"
              >
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
