import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const duration = 800; // Much faster, snappier animation

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease Out Cubic easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easeOut * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

export const DetailedStats = () => {
  const stats = [
    { value: 15, suffix: "+", label: "Industry Best Awards" },
    { value: 10000, suffix: "+", label: "Satisfied Customers" },
    { value: 3000, suffix: "+", label: "Designs of furniture" },
    { value: 1000, suffix: "+", label: "Unique ideas created" }
  ];

  return (
    <section className="bg-[#fcfaf8] py-20 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 text-center px-4">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-brown mb-4 tracking-tight">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-brand-taupe/60">
                  {stat.label}
                </p>
              </div>
              
              {idx < stats.length - 1 && (
                <div className="hidden md:block w-[1px] h-16 bg-brand-brown/10"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
