import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0C0D0C] text-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151715] border border-[#E5E1D8]/10 text-[10px] font-bold text-[#2D4F3C] uppercase tracking-[0.3em]">
            <span>Client Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E5E1D8] tracking-tight">
            Loved By Patna Homeowners
          </h2>
          <p className="text-base text-[#E5E1D8]/70 font-light leading-relaxed">
            Hear how our clients transformed their apartments, independent floors, and commercial clinics into spaces of timeless comfort and pride.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#151715] p-8 rounded-2xl border border-[#E5E1D8]/10 hover:border-[#2D4F3C] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-2xl relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#2D4F3C]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E5E1D8]/20 group-hover:text-[#2D4F3C] transition-colors" />
                </div>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0C0D0C] text-[#D9D2C5] border border-[#E5E1D8]/10 px-2.5 py-1 rounded">
                    {t.projectType}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-sm text-[#E5E1D8]/80 leading-relaxed italic mb-6 font-light">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E5E1D8]/10 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-[#E5E1D8]/20"
                />
                <div>
                  <h4 className="font-serif font-normal text-base text-[#E5E1D8]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#E5E1D8]/60 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#2D4F3C]" />
                    {t.locality}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Local Verification Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5E1D8] bg-[#151715] px-5 py-2.5 rounded-full border border-[#2D4F3C]/30 shadow-md">
            <CheckCircle className="w-4 h-4 text-[#2D4F3C]" />
            <span>4.9 / 5.0 Average Rating across 380+ Verified Homes in Patna & Bihar</span>
          </div>
        </div>

      </div>
    </section>
  );
};
