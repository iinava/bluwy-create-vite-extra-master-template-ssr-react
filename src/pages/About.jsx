import React from 'react';
import * as LucideIcons from 'lucide-react';
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
    <div className="pt-32 pb-20 bg-white">
      {/* Rooted in Vision Section - New Design */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative">
        {/* Ghost Text */}
        <div className="absolute top-0 left-6 select-none pointer-events-none opacity-10 -translate-y-12">
          <span 
            className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none"
            style={{ 
              WebkitTextStroke: '1px #000', 
              color: 'transparent' 
            }}
          >
            ABOUT US
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 mb-10 leading-[1.1] tracking-tight">
              Rooted in Clear Vision. <br />
              Driven by Detail.
            </h1>
            
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed mb-16 max-w-xl">
              <p>
                Since day one, we've believed that spaces and people shape each other. 
                What started as a small design studio has grown into a full-service interior design firm.
              </p>
              <p>
                Our passion for creativity, functionality, and craftsmanship drives every project. 
                Every project we undertake is crafted with precision, attention to detail, and a deep understanding of our clients' needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-3">
                <span className="text-5xl font-bold text-slate-400">120+</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Homes transformed</h3>
                  <p className="text-slate-500">From apartments to luxurious villas, each project is a unique</p>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-5xl font-bold text-slate-400">2,000+</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Satisfied Clients</h3>
                  <p className="text-slate-500">Transforming spaces, delighting homeowners and investors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid Layout */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fade-in-up delay-200">
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-[32px] md:rounded-[48px] overflow-hidden aspect-square md:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern interior detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[32px] md:rounded-[48px] overflow-hidden aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800" 
                  alt="Classical architectural door" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-[32px] md:rounded-[48px] overflow-hidden aspect-[3/5] md:aspect-[2/3] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800" 
                  alt="Minimalist chair design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Bespoke Crafting", 
              desc: "Individually handcrafted pieces tailored to your specific vision and architectural space.",
              icon: <Quote size={24} className="text-brand-gold" />
            },
            { 
              title: "Interior Curation", 
              desc: "Expert design consultation to harmonize your furniture with your home's unique character.",
              icon: <Target size={24} className="text-brand-gold" />
            },
            { 
              title: "Material Sourcing", 
              desc: "Meticulous selection of the world's finest, sustainably harvested hardwoods and veneers.",
              icon: <Trophy size={24} className="text-brand-gold" />
            },
            { 
              title: "Global Delivery", 
              desc: "White-glove logistics ensuring your masterpieces arrive in perfect condition, anywhere.",
              icon: <BarChart3 size={24} className="text-brand-gold" />
            }
          ].map((service, idx) => (
            <div key={idx} className="group p-10 rounded-[40px] bg-brand-light border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-700 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="mb-8 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-brown group-hover:text-white transition-all duration-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-brand-brown mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-brand-taupe/70 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="bg-brand-brown py-32 text-brand-light overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-taupe/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tight">Our Philosophy</h2>
            <div className="w-20 h-1 bg-brand-light/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Honesty in Materials', desc: 'We only use sustainably sourced, premium hardwoods. No veneers, no shortcuts.' },
              { title: 'Timeless Aesthetic', desc: 'We design for generations, not for seasons. Our aesthetic is eternal.' },
              { title: 'Soulful Craft', desc: 'A machine can replicate, but only a human hand can give life to furniture.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
                <h3 className="text-2xl font-bold mb-4 text-white/90">{item.title}</h3>
                <p className="text-brand-light/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (Merged or kept as is) */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-xl p-8 rounded-[32px] shadow-xl border border-black/5 group hover:bg-brand-brown hover:translate-y-[-8px] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-brand-brown group-hover:text-white mb-4 transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-brand-brown group-hover:text-white mb-1 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-taupe group-hover:text-white/60 transition-colors">
                {stat.label}
              </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, idx) => (
            <div key={idx} className="group animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
              <div className="relative overflow-hidden rounded-[40px] mb-8">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <Quote className="text-white/20 w-20 h-20 absolute top-10 right-10" />
                  <p className="text-white text-lg italic font-light leading-relaxed">
                    "Craftsmanship is the bridge between history and luxury."
                  </p>
                </div>
              </div>
              <h3 className="text-3xl font-black text-brand-brown mb-2 uppercase tracking-tight">{founder.name}</h3>
              <p className="text-brand-taupe font-bold uppercase tracking-widest text-sm mb-4">{founder.role}</p>
              <p className="text-brand-taupe/70 leading-relaxed">{founder.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-brand-taupe/5 border border-brand-brown/10 rounded-[48px] p-12 lg:p-24 text-center">
          <h2 className="text-2xl lg:text-4xl font-black text-brand-brown mb-8 uppercase tracking-tighter">Experience Our Showroom</h2>
          <p className="text-brand-taupe/80 max-w-2xl mx-auto mb-10 text-lg">Visit us in Kochi to experience the tactile beauty of our pieces in person. Our design consultants are ready to help you craft your legacy.</p>
          <button className="bg-brand-brown text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-2xl active:scale-95">
            Book a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
