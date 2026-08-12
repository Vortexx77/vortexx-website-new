import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Check: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const services = [
  {
    id: 'web-design',
    num: '01',
    badge: 'Most Requested',
    title: 'Web Design & Development',
    desc: 'We create stunning, user-focused websites that engage visitors and drive conversions.',
    bestFor: 'businesses that need a fast, credible online presence or storefront.',
    checks: ['Responsive website design', 'E-commerce solutions', 'Web applications', 'User experience optimization'],
    icon: (
      <path
        d="M9 8L4 12L9 16M15 8L20 12L15 16"
        stroke="#32B3F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 'systems-development',
    num: '02',
    title: 'Systems Development',
    desc: 'Custom software solutions designed to streamline your operations and boost productivity.',
    bestFor: 'teams that have outgrown spreadsheets or off-the-shelf tools.',
    checks: ['Custom software development', 'Enterprise solutions', 'API integration', 'Legacy system modernization'],
    icon: (
      <>
        <rect x="4" y="4" width="16" height="5" rx="1.2" stroke="#32B3F5" strokeWidth="1.8" />
        <rect x="4" y="14" width="16" height="6" rx="1.2" stroke="#32B3F5" strokeWidth="1.8" />
        <circle cx="7.2" cy="6.5" r="0.9" fill="#32B3F5" />
        <circle cx="7.2" cy="17" r="0.9" fill="#32B3F5" />
      </>
    ),
  },
  {
    id: 'graphics-design',
    num: '03',
    title: 'Graphics Design',
    desc: 'Eye-catching visuals that communicate your brand message and captivate your audience.',
    bestFor: 'brands that need a consistent, professional visual identity.',
    checks: ['Brand identity design', 'Marketing materials', 'UI/UX design', 'Motion graphics'],
    icon: (
      <path
        d="M17.5 3.5L20.5 6.5L8 19L4 20L5 16L17.5 3.5Z"
        stroke="#32B3F5"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 'digital-marketing',
    num: '04',
    title: 'Digital Marketing',
    desc: 'Data-driven marketing strategies that increase visibility, engagement, and conversion.',
    bestFor: 'businesses that need more qualified traffic, not just more traffic.',
    checks: ['SEO optimization', 'Content marketing', 'Social media management', 'PPC advertising'],
    icon: (
      <path
        d="M4 19V13M10 19V9M16 19V5M4 19H20"
        stroke="#32B3F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 'infrastructure',
    num: '05',
    title: 'Infrastructure Management',
    desc: 'Reliable IT infrastructure solutions that ensure security, scalability, and performance.',
    bestFor: "teams that need uptime and security they don't have to think about.",
    checks: ['Cloud infrastructure', 'Network management', 'Cybersecurity solutions', 'IT maintenance & support'],
    icon: (
      <path
        d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8h16M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8"
        stroke="#32B3F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: 'ai-agents',
    num: '06',
    badge: 'New',
    title: 'AI Agents',
    desc: 'Intelligent AI-powered agents to automate tasks and enhance customer experience.',
    bestFor: 'teams ready to automate repetitive support or workflow tasks.',
    checks: ['Custom AI chatbot development', 'Process automation', 'Natural language processing', 'Integration with business systems'],
    icon: (
      <>
        <circle cx="12" cy="12" r="3" stroke="#32B3F5" strokeWidth="1.8" />
        <path
          d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.8 7.8M16.2 16.2L18.4 18.4M5.6 18.4L7.8 16.2M16.2 7.8L18.4 5.6"
          stroke="#32B3F5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

const quickNav = [
  ['web-design', 'Web Design'],
  ['systems-development', 'Systems'],
  ['graphics-design', 'Graphics'],
  ['digital-marketing', 'Marketing'],
  ['infrastructure', 'Infrastructure'],
  ['ai-agents', 'AI Agents'],
];

const capabilities = [
  'Website Hosting',
  'Mobile App Development',
  'E-commerce Solutions',
  'Database Management',
  'Cybersecurity',
  'Cloud Solutions',
  'Data Analytics',
];

const process = [
  ['01', 'Discovery', 'We start by understanding your business, goals, and challenges through in-depth consultations.'],
  ['02', 'Strategy', 'Based on our findings, we develop a tailored strategy and roadmap for your solution.'],
  ['03', 'Implementation', 'Our team of experts brings the strategy to life with meticulous attention to detail.'],
  ['04', 'Optimization', 'We continuously refine and improve your solution based on performance data and feedback.'],
];

const techStack: Array<{ head: string; icon: React.ReactNode; items: string[] }> = [
  {
    head: 'Front-End',
    icon: (
      <path
        d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14"
        stroke="#32B3F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    items: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    head: 'Back-End',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="6" rx="1.2" stroke="#32B3F5" strokeWidth="1.8" />
        <rect x="4" y="14" width="16" height="6" rx="1.2" stroke="#32B3F5" strokeWidth="1.8" />
        <circle cx="7.5" cy="7" r="0.8" fill="#32B3F5" />
        <circle cx="7.5" cy="17" r="0.8" fill="#32B3F5" />
      </>
    ),
    items: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Ruby on Rails'],
  },
  {
    head: 'Mobile',
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="#32B3F5" strokeWidth="1.8" />
        <path d="M11 18h2" stroke="#32B3F5" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Progressive Web Apps'],
  },
  {
    head: 'Database',
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#32B3F5" strokeWidth="1.8" />
        <path d="M4 5v14a8 3 0 0016 0V5" stroke="#32B3F5" strokeWidth="1.8" />
        <path d="M4 12a8 3 0 0016 0" stroke="#32B3F5" strokeWidth="1.8" />
      </>
    ),
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'DynamoDB'],
  },
  {
    head: 'Cloud',
    icon: (
      <path
        d="M17 18H7a4 4 0 01-1-7.9A5 5 0 0116 8a4.5 4.5 0 011 8.9z"
        stroke="#32B3F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Digital Ocean', 'Heroku'],
  },
  {
    head: 'DevOps',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" stroke="#32B3F5" strokeWidth="1.6" />
        <path
          d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.6V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.6 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.6 1z"
        stroke="#32B3F5"
        strokeWidth="1.6"
      />
      </>
    ),
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform'],
  },
];

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Services | VORTEXX';

    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#quickNav a'));
    const targets = navLinks
      .map((a) => document.querySelector(a.getAttribute('href') || ''))
      .filter((el): el is Element => Boolean(el));
    if (!targets.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = navLinks.find((a) => a.getAttribute('href') === '#' + entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    targets.forEach((t) => spy.observe(t));
    return () => spy.disconnect();
  }, []);

  return (
    <div className="vx-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="wrap services-hero-inner">
          <span className="exp-badge services-hero-anim">
            <span className="dot"></span>Our Services
          </span>
          <h1 className="services-hero-anim" style={{ animationDelay: '.06s' }}>
            Comprehensive Tech Solutions
          </h1>
          <p className="lede services-hero-anim" style={{ animationDelay: '.12s' }}>
            We provide end-to-end technology services designed to help your business thrive in
            today's digital landscape.
          </p>
          <div className="services-hero-actions services-hero-anim" style={{ animationDelay: '.18s' }}>
            <a href="#web-design" className="btn btn-primary">
              Explore Services ↓
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Book a Consultation
            </Link>
          </div>
          <div className="svc-stats-row services-hero-anim" style={{ animationDelay: '.24s' }}>
            <div className="svc-stat">
              <strong>50+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="svc-stat">
              <strong>100+</strong>
              <span>Projects Done</span>
            </div>
            <div className="svc-stat">
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <div className="quick-nav-wrap">
        <div className="wrap" style={{ padding: '0 20px' }}>
          <div className="quick-nav" id="quickNav">
            {quickNav.map(([id, label]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* VALUE STRIP */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="value-strip reveal">
            <div className="value-strip-item">
              <div className="vs-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#32B3F5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0012 2z" />
                </svg>
              </div>
              <div>
                <h4>Innovation-Led</h4>
                <p>We explore new technologies and approaches to deliver cutting-edge solutions.</p>
              </div>
            </div>
            <div className="value-strip-item">
              <div className="vs-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#32B3F5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" fill="#32B3F5" />
                </svg>
              </div>
              <div>
                <h4>Client-Focused</h4>
                <p>We build around your unique needs and goals, not a one-size-fits-all template.</p>
              </div>
            </div>
            <div className="value-strip-item">
              <div className="vs-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#32B3F5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 7-6.2-3.6L5.8 21.2 7 14.2 2 9.3l7.1-1z" />
                </svg>
              </div>
              <div>
                <h4>Held to Excellence</h4>
                <p>The highest standard of quality and craft, in every engagement we take on.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section>
        <div className="wrap">
          <div className="sec-head center reveal">
            <p className="eyebrow center">What We Offer</p>
            <h2>Six disciplines, one standard of work</h2>
            <p>
              Each service below can stand alone or combine with the others into one integrated
              engagement. Your call.
            </p>
          </div>
          <div className="services-grid reveal-stagger">
            {services.map((s) => (
              <div className="service-card-full" id={s.id} key={s.id}>
                <div className="service-card-top">
                  <span className="service-num">{s.num}</span>
                  {s.badge && <span className="service-badge">{s.badge}</span>}
                </div>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    {s.icon}
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p className="desc">{s.desc}</p>
                <p className="service-best-for">Best for: {s.bestFor}</p>
                <ul className="service-check-list">
                  {s.checks.map((c) => (
                    <li key={c}>
                      <Check />
                      {c}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-secondary btn-sm">
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL CAPABILITIES */}
      <section className="capabilities-band">
        <div className="wrap">
          <div className="capabilities-inner reveal">
            <p className="eyebrow center">Additional Capabilities</p>
            <h2>
              Beyond our core services, we offer specialized solutions to address your specific
              technology needs.
            </h2>
            <div className="pill-row">
              {capabilities.map((c) => (
                <span className="pill-chip" key={c}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  {c}
                </span>
              ))}
            </div>
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Our Approach</p>
            <h2>How We Work</h2>
            <p>
              Our proven process ensures we deliver exceptional results that align with your business
              goals and exceed your expectations.
            </p>
          </div>
          <div className="process-list reveal-stagger">
            {process.map(([num, title, desc]) => (
              <div className="process-item" key={num}>
                <div className="process-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Technologies</p>
            <h2>Our Tech Stack</h2>
            <p>
              We leverage cutting-edge technologies to build robust, scalable, and future-proof
              solutions for our clients.
            </p>
          </div>
          <div className="tech-grid reveal-stagger">
            {techStack.map((t) => (
              <div className="tech-card" key={t.head}>
                <div className="tech-card-head">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      {t.icon}
                    </svg>
                  </div>
                  <h4>{t.head}</h4>
                </div>
                <div className="pill-row">
                  {t.items.map((it) => (
                    <span className="pill-chip" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section>
        <div className="wrap">
          <div className="testimonial-block reveal">
            <span className="quote-mark">"</span>
            <p>
              "VORTEXX's expertise in systems development and infrastructure management has been
              invaluable. They helped us migrate to a more robust system that supports our growth,
              and their ongoing support is top-notch."
            </p>
            <div className="testimonial-who">
              <div className="avatar">JK</div>
              <div>
                <strong>Jennifer Kasuku</strong>
                <span>Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2>
            Ready to Transform
            <br />
            Your Business?
          </h2>
          <p>
            Partner with VORTEXX to unlock your full digital potential. Our expert team is ready to
            help you navigate the ever-changing technology landscape.
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation →
            </Link>
            <a href="#web-design" className="btn btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
