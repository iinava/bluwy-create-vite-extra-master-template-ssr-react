import React, { useState, useMemo, useRef } from 'react';
import { Filter, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const products = [
  {
    id: 1,
    name: "Aurelian Throne",
    category: "Armchairs",
    price: "$4,200",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&q=70&w=800&h=1000&fit=crop"
  },
  {
    id: 2,
    name: "Midnight Obsidian Table",
    category: "Dining",
    price: "$12,800",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&q=70&w=800&h=1000&fit=crop"
  },
  {
    id: 3,
    name: "Ethereal Cloud Sofa",
    category: "Living",
    price: "$8,500",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&q=70&w=800&h=1000&fit=crop"
  },
  {
    id: 4,
    name: "Marble Monolith Sideboard",
    category: "Storage",
    price: "$6,400",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&q=70&w=800&h=1000&fit=crop"
  },
  {
    id: 5,
    name: "Venetian Velvet Ottoman",
    category: "Accessories",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&q=70&w=800&h=1000&fit=crop"
  },
  {
    id: 6,
    name: "Gilded Oak Credenza",
    category: "Storage",
    price: "$9,200",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&q=70&w=800&h=1000&fit=crop"
  },
  {
    id: 7,
    name: "Zenith Pendant Light",
    category: "Lighting",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&q=70&w=800&h=1000&fit=crop"
  },
  {
    id: 8,
    name: "Onyx Minimalist Bed",
    category: "Bedroom",
    price: "$7,800",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&q=70&w=800&h=1000&fit=crop"
  }
];

const categories = ["All", "Living", "Dining", "Storage", "Armchairs", "Bedroom", "Lighting"];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const container = useRef(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

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
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });

        // Parallax effect for the image inside
        const img = card.querySelector("img");
        gsap.to(img, {
          x: ((x - centerX) / centerX) * -8,
          y: ((y - centerY) / centerY) * -8,
          duration: 1,
          ease: "power2.out",
          overwrite: "auto"
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          overwrite: "auto"
        });
        
        const img = card.querySelector("img");
        gsap.to(img, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          overwrite: "auto"
        });
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    });

    // Reveal Header
    gsap.fromTo(".catalog-reveal", 
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".catalog-header",
          start: "top 95%",
          fastScrollEnd: true
        }
      }
    );

    // Batch reveal for products - Optimized for Safari
    ScrollTrigger.batch(".product-card", {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { autoAlpha: 0, y: 30 },
          { 
            autoAlpha: 1, 
            y: 0, 
            stagger: 0.08, 
            duration: 0.8, 
            ease: "expo.out",
            force3D: true,
            overwrite: true 
          }
        );
      },
      start: "top 98%",
      fastScrollEnd: true
    });
  }, { scope: container, dependencies: [filteredProducts] });

  return (
    <div ref={container} className="pt-24 pb-20 px-6 md:px-12 bg-brand-light min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="catalog-header grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-20">
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

        {/* Filter Bar */}
        <div className="catalog-reveal flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20 pb-8 border-b border-black/5">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                  activeCategory === cat ? 'text-brand-brown' : 'text-brand-brown/30 hover:text-brand-brown'
                }`}
              >
                {cat}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-brand-gold transition-all duration-500 ${
                  activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-4'
                }`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Optimized Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card group gpu-accelerated"
              style={{ 
                transformStyle: 'preserve-3d',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-brand-cream border border-black/5 mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-700">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover scale-110"
                />
                
                {/* Simplified Overlay - Removed multiple backdrop-blurs for iOS performance */}
                <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <button 
                    className="w-10 h-10 rounded-full bg-white text-brand-brown flex items-center justify-center shadow-lg hover:bg-brand-gold hover:text-white transition-all"
                    style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="px-3 py-1.5 bg-brand-brown text-white/90 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                    Quick View
                  </span>
                </div>
              </div>

              <div className="px-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-black text-brand-brown tracking-tight leading-tight group-hover:text-brand-gold transition-colors duration-500 uppercase">
                    {product.name}
                  </h3>
                  <span className="text-xs font-black text-brand-brown/80">{product.price}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-taupe/40">{product.category}</span>
                  <div className="w-1 h-1 rounded-full bg-brand-gold/40"></div>
                  <span className="text-[9px] font-bold text-brand-taupe/30 uppercase">Aiswarya Original</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 border-t border-black/5"></div>
      </div>
    </div>
  );
};

export default Catalog;
