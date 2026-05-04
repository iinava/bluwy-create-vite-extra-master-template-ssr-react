import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const PageTransition = ({ children }) => {
  const location = useLocation();
  const container = useRef(null);

  useGSAP(() => {
    // Reset scroll instantly
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Smooth Fade + Subtle Lift Reveal
    gsap.fromTo(container.current, 
      { autoAlpha: 0, y: 15 },
      { 
        autoAlpha: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        force3D: true,
        clearProps: "all" // Ensure no lingering styles block interactions
      }
    );

  }, { 
    dependencies: [location.pathname], 
    scope: container,
    revertOnUpdate: false
  });

  return (
    <div ref={container} className="w-full min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition;
