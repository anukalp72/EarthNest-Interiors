import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, Shield, Clock, Sparkles } from 'lucide-react';

export const DesignProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#151715] text-[#E5E1D8] border-t border-b border-[#E5E1D8]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0D0C] border border-[#E5E1D8]/10 text-[10px] font-bold text-[#2D4F3C] uppercase tracking-[0.3em]">
            <span>The EarthNest Approach</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E5E1D8] tracking-tight">
            How We Bring Your Vision To Life
          </h2>
          <p className="text-base text-[#E5E1D8]/70 font-light leading-relaxed">
            Our seamless 4-stage process combines contemporary design aesthetics with meticulous planning and zero-stress turnkey execution.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="bg-[#0C0D0C] p-7 rounded-2xl border border-[#E5E1D8]/10 hover:border-[#2D4F3C] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number with Serif Flair */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-4xl font-normal text-[#2D4F3C] group-hover:text-[#D9D2C5] transition-colors">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#2D4F3C]" />
                </div>

                <h3 className="font-serif text-lg font-normal text-[#E5E1D8] mb-1">
                  {step.title}
                </h3>
                
                <p className="text-[10px] font-bold text-[#2D4F3C] uppercase tracking-widest mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-[#E5E1D8]/65 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-6 pt-4 border-t border-[#E5E1D8]/10 flex items-center gap-1.5 text-[11px] text-[#E5E1D8]/80 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4F3C]" />
                <span>Stage {step.step} Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* 45-Day Delivery Assurance Box */}
        <div className="mt-12 bg-[#0C0D0C] rounded-2xl p-6 sm:p-8 border border-[#2D4F3C]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#151715] border border-[#2D4F3C]/40 text-[#2D4F3C] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-normal text-lg text-[#E5E1D8]">45-Day Handover Guarantee or We Pay Rent</h4>
              <p className="text-xs text-[#E5E1D8]/60 mt-0.5 font-light">
                Our automated factory fabrication ensures your home in Patna is delivered on time, dust-free, and move-in ready.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#D9D2C5] bg-[#151715] border border-[#E5E1D8]/10 px-4 py-2.5 rounded">
              100% On-Time Track Record
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
