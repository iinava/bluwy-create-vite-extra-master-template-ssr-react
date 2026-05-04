import React, { useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const { CheckCircle2, Award, Zap, Star } = LucideIcons;

const whyData = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Artisanal Heritage",
    description: "Over 15 years of legacy in mastering traditional woodworking techniques combined with modern precision.",
    stat: "15+ Years"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Bespoke Curation",
    description: "Tailored furniture experiences designed to elevate your unique space and reflect your individual style.",
    stat: "100% Bespoke"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Certified Quality",
    description: "Sustainably sourced premium hardwoods and eco-friendly finishes that ensure lasting durability and beauty.",
    stat: "Grade A Materials"
  }
];

export const AboutWhyUs = () => {
  const container = useRef(null);

  useGSAP(() => {
    // 3D Tilt Effect Logic
    const cards = gsap.utils.toArray(".why-card");
    
    const listeners = cards.map(card => {
      const content = card; 
      
      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Balanced rotation for "Quiet Luxury" feel
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        gsap.to(content, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });
      };

      const onMouseLeave = () => {
        gsap.to(content, {
          rotateX: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto"
        });
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
      
      return { card, onMouseMove, onMouseLeave };
    });

    return () => {
      listeners.forEach(({ card, onMouseMove, onMouseLeave }) => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      });
    };

    // Header Reveal
    gsap.fromTo(".why-header-item", 
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".why-header",
          start: "top 95%",
          fastScrollEnd: true
        }
      }
    );

    // Card Batch Reveal
    ScrollTrigger.batch(".why-card", {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { autoAlpha: 0, y: 40 },
          { 
            autoAlpha: 1, 
            y: 0, 
            stagger: 0.1, 
            duration: 1, 
            ease: "expo.out",
            force3D: true,
            overwrite: true 
          }
        );
      },
      start: "top 88%",
      fastScrollEnd: true
    });

    // Parallax background element
    gsap.to(".why-bg-accent", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-brand-light relative overflow-hidden font-sans">
      {/* Background Accent */}
      <div className="why-bg-accent absolute top-20 right-[-5%] w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="why-header grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-end">
          <div>
            <span className="why-header-item text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-4 block">
              The Aiswarya Advantage
            </span>
            <h2 className="why-header-item text-4xl md:text-6xl font-black text-brand-brown leading-[0.9] uppercase tracking-tighter">
              WHY CHOOSE <br /> OUR CRAFT?
            </h2>
          </div>
          <div className="max-w-md lg:pb-2">
            <p className="why-header-item text-brand-taupe/70 text-lg leading-relaxed border-l-2 border-brand-gold/20 pl-6">
              We don't just build furniture; we create heritage pieces that define spaces and generations. Our commitment to excellence is rooted in every grain.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyData.map((item, idx) => (
            <div 
              key={idx} 
              className="why-card group bg-white p-10 rounded-[40px] border border-black/5 shadow-sm hover:shadow-2xl cursor-default" 
              style={{ 
                transformStyle: 'preserve-3d',
                transformPerspective: '1200px',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transition: 'background-color 0.5s, border-color 0.5s, box-shadow 0.5s' 
              }}
            >
              <div 
                className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-8 group-hover:bg-brand-brown group-hover:text-white transition-all duration-500" 
                style={{ transform: 'translateZ(25px)' }}
              >
                {item.icon}
              </div>
              <h3 
                className="text-2xl font-black text-brand-brown mb-4 uppercase tracking-tight" 
                style={{ transform: 'translateZ(15px)' }}
              >
                {item.title}
              </h3>
              <p 
                className="text-brand-taupe/60 leading-relaxed mb-8 text-sm" 
                style={{ transform: 'translateZ(10px)' }}
              >
                {item.description}
              </p>
              <div 
                className="pt-6 border-t border-black/5 flex items-center justify-between" 
                style={{ transform: 'translateZ(12px)' }}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">
                  {item.stat}
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((s) => (
                    <Star key={s} size={10} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyUs;
