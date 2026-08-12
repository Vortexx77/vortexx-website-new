import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#131b2e] w-full py-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 max-w-[1280px] mx-auto px-8">
        <div className="col-span-1 md:col-span-5 flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-500 hover:scale-110 drop-shadow-lg">
              <img 
                alt="VORTEXX Logo" 
                className="w-full h-full object-contain filter brightness-110 contrast-110" 
                src="/src/img/Vortexx.png"
              />
            </div>
            <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-[#00668a] via-[#3abef9] to-[#7cd0ff] bg-clip-text text-transparent animate-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] filter brightness-125 contrast-125">
              VORTEXX
            </span>
          </div>
          <p className="text-gray-300 text-base font-light leading-relaxed pr-8 max-w-md">
            Transforming businesses through innovative technology solutions and exceptional digital experiences.
          </p>
          <div className="flex gap-3 mt-2">
            <a 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent hover:-translate-y-1" 
              href="#"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
            <a 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent hover:-translate-y-1" 
              href="#"
              aria-label="Share"
            >
              <Share2 size={18} />
            </a>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Services</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 block w-max font-light" 
                to="/services"
              >
                Web Design
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 block w-max font-light" 
                to="/services"
              >
                Systems Development
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 block w-max font-light" 
                to="/services"
              >
                Graphics Design
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 block w-max font-light" 
                to="/services"
              >
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Company</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 block w-max font-light" 
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 block w-max font-light" 
                to="/about"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 block w-max font-light" 
                to="/careers"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link 
                className="text-gray-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 block w-max font-light" 
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-3">
          <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Contact Us</h4>
          <ul className="flex flex-col gap-5 text-sm text-gray-300 font-light">
            <li className="flex items-start gap-3 group cursor-pointer hover:text-blue-400 transition-colors">
              <MapPin className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
              <span>Bukasa-Bugiri, Kawuku</span>
            </li>
            <li className="flex items-start gap-3 group cursor-pointer hover:text-blue-400 transition-colors">
              <Phone className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
              <span>(+256) 745-231430<br/>(+256) 790-956548</span>
            </li>
            <li className="flex items-start gap-3 group cursor-pointer hover:text-blue-400 transition-colors">
              <Mail className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
              <span>thevortexxinfo@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-8 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
        <p className="text-gray-400">© {currentYear} VORTEXX Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <Link 
            className="text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider" 
            to="/privacy"
          >
            Privacy Policy
          </Link>
          <Link 
            className="text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider" 
            to="/terms"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;