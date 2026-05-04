import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the GSAP React hook
gsap.registerPlugin(useGSAP);

const Preloader = ({ onComplete }) => {
  const container = useRef(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    // Create a timeline for the entrance sequence
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Initial state setup using gsap.set()
    gsap.set(".preloader-logo", { scale: 0.8, autoAlpha: 0 });
    gsap.set(pathRef.current, { strokeDasharray: 300, strokeDashoffset: 300 });
    gsap.set(".preloader-text", { y: 20, autoAlpha: 0 });

    // Animation sequence
    tl.to(".preloader-logo", {
      scale: 1,
      autoAlpha: 1,
      duration: 1
    })
    .to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=0.5") // Overlap by 0.5s
    .to(".preloader-text", {
      y: 0,
      autoAlpha: 1,
      duration: 0.8
    }, "-=0.8")
    .to(container.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
      delay: 0.5
    });
  }, { scope: container });

  return (
    <div 
      ref={container}
      className="fixed inset-0 z-[100] bg-brand-brown flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated SVG Logo */}
        <div className="preloader-logo w-24 h-24 md:w-32 md:h-32 mb-8">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="22" className="fill-white/5" />
            <path 
              ref={pathRef}
              d="M28 72V28H72V72M28 50H72" 
              className="stroke-white stroke-[10] fill-none" 
              strokeLinecap="square"
            />
          </svg>
        </div>
        
        {/* Brand Text */}
        <div className="overflow-hidden">
          <h2 className="preloader-text text-white text-2xl md:text-3xl font-black tracking-[0.3em] uppercase">
            Aiswarya
          </h2>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
    </div>
  );
};

export default Preloader;
