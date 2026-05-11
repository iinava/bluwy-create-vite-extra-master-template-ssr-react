import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const container = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1.2 }
    });

    tl.fromTo(".reveal-item",
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.15,
        delay: 0.2,
        force3D: true
      }
    );

    // Parallax Effect - Only on Desktop
    mm.add("(min-width: 1024px)", () => {
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Mobile specific: Ensure image is stable
    mm.add("(max-width: 1023px)", () => {
      gsap.set(bgRef.current, { yPercent: 0, force3D: true });
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[100dvh] w-full overflow-hidden flex items-center pt-32 md:pt-40 lg:pt-32 pb-24 lg:pb-16 px-6 lg:px-16 bg-brand-brown">
      {/* Background Image Carousel - CSS Animated */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="absolute inset-0">
          <img
            src="/hero/handlyflower.jpg"
            alt="Luxury furniture showroom showing artisanal wooden pieces"
            className="hero-bg-item hero-bg-1"
            loading="eager"
            decoding="async"
          />
          <img
            src="/hero/handlytwo.jpg"
            alt="Refined living space with premium furniture"
            className="hero-bg-item hero-bg-2"
            loading="eager"
            decoding="async"
          />
        </div>
        {/* Brand Brown Overlay - Static relative to hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/95 via-brand-brown/80 to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-10 md:space-y-14 lg:space-y-8">

          {/* Social Proof */}
          <div className="reveal-item flex items-center space-x-5">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
              ].map((src, i) => (
                <div key={i} className="w-11 h-11 rounded-full border-2 border-brand-light/20 overflow-hidden shadow-2xl transition-transform hover:scale-110 hover:z-30 cursor-pointer establishment-card">
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

          <div className="space-y-8 lg:space-y-6">
            <h1 className="reveal-item text-white font-black text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] leading-[0.9] tracking-[-0.02em] uppercase text-wrap-balance">
              Crafted for <span className="text-brand-gold italic font-serif serif lowercase">Elegance</span>,<br />
              <span className="text-white/60">Designed for</span><br />
              Everyday Living.
            </h1>

            <p className="reveal-item text-brand-light/80 text-base md:text-md font-medium leading-relaxed text-wrap-pretty">
              Experience the pinnacle of furniture craftsmanship. We blend heritage techniques with modern aesthetics to create homes that tell a story.
            </p>
          </div>

          <div className="reveal-item flex flex-wrap items-center gap-6 pt-4 lg:pt-2">
            <Link
              to="/catalog"
              className="group relative bg-white text-brand-brown px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-yellow-400 hover:text-brand-brown active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center"
            >
              <span className="relative z-10">Shop Collection</span>
            </Link>
            <Link
              to="/about"
              className="group flex items-center gap-4 text-white transition-all hover:text-yellow-400 active:scale-95 py-2 px-2"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em] ml-2">Our Legacy</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400 transition-colors bg-white/5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-brown/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
