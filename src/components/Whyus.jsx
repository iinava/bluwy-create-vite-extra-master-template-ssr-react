'use client'
import React from 'react'
import * as LucideIcons from 'lucide-react';
const { Star, Award, Target, Zap, Shield, ArrowUpRight } = LucideIcons;

export const AboutWhyUs = () => {
  return (
    <section className="py-24 px-6 bg-white relative font-manrope">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Why Us
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                We design and build tailored furniture experiences that elevate your space visually and deliver lasting emotional value.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100">
               <div className="flex gap-1 text-brand-gold mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <p className="text-slate-600 italic text-base leading-relaxed mb-4">
                "They absolutely nailed the craftsmanship for our retreat."
              </p>
              <p className="text-sm font-bold text-slate-900">Sarah Mitchell — Marketing Director</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatColumn
              number="105+"
              label="Completed projects"
              sub="for luxury brands"
            />
            <StatColumn
              number="92%"
              label="Client retention"
              sub="over the past 3 years"
            />
            <StatColumn
              number="15+"
              label="Years of Legacy"
              sub="in artisanal craft"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const StatColumn = ({ number, label, sub }) => (
  <div className="group p-6 border-b border-slate-100 md:border-b-0 md:border-r last:border-0 border-slate-100 flex flex-col justify-start transition-all duration-500">
    <div className="mb-6">
      <span className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter transition-colors duration-500 group-hover:text-brand-gold">
        {number}
      </span>
    </div>

    <div className="space-y-1">
      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">
        {label}
      </p>
      <p className="text-xs text-slate-400">
        {sub}
      </p>
    </div>
  </div>
)

