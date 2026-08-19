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
  ['01', 'Discovery',       'We start by understanding your business, goals, and challenges through in-depth consultations.'],
  ['02', 'Strategy',        'Based on our findings, we develop a tailored strategy and roadmap for your solution.'],
  ['03', 'Implementation',  'Our team brings the strategy to life with meticulous attention to detail.'],
  ['04', 'Optimization',    'We continuously refine and improve your solution based on performance data and feedback.'],
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
    if (!targets.length) return;

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
      <section className="relative bg-gray-950 pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1152px] mx-auto px-8 relative z-10">
          <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-6">Our Services</p>
          <h1 className="font-black text-white leading-none tracking-tight mb-7" style={{ fontSize: 'clamp(44px, 6vw, 78px)' }}>
            Comprehensive<br />Tech Solutions.
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl font-light mb-12">
            Six disciplines, one standard of work. We provide end-to-end technology services
            designed to help your business thrive in today's digital landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#web-design" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-400 transition-colors">
              Explore Services <ArrowRight size={15} />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      </section>

      {/* ── STICKY QUICK NAV ── */}
      <div className="bg-gray-900 border-b border-white/10 sticky top-0 z-40 overflow-x-auto">
        <div className="max-w-[1152px] mx-auto px-8 py-0">
          <div id="quickNav" className="flex gap-1 py-3">
            {quickNav.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-4 py-2 rounded-full text-sm font-mono text-gray-500 hover:text-white whitespace-nowrap transition-colors [&.active]:text-sky-400 [&.active]:bg-sky-400/10"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUE STRIP — white island ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1152px] mx-auto px-8 reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-12">
            {[
              { title: 'Innovation-Led',   desc: 'We explore new technologies and approaches to deliver cutting-edge solutions.' },
              { title: 'Client-Focused',   desc: 'We build around your unique needs and goals, not a one-size-fits-all template.' },
              { title: 'Held to Excellence', desc: 'The highest standard of quality and craft, in every engagement we take on.' },
            ].map((item, i) => (
              <div key={i} className="px-8 first:pl-0 last:pr-0 py-6 md:py-0">
                <h4 className="font-bold text-gray-900 text-base mb-2" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-[1152px] mx-auto px-8 space-y-6">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className="reveal bg-gray-900 border border-white/10 rounded-2xl p-8 sm:p-10 scroll-mt-20"
              style={{ ['--reveal-delay' as string]: `${i * 40}ms` }}
            >
              <div className="-mx-8 -mt-8 sm:-mx-10 sm:-mt-10 mb-8 relative aspect-[3/1] overflow-hidden rounded-t-2xl">
                <img src={svc.image} alt={svc.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
                {/* left */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[11px] font-mono text-gray-500 tracking-widest">{svc.num}</span>
                    {svc.badge && (
                      <span className="text-[10px] font-mono text-sky-400 tracking-widest border border-sky-400/30 bg-sky-400/5 px-2.5 py-1 rounded-full">{svc.badge}</span>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5">
                    <svg viewBox="0 0 24 24" fill="none" width="20" height="20">{svc.icon}</svg>
                  </div>
                  <h2 className="font-black text-white text-2xl mb-4" style={{ fontFamily: 'Manrope, Inter, system-ui', letterSpacing: '-0.02em' }}>{svc.title}</h2>
                  <p className="text-gray-400 text-base leading-relaxed mb-4">{svc.desc}</p>
                  <p className="text-sm text-sky-400/80 font-mono">Best for: <span className="text-gray-400 font-normal" style={{ fontFamily: 'inherit' }}>{svc.bestFor}</span></p>
                </div>
                {/* right */}
                <div>
                  <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-4">What's included</p>
                  <ul className="space-y-3 mb-8">
                    {svc.checks.map(c => (
                      <li key={c} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0">
                          <Check size={11} className="text-sky-400" />
                        </div>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/70 text-sm font-medium hover:border-sky-400/40 hover:text-sky-400 transition-colors">
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ADDITIONAL CAPABILITIES ── */}
      <div className="bg-gray-900 border-y border-white/10 py-16">
        <div className="max-w-[1152px] mx-auto px-8 reveal text-center">
          <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-4">Additional Capabilities</p>
          <h2 className="font-black text-white mb-3" style={{ fontSize: 'clamp(24px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
            Beyond our core services
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            We offer specialized solutions to address your specific technology needs.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {capabilities.map(c => (
              <span key={c} className="bg-gray-950 border border-white/10 text-gray-400 px-4 py-2 rounded-full text-sm font-mono">{c}</span>
            ))}
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-500 text-white text-sm font-bold hover:bg-sky-400 transition-colors">
            Discuss Your Project <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-[1152px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
          <div className="reveal">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-5">Our Approach</p>
            <h2 className="font-black text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.025em' }}>
              How we work<br />with you.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our proven process ensures we deliver exceptional results that align with your
              business goals and exceed your expectations.
            </p>
          </div>
          <div className="reveal space-y-0">
            {processSteps.map(([num, title, desc], i) => (
              <div key={num} className={`flex gap-6 ${i < processSteps.length - 1 ? 'pb-10 border-b border-white/10 mb-10' : ''}`}
                style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}>
                <div className="shrink-0 pt-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold text-sky-400 bg-sky-400/10 border border-sky-400/20">
                    {num}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="bg-gray-900 border-y border-white/10 py-20">
        <div className="max-w-[1152px] mx-auto px-8">
          <div className="reveal mb-12">
            <p className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase mb-4">Technologies</p>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(26px, 3vw, 40px)', letterSpacing: '-0.025em' }}>
              Our Tech Stack
            </h2>
            <p className="text-gray-500 text-base mt-3 max-w-lg leading-relaxed">
              We leverage cutting-edge technologies to build robust, scalable, and future-proof
              solutions for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((t, i) => (
              <div key={t.head} className="reveal bg-gray-950 border border-white/10 rounded-xl p-6" style={{ ['--reveal-delay' as string]: `${i * 50}ms` }}>
                <h4 className="font-bold text-white text-sm mb-4 font-mono tracking-wide">{t.head}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {t.items.map(item => (
                    <span key={item} className="text-[11px] font-mono text-gray-400 border border-white/10 px-2.5 py-1 rounded-full">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL — white island ── */}
      <section className="bg-white py-20">
        <div className="max-w-[820px] mx-auto px-8 reveal text-center">
          <div className="text-sky-200 font-black leading-none mb-4 select-none" style={{ fontSize: '80px', fontFamily: 'Georgia, serif' }}>"</div>
          <p className="font-semibold text-gray-900 leading-relaxed mb-8" style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', fontFamily: 'Manrope, Inter, system-ui' }}>
            VORTEXX's expertise in systems development and infrastructure management has been
            invaluable. They helped us migrate to a more robust system that supports our growth,
            and their ongoing support is top-notch.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm text-white" style={{ background: 'linear-gradient(135deg,#0ea5e9,#0369a1)', fontFamily: 'Manrope, Inter, system-ui' }}>JK</div>
            <div className="text-left">
              <strong className="block text-gray-900 text-sm font-bold" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>Jennifer Kasuku</strong>
              <span className="text-gray-400 text-xs font-mono">Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-[1152px] mx-auto reveal">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center py-14 px-10 lg:px-16 rounded-2xl border border-gray-200 bg-white">
            <div>
              <p className="text-[11px] font-mono text-sky-500 tracking-[0.2em] uppercase mb-5">Ready to start</p>
              <h2 className="font-black text-gray-900 leading-[1.1] mb-4" style={{ fontSize: 'clamp(26px, 3vw, 42px)', letterSpacing: '-0.025em' }}>
                Ready to transform<br /><span className="text-sky-500">your business?</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                Partner with VORTEXX to unlock your full digital potential. Our expert team is
                ready to help you navigate the technology landscape.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 min-w-[200px]">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-sky-600 transition-colors">
                Schedule a Consultation <ArrowRight size={15} />
              </Link>
              <a href="#web-design" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:border-sky-300 hover:text-sky-600 transition-colors">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
