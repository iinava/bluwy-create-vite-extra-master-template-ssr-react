import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Total animation time is roughly 4.2 seconds
    const timer = setTimeout(() => {
      setShouldRender(false);
      if (onComplete) onComplete();
    }, 4200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <>
      <style>{`
        @keyframes drawAndFill {
          0% { stroke-dashoffset: 500; fill-opacity: 0; stroke-opacity: 1; }
          60% { stroke-dashoffset: 0; fill-opacity: 0; stroke-opacity: 1; }
          100% { stroke-dashoffset: 0; fill-opacity: 1; stroke-opacity: 0; }
        }

        .logo-path-css {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          fill-opacity: 0;
          animation: drawAndFill 2.5s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .logo-path-css:nth-child(1) { animation-delay: 0.00s; }
        .logo-path-css:nth-child(2) { animation-delay: 0.12s; }
        .logo-path-css:nth-child(3) { animation-delay: 0.24s; }
        .logo-path-css:nth-child(4) { animation-delay: 0.36s; }
        .logo-path-css:nth-child(5) { animation-delay: 0.48s; }
        .logo-path-css:nth-child(6) { animation-delay: 0.60s; }
        .logo-path-css:nth-child(7) { animation-delay: 0.72s; }

        @keyframes subtextReveal {
          0% { opacity: 0; transform: translate3d(0, 20px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        .sub-text-css {
          opacity: 0;
          animation: subtextReveal 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          animation-delay: 2.0s;
          will-change: transform, opacity;
        }

        @keyframes containerExit {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -100%, 0); }
        }

        .preloader-container-css {
          animation: containerExit 1s cubic-bezier(0.85, 0, 0.15, 1) forwards;
          animation-delay: 3.2s;
          will-change: transform;
        }
      `}</style>

      <div className="fixed inset-0 z-[9999] bg-[#311b18] flex flex-col items-center justify-center pointer-events-none preloader-container-css">
        <div className="w-full max-w-[280px] sm:max-w-md md:max-w-lg px-6 flex flex-col items-center">
          <svg viewBox="0 0 630 120" className="w-full text-[#EED6A5]">
            {/* H */}
            <path className="logo-path-css" fill="currentColor" stroke="currentColor" strokeWidth="2" d="M20,20 L40,20 L40,50 L70,50 L70,20 L90,20 L90,100 L70,100 L70,70 L40,70 L40,100 L20,100 Z" />
            
            {/* A */}
            <path className="logo-path-css" fill="currentColor" stroke="currentColor" strokeWidth="2" d="M140,20 L180,20 L190,45 L130,45 Z" />
            <path className="logo-path-css" fill="currentColor" stroke="currentColor" strokeWidth="2" d="M125,55 L195,55 L205,100 L175,100 L175,75 L145,75 L145,100 L115,100 Z" />

            {/* N */}
            <path className="logo-path-css" fill="currentColor" stroke="currentColor" strokeWidth="2" d="M230,100 L230,20 L255,20 L290,70 L290,20 L310,20 L310,100 L285,100 L250,50 L250,100 Z" />

            {/* D */}
            <path className="logo-path-css" fill="currentColor" stroke="currentColor" strokeWidth="2" d="M340,20 L380,20 C410,20 425,40 425,60 C425,80 410,100 380,100 L340,100 Z M360,40 L360,80 L380,80 C395,80 405,70 405,60 C405,50 395,40 380,40 Z" />

            {/* L */}
            <path className="logo-path-css" fill="currentColor" stroke="currentColor" strokeWidth="2" d="M445,20 L465,20 L465,80 L505,80 L505,100 L445,100 Z" />

            {/* Y */}
            <path className="logo-path-css" fill="currentColor" stroke="currentColor" strokeWidth="2" d="M525,20 L548,20 L565,55 L582,20 L605,20 L575,65 L575,100 L555,100 L555,65 Z" />
          </svg>

          <div className="sub-text-css mt-5 md:mt-8 text-white font-medium text-[13px] sm:text-[17px] tracking-[0.06em] font-sans">
            By Aiswarya Home
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
