import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 px-8 pt-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 max-w-[1280px] mx-auto shadow-2xl">
        <div className="flex justify-between items-center w-full px-8 h-14">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={closeMenu}>
          <div className="relative w-8 h-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 drop-shadow-lg">
            <img 
              alt="VORTEXX Logo" 
              className="w-full h-full object-contain filter brightness-110 contrast-110" 
              src="/src/img/Vortexx.png"
            />
          </div>
          <span className="text-lg font-black tracking-tight bg-gradient-to-r from-[#00668a] via-[#3abef9] to-[#7cd0ff] bg-clip-text text-transparent animate-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] filter brightness-125 contrast-125">
            VORTEXX
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `text-sm tracking-wide font-medium transition-colors duration-300 py-2 ${
                      isActive 
                        ? 'text-[#00668a] font-semibold' 
                        : 'text-black hover:text-[#00668a]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="bg-[#00668a] text-white px-6 py-2.5 rounded-2xl text-sm font-semibold tracking-wide hover:bg-[#004c69] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
          >
            Start free trial
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 p-6 shadow-2xl">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `block text-base font-medium tracking-wide ${
                        isActive 
                          ? 'text-[#00668a] font-semibold' 
                          : 'text-black hover:text-[#00668a]'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link 
                  to="/contact" 
                  className="block mt-4 w-full text-center bg-[#00668a] text-white px-6 py-2.5 rounded-2xl text-sm font-semibold tracking-wide hover:bg-[#004c69] transition-all"
                  onClick={closeMenu}
                >
                  Start free trial
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