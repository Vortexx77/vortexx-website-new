import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Globe, Cpu, Palette, Megaphone,
  Server, Bot, Star, ChevronLeft, ChevronRight, Check,
  Users, Target, Award, TrendingUp, Phone,
} from 'lucide-react';
import { homeHero } from '../img/images';

/* ─────────────────────────── data ─────────────────────────── */
const services = [
  { id: 'web-design',          num: '01', icon: Globe,     title: 'Web Design & Development',  desc: 'Websites that look great and actually bring in business — built mobile-first, built to convert.',                  tags: ['Responsive', 'E-Commerce', 'Web Apps'] },
  { id: 'systems-development', num: '02', icon: Cpu,       title: 'Systems Development',       desc: 'Custom software that replaces the spreadsheets and manual work slowing your team down.',                           tags: ['APIs', 'Enterprise', 'Automation'] },
  { id: 'graphics-design',     num: '03', icon: Palette,   title: 'Graphics & UI Design',      desc: "A brand that looks the part and an interface people actually want to use — we handle both.",                      tags: ['Branding', 'UI/UX', 'Motion'] },
  { id: 'digital-marketing',   num: '04', icon: Megaphone, title: 'Digital Marketing',         desc: 'More of the right people finding you, not just more traffic. Strategy-led, data-backed.',                         tags: ['SEO', 'Social Media', 'PPC'] },
  { id: 'infrastructure',      num: '05', icon: Server,    title: 'Infrastructure Management', desc: 'Your servers, cloud, and security in steady hands — so you never wake up to a website that is down.',              tags: ['Cloud', 'DevOps', 'Security'] },
  { id: 'ai-agents',           num: '06', icon: Bot,       title: 'AI Agents & Automation',    desc: 'Intelligent workflows that work while you sleep — from chatbots to full business-process automation.',             tags: ['LLMs', 'Chatbots', 'Workflows'] },
];

const steps = [
  { num: '01', title: 'Discovery',        desc: 'We ask the questions most agencies skip. Goals, audience, constraints — all mapped before anything else.' },
  { num: '02', title: 'Strategy',         desc: 'A concrete plan with timelines and decisions locked down. No vague roadmaps, no surprises mid-project.' },
  { num: '03', title: 'Build',            desc: "You see real progress every week. Regular check-ins mean nothing goes off-track without you knowing." },
  { num: '04', title: 'Launch & Support', desc: 'We stay on after go-live. Bugs get fixed, performance gets monitored, and you keep getting better results.' },
];

const testimonials = [
  { quote: 'VORTEXX delivered our entire platform in under three weeks. The quality was way beyond what we expected.',                            name: 'Ian Mugisha',    role: 'Founder, Nestcraft Construction',   initials: 'IM' },
  { quote: "They understood our NGO's needs immediately and built exactly what we needed — no back-and-forth, no wasted time.",                   name: 'Grace Nalwoga',  role: 'Director, URUDO Uganda',            initials: 'GN' },
  { quote: 'Our online inquiries tripled in the first month. The booking system they built changed how we run the whole business.',               name: 'Peter Ouma',     role: 'GM, Westway Luxury Suites',         initials: 'PO' },
];

const stats = [
  { value: '50+',  label: 'Happy Clients',       Icon: Users },
  { value: '100+', label: 'Projects Delivered',   Icon: Target },
  { value: '2 yrs',label: 'In Business',          Icon: Award },
  { value: '98%',  label: 'Satisfaction Rate',    Icon: TrendingUp },
];

const work = [
  { id: 'nestcraft-construction',    title: 'Nestcraft Construction',    category: 'Construction Website', accent: '#f59e0b', bg: 'from-amber-900/60 to-stone-900' },
  { id: 'westway-luxury-suites',     title: 'Westway Luxury Suites',     category: 'Hospitality',          accent: '#38bdf8', bg: 'from-blue-900/60 to-slate-900' },
  { id: 'kartel-tech',               title: 'Kartel Tech',               category: 'Tech Company',         accent: '#22d3ee', bg: 'from-cyan-900/60 to-blue-950' },
  { id: 'african-horizon-adventures',title: 'African Horizon Adventures', category: 'Tour & Travel',        accent: '#fbbf24', bg: 'from-yellow-900/60 to-amber-950' },
];

/* ─────────────────────────── small project card mockup ─────────────────────────── */
const CardMockup: React.FC<{ bg: string; accent: string }> = ({ bg, accent }) => (
  <div className={`relative w-full h-full bg-gradient-to-br ${bg} overflow-hidden flex items-center justify-center`}>
    <div className="absolute inset-0 opacity-25" style={{ background: `radial-gradient(ellipse at 40% 40%, ${accent}66, transparent 65%)` }} />
    <div className="relative z-10 w-[72%] space-y-2">
      <div className="h-2 rounded-full bg-white/15 w-full" />
      <div className="h-2 rounded-full bg-white/10 w-4/5" />
      <div className="mt-3 h-14 rounded-lg" style={{ background: `${accent}30` }} />
      <div className="grid grid-cols-3 gap-1.5 mt-1">
        {[1,2,3].map(i => <div key={i} className="h-8 rounded bg-white/8" />)}
      </div>
      <div className="h-1.5 rounded-full bg-white/10 w-2/3" />
      <div className="h-1.5 rounded-full bg-white/10 w-1/2" />
    </div>
  </div>
);

/* ─────────────────────────── component ─────────────────────────── */
const Home: React.FC = () => {
  const [tIdx, setTIdx] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'VORTEXX — Transforming Ideas Into Digital Reality';

    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    const t = setInterval(() => setTIdx(p => (p + 1) % testimonials.length), 6000);
    return () => { io.disconnect(); clearInterval(t); };
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden">

        {/* photo */}
        <img
          src={homeHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-gray-950/40" />
        {/* subtle blue atmosphere */}
        <div className="absolute right-0 top-0 w-[55%] h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 pt-36 pb-24">

          {/* pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inset-0 rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-sky-400" />
            </span>
            <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-white/60">Uganda's Digital Builders</span>
          </div>

          {/* headline */}
          <h1 className="font-black text-white leading-none tracking-tight mb-7" style={{ fontSize: 'clamp(48px, 6vw, 82px)' }}>
            We Build Websites<br />
            <span className="text-sky-400">That Actually</span><br />
            <em className="font-extralight not-italic" style={{ color: 'rgba(255,255,255,0.6)' }}>Work for You.</em>
          </h1>

          <p className="text-white/55 text-lg leading-relaxed max-w-lg font-light mb-12">
            From startups to institutions — VORTEXX delivers web design, custom systems,
            and digital experiences built for real results, on time, every time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-400 text-gray-950 text-sm font-bold hover:bg-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(56,189,248,0.4)]">
              View Our Work <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:border-white/40 hover:text-white transition-all duration-300">
              Start a Project
            </Link>
          </div>

          {/* mini stats */}
          <div className="flex flex-wrap gap-10 pt-8 border-t border-white/10">
            {stats.slice(0,3).map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white leading-none" style={{ fontFamily: 'Manrope, Inter, system-ui', letterSpacing: '-0.03em' }}>{s.value}</div>
                <div className="text-[11px] font-mono text-white/35 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* fade to white */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
      </section>


      {/* ════════════════════════════════════════
          CLIENTS TICKER
      ════════════════════════════════════════ */}
      <div className="bg-white border-b border-gray-100 overflow-hidden py-5">
        <p className="text-center text-[9px] font-bold text-gray-300 tracking-[0.35em] uppercase mb-5">Trusted by</p>
        <div className="relative">
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-14 animate-scroll-left select-none">
            {[
              'Nestcraft Construction','Westway Luxury Suites','URUDO Uganda',
              'Kebisoni SACCO','Kartel Tech','Heart and Word',
              'Gebana Company','Evelyne HTI','Emmy Outreaches',
              'African Horizon','Kinoni Sacco',
              'Nestcraft Construction','Westway Luxury Suites','URUDO Uganda',
              'Kebisoni SACCO','Kartel Tech','Heart and Word',
              'Gebana Company','Evelyne HTI','Emmy Outreaches',
              'African Horizon','Kinoni Sacco',
            ].map((n, i) => (
              <span key={i} className="whitespace-nowrap text-sm font-semibold text-gray-300 hover:text-gray-500 transition-colors shrink-0" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{n}</span>
            ))}
          </div>
        </div>
      </div>


      {/* ════════════════════════════════════════
          INTRO SPLIT — not a typical "about" block
      ════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-end reveal">

            {/* left — big statement */}
            <div>
              <p className="text-[11px] font-mono text-sky-500 tracking-[0.2em] uppercase mb-5">What we actually do</p>
              <h2 className="font-black text-gray-900 leading-[1.1] mb-0" style={{ fontSize: 'clamp(34px, 4vw, 56px)', letterSpacing: '-0.025em' }}>
                Six services.<br />
                One team.<br />
                <span className="text-sky-500">Zero handoffs.</span>
              </h2>
            </div>

            {/* right — honest paragraph */}
            <div className="pb-2">
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Most agencies outsource the parts they can't do. We don't. Design, development,
                marketing, infrastructure — all in-house, all talking to each other. That's how
                projects stay on track and on budget.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:gap-3 transition-all">
                See every service <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* service list — editorial horizontal layout */}
          <div className="mt-16 divide-y divide-gray-100">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.id}
                  to={`/services#${svc.id}`}
                  className="group reveal flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 hover:bg-gray-50 -mx-4 px-4 rounded-xl transition-colors"
                  style={{ ['--reveal-delay' as string]: `${i * 50}ms` }}
                >
                  {/* number */}
                  <span className="text-[11px] font-mono text-gray-300 w-6 shrink-0">{svc.num}</span>
                  {/* icon */}
                  <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-sky-500" />
                  </div>
                  {/* title */}
                  <span className="font-bold text-gray-900 text-base sm:w-56 shrink-0 group-hover:text-sky-600 transition-colors" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{svc.title}</span>
                  {/* desc */}
                  <span className="text-gray-400 text-sm leading-relaxed flex-1">{svc.desc}</span>
                  {/* tags */}
                  <div className="hidden lg:flex gap-1.5 shrink-0">
                    {svc.tags.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-gray-200 text-gray-400 bg-white">{t}</span>
                    ))}
                  </div>
                  {/* arrow */}
                  <ArrowUpRight size={15} className="shrink-0 text-gray-300 group-hover:text-sky-500 transition-colors hidden sm:block" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          STATS — dark band
      ════════════════════════════════════════ */}
      <div className="bg-gray-900">
        <div className="max-w-[1152px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.07]">
          {stats.map((s, i) => {
            const Icon = s.Icon;
            return (
              <div key={i} className="reveal py-12 px-8 text-center" style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}>
                <Icon size={18} className="text-sky-500 mx-auto mb-4 opacity-70" />
                <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'Manrope, Inter, system-ui', letterSpacing: '-0.03em' }}>{s.value}</div>
                <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>


      {/* ════════════════════════════════════════
          RECENT WORK
      ════════════════════════════════════════ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[1152px] mx-auto px-8">

          {/* head — left-right split */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 reveal">
            <div>
              <p className="text-[11px] font-mono text-sky-500 tracking-[0.2em] uppercase mb-3">Recent work</p>
              <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
                Some of what<br />we've shipped.
              </h2>
            </div>
            <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-sky-600 transition-colors shrink-0 pb-1">
              Full portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* asymmetric grid: big left + two stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">

            {/* feature card — larger */}
            <Link to={`/portfolio/${work[0].id}`} className="group reveal block">
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg h-full">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <CardMockup bg={work[0].bg} accent={work[0].accent} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <span className="bg-white text-gray-900 text-xs font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-1.5">
                      View project <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
                <div className="p-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-sky-600 transition-colors mb-1" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{work[0].title}</h3>
                    <span className="text-[11px] font-mono text-gray-400">{work[0].category}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-sky-400 group-hover:text-sky-500 group-hover:bg-sky-50 transition-all shrink-0 mt-0.5">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </Link>

            {/* two stacked cards */}
            <div className="grid grid-rows-2 gap-5">
              {work.slice(1, 3).map((w, i) => (
                <Link key={w.id} to={`/portfolio/${w.id}`} className="group reveal block" style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}>
                  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg h-full flex">
                    <div className="w-2/5 relative overflow-hidden shrink-0">
                      <CardMockup bg={w.bg} accent={w.accent} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <ArrowUpRight size={18} className="text-white" />
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-sky-600 transition-colors mb-1 leading-snug" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{w.title}</h3>
                      <span className="text-[10px] font-mono text-gray-400">{w.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* fourth card — wide bottom */}
          <Link to={`/portfolio/${work[3].id}`} className="group reveal block mt-5">
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr]">
                <div className="aspect-[4/3] sm:aspect-auto relative overflow-hidden">
                  <CardMockup bg={work[3].bg} accent={work[3].accent} />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-3">{work[3].category}</span>
                  <h3 className="font-black text-gray-900 text-2xl group-hover:text-sky-600 transition-colors mb-3" style={{ fontFamily: 'Manrope, Inter, system-ui', letterSpacing: '-0.02em' }}>{work[3].title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">A vibrant tour and travel website capturing the spirit of East African adventure — built to convert browsers into bookings.</p>
                  <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-3 transition-all">View case study <ArrowRight size={14} /></span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>


      {/* ════════════════════════════════════════
          PROCESS — horizontal timeline feel
      ════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1152px] mx-auto px-8">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

            {/* sticky-ish left label */}
            <div className="reveal lg:pt-2">
              <p className="text-[11px] font-mono text-sky-500 tracking-[0.2em] uppercase mb-5">How we work</p>
              <h2 className="font-black text-gray-900 leading-[1.1] mb-6" style={{ fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.02em' }}>
                No confusion.<br />No surprises.<br />Just delivery.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                We've refined this process across 100+ projects. It keeps everyone aligned and every project on time.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-sky-600 transition-colors">
                Talk to us <Phone size={14} />
              </Link>
            </div>

            {/* steps */}
            <div className="space-y-0 reveal">
              {steps.map((step, i) => (
                <div key={step.num} className={`flex gap-6 sm:gap-10 ${i < steps.length - 1 ? 'pb-10 border-b border-gray-100 mb-10' : ''}`}
                  style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}>
                  {/* number pill */}
                  <div className="shrink-0 pt-1">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold text-sky-600 bg-sky-50 border border-sky-100">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* promise chips */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap gap-3 reveal">
            {[
              'On-time delivery — always',
              'Mobile-first by default',
              'Flat project pricing',
              'Post-launch support included',
              'Transparent communication',
              'Built for your audience',
            ].map(item => (
              <div key={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-600">
                <Check size={13} className="text-sky-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          TESTIMONIALS — editorial, not a slider grid
      ════════════════════════════════════════ */}
      <section className="bg-gray-900 py-24 overflow-hidden">
        <div className="max-w-[1152px] mx-auto px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 reveal">
            <div>
              <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-3">Client stories</p>
              <h2 className="font-black text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>
                Don't take our word for it.
              </h2>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => setTIdx(p => (p - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-white/15 text-white/50 flex items-center justify-center hover:border-sky-400 hover:text-sky-400 transition-all" aria-label="Previous">
                <ChevronLeft size={17} />
              </button>
              <button onClick={() => setTIdx(p => (p + 1) % testimonials.length)} className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-400 transition-all" aria-label="Next">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          {/* big quote */}
          <div className="overflow-hidden reveal">
            <div className="flex transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]" style={{ transform: `translateX(-${tIdx * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="shrink-0 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start">
                    {/* avatar */}
                    <div className="flex lg:flex-col items-center gap-4 lg:gap-3">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-lg text-white shrink-0" style={{ background: 'linear-gradient(135deg,#0ea5e9,#0369a1)', fontFamily: 'Manrope, Inter, system-ui' }}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{t.name}</div>
                        <div className="text-gray-500 text-xs font-mono mt-0.5">{t.role}</div>
                      </div>
                      {/* stars */}
                      <div className="hidden lg:flex gap-1 mt-2">
                        {[...Array(5)].map((_, j) => <Star key={j} size={13} className="text-amber-400 fill-amber-400" />)}
                      </div>
                    </div>
                    {/* quote */}
                    <div>
                      <div className="text-sky-500/30 font-black leading-none mb-4 select-none" style={{ fontSize: '80px', fontFamily: 'Georgia, serif' }}>"</div>
                      <p className="text-white font-semibold leading-relaxed" style={{ fontSize: 'clamp(18px, 2.2vw, 28px)', fontFamily: 'Manrope, Inter, system-ui', letterSpacing: '-0.01em' }}>
                        {t.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="flex gap-2 mt-12 reveal">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)} className="h-1 rounded-full transition-all duration-300" style={{ width: i === tIdx ? '32px' : '8px', background: i === tIdx ? '#38bdf8' : 'rgba(255,255,255,0.12)' }} aria-label={`Testimonial ${i+1}`} />
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CTA — clean, confident
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[1152px] mx-auto">
          <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center py-16 px-10 lg:px-16 rounded-2xl border border-gray-200 bg-gray-50">

            {/* left */}
            <div>
              <p className="text-[11px] font-mono text-sky-500 tracking-[0.2em] uppercase mb-5">Ready when you are</p>
              <h2 className="font-black text-gray-900 leading-[1.1] mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.025em' }}>
                Let's build something<br />
                <span className="text-sky-500">people actually use.</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                50+ businesses trusted VORTEXX to get their digital presence right. We'd love to do the same for you.
              </p>
            </div>

            {/* right — action buttons stacked */}
            <div className="flex flex-col gap-3 shrink-0 min-w-[200px]">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-sky-600 transition-colors">
                Start a project <ArrowRight size={15} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:border-sky-300 hover:text-sky-600 transition-colors">
                See our work
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

export default Home;
