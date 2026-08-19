import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HERO_BG = 'https://lh3.googleusercontent.com/aida/AP1WRLviqEpCtnjqLz1FTyUVmiBdBWlBUa08yITWXLCDxyDQ9zmgyWu3Pn7Yh5xdzxGOa3GukPAOMm30RfnkhmR86TUhxTGPXXAFMfcV-0Dj5CrqsZNeaty2cGyeVAo6OcoH1I64faw28TGmt7I-ib7T66gkKFo7rQNKAQ6tnAJUO7z9a7x9XmAdngoPoeRC_iXjr5hqo9ByCjOLqJbQB5laxTDkScbV_oNmWqSGLG4L4Nd9PljKzGeKVGk9voFO';
const CS1_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMUxZDom0ZVEO4920pABiHo8Q65phdZFPrAi78z-FPTgYtznw7B-pcD6NUQAN7ofHR3m1UQwi6yV3xu0y9xzxwzzlMVkh9vin_wOq1zfhoVD4nzF9Mvg1_DnH8oZrlBYkVO8wWmYDCatR2mZvvrD19kaSfEuig94KIRw_2c0b7tD3Pszjxgc2rLsCVL6Vc5Gj3CznySIvbDTOM2T-L5m60xpisjES5DOuo3SqlzQA7mDEzSAWfC8-g3g';
const CS2_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyzpzRvYS0NIaK_zhRv3PHeLaBmf9gQEQlsraXXU8cAPd0ZepncQbhMBPV4PHMLV5eDRtTQgiGhW2fM1X5jlcBZa79u_F3T0gJDLMWrcPItUlGIsh8OuZdIA349W1JvJR8JAkCcl-7bPN-qMgcaCzj-Mdqc8f0lS_qtaMy2qYJetIZl1K8DIeKGzAetE9G0-TSXH5ezH8B4Pt31YDC9sajZm0C2lKpwAQdVHRbB86qG_sXnEUA1-6AkA';

const bentoCards = [
  {
    id: 'web-design', wide: true, icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="12" cy="12" r="9" stroke="#38bdf8" strokeWidth="1.8"/>
        <path d="M3 12h18M12 3c-3 3-4 6-4 9s1 6 4 9M12 3c3 3 4 6 4 9s-1 6-4 9" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Design & Development',
    desc: 'Websites that look great and actually bring in business — built mobile-first, built to convert. From landing pages to full web applications.',
  },
  {
    id: 'systems', wide: false, icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <rect x="4" y="4" width="16" height="5" rx="1.2" stroke="#38bdf8" strokeWidth="1.8"/>
        <rect x="4" y="14" width="16" height="6" rx="1.2" stroke="#38bdf8" strokeWidth="1.8"/>
        <circle cx="7.2" cy="6.5" r="0.9" fill="#38bdf8"/>
        <circle cx="7.2" cy="17" r="0.9" fill="#38bdf8"/>
      </svg>
    ),
    title: 'Systems Development',
    desc: 'Custom software that replaces spreadsheets and manual work. APIs, enterprise solutions, legacy modernization.',
  },
  {
    id: 'graphics', wide: false, icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M17.5 3.5L20.5 6.5L8 19L4 20L5 16L17.5 3.5Z" stroke="#38bdf8" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M15 6l3 3" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Graphics & UI Design',
    desc: 'Brand identity, marketing materials, and UI/UX that captivates your audience.',
  },
  {
    id: 'marketing', wide: false, icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M3 9l9-5 9 5v11H3V9z" stroke="#38bdf8" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 20V12h6v8" stroke="#38bdf8" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'SEO, social media, PPC — data-driven strategies that bring the right people to you.',
  },
  {
    id: 'infrastructure', wide: false, icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8h16M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="8" cy="13" r="1" fill="#38bdf8"/>
      </svg>
    ),
    title: 'Infrastructure Management',
    desc: 'Cloud, network, cybersecurity — your IT in steady hands so you never wake up to downtime.',
  },
  {
    id: 'ai', wide: false, icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="12" cy="12" r="3" stroke="#38bdf8" strokeWidth="1.8"/>
        <path d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.8 7.8M16.2 16.2L18.4 18.4M5.6 18.4L7.8 16.2M16.2 7.8L18.4 5.6" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Agents',
    desc: 'Intelligent automation — chatbots, workflow AI, and process automation built for your team.',
  },
];

const locations = [
  { city: 'Kampala', role: 'Headquarters' },
  { city: 'Wakiso', role: 'Operations Hub' },
  { city: 'Entebbe', role: 'R&D Center' },
  { city: 'Jinja', role: 'East Uganda Branch' },
];

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'VORTEXX — Uganda\'s Digital Builders';
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* ══════════════ HERO ══════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 96,
        paddingBottom: 128,
        overflow: 'hidden',
        background: 'var(--bg)',
      }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent, #05080F)',
            zIndex: 1,
          }} />
          <img
            src={HERO_BG}
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
          />
        </div>

        <div style={{
          position: 'relative', zIndex: 10,
          maxWidth: 1280, margin: '0 auto',
          padding: '0 40px', width: '100%',
        }}>
          <div style={{ maxWidth: 800 }}>
            {/* Badge */}
            <div className="glass-panel" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              marginBottom: 24,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--teal)',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              <span style={{
                fontFamily: 'var(--mono)', fontSize: 11.5,
                color: 'var(--teal)',
                textTransform: 'uppercase', letterSpacing: '0.1em',
              }}>Uganda's Digital Builders</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--display)', fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: '1.1', letterSpacing: '-0.02em',
              color: 'var(--text)', marginBottom: 24,
            }}>
              We Build Websites<br />
              <span style={{ color: 'var(--primary-ctr)' }}>That Actually</span><br />
              Work for You.
            </h1>

            <p style={{
              fontFamily: 'var(--body)', fontSize: 18,
              color: 'var(--text-muted)', maxWidth: 640,
              marginBottom: 40, lineHeight: 1.7, fontWeight: 400,
            }}>
              From startups to institutions — VORTEXX delivers web design, custom systems,
              and digital experiences built for real results, on time, every time.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Link to="/contact" className="btn btn-primary">
                Schedule a Consultation
                <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CORE COMPETENCIES (BENTO GRID) ══════════════ */}
      <section style={{ padding: '96px 0', position: 'relative', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: 64 }} className="reveal">
            <h2 style={{
              fontFamily: 'var(--display)', fontWeight: 700,
              fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.01em',
              color: 'var(--text)', marginBottom: 16,
            }}>
              Core <span style={{ color: 'var(--primary)' }}>Competencies</span>
            </h2>
            <p style={{ fontFamily: 'var(--body)', fontSize: 16, color: 'var(--text-muted)', maxWidth: 560, lineHeight: 1.7 }}>
              Six disciplines, one standard of work — delivered in-house with zero handoffs.
            </p>
          </div>

          {/* Bento grid: first row has wide + normal, second row has 3 normal cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }} className="reveal">
            {/* Row 1: wide card (col-span-2) + 1 normal */}
            {bentoCards.slice(0, 3).map((card, i) => (
              <div
                key={card.id}
                className="glass-card"
                style={{
                  borderRadius: 12,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gridColumn: i === 0 ? 'span 2' : 'span 1',
                  minHeight: 280,
                  transition: 'border-color 0.25s',
                  cursor: 'pointer',
                  ['--reveal-delay' as string]: `${i * 80}ms`,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.5)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--stroke)'}
              >
                <div>
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: 'rgba(56,189,248,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24,
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--display)', fontWeight: 600,
                    fontSize: 20, color: 'var(--text)', marginBottom: 12,
                  }}>{card.title}</h3>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 400 }}>
                    {card.desc}
                  </p>
                </div>
                <div style={{ marginTop: 24 }}>
                  <Link
                    to={`/services#${card.id}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      color: 'var(--primary)', fontSize: 13, fontWeight: 600,
                      fontFamily: 'var(--mono)',
                    }}
                  >
                    Learn more <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}

            {/* Row 2: 3 normal cards, second is wide span */}
            {bentoCards.slice(3).map((card, i) => (
              <div
                key={card.id}
                className="glass-card"
                style={{
                  borderRadius: 12,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gridColumn: i === 1 ? 'span 2' : 'span 1',
                  minHeight: 280,
                  transition: 'border-color 0.25s',
                  cursor: 'pointer',
                  ['--reveal-delay' as string]: `${(i + 3) * 80}ms`,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.5)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--stroke)'}
              >
                <div>
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: 'rgba(56,189,248,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24,
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--display)', fontWeight: 600,
                    fontSize: 20, color: 'var(--text)', marginBottom: 12,
                  }}>{card.title}</h3>
                  <p style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 400 }}>
                    {card.desc}
                  </p>
                </div>
                <div style={{ marginTop: 24 }}>
                  <Link
                    to={`/services#${card.id}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      color: 'var(--primary)', fontSize: 13, fontWeight: 600,
                      fontFamily: 'var(--mono)',
                    }}
                  >
                    Learn more <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PROVEN IMPACT ══════════════ */}
      <section style={{
        padding: '96px 0',
        borderTop: '1px solid var(--stroke)',
        background: 'var(--bg-2)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64 }} className="reveal">

            {/* Stats column */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{
                fontFamily: 'var(--display)', fontWeight: 700,
                fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.01em',
                color: 'var(--text)', marginBottom: 40,
              }}>
                Proven <span style={{ color: 'var(--primary)' }}>Impact</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {[
                  { value: '50+', label: 'Happy Clients' },
                  { value: '98%', label: 'Satisfaction Rate' },
                  { value: '100+', label: 'Projects Delivered' },
                ].map(stat => (
                  <div key={stat.label} style={{
                    borderLeft: '2px solid var(--primary-ctr)',
                    paddingLeft: 24,
                    paddingTop: 4, paddingBottom: 4,
                  }}>
                    <div style={{
                      fontFamily: 'var(--display)', fontWeight: 700,
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 4,
                    }}>{stat.value}</div>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: 12,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case studies column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                {
                  img: CS1_IMG,
                  sector: 'Construction Sector',
                  title: 'Nestcraft Construction Website',
                  desc: 'Delivered a full construction company website in under 3 weeks, increasing online inquiries by 60%.',
                },
                {
                  img: CS2_IMG,
                  sector: 'NGO & Civil Society',
                  title: 'URUDO Uganda NGO Platform',
                  desc: 'Built a comprehensive NGO management platform that streamlined operations across 5 districts.',
                },
              ].map(cs => (
                <div
                  key={cs.title}
                  className="glass-panel"
                  style={{
                    padding: 24, borderRadius: 12,
                    display: 'flex', flexDirection: 'row', gap: 24, alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(28,32,39,0.8)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(15,23,42,0.60)'}
                >
                  <div style={{
                    width: 192, height: 128, borderRadius: 8,
                    border: '1px solid var(--stroke)',
                    overflow: 'hidden', flexShrink: 0,
                    backgroundImage: `url('${cs.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: 11.5,
                      color: 'var(--primary)', marginBottom: 8,
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>{cs.sector}</div>
                    <h4 style={{
                      fontFamily: 'var(--display)', fontWeight: 600,
                      fontSize: 18, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3,
                    }}>{cs.title}</h4>
                    <p style={{
                      fontFamily: 'var(--body)', fontSize: 13.5,
                      color: 'var(--text-muted)', lineHeight: 1.6,
                    }}>{cs.desc}</p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <ArrowRight size={18} style={{ color: 'var(--stroke)', transition: 'color 0.2s' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ GLOBAL NETWORK ══════════════ */}
      <section style={{ padding: '128px 0', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
        {/* Huge globe background icon */}
        <div style={{
          position: 'absolute', inset: 0,
          opacity: 0.06, pointerEvents: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 700, height: 700 }}>
            <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="0.3"/>
            <path d="M12 2c-3 3-4 6-4 10s1 7 4 10M12 2c3 3 4 6 4 10s-1 7-4 10M2 12h20M3 7h18M3 17h18" stroke="#38bdf8" strokeWidth="0.3" strokeLinecap="round"/>
          </svg>
        </div>

        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 40px',
          position: 'relative', zIndex: 10, textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'var(--display)', fontWeight: 700,
            fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.01em',
            color: 'var(--text)', marginBottom: 24,
          }}>
            Our <span style={{ color: 'var(--primary)' }}>Network</span>
          </h2>
          <p style={{
            fontFamily: 'var(--body)', fontSize: 16,
            color: 'var(--text-muted)', maxWidth: 640,
            margin: '0 auto', marginBottom: 64, lineHeight: 1.7,
          }}>
            Operating across Uganda to ensure round-the-clock support and localized expertise for every client.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 32,
            maxWidth: 900, margin: '0 auto',
          }} className="reveal">
            {locations.map(loc => (
              <div
                key={loc.city}
                className="glass-card"
                style={{
                  borderRadius: 12,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '1px solid var(--stroke)',
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" width="32" height="32" style={{ marginBottom: 16 }}>
                  <path d="M3 21h18M6 3h12l2 18H4L6 3zM9 7h6M8 12h8M7 17h10" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h5 style={{
                  fontFamily: 'var(--display)', fontWeight: 700,
                  fontSize: 18, color: 'var(--text)', marginBottom: 4,
                }}>{loc.city}</h5>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 11.5,
                  color: 'var(--text-muted)',
                }}>{loc.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section style={{
        padding: '96px 0',
        borderTop: '1px solid var(--stroke)',
        position: 'relative', overflow: 'hidden',
        background: 'var(--bg)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(56,189,248,0.04)',
          pointerEvents: 'none',
        }} />
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 40px',
          position: 'relative', zIndex: 10, textAlign: 'center',
        }} className="reveal">
          <h2 style={{
            fontFamily: 'var(--display)', fontWeight: 700,
            fontSize: 'clamp(28px,4vw,52px)',
            letterSpacing: '-0.02em',
            color: 'var(--text)', marginBottom: 24,
          }}>
            Ready to Accelerate?
          </h2>
          <p style={{
            fontFamily: 'var(--body)', fontSize: 16,
            color: 'var(--text-muted)', maxWidth: 560,
            margin: '0 auto', marginBottom: 40, lineHeight: 1.7,
          }}>
            Partner with VORTEXX to transform your digital presence into a competitive advantage.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{
            padding: '16px 40px', fontSize: 16,
            boxShadow: '0 0 40px rgba(56,189,248,0.1)',
          }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
