import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center pt-24 md:pt-32 pb-24 px-6 lg:px-16 bg-brand-brown">
      {/* Background Image with Layered Depth */}
      <div className="absolute inset-0 z-0">
        <img
          // src="https://framerusercontent.com/images/5QnfevBJUXR78G2MuNi3Lz3QVv4.png?width=1456&height=816"  budha
          // src="./pin.jpg"  pintrest
          // src="https://framerusercontent.com/images/saxCf2i4lxd1XN4NFQTzPi5sA.jpg?scale-down-to=2048&width=3000&height=2000" light sofa
          src="https://framerusercontent.com/images/mHXkmW0Jfupllqyy8XPFTDe0k.jpg?scale-down-to=2048&width=5472&height=3648" dark sofa
          alt="Luxury furniture showroom showing artisanal wooden pieces"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        {/* Brand Brown Overlay - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/95 via-brand-brown/80 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-10 md:space-y-14">
          {/* Social Proof - Optically Aligned */}
          <div className="flex items-center space-x-5 animate-fade-in-up">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
              ].map((src, i) => (
                <div key={i} className="w-11 h-11 rounded-full border-2 border-brand-light/20 overflow-hidden shadow-2xl transition-transform hover:scale-110 hover:z-30 cursor-pointer">
                  <img src={src} alt="Satisfied client avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="h-10 w-[1px] bg-white/20 hidden sm:block"></div>
            <div>
              <p className="text-yellow-400 text-3xl font-black leading-none tracking-tight tabular-nums drop-shadow-lg">9000+</p>
              <p className="text-brand-light/70 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Global Satisfied Customers</p>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-white font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.85] tracking-[-0.04em] uppercase animate-fade-in-up delay-100 text-wrap-balance">
              Refined <br className="hidden md:block" />
              <span className="text-white/40">Living</span> Spaces
            </h1>
            
            <p className="text-brand-light/80 text-base md:text-xl max-w-xl font-medium leading-relaxed animate-fade-in-up delay-200 text-wrap-pretty">
              Experience the pinnacle of furniture craftsmanship. We blend heritage techniques with modern aesthetics to create homes that tell a story.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-in-up delay-300">
            <Link 
              to="/catalog"
              className="group relative bg-white text-brand-brown px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-yellow-400 hover:text-brand-brown active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center"
            >
              <span className="relative z-10">Shop Collection</span>
            </Link>
            <Link 
              to="/about"
              className="group flex items-center space-x-3 text-white transition-all hover:text-yellow-400 active:scale-95"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em]">Our Legacy</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                 </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Branding Element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-brown/20 rounded-full blur-[120px] pointer-events-none"></div>
      
   
    </section>
  );
};

export default Hero;
