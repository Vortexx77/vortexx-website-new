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
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location    = useLocation();

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // close everything on route change
  useEffect(() => {
    setServicesOpen(false);
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 px-6 lg:px-8 pt-6">
      <div className="bg-gray-900/50 backdrop-blur-xl rounded-[2rem] border border-white/20 max-w-[1152px] mx-auto shadow-2xl">
        <div className="flex justify-between items-center w-full px-8 h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-8 h-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 drop-shadow-lg">
              <img alt="VORTEXX Logo" className="w-full h-full object-contain filter brightness-110 contrast-110" src={logo} />
            </div>
            <span className="text-lg font-black tracking-tight bg-gradient-to-r from-[#00668a] via-[#3abef9] to-[#7cd0ff] bg-clip-text text-transparent animate-gradient">
              VORTEXX
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">

              {/* Home */}
              <li>
                <NavLink to="/" end className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 py-2 ${isActive ? 'text-[#3abef9] font-semibold' : 'text-gray-100 hover:text-[#3abef9]'}`
                }>Home</NavLink>
              </li>

              {/* About */}
              <li>
                <NavLink to="/about" className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 py-2 ${isActive ? 'text-[#3abef9] font-semibold' : 'text-gray-100 hover:text-[#3abef9]'}`
                }>About</NavLink>
              </li>

              {/* Services — with dropdown */}
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(o => !o)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2 ${
                    isServicesActive || servicesOpen ? 'text-[#3abef9] font-semibold' : 'text-gray-100 hover:text-[#3abef9]'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown panel */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-gray-900/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
                    {/* header row */}
                    <div className="px-5 pt-4 pb-3 border-b border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-sky-400 tracking-[0.2em] uppercase">What we offer</span>
                      <Link
                        to="/services"
                        className="text-[11px] font-mono text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1"
                      >
                        All services <ArrowRight size={11} />
                      </Link>
                    </div>

                    {/* service grid */}
                    <div className="grid grid-cols-2 gap-px bg-white/5 p-px">
                      {serviceItems.map(svc => {
                        const Icon = svc.icon;
                        return (
                          <Link
                            key={svc.id}
                            to={`/services#${svc.id}`}
                            className="group flex items-start gap-3 p-4 bg-gray-900/90 hover:bg-gray-800/90 transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-500/20 transition-colors">
                              <Icon size={14} className="text-sky-400" />
                            </div>
                            <div>
                              <div className="text-white text-[13px] font-semibold leading-snug group-hover:text-sky-300 transition-colors" style={{ fontFamily: 'Manrope, Inter, system-ui' }}>
                                {svc.label}
                              </div>
                              <div className="text-gray-500 text-[11px] mt-0.5 font-mono leading-snug">
                                {svc.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* footer CTA */}
                    <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-gray-500 text-xs font-mono">Not sure what you need?</span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-colors px-3.5 py-1.5 rounded-full"
                      >
                        Talk to us <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Portfolio */}
              <li>
                <NavLink to="/portfolio" className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 py-2 ${isActive ? 'text-[#3abef9] font-semibold' : 'text-gray-100 hover:text-[#3abef9]'}`
                }>Portfolio</NavLink>
              </li>

              {/* Contact */}
              <li>
                <NavLink to="/contact" className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 py-2 ${isActive ? 'text-[#3abef9] font-semibold' : 'text-gray-100 hover:text-[#3abef9]'}`
                }>Contact</NavLink>
              </li>

            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#00668a] text-white px-6 py-2.5 rounded-2xl text-sm font-semibold tracking-wide hover:bg-[#004c69] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              Start A Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(o => !o)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation ── */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6 shadow-2xl">
            <ul className="flex flex-col space-y-1">

              <li>
                <NavLink to="/" end onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `block px-3 py-2.5 rounded-xl text-base font-medium ${isActive ? 'text-sky-400 bg-sky-400/10' : 'text-gray-200 hover:text-white hover:bg-white/5'} transition-colors`}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `block px-3 py-2.5 rounded-xl text-base font-medium ${isActive ? 'text-sky-400 bg-sky-400/10' : 'text-gray-200 hover:text-white hover:bg-white/5'} transition-colors`}>
                  About
                </NavLink>
              </li>

              {/* Mobile Services accordion */}
              <li>
                <button
                  onClick={() => setMobileServicesOpen(o => !o)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isServicesActive || mobileServicesOpen ? 'text-sky-400 bg-sky-400/10' : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-1 ml-3 space-y-0.5 border-l border-white/10 pl-4">
                    {serviceItems.map(svc => {
                      const Icon = svc.icon;
                      return (
                        <Link
                          key={svc.id}
                          to={`/services#${svc.id}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-gray-400 hover:text-sky-400 hover:bg-sky-400/5 transition-colors"
                        >
                          <Icon size={13} className="text-sky-500 shrink-0" />
                          {svc.label}
                        </Link>
                      );
                    })}
                    <Link
                      to="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-sky-400 font-semibold hover:bg-sky-400/5 transition-colors"
                    >
                      All Services <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `block px-3 py-2.5 rounded-xl text-base font-medium ${isActive ? 'text-sky-400 bg-sky-400/10' : 'text-gray-200 hover:text-white hover:bg-white/5'} transition-colors`}>
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `block px-3 py-2.5 rounded-xl text-base font-medium ${isActive ? 'text-sky-400 bg-sky-400/10' : 'text-gray-200 hover:text-white hover:bg-white/5'} transition-colors`}>
                  Contact
                </NavLink>
              </li>

              <li className="pt-3 border-t border-white/10 mt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-[#00668a] text-white px-6 py-3 rounded-2xl text-sm font-semibold tracking-wide hover:bg-[#004c69] transition-all"
                >
                  Start A Project
                </Link>
              </li>

            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
