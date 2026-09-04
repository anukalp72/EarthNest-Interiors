import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, Award, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenConsultation: (packageId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      title: "Warm Minimal Living Room",
      subtitle: "Boring Road Penthouse Project"
    },
    {
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      title: "Sage & Quartz Modular Kitchen",
      subtitle: "Bailey Road Residence"
    },
    {
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
      title: "Restorative Master Bedroom Suite",
      subtitle: "Patliputra Colony Project"
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0C0D0C] text-[#E5E1D8]">
      {/* Subtle organic background aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D4F3C]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#151715] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Narrative & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7">
            
            {/* Tagline / Heritage pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151715] border border-[#E5E1D8]/10 text-xs font-medium text-[#E5E1D8]">
              <span className="w-2 h-2 rounded-full bg-[#2D4F3C] animate-pulse" />
              <span className="font-bold tracking-[0.3em] uppercase text-[10px] text-[#2D4F3C]">
                Established 2019
              </span>
              <span className="text-[#E5E1D8]/20">•</span>
              <span className="text-[#D9D2C5]/70 flex items-center gap-1 text-[11px] uppercase tracking-wider">
                <MapPin className="w-3 h-3 text-[#2D4F3C]" /> Boring Road, Patna
              </span>
            </div>

            {/* Main Required Hero Headings */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-normal text-[#E5E1D8] tracking-tight leading-[1.05] italic">
                Spaces That <br className="hidden sm:inline" />Feel Like <span className="not-italic font-medium">Home.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#E5E1D8]/70 font-light leading-relaxed max-w-2xl">
                {BUSINESS_INFO.heroSubheading}
              </p>
            </div>

            {/* Business value & tagline affirmation */}
            <div className="p-5 bg-[#151715] rounded border-l-4 border-[#2D4F3C] border-y border-r border-[#E5E1D8]/10 text-sm text-[#E5E1D8] flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2D4F3C] font-bold mb-1">
                  Design Philosophy
                </p>
                <p className="font-serif italic text-base text-[#D9D2C5] font-normal">
                  "{BUSINESS_INFO.tagline}"
                </p>
                <p className="text-xs text-[#E5E1D8]/60 mt-0.5">
                  Complete turnkey & modular interior transformations in Patna since {BUSINESS_INFO.established}.
                </p>
              </div>
              <span className="hidden sm:block text-[11px] font-bold text-[#D9D2C5] uppercase tracking-widest bg-[#0C0D0C] border border-[#E5E1D8]/10 px-3 py-1.5 rounded">
                Est. {BUSINESS_INFO.established}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C] uppercase tracking-[0.18em] font-bold text-xs px-8 py-3.5 rounded shadow-sm transition-all duration-200 group"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0C0D0C] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 bg-[#151715] hover:bg-[#1A1D1A] text-[#E5E1D8] uppercase tracking-[0.15em] font-medium text-xs px-6 py-3.5 rounded border border-[#E5E1D8]/15 transition-colors"
              >
                <span>Investment Packages (from ₹1.5L)</span>
              </a>
            </div>

            {/* Key trust markers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#E5E1D8]/10">
              <div className="flex items-center gap-2 text-xs font-medium text-[#E5E1D8]/80">
                <Clock className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                <span>45-Day Handover</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#E5E1D8]/80">
                <ShieldCheck className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                <span>10-Yr Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#E5E1D8]/80">
                <Sparkles className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                <span>3D Walkthroughs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#E5E1D8]/80">
                <CheckCircle2 className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                <span>100% Turnkey</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E1D8]/10 bg-[#151715]">
              
              {/* Primary Image */}
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden">
                <img
                  src={heroImages[activeImageIndex].url}
                  alt={heroImages[activeImageIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0C] via-[#0C0D0C]/40 to-transparent" />

                {/* Floating caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#E5E1D8]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2D4F3C]">
                    Featured Patna Project
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal italic mt-1">
                    {heroImages[activeImageIndex].title}
                  </h3>
                  <p className="text-xs text-[#E5E1D8]/70 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2D4F3C]" />
                    {heroImages[activeImageIndex].subtitle}
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute top-4 right-4 bg-[#0C0D0C]/90 backdrop-blur-md text-[#E5E1D8] p-3 rounded-lg border border-[#2D4F3C]/40 shadow-lg">
                <p className="text-2xl font-bold font-serif text-[#D9D2C5]">380+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#E5E1D8]/60">Homes Delivered</p>
              </div>

            </div>

            {/* Thumbnail switcher */}
            <div className="flex items-center gap-3 mt-4 justify-center sm:justify-start">
              {heroImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`flex items-center gap-2 p-1.5 rounded transition-all text-left border ${
                    activeImageIndex === idx 
                      ? 'bg-[#151715] text-[#E5E1D8] border-[#2D4F3C] ring-1 ring-[#2D4F3C]' 
                      : 'bg-[#0C0D0C] border-[#E5E1D8]/10 hover:border-[#E5E1D8]/30 text-[#E5E1D8]/60'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 object-cover rounded opacity-80"
                  />
                  <div className="text-[11px] pr-2 hidden sm:block">
                    <p className="font-semibold line-clamp-1 text-[#E5E1D8]">{img.title}</p>
                    <p className="text-[9px] text-[#E5E1D8]/50">{img.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
