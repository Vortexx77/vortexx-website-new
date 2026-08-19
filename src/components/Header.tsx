import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Globe, Cpu, Palette, Megaphone, Server, Bot } from 'lucide-react';
import logo from '../img/Vortexx.png';

const serviceItems = [
  { id: 'web-design',          icon: Globe,     label: 'Web Design & Development',  desc: 'Websites built to convert'         },
  { id: 'systems-development', icon: Cpu,       label: 'Systems Development',       desc: 'Custom software & enterprise tools' },
  { id: 'graphics-design',     icon: Palette,   label: 'Graphics & UI Design',      desc: 'Brand identity & interfaces'       },
  { id: 'digital-marketing',   icon: Megaphone, label: 'Digital Marketing',         desc: 'SEO, social media & PPC'           },
  { id: 'infrastructure',      icon: Server,    label: 'Infrastructure Management', desc: 'Cloud, DevOps & security'          },
  { id: 'ai-agents',           icon: Bot,       label: 'AI Agents & Automation',    desc: 'Chatbots & workflow automation'    },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen]         = useState(false);
  const [servicesOpen, setServicesOpen]     = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled]            = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location    = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={`site-header${scrolled ? ' scrolled' : ''}`}
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <div className="site-nav">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="mark">
            <img src={logo} alt="VORTEXX Logo" />
          </span>
          <span className="logo-text">
            VORTE<span className="x">XX</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>

          {/* Services dropdown */}
          <li ref={dropdownRef} style={{ listStyle: 'none', position: 'relative' }}>
            <button
              onClick={() => setServicesOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                fontSize: 14.5, background: 'none', border: 'none', cursor: 'pointer',
                color: isServicesActive || servicesOpen ? 'var(--primary)' : 'var(--text-muted)',
                fontFamily: 'inherit', padding: 0, transition: 'color 0.2s'
              }}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={13} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {servicesOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 14px)', left: '50%',
                transform: 'translateX(-50%)',
                width: 520,
                background: 'rgba(10,14,22,0.97)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--stroke)',
                borderRadius: 16,
                boxShadow: '0 24px 64px -16px rgba(0,0,0,0.7)',
                overflow: 'hidden', zIndex: 200
              }}>
                <div style={{
                  padding: '12px 20px', borderBottom: '1px solid var(--stroke)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--primary)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>What we offer</span>
                  <Link to="/services" style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    All services <ArrowRight size={10} />
                  </Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--stroke)', padding: 1 }}>
                  {serviceItems.map(svc => {
                    const Icon = svc.icon;
                    return (
                      <Link
                        key={svc.id}
                        to={`/services#${svc.id}`}
                        style={{
                          display: 'flex', gap: 12, alignItems: 'flex-start',
                          padding: '14px 16px',
                          background: 'rgba(10,14,22,0.97)',
                          transition: 'background 0.15s'
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(30,41,59,0.9)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(10,14,22,0.97)')}
                      >
                        <div style={{
                          width: 30, height: 30, borderRadius: 8,
                          background: 'rgba(56,189,248,0.10)',
                          border: '1px solid rgba(56,189,248,0.20)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, marginTop: 2
                        }}>
                          <Icon size={13} style={{ color: 'var(--primary-ctr)' }} />
                        </div>
                        <div>
                          <div style={{ color: 'var(--text)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--display)', lineHeight: 1.3 }}>{svc.label}</div>
                          <div style={{ color: 'var(--text-muted)', fontSize: 11, fontFamily: 'var(--mono)', marginTop: 2 }}>{svc.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div style={{ padding: '12px 20px', borderTop: '1px solid var(--stroke)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)' }}>Not sure what you need?</span>
                  <Link to="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 11.5, fontWeight: 700, fontFamily: 'var(--display)',
                    color: 'var(--on-primary-ctr)',
                    background: 'var(--primary-ctr)',
                    padding: '6px 14px', borderRadius: 999
                  }}>
                    Talk to us <ArrowRight size={10} />
                  </Link>
                </div>
              </div>
            )}
          </li>

          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="nav-cta" style={{ display: 'none' }}
          aria-hidden="true"
        >
          Start A Project
        </Link>
        <Link
          to="/contact"
          className="nav-cta"
          style={{ display: 'block' }}
        >
          Start A Project
        </Link>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(o => !o)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${isMenuOpen ? ' open' : ''}`}>
        <NavLink to="/" end onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>

        <div>
          <button
            onClick={() => setMobileServicesOpen(o => !o)}
            style={{
              width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              fontSize: 15, color: isServicesActive || mobileServicesOpen ? 'var(--text)' : 'var(--text-muted)',
              fontFamily: 'var(--body)'
            }}
          >
            Services
            <ChevronDown size={15} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--text-muted)' }} />
          </button>

          {mobileServicesOpen && (
            <div style={{ marginTop: 12, paddingLeft: 16, borderLeft: '1px solid var(--stroke)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {serviceItems.map(svc => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.id}
                    to={`/services#${svc.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: 'var(--text-muted)' }}
                  >
                    <Icon size={13} style={{ color: 'var(--primary-ctr)', flexShrink: 0 }} />
                    {svc.label}
                  </Link>
                );
              })}
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 700, color: 'var(--primary)' }}
              >
                All Services <ArrowRight size={12} />
              </Link>
            </div>
          )}
        </div>

        <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>

        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="nav-cta"
          style={{ textAlign: 'center' }}
        >
          Start A Project
        </Link>
      </div>
    </header>
  );
};

export default Header;
