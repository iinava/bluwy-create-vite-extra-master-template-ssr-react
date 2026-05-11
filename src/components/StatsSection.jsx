import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Flower from './Flower';
import Star from './Star';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CountUp = ({ end, suffix = "" }) => {
  const countRef = useRef(null);

  useGSAP(() => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: end,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 98%",
        fastScrollEnd: true
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = Math.floor(obj.value).toLocaleString() + suffix;
        }
      }
    });
  }, { scope: countRef });

  return <span ref={countRef}>0{suffix}</span>;
};

export const DetailedStats = () => {
  const stats = [
    { value: 15, suffix: "+", label: "Industry Best Awards" },
    { value: 10000, suffix: "+", label: "Satisfied Customers" },
    { value: 3000, suffix: "+", label: "Designs of furniture" },
    { value: 1000, suffix: "+", label: "Unique ideas created" }
  ];

  return (
    <section className="bg-[#fcfaf8] py-16 md:py-24 border-y border-black/5 relative overflow-hidden">
      <Star size={70} speed={20} opacity="0.08" className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 pointer-events-none" />
      <Flower size={80} speed={25} opacity="0.08" className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-8 items-center justify-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-brown mb-3 tracking-tight tabular-nums">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-taupe/40 leading-relaxed max-w-[150px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
