import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    initials: 'KA',
    tag: 'Leadership',
    name: 'Kamugisha Ali',
    role: 'CEO & Founder',
    bio: "Kamugisha is a visionary leader with a passion for technology and innovation. He founded VORTEXX and has been instrumental in the company's growth and success.",
  },
  {
    initials: 'NG',
    tag: 'Operations',
    name: 'Nassuuna Gloria',
    role: 'Operations Manager',
    bio: 'Gloria keeps VORTEXX running day to day, coordinating projects, teams, and processes so every engagement stays on track from kickoff to delivery.',
  },
  {
    initials: 'AS',
    tag: 'Engineering',
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
  ['02', 'R&D Investment',      'Maintain a position at the forefront of technological innovation through continuous research and development.'],
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
      <section className="relative bg-gray-950 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1152px] mx-auto px-8 relative z-10">
          <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-6">About VORTEXX</p>
          <h1 className="font-black text-white leading-none tracking-tight mb-7" style={{ fontSize: 'clamp(46px, 6vw, 80px)' }}>
            Built in Kampala.<br />
            Built for <span className="text-sky-400">growth.</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl font-light mb-12">
            We're a team of passionate technologists dedicated to transforming businesses through
            innovative digital solutions — web platforms, custom systems, design, and marketing
            that actually get used.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-400 transition-colors">
              Start a Project <ArrowRight size={15} />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      </section>

      {/* ── STATS ── */}
      <div className="bg-gray-900 border-y border-white/10">
        <div className="max-w-[1152px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {[
            ['2024',  'Founded'],
            ['50+',   'Happy Clients'],
            ['100+',  'Projects Shipped'],
            ['98%',   'Client Satisfaction'],
          ].map(([val, lbl], i) => (
            <div key={i} className="reveal py-10 px-6 text-center">
              <div className="text-4xl font-black text-sky-400 mb-1" style={{ fontFamily: 'Manrope, Inter, system-ui', letterSpacing: '-0.03em' }}>{val}</div>
              <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ORIGIN STORY ── */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-[1152px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div className="reveal">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-5">How we started</p>
            <h2 className="font-black text-white leading-[1.1] mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.025em' }}>
              From a student project<br />to a real company.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-5">
              Founded in 2024, VORTEXX began as a small web development agency with a team of just
              ten passionate tech students. Our founder, Kamugisha Ali, envisioned a company that
              would not just build websites, but create transformative digital experiences that
              drive business growth.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              As we gained the trust of our early clients, we expanded our services to include
              systems development, graphic design, digital marketing, and infrastructure management.
              Today, VORTEXX has grown into a comprehensive technology solutions provider serving
              clients across Uganda and beyond.
            </p>
            <blockquote className="border-l-2 border-sky-500 pl-5 text-white/70 text-base italic leading-relaxed">
              "Our journey has been defined by a relentless commitment to innovation, excellence,
              and our clients' success — while staying true to our core mission: empowering
              businesses to thrive in the digital age."
            </blockquote>
          </div>

          <div className="reveal bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-gray-950/50">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <span className="ml-3 text-[10px] font-mono text-white/20">about.vortexx.co.ug</span>
            </div>
            <div className="divide-y divide-white/10">
              {[
                ['Founded',       'Nov 2024, Kampala'],
                ['Founder',       'Kamugisha Ali'],
                ['Starting team', '10 tech students'],
                ['Services',      '6 core disciplines'],
                ['HQ',            'Bukasa-Bugiri, Kawuku'],
                ['Process',       'Discover → Design → Build → Support'],
              ].map(([lbl, val]) => (
                <div key={lbl} className="flex justify-between items-center px-6 py-4">
                  <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">{lbl}</span>
                  <span className="text-white text-sm font-semibold text-right max-w-[55%]">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / GOALS ── */}
      <section className="bg-gray-900 border-y border-white/10 py-24">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="reveal mb-14">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-4">Why we're here</p>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.025em' }}>
              Vision, Mission & Goals
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tag: 'Vision',  title: 'Our Vision',   body: 'To be the leading creative technology company that empowers businesses and communities through smart web solutions, innovative mobile applications, impactful graphics designs, and efficient information management systems.' },
              { tag: 'Mission', title: 'Our Mission',  body: 'To innovatively deliver AI-powered, user-focused systems that drive success and inclusivity across every sector we serve.' },
              { tag: 'Goals',   title: 'Our Goals',    body: 'To provide top-notch quality services, deliver high-quality projects on time, and achieve our clients\' satisfaction on every single engagement.' },
            ].map((item, i) => (
              <div key={i} className="reveal bg-gray-950 border border-white/10 rounded-2xl p-8" style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}>
                <span className="inline-block text-[10px] font-mono text-sky-400 tracking-widest uppercase border border-sky-400/30 bg-sky-400/5 px-2.5 py-1 rounded-full mb-5">{item.tag}</span>
                <h3 className="font-bold text-white text-lg mb-3" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {goals.map(([num, title, desc], i) => (
              <div key={i} className="reveal bg-gray-950 border border-white/10 rounded-xl p-6" style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}>
                <div className="text-[11px] font-mono text-sky-400 tracking-widest mb-3">{num}</div>
                <h4 className="font-bold text-white text-base mb-2" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES — white island ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="reveal mb-14">
            <p className="text-[11px] font-mono text-sky-500 tracking-[0.2em] uppercase mb-4">What drives us</p>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.025em' }}>
              Our Values
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg text-base leading-relaxed">
              Our core values guide everything we do, from how we develop solutions to how we
              interact with our clients and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(([title, desc], i) => (
              <div key={i} className="reveal bg-white border border-gray-200 rounded-2xl p-7 hover:border-sky-200 hover:shadow-sm transition-all" style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}>
                <h3 className="font-bold text-sky-600 text-base mb-3" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-[1152px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16">
          <div className="reveal">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-5">Our journey</p>
            <h2 className="font-black text-white leading-[1.1]" style={{ fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.025em' }}>
              Key milestones in<br />our growth.
            </h2>
          </div>
          <div className="reveal relative pl-6 border-l border-white/10 space-y-10">
            {journey.map(([when, title, desc], i) => (
              <div key={i} className="relative" style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}>
                <div className="absolute -left-[1.85rem] top-1 w-3.5 h-3.5 rounded-full bg-gray-900 border-2 border-sky-500" />
                <span className="inline-block font-mono text-[11px] text-sky-400 tracking-widest uppercase border border-sky-500/30 bg-sky-500/5 px-2.5 py-1 rounded-full mb-3">{when}</span>
                <h3 className="font-bold text-white text-base mb-2" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="bg-gray-900 border-y border-white/10 py-24">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="reveal text-center mb-14">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-4">Meet our team</p>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.025em' }}>
              The people driving our vision.
            </h2>
          </div>

          {/* carousel */}
          <div className="reveal max-w-2xl mx-auto overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {teamMembers.map(m => (
                <div key={m.name} className="shrink-0 w-full bg-gray-950 border border-white/10 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-start">
                  <div>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl text-white mb-3" style={{ background: 'linear-gradient(135deg,#0ea5e9,#0369a1)', fontFamily: 'Manrope, Inter, system-ui' }}>{m.initials}</div>
                    <span className="inline-block text-[10px] font-mono text-sky-400 tracking-widest uppercase border border-sky-400/30 bg-sky-400/5 px-2.5 py-1 rounded-full">{m.tag}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl mb-1" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{m.name}</h3>
                    <p className="text-sky-400 text-sm font-mono mb-4">{m.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex items-center justify-center gap-4 mt-8">
            <button onClick={() => goTo(slide - 1)} className="w-10 h-10 rounded-full border border-white/15 text-white/50 flex items-center justify-center hover:border-sky-400 hover:text-sky-400 transition-all" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {teamMembers.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === slide ? '28px' : '8px', background: i === slide ? '#38bdf8' : 'rgba(255,255,255,0.15)' }} aria-label={`Team member ${i + 1}`} />
              ))}
            </div>
            <button onClick={() => goTo(slide + 1)} className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-400 transition-all" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-[1152px] mx-auto reveal">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center py-14 px-10 lg:px-16 rounded-2xl border border-gray-200 bg-white">
            <div>
              <p className="text-[11px] font-mono text-sky-500 tracking-[0.2em] uppercase mb-5">Work with us</p>
              <h2 className="font-black text-gray-900 leading-[1.1] mb-4" style={{ fontSize: 'clamp(26px, 3vw, 42px)', letterSpacing: '-0.025em' }}>
                Want to build<br /><span className="text-sky-500">with us?</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                Tell us what you're working on. Our team will get back to you with next steps.
                No lengthy sales process, just a conversation.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 min-w-[200px]">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-sky-600 transition-colors">
                Start a Project <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:border-sky-300 hover:text-sky-600 transition-colors">
                Our Services
              </Link>
              <a href="https://wa.me/256745231430" target="_blank" rel="noopener noreferrer" className="text-center text-[12px] font-mono text-gray-400 hover:text-sky-500 transition-colors mt-1">
                or chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
