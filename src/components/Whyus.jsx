'use client'
import React from 'react'
import * as LucideIcons from 'lucide-react';
const { Star, Award, Target, Zap, Shield, ArrowUpRight } = LucideIcons;

export const AboutWhyUs = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 relative font-manrope min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#efefef_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter">
              Why us
            </h2>
            <ul className="space-y-4 grid grid-cols-2 gap-2 items-center">
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <Award className="size-4 text-slate-900" /> Experience
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <Target className="size-4 text-slate-900" /> Consistency
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <Zap className="size-4 text-slate-900" /> Quality
              </li>
              <li className="flex items-center gap-3 text-slate-500 font-medium">
                <Shield className="size-4 text-slate-900" /> Dedication
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex gap-1 text-orange-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
              <span className="text-xs font-bold text-slate-900 ml-2">
                5.0 / 5
              </span>
            </div>
            <p className="text-slate-600 text-pretty italic text-lg leading-relaxed">
              "We asked Naymur to redesign our brand and website from scratch,
              and they absolutely nailed it."
            </p>
            <div>
              <p className="font-bold text-slate-900">Sarah Mitchell</p>
              <p className="text-sm text-slate-400">
                Marketing Director, Lunoa
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-12">
          <div className="max-w-2xl ml-auto text-right md:text-left">
            <h3 className="text-3xl font-medium text-slate-900 leading-tight text-pretty">
              We design and build tailored digital experiences that not only
              elevate your brand visually but also deliver measurable results
              that support long-term business growth.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-end">
            <StatColumn
              number="105+"
              label="Completed projects"
              sub="for growing brands"
            />
            <StatColumn
              number="92%"
              label="Client retention rate"
              sub="over the past 3 years"
            />
            <StatColumn
              number="1M+"
              label="Users reached through"
              sub="websites we've designed"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const StatColumn = ({ number, label, sub }) => (
  <div className="group relative bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-brand-brown/5 flex flex-col justify-between min-h-[220px] md:min-h-[320px] transition-all duration-700 hover:bg-brand-brown shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(61,43,31,0.3)] hover:-translate-y-4 overflow-hidden">
    {/* Animated Background Element */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-gold/5 rounded-full group-hover:bg-white/10 transition-all duration-700 blur-2xl"></div>
    
    <div className="relative z-10">
      <div className="w-8 md:w-12 h-[1px] bg-brand-gold mb-4 md:mb-6 transition-all duration-700 group-hover:w-24 group-hover:bg-white"></div>
      <span className="text-4xl md:text-6xl font-black text-brand-brown tracking-tighter transition-colors duration-500 group-hover:text-white">
        {number}
      </span>
    </div>

    <div className="relative z-10 space-y-1 md:space-y-2">
      <p className="text-base md:text-lg font-bold text-brand-brown leading-tight transition-colors duration-500 group-hover:text-white">
        {label}
      </p>
      <p className="text-[10px] md:text-sm text-brand-taupe opacity-60 transition-colors duration-500 group-hover:text-white/60 group-hover:opacity-100">
        {sub}
      </p>
    </div>
  </div>
)

