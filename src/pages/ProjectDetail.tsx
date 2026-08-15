import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { projects } from '../data/projects';
import { DeviceMockup } from '../components/DeviceMockup';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | VORTEXX Portfolio`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  // 404 state
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">404</p>
        <h1 className="text-3xl font-black text-white mb-4">Project not found</h1>
        <p className="text-gray-400 mb-8">That project doesn't exist in our portfolio.</p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#32b3f5] text-gray-900 text-sm font-bold hover:bg-[#7dd3ff] transition-all"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Split fullDescription into paragraphs
  const paragraphs = project.fullDescription.split('\n\n').filter(Boolean);

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO BANNER ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ background: project.accentColor }}
        />

        <div className="max-w-[1152px] mx-auto px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-8 flex-wrap">
            <Link to="/" className="hover:text-[#3abef9] transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link to="/portfolio" className="hover:text-[#3abef9] transition-colors">Portfolio</Link>
            <span className="opacity-40">/</span>
            <span className="text-gray-300">{project.title}</span>
          </nav>

          {/* Two-column hero layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-16">

            {/* Left – copy */}
            <div>
              {/* Short description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 max-w-lg">
                {project.description}
              </p>

              {/* Live site button */}
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-gray-900 mb-8 hover:-translate-y-0.5 transition-all shadow-lg"
                  style={{ background: project.accentColor }}
                >
                  <ExternalLink size={14} />
                  Visit Live Website
                </a>
              )}

              {/* Big project title */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6"
                style={{ letterSpacing: '-0.025em' }}
              >
                {project.title}
              </h1>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#32b3f5]/10 border border-[#32b3f5]/30 text-[#7dd3ff] text-xs font-mono">
                  <User size={11} />
                  Client: {project.client}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#32b3f5]/10 border border-[#32b3f5]/30 text-[#7dd3ff] text-xs font-mono">
                  <Calendar size={11} />
                  Duration: {project.duration}
                </span>
              </div>
            </div>

            {/* Right – device mockup */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <DeviceMockup project={project} />
            </div>
          </div>
        </div>

        {/* Bottom divider line */}
        <div className="border-b border-white/10" />
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Left – description + visuals */}
            <div className="lg:col-span-2">

              {/* Project Description */}
              <div className="mb-12">
                <h2
                  className="text-2xl font-black text-white mb-1 flex items-center gap-3"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  <span
                    className="w-8 h-0.5 rounded flex-shrink-0"
                    style={{ background: project.accentColor }}
                  />
                  Project Description
                </h2>
                <div className="h-px bg-white/10 mb-6 mt-3" />
                <div className="space-y-4">
                  {paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Project Visuals placeholder */}
              <div>
                <h2
                  className="text-2xl font-black text-white mb-1 flex items-center gap-3"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  <span
                    className="w-8 h-0.5 rounded flex-shrink-0"
                    style={{ background: project.accentColor }}
                  />
                  Project Visuals
                </h2>
                <div className="h-px bg-white/10 mb-6 mt-3" />

                {/* Two mock screenshot panels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-white/10 aspect-[16/10] relative"
                    >
                      <DeviceMockup project={project} />
                      <div className="absolute inset-0 flex items-end p-3">
                        <span className="text-[10px] font-mono text-white/40 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                          {i === 0 ? 'Desktop View' : 'Mobile View'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right – sidebar */}
            <div className="space-y-6">

              {/* Project Info card */}
              <div className="rounded-2xl border border-white/10 bg-[#101728] p-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest font-mono mb-4">
                  Project Info
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-white/8 pb-3">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Client</span>
                    <span className="text-sm font-semibold text-white text-right">{project.client}</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-white/8 pb-3">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Duration</span>
                    <span className="text-sm font-semibold text-white text-right">{project.duration}</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-white/8 pb-3">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Category</span>
                    <span className="text-sm font-semibold text-white text-right max-w-[160px]">{project.category}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Status</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                      Live
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags card */}
              <div className="rounded-2xl border border-white/10 bg-[#101728] p-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest font-mono mb-4 flex items-center gap-2">
                  <Tag size={13} className="text-gray-500" />
                  Focus Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-mono border bg-white/[0.04] text-gray-300 border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit live site */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-bold text-gray-900 hover:-translate-y-0.5 transition-all shadow-lg"
                  style={{ background: project.accentColor }}
                >
                  <ExternalLink size={15} />
                  Visit Live Website
                </a>
              )}

              {/* Back to portfolio */}
              <Link
                to="/portfolio"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-300 border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition-colors"
              >
                <ArrowLeft size={15} />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAVIGATION ────────────────────────────────────────── */}
      {(prevProject || nextProject) && (
        <section className="border-t border-white/10 py-10">
          <div className="max-w-[1152px] mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevProject ? (
                <Link
                  to={`/portfolio/${prevProject.id}`}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-[#101728] hover:border-[#32b3f5]/40 hover:bg-[#141d33] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#32b3f5]/10 transition-colors">
                    <ArrowLeft size={18} className="text-gray-400 group-hover:text-[#32b3f5] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">Previous</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#7dd3ff] transition-colors leading-snug">
                      {prevProject.title}
                    </p>
                  </div>
                </Link>
              ) : <div />}

              {nextProject && (
                <Link
                  to={`/portfolio/${nextProject.id}`}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-[#101728] hover:border-[#32b3f5]/40 hover:bg-[#141d33] transition-all sm:flex-row-reverse text-right"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#32b3f5]/10 transition-colors">
                    <ArrowRight size={18} className="text-gray-400 group-hover:text-[#32b3f5] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">Next</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#7dd3ff] transition-colors leading-snug">
                      {nextProject.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#32b3f5]/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[1152px] mx-auto relative z-10">
          <div className="bg-[#090d18] border border-white/10 rounded-2xl p-10 md:p-14 text-center hover:border-[#32b3f5]/30 transition-colors">
            <p className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[#7dd3ff] mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7dd3ff] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7dd3ff]" />
              </span>
              Ready to Launch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Ready to Launch a Website That{' '}
              <span className="text-[#32b3f5]">Actually Works?</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
              Let's build something remarkable together — on time, on budget, and beyond expectations.
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
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/15 text-gray-300 text-sm font-semibold hover:border-white/30 hover:bg-white/5 transition-all"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
