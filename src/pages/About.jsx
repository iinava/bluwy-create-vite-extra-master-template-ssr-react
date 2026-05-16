import React, { useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ContactCTA from '../components/ContactCTA';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const { Users, Target, BarChart3, Clock, Trophy, Quote, Star, Check, Box, Home, Truck, Layers, Wifi } = LucideIcons;

const About = () => {
  const container = useRef(null);

  const offerings = [
    {
      title: "Furniture Type",
      items: ["Designer Furniture", "Modular Furniture", "Kids Furniture", "Antique", "Imported"],
      span: "lg:col-span-2",
      bg: "bg-brand-brown shadow-xl shadow-brand-brown/20 border border-white/5",
      titleColor: "text-brand-gold",
      divider: "border-white/10",
      itemText: "text-white/80",
      cols: "grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6",
      icon: <Box className="absolute -bottom-6 -right-6 w-40 h-40 text-white/[0.03] rotate-12 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" />
    },
    {
      title: "Usage",
      items: ["Living Room", "Outdoor Furniture", "Modular Kitchen", "Office", "School", "Bedroom"],
      span: "lg:col-span-1",
      bg: "bg-brand-brown shadow-xl shadow-brand-brown/20 border border-white/5",
      titleColor: "text-brand-gold",
      divider: "border-white/10",
      itemText: "text-white/80",
      cols: "grid-cols-1 gap-y-3",
      icon: <Home className="absolute -bottom-6 -right-6 w-32 h-32 text-white/[0.03] -rotate-12 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" />
    },
    {
      title: "Services",
      items: ["Same Day Delivery", "Delivery Available", "In Store Collect"],
      span: "lg:col-span-1",
      bg: "bg-brand-brown shadow-xl shadow-brand-brown/20 border border-white/5",
      titleColor: "text-brand-gold",
      divider: "border-white/10",
      itemText: "text-white/80",
      cols: "grid-cols-1 gap-y-3",
      icon: <Truck className="absolute -bottom-4 -right-4 w-24 h-24 text-white/[0.03] pointer-events-none transition-transform duration-700 group-hover:translate-x-4" />
    },
    {
      title: "Material",
      items: ["Polypropylene", "Marble"],
      span: "lg:col-span-1",
      bg: "bg-brand-brown shadow-xl shadow-brand-brown/20 border border-white/5",
      titleColor: "text-brand-gold",
      divider: "border-white/10",
      itemText: "text-white/80",
      cols: "grid-cols-1 gap-y-3",
      icon: <Layers className="absolute -bottom-4 -right-4 w-24 h-24 text-white/[0.03] pointer-events-none transition-transform duration-700 group-hover:-translate-y-4" />
    },
    {
      title: "Amenities",
      items: ["WiFi"],
      span: "lg:col-span-1",
      bg: "bg-brand-brown shadow-xl shadow-brand-brown/20 border border-white/5",
      titleColor: "text-brand-gold",
      divider: "border-white/10",
      itemText: "text-white/80",
      cols: "grid-cols-1 gap-y-3",
      icon: <Wifi className="absolute -bottom-4 -right-4 w-24 h-24 text-white/[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
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


  }, { scope: container });

  return (
    <div ref={container} className="bg-white min-h-screen font-sans overflow-hidden">
      {/* ── Header (Contact style) ── */}
      <section className="reveal-about-trigger max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
          <div className="space-y-4">
            {/* Ghost text */}
            <div className="reveal-about relative h-16 md:h-24 overflow-hidden select-none pointer-events-none mb-4">
              <span
                className="absolute left-0 bottom-0 text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none opacity-30"
                style={{ WebkitTextStroke: '1px var(--color-brand-brown)', color: 'transparent' }}
              >
                ABOUT
              </span>
            </div>
            <h1 className="reveal-about text-4xl md:text-6xl font-black text-brand-brown leading-[0.9] uppercase tracking-tighter">
              Welcome to <br />
              <span className="italic font-serif text-brand-gold">Handly.</span>
            </h1>
          </div>
          <div className="reveal-about max-w-md pb-1">
            <p className="text-brand-taupe/70 text-base md:text-lg leading-relaxed">
              A beacon of elegance born from a 35-year legacy — redefining luxury living, dining, and premium furniture. We exclusively cater to wholesale and trade partners. No retail.
            </p>
          </div>
        </div>

        {/* ── Card layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-28">

          {/* Image card */}
          <div className="reveal-about lg:col-span-5">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl border border-black/5 group">
              <img
                src="/about/about.png"
                alt="Handly showroom"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right – Essence copy + stats */}
          <div className="reveal-about lg:col-span-7 space-y-10 pt-2 lg:pt-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-brown leading-[0.9] uppercase tracking-tighter mb-8">
                The <span className="italic font-serif text-brand-gold">Essence.</span>
              </h2>
              <div className="space-y-5 text-brand-taupe/75 text-base leading-relaxed">
                <p className="text-lg font-semibold text-brand-brown tracking-tight border-l-4 border-brand-gold pl-5">
                  Handly is more than furniture — it's a statement of sophistication, a celebration of spaces that inspire.
                </p>
                <p>
                  Each piece is a masterpiece, sculpted to elevate your home with effortless grace. From the luminous sheen of our premium wood collections to the warm embrace of hand-selected finishes, our designs are built to transform moments into memories.
                </p>
                <p>
                  Rooted in a 35-year legacy, Handly fuses Kerala's artisanal soul with global design sensibilities — crafted for those who dare to dream in style.
                </p>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-black/5 pt-8">
              {[
                { stat: '35+', label: 'Years of Legacy' },
                { stat: '9k+', label: 'Wholesale Partners' },
                { stat: '120+', label: 'Homes Transformed' },
                { stat: '100%', label: 'Artisanal Quality' },
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl font-black text-brand-gold/40">{s.stat}</div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-brand-taupe/50">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Decorative line */}
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-gold/40 to-transparent" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold/50">Est. 1989 · Calicut, Kerala</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="reveal-about">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">What We Offer</span>
            <h2 className="text-3xl lg:text-5xl font-black text-brand-brown leading-none uppercase tracking-tighter">OUR RANGE & <br /> CAPABILITIES</h2>
          </div>
          <div className="reveal-about lg:max-w-md text-brand-taupe/70">
            <p className="text-base leading-relaxed">Discover our comprehensive range of furniture types, materials, and dedicated services designed to meet your every need.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-start">
          {offerings.map((category, idx) => (
            <div
              key={idx}
              className={`about-card group relative overflow-hidden p-6 lg:p-8 rounded-[2rem] ${category.bg} ${category.span} cursor-default gpu-accelerated h-full`}
              style={{
                transformStyle: 'preserve-3d',
                transformPerspective: '1200px',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {category.icon}
              <div className="relative z-10">
                <h3 className={`text-xl font-black ${category.titleColor} mb-5 uppercase tracking-tight border-b ${category.divider} pb-3`} style={{ transform: 'translateZ(15px)' }}>{category.title}</h3>
                <ul className={`grid ${category.cols} w-full`} style={{ transform: 'translateZ(10px)' }}>
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-500 ease-out" style={{ transitionDelay: `${i * 40}ms` }}>
                      <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20">
                        <Check size={12} className="text-brand-gold" strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-semibold tracking-tight ${category.itemText}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default About;
