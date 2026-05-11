import React from 'react';
import * as LucideIcons from 'lucide-react';
const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const Twitter = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Youtube = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const { ArrowUpRight } = LucideIcons;



const Footer = () => {
  return (
    <footer className="bg-brand-brown text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 md:w-11 md:h-11 relative overflow-hidden transition-all duration-500 group-hover:scale-105">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect width="100" height="100" rx="22" className="fill-brand-gold" />
                  <path 
                    d="M28 72V28H72V72M28 50H72" 
                    className="stroke-brand-brown stroke-[14] fill-none" 
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-white">HANDLY</span>
            </div>
            <p className="text-brand-light/60 leading-relaxed text-sm max-w-sm">
              The artisanal furniture agency's creative solutions enhance both aesthetics and functionality in every project undertaken. Our heritage techniques meet modern luxury.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, name: 'Instagram', id: 'instagram' },
                { Icon: Facebook, name: 'Facebook', id: 'facebook' }
              ].map(({ Icon, name, id }, i) => (
                <a 
                  key={i} 
                  href={`#${id}`} 
                  onClick={(e) => e.preventDefault()}
                  aria-label={name} 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:text-right flex flex-col lg:items-end">
            <h4 className="text-lg font-bold tracking-tight">Contact Us</h4>
            <ul className="space-y-3 text-sm text-brand-light/60">
              <li className="hover:text-brand-gold transition-colors cursor-pointer font-medium">Customer Care: +91 7034 026 662</li>
              <li className="hover:text-brand-gold transition-colors cursor-pointer font-medium">www.handly.com <span className="opacity-50 mx-1">|</span> care@handly.com</li>
              <li className="flex items-center lg:justify-end space-x-6 pt-3">
                <a href="#instagram" onClick={(e) => e.preventDefault()} className="flex items-center space-x-2 hover:text-brand-gold transition-colors font-medium">
                  <Instagram size={18} /> <span>handly</span>
                </a>
                <a href="#facebook" onClick={(e) => e.preventDefault()} className="flex items-center space-x-2 hover:text-brand-gold transition-colors font-medium">
                  <Facebook size={18} /> <span>handly</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-light/40 font-medium">
            ©2024 <span className="text-brand-gold">Handly Furniture</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-xs text-brand-light/40 font-medium">
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-brand-gold transition-colors">Terms and Conditions</a>
            <span className="opacity-20">|</span>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
