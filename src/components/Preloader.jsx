import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Total duration: delay (2.8s) + animation (1.2s) = 4s
    const timer = setTimeout(() => {
      setShouldRender(false);
      if (onComplete) onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-brand-brown flex flex-col items-center justify-center pointer-events-none animate-preloader-exit"
      style={{ willChange: 'transform' }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated SVG Logo */}
        <div className="animate-preloader-logo opacity-0 w-24 h-24 md:w-32 md:h-32 mb-8">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" rx="22" className="fill-white/5" />
            <path 
              d="M28 72V28H72V72M28 50H72" 
              className="animate-preloader-stroke stroke-white stroke-[10] fill-none" 
              strokeDasharray="300"
              strokeDashoffset="300"
              strokeLinecap="square"
            />
          </svg>
        </div>
        
        {/* Brand Text */}
        <div className="overflow-hidden">
          <h2 className="animate-preloader-text opacity-0 text-white text-2xl md:text-3xl font-black tracking-[0.3em] uppercase">
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
