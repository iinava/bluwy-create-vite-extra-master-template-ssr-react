import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! Welcome to Aiswarya Furniture 👋 How can we help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  
  const whatsappNumber = "917025032459";

  const chatFlow = [
    { 
      id: 1,
      question: "Explore the Catalog", 
      answer: "You can view our entire archive in the Catalog section of this site. Would you like me to send you our latest PDF collection via WhatsApp?",
      waMessage: "Hi! I'd like to receive your latest PDF catalog."
    },
    { 
      id: 2,
      question: "Custom Design Inquiry", 
      answer: "We specialize in bespoke pieces. Our chief designer Ananya can help bring your vision to life. Let's discuss your requirements on WhatsApp!",
      waMessage: "Hello, I'm interested in a custom design project. Can I speak with a designer?"
    },
    { 
      id: 3,
      question: "Visit Showroom", 
      answer: "Our showroom is located in the heart of Calicut. You can find our exact location, hours, and contact details on our Contact page.",
      link: "/contact",
      linkLabel: "View Location & Details"
    },
    { 
      id: 4,
      question: "Delivery & Shipping", 
      answer: "We offer white-glove global delivery. Standard pieces take 4-6 weeks to craft and ship. Need a specific quote for your location?",
      waMessage: "Hi, I have a question about delivery times and shipping costs."
    }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleQuestionClick = (item) => {
    setMessages(prev => [...prev, { type: 'user', text: item.question }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: item.answer, 
        waMessage: item.waMessage,
        link: item.link,
        linkLabel: item.linkLabel
      }]);
    }, 1000);
  };

  const handleWhatsApp = (msg = "Hi Aiswarya Furniture, I have an inquiry.") => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] font-sans pointer-events-none">
      {/* Chat Window - Reduced sizes for desktop */}
      <div 
        className={`absolute bottom-14 md:bottom-16 right-0 w-[270px] sm:w-[310px] bg-white rounded-[1.2rem] sm:rounded-[1.8rem] shadow-[0_15px_50px_rgba(0,0,0,0.15)] border border-black/5 overflow-hidden transition-all duration-500 origin-bottom-right pointer-events-auto flex flex-col ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header - More compact */}
        <div className="bg-brand-brown p-4 sm:p-5 text-white relative shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center font-black text-sm sm:text-base text-brand-brown border border-white/20">
              AF
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm tracking-tight">Aiswarya Assistant</h3>
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest opacity-80 font-black">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/60 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body - Reduced max height */}
        <div 
          ref={scrollRef}
          className="p-3 sm:p-4 space-y-3 max-h-[280px] sm:max-h-[320px] overflow-y-auto bg-white scroll-smooth"
        >
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
            >
              <div 
                className={`max-w-[85%] p-2.5 sm:p-3 rounded-[1rem] text-[11px] sm:text-[12px] leading-relaxed shadow-sm ${
                  msg.type === 'user' 
                    ? 'bg-brand-gold text-white rounded-tr-none' 
                    : 'bg-[#F3F4F6] text-slate-700 rounded-tl-none'
                }`}
              >
                {msg.text}
                
                {msg.waMessage && (
                  <button 
                    onClick={() => handleWhatsApp(msg.waMessage)}
                    className="mt-2 block text-[9px] font-black uppercase tracking-widest text-brand-gold hover:text-brand-brown transition-colors"
                  >
                    Continue on WhatsApp →
                  </button>
                )}

                {msg.link && (
                  <Link 
                    to={msg.link}
                    onClick={() => setIsOpen(false)}
                    className="mt-2 inline-block px-3 py-1.5 bg-brand-brown text-white rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-black transition-colors shadow-sm"
                  >
                    {msg.linkLabel}
                  </Link>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start animate-fade-in-up">
              <div className="bg-[#F3F4F6] p-2.5 rounded-2xl rounded-tl-none border border-black/5 flex space-x-1">
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Questions Selector - More compact chips */}
        <div className="px-3 sm:px-4 pb-3 pt-1 border-t border-slate-50 shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {chatFlow.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleQuestionClick(item)}
                className="px-3 py-1.5 rounded-full border border-brand-brown/10 text-[9px] sm:text-[10px] font-bold text-brand-brown bg-white hover:bg-brand-brown/5 transition-all duration-300 whitespace-nowrap"
              >
                {item.question}
              </button>
            ))}
          </div>
        </div>

        {/* Footer - Smaller button */}
        <div className="p-3 sm:p-4 border-t border-slate-50 bg-white shrink-0">
          <button 
            onClick={() => handleWhatsApp()}
            className="flex items-center justify-center space-x-2 w-full py-2.5 sm:py-3 bg-[#22C55E] text-white rounded-lg sm:rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-widest hover:brightness-105 transition-all transform active:scale-95"
          >
            <MessageCircle size={14} />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Floating Toggle Button - Slightly smaller */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 active:scale-90 pointer-events-auto ${
          isOpen ? 'bg-white text-brand-brown rotate-90' : 'bg-brand-brown text-white hover:scale-105'
        }`}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-brand-gold rounded-full border-2 border-white animate-bounce"></span>
        )}
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        div::-webkit-scrollbar {
          width: 3px;
        }
        div::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
      `}} />
    </div>
  );
};

export default WhatsAppWidget;
