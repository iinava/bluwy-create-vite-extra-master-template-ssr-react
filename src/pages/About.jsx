import React, { useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ContactCTA from '../components/ContactCTA';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const { Users, Target, BarChart3, Clock, Trophy, Quote, Star } = LucideIcons;

const About = () => {
  const container = useRef(null);

  const founders = [
    {
      name: 'Vikram Aiswarya',
      role: 'Master Craftsman & Visionary',
      bio: 'With over 40 years of experience in traditional woodworking, Vikram founded Aiswarya with a vision to blend heritage techniques with modern luxury.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      signature: 'V. Aiswarya'
    },
    {
      name: 'Ananya Sharma',
      role: 'Chief Design Officer',
      bio: 'An alumni of Milan Design Institute, Ananya brings a contemporary editorial aesthetic to every piece we create.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
      signature: 'A. Sharma'
    }
  ];

  const services = [
    { 
      title: "Bespoke Crafting", 
      desc: "Individually handcrafted pieces tailored to your specific vision and architectural space.",
      icon: <Quote size={20} className="text-brand-gold" />,
      stat: "1 of 1"
    },
    { 
      title: "Interior Curation", 
      desc: "Expert design consultation to harmonize your furniture with your home's unique character.",
      icon: <Target size={20} className="text-brand-gold" />,
      stat: "Personalized"
    },
    { 
      title: "Material Sourcing", 
      desc: "Meticulous selection of the world's finest, sustainably harvested hardwoods and veneers.",
      icon: <Trophy size={20} className="text-brand-gold" />,
      stat: "Sustainably Sourced"
    },
    { 
      title: "Global Delivery", 
      desc: "White-glove logistics ensuring your masterpieces arrive in perfect condition, anywhere.",
      icon: <BarChart3 size={20} className="text-brand-gold" />,
      stat: "Worldwide"
    }
  ];

  useGSAP(() => {
    // 3D Tilt for About Cards
    const cards = gsap.utils.toArray(".about-card");
    cards.forEach(card => {
      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto"
        });
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    });

    // Content Reveals
    gsap.fromTo(".reveal-about", 
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.15,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".reveal-about-trigger",
          start: "top 95%",
          fastScrollEnd: true
        }
      }
    );

    // Batch reveals for cards
    ScrollTrigger.batch(".about-card", {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { autoAlpha: 0, y: 40 },
          { 
            autoAlpha: 1, 
            y: 0, 
            stagger: 0.08, 
            duration: 1, 
            ease: "expo.out",
            force3D: true,
            overwrite: true 
          }
        );
      },
      start: "top 98%",
      fastScrollEnd: true
    });

    // Founder Reveal
    gsap.fromTo(".founder-card", 
      { autoAlpha: 0, x: (i) => i === 0 ? -50 : 50 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".founders-trigger",
          start: "top 80%",
          fastScrollEnd: true
        }
      }
    );

  }, { scope: container });

  return (
    <div ref={container} className="bg-white min-h-screen pt-24 font-sans overflow-hidden">
      {/* Rooted in Vision Section */}
      <section className="reveal-about-trigger max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
          <div className="space-y-4">
            <div className="reveal-about relative h-16 md:h-24 overflow-hidden select-none pointer-events-none mb-4">
              <span 
                className="absolute left-0 bottom-0 text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none opacity-10"
                style={{ WebkitTextStroke: '1px var(--color-brand-brown)', color: 'transparent' }}
              >
                ABOUT
              </span>
            </div>
            <h1 className="reveal-about text-4xl md:text-6xl font-black text-brand-brown leading-[0.9] uppercase tracking-tighter">
              ROOTED IN VISION. <br />
              <span className="text-brand-gold italic font-serif serif">DRIVEN BY DETAIL.</span>
            </h1>
          </div>
          <div className="reveal-about max-w-md pb-1">
            <p className="text-brand-taupe/70 text-lg leading-relaxed border-l-2 border-brand-gold/20 pl-6">
              Since 2008, we've believed that spaces and people shape each other. Our passion for craftsmanship drives every project we undertake.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="reveal-about lg:col-span-6 space-y-8 text-brand-taupe/80 text-lg leading-relaxed">
            <p>
              What started as a small design studio in Calicut has grown into a globally recognized artisanal furniture agency. Every piece is crafted with surgical precision, a deep understanding of heritage, and a forward-thinking approach to luxury.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
              <div className="space-y-2">
                <span className="text-5xl font-black text-brand-gold/20">120+</span>
                <div>
                  <h3 className="text-lg font-black text-brand-brown uppercase">Homes transformed</h3>
                  <p className="text-xs text-brand-taupe/50 font-bold uppercase tracking-widest">Global Portfolio</p>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-black text-brand-gold/20">2k+</span>
                <div>
                  <h3 className="text-lg font-black text-brand-brown uppercase">Collectors</h3>
                  <p className="text-xs text-brand-taupe/50 font-bold uppercase tracking-widest">Client satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-about lg:col-span-6">
            <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl border border-black/5 group">
              <img 
                src="https://kamlesh-electronics-assets.s3.me-central-1.amazonaws.com/NAVANEETH11_cdd9385c_aerial_shot.png" 
                alt="Our Artisanal Workshop" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="reveal-about">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">Excellence in Service</span>
            <h2 className="text-4xl lg:text-6xl font-black text-brand-brown leading-none uppercase tracking-tighter">OUR SPECIALIZED <br /> SERVICES</h2>
          </div>
          <div className="reveal-about lg:max-w-md text-brand-taupe/70">
            <p className="text-lg leading-relaxed">We provide end-to-end artisanal solutions, from initial sketch to final installation, ensuring every detail exceeds expectations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div 
              key={idx} 
              className="about-card group p-10 rounded-[40px] bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] cursor-default gpu-accelerated" 
              style={{ 
                transformStyle: 'preserve-3d',
                transformPerspective: '1200px',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transition: 'background-color 0.5s, border-color 0.5s, box-shadow 0.5s'
              }}
            >
              <div className="mb-10 w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center shadow-sm group-hover:bg-brand-brown group-hover:text-white transition-all duration-700" style={{ transform: 'translateZ(25px)' }}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-brand-brown mb-3 uppercase tracking-tight" style={{ transform: 'translateZ(15px)' }}>{item.title}</h3>
              <p className="text-brand-taupe/60 leading-relaxed text-xs mb-6" style={{ transform: 'translateZ(10px)' }}>{item.desc}</p>
              <div className="pt-6 border-t border-black/5" style={{ transform: 'translateZ(12px)' }}>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">{item.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team/Founders Section - Revamped */}
      <section className="founders-trigger bg-brand-brown py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">The Visionaries</span>
              <h2 className="text-4xl lg:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">MEET THE <br /> FOUNDERS</h2>
            </div>
            <div className="lg:max-w-md text-white/50 border-l-2 border-brand-gold/30 pl-8">
              <p className="text-lg">Our leadership combines decades of traditional craftsmanship with a forward-thinking approach to luxury design.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {founders.map((founder, idx) => (
              <div key={idx} className="founder-card group relative bg-white/5 backdrop-blur-sm rounded-[48px] p-8 md:p-12 border border-white/10 flex flex-col md:flex-row gap-10 items-center hover:bg-white/10 transition-all duration-700">
                <div className="relative shrink-0 w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-[32px] border-2 border-brand-gold/20 shadow-2xl">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-brown/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="flex flex-col justify-center text-center md:text-left">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-2 block">{founder.role}</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-none">{founder.name}</h3>
                  <p className="text-white/60 leading-relaxed text-sm mb-8 italic">"{founder.bio}"</p>
                  <div className="font-serif italic text-2xl text-brand-gold opacity-50 select-none">
                    {founder.signature}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default About;
