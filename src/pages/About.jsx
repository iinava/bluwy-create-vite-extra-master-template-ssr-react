import React from 'react';
import * as LucideIcons from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
const { Users, Target, BarChart3, Clock, Trophy, Quote } = LucideIcons;

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, label: 'Craftsmen', value: '120+' },
    { icon: <Target className="w-6 h-6" />, label: 'Global Projects', value: '500+' },
    { icon: <Trophy className="w-6 h-6" />, label: 'Design Awards', value: '15' },
  ];

  const founders = [
    {
      name: 'Vikram Aiswarya',
      role: 'Master Craftsman & Visionary',
      bio: 'With over 40 years of experience in traditional woodworking, Vikram founded Aiswarya with a vision to blend heritage techniques with modern luxury.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Ananya Sharma',
      role: 'Chief Design Officer',
      bio: 'An alumni of Milan Design Institute, Ananya brings a contemporary editorial aesthetic to every piece we create.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Rooted in Vision Section - Simplified Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
          <div className="space-y-4">
             {/* Ghost Text */}
            <div className="relative h-16 md:h-24 overflow-hidden select-none pointer-events-none mb-4">
              <span 
                className="absolute left-0 bottom-0 text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none opacity-30"
                style={{ 
                  WebkitTextStroke: '1px var(--color-brand-brown)', 
                  color: 'transparent' 
                }}
              >
                ABOUT
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Rooted in Vision. <br />
              <span className="text-brand-brown italic font-serif serif">Driven by Detail.</span>
            </h1>
          </div>
          <div className="max-w-md pb-1">
            <p className="text-slate-500 text-base md:text-lg leading-relaxed border-l-2 border-brand-gold/20 pl-6">
              Since day one, we've believed that spaces and people shape each other. Our passion for craftsmanship drives every project we undertake.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-8 text-slate-600 text-lg leading-relaxed animate-fade-in-up">
            <p>
              What started as a small design studio has grown into a full-service artisanal furniture agency. Every piece is crafted with precision, a deep understanding of heritage, and a forward-thinking approach to luxury.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
              <div className="space-y-2">
                <span className="text-4xl font-bold text-slate-400">120+</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Homes transformed</h3>
                  <p className="text-sm text-slate-500">From coastal villas to modern penthouses.</p>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-4xl font-bold text-slate-400">2,000+</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Satisfied Clients</h3>
                  <p className="text-sm text-slate-500">Delighting homeowners and collectors globally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Rectangular Image - Simplified Hero */}
          <div className="lg:col-span-6 animate-fade-in-up delay-200">
            <div className="rounded-[3rem] overflow-hidden aspect-[4/3] md:aspect-[16/10] shadow-2xl border border-black/5">
              <img 
                src="https://kamlesh-electronics-assets.s3.me-central-1.amazonaws.com/NAVANEETH11_cdd9385c_aerial_shot.png" 
                alt="Our Artisanal Workshop Aerial View" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services & Stats Unified Section */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="animate-fade-in-up">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">Excellence in Service</span>
            <h2 className="text-4xl lg:text-6xl font-black text-brand-brown leading-none uppercase tracking-tighter">OUR SPECIALIZED <br /> SERVICES</h2>
          </div>
          <div className="lg:max-w-md text-brand-taupe/70 animate-fade-in-up delay-200">
            <p className="text-lg">We provide end-to-end artisanal solutions, from initial sketch to final installation, ensuring every detail exceeds expectations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Bespoke Crafting", 
              desc: "Individually handcrafted pieces tailored to your specific vision and architectural space.",
              icon: <Quote size={20} className="text-brand-gold" />,
              type: 'service'
            },
            { 
              title: "Interior Curation", 
              desc: "Expert design consultation to harmonize your furniture with your home's unique character.",
              icon: <Target size={20} className="text-brand-gold" />,
              type: 'service'
            },
            { 
              title: "Material Sourcing", 
              desc: "Meticulous selection of the world's finest, sustainably harvested hardwoods and veneers.",
              icon: <Trophy size={20} className="text-brand-gold" />,
              type: 'service'
            },
            { 
              title: "Global Delivery", 
              desc: "White-glove logistics ensuring your masterpieces arrive in perfect condition, anywhere.",
              icon: <BarChart3 size={20} className="text-brand-gold" />,
              type: 'service'
            },
            { 
              title: "120+ Craftsmen", 
              desc: "A dedicated team of master artisans preserving traditional woodworking heritage.",
              icon: <Users size={20} className="text-brand-gold" />,
              type: 'stat'
            },
            { 
              title: "500+ Projects", 
              desc: "Successfully transformed luxury homes and commercial spaces across the globe.",
              icon: <Target size={20} className="text-brand-gold" />,
              type: 'stat'
            },
            { 
              title: "15 Awards", 
              desc: "Recognized internationally for our commitment to design excellence and innovation.",
              icon: <Trophy size={20} className="text-brand-gold" />,
              type: 'stat'
            },
            { 
              title: "40+ Years", 
              desc: "Four decades of unwavering commitment to quality and architectural integrity.",
              icon: <Clock size={20} className="text-brand-gold" />,
              type: 'stat'
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-[40px] bg-brand-light border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-700 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="mb-6 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-brown group-hover:text-white transition-all duration-700">
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-brand-brown mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-brand-taupe/60 leading-relaxed text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="animate-fade-in-up">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-taupe mb-4 block">The Visionaries</span>
            <h2 className="text-3xl lg:text-5xl font-black text-brand-brown leading-none uppercase tracking-tighter">MEET THE <br /> FOUNDERS</h2>
          </div>
          <div className="lg:max-w-md text-brand-taupe/70 animate-fade-in-up delay-200">
            <p>Our leadership combines decades of traditional craftsmanship with a forward-thinking approach to luxury design.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {founders.map((founder, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row items-center md:items-start gap-8 animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
              <div className="relative shrink-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-slate-50 shadow-inner">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="text-center md:text-left pt-2">
                <h3 className="text-2xl font-black text-brand-brown mb-1 uppercase tracking-tight">{founder.name}</h3>
                <p className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-4">{founder.role}</p>
                <p className="text-slate-500 leading-relaxed text-sm max-w-sm">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default About;
