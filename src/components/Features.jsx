import React, { useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const { Star, MoveUpRight } = LucideIcons;

const Features = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Batched Reveals for Feature Cards
    ScrollTrigger.batch(".feature-card", {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { autoAlpha: 0, y: 20, scale: 0.98 },
          { 
            autoAlpha: 1, 
            y: 0, 
            scale: 1,
            stagger: 0.05, 
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

    gsap.fromTo(".feature-stat-item", 
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 1,
        ease: "expo.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".feature-stats-row",
          start: "top 95%",
          fastScrollEnd: true
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Testimonial Card */}
          <div className="feature-card lg:col-span-4 bg-white border border-black/5 rounded-[32px] p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-700 gpu-accelerated">
            <div>
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-medium text-slate-900 leading-snug">
                "We needed a bespoke curation for our estate, and Handly delivered beyond our expectations. From the material selection to the final finish, everything feels cohesive and masterfully crafted."
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-12">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                  alt="Lena M" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Lena M.</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Retreat Owner</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 01 */}
            <div className="feature-card group relative rounded-[32px] overflow-hidden bg-slate-50 h-[300px] gpu-accelerated">
              <img 
                src="/handlychairs/15.png" 
                alt="Meticulous detail" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            </div>

            <div className="feature-card bg-slate-50 rounded-[32px] p-10 flex flex-col justify-between border border-black/5 hover:bg-white hover:shadow-xl transition-all duration-700 gpu-accelerated">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01</span>
                <MoveUpRight size={16} className="text-slate-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Meticulous detail</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Every joint and finish is executed with precision, ensuring our projects help spaces generate real emotional value.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="feature-card bg-slate-50 rounded-[32px] p-10 flex flex-col justify-between border border-black/5 hover:bg-white hover:shadow-xl transition-all duration-700 gpu-accelerated">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02</span>
                <MoveUpRight size={16} className="text-slate-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Sustainable by Nature</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We use certified hardwoods and eco-conscious finishes that respect the environment while delivering lasting quality.
                </p>
              </div>
            </div>

            <div className="feature-card group relative rounded-[32px] overflow-hidden bg-slate-50 h-[300px] gpu-accelerated">
              <img 
                src="/handlychairs/16.png" 
                alt="Sustainable by Nature" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="feature-stats-row grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-slate-100">
          <div className="feature-stat-item">
            <div className="text-4xl font-black text-slate-900 mb-2">15+</div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Years of Experience</p>
          </div>
          <div className="feature-stat-item">
            <div className="text-4xl font-black text-slate-900 mb-2">27+</div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Master Craftsmen</p>
          </div>
          <div className="feature-stat-item">
            <div className="text-4xl font-black text-slate-900 mb-2">95%</div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Client satisfaction rate</p>
          </div>
          <div className="feature-stat-item">
            <div className="text-4xl font-black text-slate-900 mb-2">50k+</div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Homes transformed globally</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
