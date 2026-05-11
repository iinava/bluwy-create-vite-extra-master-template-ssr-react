import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

/**
 * Star – 4-pointed decorative spinning accent
 * Props:
 *   size    – px size (default 120)
 *   speed   – seconds per full rotation (default 18, higher = slower)
 *   opacity – CSS opacity string (default "0.85")
 *   className – extra classes for positioning
 *   reverse – spin counter-clockwise (default false)
 */
const Star = ({ size = 120, speed = 18, opacity = '0.85', className = '', reverse = false }) => {
  const starRef = useRef(null);

  useGSAP(() => {
    gsap.to(starRef.current, {
      rotation: reverse ? -360 : 360,
      duration: speed,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
      force3D: true,
    });
  }, { scope: starRef });

  return (
    <div
      ref={starRef}
      className={`pointer-events-none select-none shrink-0 ${className}`}
      style={{ width: size, height: size, opacity }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
      >
        <g clipPath="url(#cs_clip_star)">
          <mask
            id="cs_mask_star"
            style={{ maskType: 'alpha' }}
            width="200"
            height="200"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              d="M100 0c12.424 62.382 37.256 87.456 100 100-62.759 12.544-87.591 37.618-100 100-12.424-62.382-37.256-87.471-100-100C62.758 87.456 87.591 62.382 100 0z"
            />
          </mask>
          <g mask="url(#cs_mask_star)">
            <path fill="#fff" d="M200 0H0v200h200V0z" />
            <path
              fill="url(#paint0_linear_star)"
              fillOpacity="0.55"
              d="M200 0H0v200h200V0z"
            />
            <g filter="url(#filter0_f_star)">
              <path
                fill="var(--color-flower-secondary)"
                d="M213 69H93v141h120V69z"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_star"
            width="245"
            height="266"
            x="30.5"
            y="6.5"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_star" stdDeviation="31.25" />
          </filter>
          <linearGradient
            id="paint0_linear_star"
            x1="162"
            x2="49.5"
            y1="38"
            y2="150.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-flower-primary)" />
            <stop offset="1" stopColor="var(--color-flower-accent)" />
          </linearGradient>
          <clipPath id="cs_clip_star">
            <path fill="#fff" d="M0 0H200V200H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Star;
