import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const { Phone, Mail, MapPin, Clock, ArrowRight, ChevronDown, CheckCircle2 } = LucideIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Product Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp Message
    const whatsappNumber = "917034026662";
    const text = `*New Wholesale Inquiry from Handly Furniture Website*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Subject:* ${formData.subject}%0A` +
                 `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Hero Section - More Compact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
          <div className="space-y-4">
            {/* Ghost Text - Corrected variable and visibility */}
            <div className="relative h-16 md:h-24 overflow-hidden select-none pointer-events-none mb-4">
              <span
                className="absolute left-0 bottom-0 text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none opacity-30"
                style={{
                  WebkitTextStroke: '1px var(--color-brand-brown)',
                  color: 'transparent'
                }}
              >
                CONTACT
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Let's craft your <br />
              <span className="text-brand-brown italic font-serif serif">Masterpiece.</span>
            </h1>
          </div>
          <div className="max-w-md pb-1">
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Whether you have a specific vision in mind or need expert guidance on curated pieces, our design consultants are ready to assist.
            </p>
          </div>
        </div>

        {/* Contact Grid - Tightened */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Contact Info (Left) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10">
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-brown/5 flex items-center justify-center text-brand-brown group-hover:bg-brand-brown group-hover:text-white transition-all duration-500">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Call Us</p>
                  <p className="text-base font-bold text-slate-900 tracking-tight">+91 7034 026 662</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-brown/5 flex items-center justify-center text-brand-brown group-hover:bg-brand-brown group-hover:text-white transition-all duration-500">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Email Us</p>
                  <p className="text-base font-bold text-slate-900 tracking-tight">care@handly.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-brown/5 flex items-center justify-center text-brand-brown group-hover:bg-brand-brown group-hover:text-white transition-all duration-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Visit Showroom</p>
                  <p className="text-base font-bold text-slate-900 tracking-tight">Main Road, Calicut, Kerala</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-brown/5 flex items-center justify-center text-brand-brown group-hover:bg-brand-brown group-hover:text-white transition-all duration-500">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Opening Hours</p>
                  <p className="text-base font-bold text-slate-900 tracking-tight">Mon — Sat: 10AM - 8PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-100 flex gap-3">
              <a href="#instagram" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-brown hover:text-brand-brown transition-all">
                <Instagram size={16} />
              </a>
              <a href="#facebook" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-brown hover:text-brand-brown transition-all">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm min-h-[400px] flex flex-col justify-center">
              {submitted ? (
                <div className="text-center space-y-6 animate-fade-in-up">
                  <div className="w-20 h-20 bg-brand-brown text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Message Sent!</h2>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. Our design consultants will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-brown font-bold uppercase tracking-widest text-xs hover:text-black transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown/10 transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown/10 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Inquiry Subject</label>
                    <div className="relative">
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown/10 transition-all appearance-none text-sm cursor-pointer pr-12"
                      >
                        <option>Wholesale Product Inquiry</option>
                        <option>Showroom Visit</option>
                        <option>Bulk Custom Order Request</option>
                        <option>General Feedback</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                    <textarea
                      required
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-white border border-slate-200 px-5 py-3.5 rounded-xl focus:outline-none focus:border-brand-brown focus:ring-1 focus:ring-brand-brown/10 transition-all resize-none text-sm"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`group flex items-center gap-5 bg-brand-brown text-white pl-8 pr-3 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-black'}`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Wholesale Inquiry'}</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - Refined Rounded Rectangle */}
      <div className="mt-24 animate-fade-in-up">
          <div className="mb-10 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-3 block">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-brown leading-none uppercase tracking-tighter">Visit our Showroom</h2>
          </div>
          
          <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 grayscale hover:grayscale-0 transition-all duration-1000 mx-auto max-w-5xl">
            <iframe 
              src="https://www.google.com/maps?q=Kochi,+Kerala&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Handly Furniture Showroom Location"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
