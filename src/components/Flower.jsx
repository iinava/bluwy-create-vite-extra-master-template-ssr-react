import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

/**
 * Flower – decorative spinning accent
 * Props:
 *   size    – px size (default 120)
 *   speed   – seconds per full rotation (default 18, higher = slower)
 *   opacity – CSS opacity string (default "0.85")
 *   className – extra classes for positioning
 */
const Flower = ({ size = 120, speed = 18, opacity = '0.85', className = '' }) => {
  const flowerRef = useRef(null);

  useGSAP(() => {
    gsap.to(flowerRef.current, {
      rotation: 360,
      duration: speed,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
      force3D: true,
    });
  }, { scope: flowerRef });

  return (
    <div
      ref={flowerRef}
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
        <g clipPath="url(#cs_clip_flower)">
          <mask
            id="cs_mask_flower"
            style={{ maskType: 'alpha' }}
            width="200"
            height="200"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              d="M200 50c0-27.614-22.386-50-50-50s-50 22.386-50 50c0-27.614-22.386-50-50-50S0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0 27.614 22.386 50 50 50s50-22.386 50-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50z"
            />
          </mask>
          <g mask="url(#cs_mask_flower)">
            <path fill="#fff" d="M200 0H0v200h200V0z" />
            <path
              fill="url(#paint0_linear_flower)"
              fillOpacity="0.55"
              d="M200 0H0v200h200V0z"
            />
            <g filter="url(#filter0_f_flower)">
              <path fill="var(--color-flower-primary)" d="M131 3H-12v108h143V3z" />
              <path fill="var(--color-flower-secondary)" d="M190 109H0v116h190V109z" />
              <ellipse
                cx="153.682"
                cy="64.587"
                fill="var(--color-flower-accent)"
                rx="83"
                ry="57"
                transform="rotate(-33.875 153.682 64.587)"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_flower"
            width="361.583"
            height="346.593"
            x="-72"
            y="-61.593"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_flower" stdDeviation="30" />
          </filter>
          <linearGradient
            id="paint0_linear_flower"
            x1="200"
            x2="0"
            y1="0"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-flower-primary)" />
            <stop offset="1" stopColor="var(--color-flower-secondary)" />
          </linearGradient>
          <clipPath id="cs_clip_flower">
            <path fill="#fff" d="M0 0H200V200H0z" />
          </clipPath>
        </defs>
        <g style={{ mixBlendMode: 'overlay' }} mask="url(#cs_mask_flower)">
          <path
            fill="gray"
            stroke="transparent"
            d="M200 0H0v200h200V0z"
            filter="url(#cs_noise_flower)"
          />
        </g>
        <defs>
          <filter
            id="cs_noise_flower"
            width="100%"
            height="100%"
            x="0%"
            y="0%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="4" />
            <feComposite in="out1" in2="SourceGraphic" operator="in" result="out2" />
            <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Flower;
