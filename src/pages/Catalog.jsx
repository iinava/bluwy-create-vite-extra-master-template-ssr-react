import React, { useRef } from 'react';
import { MessageCircle, Download } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const whatsappNumber = "+917025032459";
const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent("Hi Handly Furniture, I'd like to enquire about a wholesale order.")}`;

const products = [
  { id: 1, image: "/handlychairs/5.png" },
  { id: 2, image: "/handlychairs/6.png" },
  { id: 3, image: "/handlychairs/7.png" },
  { id: 4, image: "/handlychairs/8.png" },
  { id: 5, image: "/handlychairs/9.png" },
  { id: 6, image: "/handlychairs/20.png" },
  { id: 7, image: "/handlychairs/21.png" },
  { id: 8, image: "/handlychairs/22.png" },
];

const marbleProducts = [
  { id: 101, image: "/marbles/arabestaco gold.png" },
  { id: 102, image: "/marbles/marble2.png" },
  { id: 103, image: "/marbles/marble3.png" },
  { id: 104, image: "/marbles/marble4.png" }
];

const Catalog = () => {
  const container = useRef(null);

  useGSAP(() => {
    // 3D Tilt for Product Cards
    const cards = gsap.utils.toArray(".product-card");
    cards.forEach(card => {
      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        gsap.to(card, { rotateX, rotateY, transformPerspective: 1000, duration: 0.8, ease: "power3.out", overwrite: "auto", force3D: true });
        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, { x: ((x - centerX) / centerX) * -6, y: ((y - centerY) / centerY) * -6, duration: 1, ease: "power2.out", overwrite: "auto", force3D: true });
        }
      };
      const onMouseLeave = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 1.2, ease: "elastic.out(1, 0.75)", overwrite: "auto", force3D: true });
        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, { x: 0, y: 0, duration: 1.2, ease: "power2.out", overwrite: "auto", force3D: true });
        }
      };
      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    });

    // Header reveal
    gsap.fromTo(".catalog-reveal",
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".catalog-header", start: "top 95%", fastScrollEnd: true }
      }
    );

    // Gallery reveal
    ScrollTrigger.batch(".product-card", {
      onEnter: (elements) => {
        gsap.fromTo(elements,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.8, ease: "expo.out", force3D: true, overwrite: true }
        );
      },
      start: "top 98%",
      fastScrollEnd: true
    });
  }, { scope: container });

  return (
    <div ref={container} className="pt-24 pb-20 px-6 md:px-12 bg-brand-light min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="catalog-header grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <div className="space-y-4">
            <div className="catalog-reveal relative h-16 md:h-24 overflow-hidden select-none pointer-events-none mb-4">
              <span
                className="absolute left-0 bottom-0 text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none opacity-10"
                style={{ WebkitTextStroke: '1px var(--color-brand-brown)', color: 'transparent' }}
              >
                CATALOG
              </span>
            </div>
            <h1 className="catalog-reveal text-4xl md:text-6xl font-black text-brand-brown leading-[0.9] uppercase tracking-tighter">
              THE FINEST <br />
              <span className="text-brand-gold italic font-serif serif">ARCHIVE.</span>
            </h1>
          </div>
          <div className="catalog-reveal max-w-md pb-1">
            <p className="text-brand-taupe/70 text-lg leading-relaxed border-l-2 border-brand-gold/20 pl-6">
              A definitive curation of our most celebrated works. Each piece is an intersection of historical mastery and contemporary architectural form.
            </p>
          </div>
        </div>

        {/* CTA Bar - Improved with multiple downloads */}
        <div className="catalog-reveal flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16 pb-10 border-b border-black/5">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-brand-brown text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:bg-brand-gold hover:shadow-[0_10px_30px_rgba(197,160,89,0.3)] active:scale-95 w-full lg:w-auto"
          >
            <MessageCircle size={14} className="group-hover:scale-110 transition-transform duration-500" />
            <span className="relative z-10">Wholesale Enquiry</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a
              href="/handlychair.pdf"
              download="handlychair.pdf"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-brand-brown/20 text-brand-brown rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 hover:border-brand-gold hover:text-brand-gold active:scale-95 w-full sm:w-auto"
            >
              <Download size={14} className="group-hover:-translate-y-1 transition-transform duration-500" />
              <span>Furniture PDF</span>
            </a>
            
            <a
              href="/handlymarble.pdf"
              download="handlymarble.pdf"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-brand-brown/20 text-brand-brown rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 hover:border-brand-gold hover:text-brand-gold active:scale-95 w-full sm:w-auto"
            >
              <Download size={14} className="group-hover:-translate-y-1 transition-transform duration-500" />
              <span>Marble Tops PDF</span>
            </a>
          </div>
        </div>

        {/* Furniture Gallery */}
        <div className="mb-20">
          <div className="catalog-reveal flex items-center gap-4 mb-8">
            <div className="w-8 h-[2px] bg-brand-gold"></div>
            <h2 className="text-2xl font-black text-brand-brown uppercase tracking-tight">Furniture Collection</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card group gpu-accelerated cursor-default"
                style={{ transformStyle: 'preserve-3d', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] sm:rounded-[24px] bg-brand-cream border border-black/5 shadow-sm group-hover:shadow-xl transition-shadow duration-700">
                  <img
                    src={product.image}
                    alt="Handly furniture piece"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marble Tops Gallery */}
        <div>
          <div className="catalog-reveal flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-brand-gold"></div>
            <h2 className="text-2xl font-black text-brand-brown uppercase tracking-tight">Premium Marble Tops</h2>
          </div>
          
          <div className="catalog-reveal mb-10 max-w-5xl">
            <div className="flex flex-wrap gap-2">
              {["Pearl Cream Onyx", "Alfa Beige", "Skyrose Gold", "Bottochino Venato", "Alfa White", "William Grey", "Antresit Bianco", "Arabescato Gold", "Crysta Lonyx", "Amron Beige", "Avira Beige", "Breccia Oniciata", "Branco Commum", "Ebony Beige", "Amron Beige Carving", "Avira Beige Carving"].map((marble, idx) => (
                <span key={idx} className="text-[10px] font-black uppercase tracking-[0.1em] text-brand-brown bg-white px-3 py-1.5 rounded-full border border-black/5 hover:border-brand-gold hover:text-brand-gold transition-colors cursor-default shadow-sm">
                  {marble}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marbleProducts.map((marble) => (
              <div
                key={marble.id}
                className="product-card group gpu-accelerated cursor-default max-w-[90%] sm:max-w-none mx-auto w-full"
                style={{ transformStyle: 'preserve-3d', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              >
                <div className="relative aspect-video overflow-hidden rounded-[16px] sm:rounded-[24px] bg-brand-cream border border-black/5 shadow-sm group-hover:shadow-xl transition-shadow duration-700">
                  <img
                    src={marble.image}
                    alt="Handly premium marble tops"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-black/5" />
      </div>
    </div>
  );
};

export default Catalog;
