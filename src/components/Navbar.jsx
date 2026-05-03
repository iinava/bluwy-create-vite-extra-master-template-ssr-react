import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50">
      {/* Main Navbar Container */}
      <div className="bg-brand-light/95 backdrop-blur-md px-6 md:px-8 py-2 md:py-3 rounded-full border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-between transition-all duration-500">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 md:w-11 md:h-11 relative overflow-hidden transition-all duration-500 group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect width="100" height="100" rx="22" className="fill-brand-brown" />
              <path 
                d="M28 72V28H72V72M28 50H72" 
                className="stroke-white stroke-[14] fill-none" 
                strokeLinecap="square"
              />
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase hidden sm:block text-brand-brown">Aiswarya</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`relative text-xs lg:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                isActive(link.path) 
                  ? 'text-brand-brown' 
                  : 'text-brand-brown/40 hover:text-brand-brown/80'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-gold rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Action */}
        <Link 
          to="/contact"
          className="hidden md:block bg-brand-brown text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95 text-center"
        >
          Get in touch
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-brown hover:bg-brand-light rounded-full transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 mt-4 bg-brand-light rounded-[32px] shadow-2xl border border-brand-light overflow-hidden transition-all duration-500 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none'}`}>
        <div className="p-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`flex items-center justify-between text-2xl font-black uppercase tracking-tight transition-all duration-300 ${
                isActive(link.path) 
                  ? 'text-brand-brown translate-x-2' 
                  : 'text-brand-brown/30 hover:text-brand-brown/60 hover:translate-x-1'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              )}
            </Link>
          ))}

          <div className="pt-6 border-t border-black/5">
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-brand-brown text-white py-5 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all text-center block"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
