import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Leaf, Diamond, Recycle, Thermometer, ShieldCheck, Sparkles, Sun, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const features = [
  { icon: Droplets, label: 'WATERPROOF' },
  { icon: Leaf, label: '100% NATURAL' },
  { icon: Diamond, label: 'SCRATCH RESISTANT' },
  { icon: Recycle, label: 'RECYCLABLE' },
  { icon: Thermometer, label: 'HEAT RESISTANT' },
  { icon: ShieldCheck, label: 'HYGIENIC' },
  { icon: Sparkles, label: 'EASY TO CLEAN' },
  { icon: Sun, label: 'UV RESISTANT' },
];

const marbles = [
  "/marbles/gallery/Arabescato-Gold-CU-1-1-1.webp",
  "/marbles/gallery/BRECIIA.jpg",
  "/marbles/gallery/branco kommum.jpg"
];

const TechnicalFeatures = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Reveal text and features
    gsap.fromTo('.tech-reveal', 
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%"
        }
      }
    );

    // Animate marble slabs entry
    gsap.fromTo('.marble-slab',
      { y: 100, opacity: 0, rotation: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 1.5, 
        stagger: 0.15, 
        ease: 'power3.out',
        rotation: (i) => i === 0 ? -8 : i === 2 ? 8 : 0,
        force3D: true,
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%"
        }
      }
    );

    // 3D Tilt Effect Logic for Slabs
    const slabs = gsap.utils.toArray(".marble-slab-inner");
    
    slabs.forEach(slab => {
      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = slab.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        gsap.to(slab, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
          force3D: true
        });
      };

      const onMouseLeave = () => {
        gsap.to(slab, {
          rotateX: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto",
          force3D: true
        });
      };

      slab.addEventListener("mousemove", onMouseMove);
      slab.addEventListener("mouseleave", onMouseLeave);
    });

  }, { scope: container });

  return (
    <section ref={container} className="min-h-[100svh] py-20 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden font-sans flex items-center border-t border-black/5">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(197,160,89,0.03),_transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Marble Showcase */}
        <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center pt-10 lg:pt-0" style={{ perspective: '2000px' }}>
          
          {/* Decorative SVG Path */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none scale-125 lg:scale-150">
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-gold">
              <path d="M 50 400 Q 393 0 250 400 Q 144 800 550 400 Q 700 274 750 400" fill="none" stroke="currentColor" strokeWidth="23"/>
            </svg>
          </div>
          
          {/* Slab 1 (Back Left) */}
          <div className="marble-slab absolute w-[40%] md:w-[35%] aspect-[3/4] left-[5%] top-[10%] lg:top-[15%] z-10 rounded-2xl" style={{ transform: 'rotate(-8deg)' }}>
            <div className="marble-slab-inner w-full h-full rounded-2xl overflow-hidden border border-black/5 shadow-2xl shadow-black/10 bg-white gpu-accelerated cursor-default" style={{ transformStyle: 'preserve-3d', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
              <img src={marbles[0]} alt="Arabescato Gold" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Slab 2 (Front Center) */}
          <div className="marble-slab absolute w-[45%] md:w-[40%] aspect-[3/4] left-[27.5%] md:left-[30%] top-[15%] lg:top-[20%] z-10 rounded-2xl">
            <div className="marble-slab-inner w-full h-full rounded-2xl overflow-hidden border border-brand-gold/20 shadow-2xl shadow-brand-brown/15 bg-white gpu-accelerated cursor-default" style={{ transformStyle: 'preserve-3d', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
              <img src={marbles[1]} alt="Breccia Marble" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Slab 3 (Back Right) */}
          <div className="marble-slab absolute w-[40%] md:w-[35%] aspect-[3/4] right-[5%] bottom-[10%] lg:bottom-[15%] z-0 rounded-2xl" style={{ transform: 'rotate(8deg)' }}>
            <div className="marble-slab-inner w-full h-full rounded-2xl overflow-hidden border border-black/5 shadow-2xl shadow-black/10 bg-white gpu-accelerated cursor-default" style={{ transformStyle: 'preserve-3d', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
              <img src={marbles[2]} alt="Branco Kommum" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Features Grid */}
        <div className="space-y-8 lg:space-y-10 lg:pl-8">
          <div className="tech-reveal">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">
              The Geological Masterpiece
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-brand-brown leading-[0.9] uppercase tracking-tighter mb-6">
              PREMIUM <br />
              <span className="text-brand-gold italic font-serif serif">MARBLE.</span>
            </h2>
            <p className="text-brand-taupe/70 text-sm md:text-base leading-relaxed max-w-md">
              Meticulously sourced from the finest quarries globally. Our exclusive marble surfaces offer unparalleled durability and timeless aesthetic perfection.
            </p>
          </div>
          
          <div className="tech-reveal">
            <div className="border-b border-brand-gold/20 pb-3 mb-6">
              <h3 className="text-xs font-black text-brand-brown uppercase tracking-[0.2em]">
                Technical Features
              </h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl border border-black/5 bg-brand-cream/50 hover:bg-white hover:shadow-[0_10px_30px_rgba(197,160,89,0.15)] hover:border-brand-gold/30 transition-all duration-300 group cursor-default">
                    <div className="text-brand-gold shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={14} strokeWidth={2.5} />
                    </div>
                    <span className="text-brand-taupe/80 text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] leading-tight group-hover:text-brand-brown transition-colors mt-0.5">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="tech-reveal pt-4">
            <Link 
              to="/catalog"
              className="group inline-flex items-center gap-4 bg-transparent border border-brand-brown/20 text-brand-brown pl-8 pr-2 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:border-brand-gold hover:text-brand-gold transition-all duration-500 active:scale-95"
            >
              <span>View Collection</span>
              <div className="w-8 h-8 rounded-full bg-brand-brown/5 group-hover:bg-brand-gold/10 flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalFeatures;
