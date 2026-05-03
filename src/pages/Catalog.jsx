import React, { useState, useMemo } from 'react';
import { Filter, ArrowUpRight, Search } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Aurelian Throne",
    category: "Armchairs",
    price: "$4,200",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=1000&fit=crop"
  },
  {
    id: 2,
    name: "Midnight Obsidian Table",
    category: "Dining",
    price: "$12,800",
    image: "https://images.unsplash.com/photo-1577145900570-7c050c7793d0?w=800&h=1000&fit=crop"
  },
  {
    id: 3,
    name: "Ethereal Cloud Sofa",
    category: "Living",
    price: "$8,500",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=1000&fit=crop"
  },
  {
    id: 4,
    name: "Marble Monolith Sideboard",
    category: "Storage",
    price: "$6,400",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=1000&fit=crop"
  },
  {
    id: 5,
    name: "Venetian Velvet Ottoman",
    category: "Accessories",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=1000&fit=crop"
  },
  {
    id: 6,
    name: "Gilded Oak Credenza",
    category: "Storage",
    price: "$9,200",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&h=1000&fit=crop"
  },
  {
    id: 7,
    name: "Zenith Pendant Light",
    category: "Lighting",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=1000&fit=crop"
  },
  {
    id: 8,
    name: "Onyx Minimalist Bed",
    category: "Bedroom",
    price: "$7,800",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=1000&fit=crop"
  }
];

const categories = ["All", "Living", "Dining", "Storage", "Armchairs", "Bedroom", "Lighting"];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-20 px-6 md:px-12 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Revamped Typography Layout Header */}
        <div className="relative mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="relative">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-gold mb-8 block animate-fade-in-up">Collection Eight / Twenty Six</span>
              <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-brand-brown tracking-tighter uppercase leading-[0.8] animate-fade-in-up">
                THE <br />
                <span className="relative">
                  ARCHIVE
                  <span className="absolute -top-2 -right-10 text-xs font-serif italic normal-case text-brand-gold/60 tracking-normal">vol. 01</span>
                </span>
              </h1>
            </div>
            
            <div className="lg:max-w-md animate-fade-in-up delay-200">
              <p className="text-brand-brown/50 text-sm md:text-base font-medium leading-relaxed mb-8 border-l-2 border-brand-gold/20 pl-6">
                A definitive curation of our most celebrated works. Each piece is an intersection of historical mastery and contemporary architectural form.
              </p>
              <div className="flex items-center space-x-6">
                <div className="h-[1px] w-12 bg-brand-brown/20"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-brown/40">Since 1981</span>
              </div>
            </div>
          </div>

          {/* Floating Search Element */}
          <div className="absolute top-0 right-0 hidden xl:block animate-fade-in-up delay-300">
            <div className="group relative">
              <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-all"></div>
              <button className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border border-black/5 hover:bg-brand-brown hover:text-white transition-all duration-500">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20 pb-8 border-b border-black/5">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
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
          
          <div className="flex items-center space-x-4">
            <Filter size={16} className="text-brand-brown/20" />
            <span className="text-[10px] font-bold text-brand-brown/40 uppercase tracking-widest">Sort By: Featured</span>
          </div>
        </div>

        {/* Refined Grid Layout (4-column on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product, idx) => (
            <div 
              key={`${product.id}-${activeCategory}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Smaller Card Proportions */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-brand-cream border border-black/5 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Minimal Overlay Icons */}
                <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-brand-brown flex items-center justify-center shadow-lg hover:bg-brand-brown hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="px-3 py-1.5 bg-brand-brown/10 backdrop-blur-sm rounded-full text-[9px] font-black uppercase tracking-widest text-brand-brown">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Refined Typography for Details */}
              <div className="px-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-bold text-brand-brown tracking-tight leading-tight group-hover:text-brand-gold transition-colors duration-500">
                    {product.name}
                  </h3>
                  <span className="text-xs font-black text-brand-brown/80">{product.price}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-taupe/40">{product.category}</span>
                  <div className="w-1 h-1 rounded-full bg-brand-gold/40"></div>
                  <span className="text-[9px] font-bold text-brand-taupe/30">Masterpiece</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-32 border-t border-black/5 pt-20 flex flex-col items-center">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-brown/20 mb-12">End of Collection</div>
          <button className="relative overflow-hidden group px-12 py-5 rounded-full border border-brand-brown text-brand-brown hover:text-white transition-colors duration-500">
            <span className="absolute inset-0 bg-brand-brown translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.3em]">Load Next Volume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
