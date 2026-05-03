import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-50">
      {/* Main Navbar Container */}
      <div className="bg-brand-light/95 backdrop-blur-md px-6 md:px-8 py-2 md:py-3 rounded-full border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center justify-between transition-all duration-500">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-9 h-9 md:w-10 md:h-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-brown transform rotate-12 transition-transform group-hover:rotate-0"></div>
            <div className="absolute inset-2 border-2 border-white/40 transform -rotate-12 transition-transform group-hover:rotate-0"></div>
          </div>
          <span className="text-lg md:text-xl font-black tracking-tighter uppercase hidden sm:block text-brand-brown">Aiswarya</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-brand-taupe transition-colors">Home</Link>
          <Link to="/about" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-brand-taupe transition-colors">About</Link>
          <Link to="/catalog" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-brand-taupe transition-colors">Catalog</Link>
          <div className="relative group cursor-pointer flex items-center space-x-1">
            <span className="text-xs lg:text-sm font-bold uppercase tracking-widest text-brand-brown">Pages</span>
            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform text-brand-brown" />
          </div>
          <a href="#blog" className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-brand-taupe transition-colors">Blog</a>
        </div>

        {/* Desktop Action */}
        <button className="hidden md:block bg-brand-brown text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-md active:scale-95">
          Get in touch
        </button>

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
          <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-black text-brand-brown uppercase tracking-tight hover:translate-x-2 transition-transform">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-2xl font-black text-brand-brown uppercase tracking-tight hover:translate-x-2 transition-transform">About Us</Link>
          <Link to="/catalog" onClick={() => setIsOpen(false)} className="text-2xl font-black text-brand-brown uppercase tracking-tight hover:translate-x-2 transition-transform">Catalog</Link>

          <div className="pt-6 border-t border-brand-light">
            <button className="w-full bg-brand-brown text-white py-5 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
