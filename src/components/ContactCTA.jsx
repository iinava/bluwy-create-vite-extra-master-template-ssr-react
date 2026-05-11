import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Flower from './Flower';
import Star from './Star';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const { ArrowUpRight } = LucideIcons;

const ContactCTA = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".cta-reveal", 
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
          fastScrollEnd: true
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative h-[40vh] md:h-[50vh] flex items-center bg-brand-brown overflow-hidden">
      {/* Flower accents */}
      <Flower size={220} speed={30} opacity="0.1" className="absolute right-4 top-4" />
      <Flower size={110} speed={16} opacity="0.08" className="absolute left-1/3 bottom-4 hidden lg:block" />
      {/* Star accent - spins counter-clockwise for contrast */}
      <Star size={100} speed={12} opacity="0.1" reverse className="absolute left-8 top-4" />

      {/* Ghost Text */}
      <div className="cta-reveal absolute top-12 left-6 md:left-24 select-none pointer-events-none opacity-20">
        <span 
          className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          style={{ 
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)', 
            color: 'transparent' 
          }}
        >
          CONTACT US
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="cta-reveal space-y-2">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Let's talk.</h2>
          <p className="text-4xl md:text-6xl font-bold text-white tracking-tight">Have a project in mind?</p>
        </div>

        <Link 
          to="/contact"
          className="cta-reveal group bg-brand-gold hover:bg-white text-brand-brown px-8 py-4 rounded-full flex items-center gap-4 transition-all duration-500 shadow-2xl active:scale-95 text-center"
        >
          <span className="font-bold uppercase tracking-widest text-xs">Contact Us Now</span>
          <div className="w-8 h-8 rounded-full bg-brand-brown text-white flex items-center justify-center transition-transform group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
