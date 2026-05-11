import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Flower from './Flower';
import Star from './Star';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const { ArrowRight } = LucideIcons;

const ProductGallery = () => {
  const container = useRef(null);

  const products = [
    {
      id: 1,
      name: 'Modern Living Set',
      image: '/handlychairs/21.png'
    },
    {
      id: 2,
      name: 'Curated Space',
      image: '/handlychairs/8.png'
    },
    {
      id: 3,
      name: 'Heritage Chair',
      image: '/handlychairs/gallery3.png'
    }
  ];

  useGSAP(() => {
    // Text Reveal
    gsap.fromTo(".gallery-text-item",
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 1,
        scrollTrigger: {
          trigger: ".gallery-text-content",
          start: "top 98%",
          fastScrollEnd: true
        }
      }
    );

    // Batched Image Reveals - Highly efficient for multiple items
    ScrollTrigger.batch(".gallery-card", {
      onEnter: (elements) => {
        gsap.fromTo(elements,
          { autoAlpha: 0, y: 60, scale: 0.9 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 1,
            ease: "expo.out",
            overwrite: true
          }
        );
      },
      start: "top 98%",
      fastScrollEnd: true
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#efefef_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>

      {/* Star - right side accent, spins opposite direction */}
      <Star size={120} speed={15} opacity="0.15" reverse className="absolute right-4 top-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

        {/* Typography - Left Side */}
        <div className="gallery-text-content relative w-full lg:w-[45%] space-y-8 order-2 lg:order-1">
          {/* Flower - kept near typography heading */}
          <Flower size={140} speed={20} opacity="0.18" className="absolute -right-4 lg:-left-12 top-0 lg:top-1/2 -translate-y-1/4 lg:-translate-y-1/2 -z-10 pointer-events-none" />
          <div className="space-y-4">
            <h2 className="gallery-text-item text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold">Featured Collection</h2>
            <h1 className="gallery-text-item text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Artistry in <br />
              <span className="text-brand-brown italic serif font-serif">Every Detail.</span>
            </h1>
            <p className="gallery-text-item text-slate-500 text-lg leading-relaxed max-w-md">
              We bring together heritage craftsmanship and modern silhouettes to create furniture that doesn't just fill a room—it completes a home.
            </p>
          </div>

          <div className="gallery-text-item pt-8">
            <Link
              to="/catalog"
              className="group inline-flex items-center gap-6 bg-brand-brown text-white pl-10 pr-4 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-brown transition-all duration-500 shadow-2xl active:scale-95"
            >
              <span>Explore Collection</span>
              <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-brand-brown/10 flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>

        {/* Photo Gallery - Right Side (Grid) */}
        <div className="w-full lg:w-[55%] grid grid-cols-2 gap-4 md:gap-6 items-center order-1 lg:order-2">
          {/* Column 1: Stacked */}
          <div className="space-y-4 md:space-y-6 flex flex-col">
            <div className="gallery-card group relative overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-xl transition-all duration-700 w-full h-[250px] md:h-[300px] lg:h-[320px] gpu-accelerated">
              <img src={products[0].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
            </div>

            <div className="gallery-card group relative overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-xl transition-all duration-700 w-full h-[250px] md:h-[300px] lg:h-[320px] gpu-accelerated">
              <img src={products[1].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
            </div>
          </div>

          {/* Column 2: Tall */}
          <div className="gallery-card group relative overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-xl transition-all duration-700 w-full h-[516px] md:h-[624px] lg:h-[664px] gpu-accelerated">
            <img src={products[2].image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductGallery;
