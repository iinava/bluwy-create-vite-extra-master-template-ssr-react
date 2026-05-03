import React from 'react';
import * as LucideIcons from 'lucide-react';
const { Facebook, Instagram, Twitter, Youtube, ArrowUpRight, Send } = LucideIcons;
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Description */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
                <span className="text-brand-brown font-black text-xl">A</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">AISWARYA</span>
            </div>
            <p className="text-brand-light/60 leading-relaxed text-sm max-w-xs">
              The artisanal furniture agency's creative solutions enhance both aesthetics and functionality in every project undertaken.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Catalog', 'Our Team', 'Projects'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-brand-light/60 hover:text-brand-gold transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Kochi Office</h4>
            <ul className="space-y-4 text-sm text-brand-light/60">
              <li className="hover:text-brand-gold transition-colors cursor-pointer">aiswarya_info@furniture.com</li>
              <li className="hover:text-brand-gold transition-colors cursor-pointer">+91 987 654 3210</li>
              <li className="leading-relaxed">
                9100 North Heritage Street<br />
                Kochi, Kerala 682001
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Subscribe Now</h4>
            <p className="text-brand-light/60 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest news, updates, and special offers!
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-brand-gold transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-brown hover:scale-110 transition-transform">
                <Send size={16} />
              </button>
            </div>
            <button className="w-full group bg-brand-gold hover:bg-white text-brand-brown py-4 rounded-full flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl active:scale-95">
              <span className="font-bold uppercase tracking-widest text-[10px]">Subscribe Now</span>
              <div className="w-7 h-7 rounded-full bg-brand-brown text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-light/40 font-medium">
            ©2024 <span className="text-brand-gold">Aiswarya Furniture</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-xs text-brand-light/40 font-medium">
            <a href="#" className="hover:text-brand-gold transition-colors">Terms and Conditions</a>
            <span className="opacity-20">|</span>
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
