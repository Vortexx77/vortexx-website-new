import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const band: React.CSSProperties = {
  background: 'var(--bg-2)',
  borderTop: '1px solid var(--line)',
  borderBottom: '1px solid var(--line)',
};

const teamMembers = [
  {
    initials: 'KA',
    tag: 'Leadership',
    name: 'Kamugisha Ali',
    role: 'CEO & Founder',
    bio: "Kamugisha is a visionary leader with a passion for technology and innovation. He is the founder of VORTEXX and has been instrumental in the company's growth and success.",
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
  ['Innovation', 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'],
  ['Excellence', 'We are committed to the highest standards of quality in everything we do.'],
  ['Client Focus', 'We build partnerships with our clients, focusing on their unique needs and goals.'],
  ['Integrity', 'We operate with transparency, honesty, and ethical business practices.'],
  ['Collaboration', 'We believe in the power of teamwork, both internally and with our clients.'],
  ['Adaptability', 'We embrace change and continuously evolve our approaches to stay ahead.'],
];

const goals = [
  ['01 · Global Expansion', 'Regional Presence', 'Establish VORTEXX presence in key markets across Uganda by 2026.'],
  ['02 · Innovation Leadership', 'R&D Investment', 'Maintain a position at the forefront of technological innovation through continuous research and development.'],
  ['03 · Sustainable Growth', '30% YoY Growth', 'Achieve 30% year-over-year growth while maintaining high client satisfaction rates.'],
  ['04 · Talent Development', 'World-Class Team', 'Build and nurture a world-class team through comprehensive training and development programs.'],
];

const journey = [
  ['Nov 2024', 'Foundation', 'VORTEXX was founded with a focus on web development services. The team consisted of ten passionate tech students led by Kamugisha Ali.'],
  ['Jan 2025', 'Expansion', 'Expanded services to include systems development and design, allowing VORTEXX to offer comprehensive solutions to clients.'],
  ['Mar 2025', 'Growth', 'Diversified into digital marketing and infrastructure management, taking on new clients across various sectors.'],
  ['Jun 2025', 'Innovation', 'Launched a dedicated AI and machine learning division, focused on developing AI agents and automation solutions for clients.'],
];

const About: React.FC = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    document.title = 'About Us | VORTEXX';
  }, []);

  const goTo = (i: number) => setSlide((i + teamMembers.length) % teamMembers.length);

  return (
    <div className="vx-page">
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="wrap">
          <div className="about-hero-copy">
            <p className="eyebrow center">About Vortexx</p>
            <h1>
              Built in Kampala.
              <br />
              Built for <span className="accent">growth.</span>
            </h1>
            <p>
              We're a team of passionate technologists dedicated to transforming businesses through
              innovative digital solutions: web platforms, custom systems, design, and marketing
              that actually get used.
            </p>
            <div className="hero-stats-row reveal-stagger">
              <div className="stat">
                <strong>2024</strong>
                <span>Founded</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Happy Clients</span>
              </div>
              <div className="stat">
                <strong>100+</strong>
                <span>Projects Shipped</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section>
        <div className="wrap">
          <div className="origin-grid">
            <div className="origin-copy reveal">
              <p className="eyebrow">How we started</p>
              <h2>From Startup to Industry Leader</h2>
              <p>
                Founded in 2024, VORTEXX began as a small web development agency with a team of just
                ten passionate tech students. Our founder, Kamugisha Ali, envisioned a company that
                would not just build websites, but create transformative digital experiences that
                drive business growth and commitment.
              </p>
              <p>
                As we gained the trust of our early clients, we expanded our services to include
                systems development, graphic design, digital marketing, and infrastructure
                management. Today, VORTEXX has grown into a comprehensive technology solutions
                provider.
              </p>
              <div className="origin-callout">
                <p>
                  "Our journey has been defined by a relentless commitment to innovation, excellence,
                  and our clients' success, while staying true to our core mission: empowering
                  businesses to thrive in the digital age."
                </p>
              </div>
              <Link to="/#work" className="origin-work-link">
                See what we've built
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="origin-card reveal">
              <div className="card-top">
                <span></span>
                <span></span>
                <span></span>
                <span className="url">about.vortexx.co.ug</span>
              </div>
              <div className="origin-facts">
                <div className="origin-fact">
                  <span className="lbl">Founded</span>
                  <span className="val">Nov 2024, Kampala</span>
                </div>
                <div className="origin-fact">
                  <span className="lbl">Founder</span>
                  <span className="val">Kamugisha Ali</span>
                </div>
                <div className="origin-fact">
                  <span className="lbl">Starting team</span>
                  <span className="val">10 tech students</span>
                </div>
                <div className="origin-fact">
                  <span className="lbl">Core services</span>
                  <span className="val">6 disciplines</span>
                </div>
                <div className="origin-fact">
                  <span className="lbl">Way we work</span>
                  <span className="val">Discover → Design → Develop → Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / GOALS */}
      <section style={band}>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Why we're here</p>
            <h2>Vision, Mission &amp; Goals</h2>
          </div>
          <div className="mv-grid mv-grid-3 reveal-stagger">
            <div className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 12S5.5 5 12 5s10 7 10 7-3.5 7-10 7-10-7-10-7z"
                    stroke="#32B3F5"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3" stroke="#32B3F5" strokeWidth="1.6" />
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading creative technology company that empowers businesses and
                communities through smart web solutions, innovative mobile applications, impactful
                graphics designs, and efficient information management systems.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L14.5 8.5L21 9L16 13.5L17.5 20L12 16.5L6.5 20L8 13.5L3 9L9.5 8.5L12 2Z"
                    stroke="#32B3F5"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To innovatively deliver AI-powered, user-focused systems that drive success and
                inclusivity.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#32B3F5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="9" stroke="#32B3F5" strokeWidth="1.6" />
                </svg>
              </div>
              <h3>Our Goals</h3>
              <p>
                To provide top-notch quality services, deliver high-quality projects, and achieve
                our clients' satisfaction on every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC GOALS */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">We build for the future</p>
            <h2>Strategic Goals</h2>
            <p>
              Our strategic objectives guide our growth and development as we work to create lasting
              impact in the technology industry.
            </p>
          </div>
          <div className="goals-grid reveal-stagger">
            {goals.map(([num, title, desc]) => (
              <div className="goal-card" key={title}>
                <div className="goal-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={band}>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">What drives us</p>
            <h2>Our Values</h2>
            <p>
              Our core values guide everything we do, from how we develop solutions to how we
              interact with our clients and each other.
            </p>
          </div>
          <div className="values-grid reveal-stagger">
            {values.map(([title, desc]) => (
              <div className="value-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Our journey</p>
            <h2>A timeline of key milestones in our growth and evolution.</h2>
          </div>
          <div className="process-list reveal-stagger">
            {journey.map(([when, title, desc]) => (
              <div className="process-item" key={title}>
                <div className="process-num">{when}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section id="team" className="team-section reveal">
        <div className="wrap">
          <div className="team-photo-card">
            <div className="img-ph" style={{ fontSize: 22 }}>
              VORTEXX TEAM
            </div>
            <span className="team-photo-tag">
              <span className="dot"></span>Kampala, Uganda
            </span>
          </div>
          <div className="team-copy">
            <p className="eyebrow">Our Team</p>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 800,
                fontSize: 'clamp(24px,2.8vw,32px)',
                letterSpacing: '-0.01em',
              }}
            >
              A diverse group of passionate tech experts
            </h2>
            <p>
              Dedicated to your success. Our team combines hands-on experience with a genuine
              passion for innovation, and we believe in building lasting partnerships that go beyond
              a single project, delivering measurable results, every time.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section style={band}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <p className="eyebrow center">Meet Our Team</p>
            <h2>The people driving our vision</h2>
            <p>
              The talented individuals driving our vision and leading our company forward with
              innovation and excellence.
            </p>
          </div>

          <div
            className="team-carousel-wrap reveal"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') goTo(slide - 1);
              if (e.key === 'ArrowRight') goTo(slide + 1);
            }}
          >
            <button
              className="carousel-arrow prev"
              aria-label="Previous team member"
              onClick={() => goTo(slide - 1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="team-carousel-viewport">
              <div
                className="team-slide-track"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {teamMembers.map((m) => (
                  <div className="team-slide" key={m.name}>
                    <div className="member-photo">
                      <div className="img-ph" style={{ fontSize: 40 }}>
                        {m.initials}
                      </div>
                    </div>
                    <div className="member-info">
                      <span className="role-tag">{m.tag}</span>
                      <h3>{m.name}</h3>
                      <span className="role">{m.role}</span>
                      <p>{m.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="carousel-arrow next"
              aria-label="Next team member"
              onClick={() => goTo(slide + 1)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="carousel-dots">
            {teamMembers.map((m, i) => (
              <button
                key={m.name}
                className={`dot${i === slide ? ' active' : ''}`}
                aria-label={`Go to team member ${i + 1}`}
                onClick={() => goTo(i)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section>
        <div className="wrap">
          <div className="sec-head center reveal">
            <p className="eyebrow center">By the numbers</p>
            <h2>Our Impact</h2>
          </div>
          <div className="stats-bar reveal-stagger">
            <div className="stat">
              <strong>50+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="stat">
              <strong>100+</strong>
              <span>Projects Completed</span>
            </div>
            <div className="stat">
              <strong>2</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat">
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2>
            Want to build
            <br />
            with us?
          </h2>
          <p>
            Tell us what you're working on. Our team will get back to you with next steps. No
            lengthy sales process, just a conversation about what you need.
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation →
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Our Services
            </Link>
          </div>
          <a
            href="https://wa.me/256745231430"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-whatsapp"
          >
            <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path
                d="M21 11.5C21 16.19 16.97 20 12 20C10.6 20 9.28 19.7 8.1 19.16L3 20L4.4 15.8C3.53 14.55 3 13.08 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z"
                stroke="#8891A4"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            or chat with us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
