import React from 'react';
import { Compass, CheckCircle2, ShieldCheck, HeartHandshake, Award, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutUs: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Contemporary Aesthetics",
      desc: "Clean lines, muted earth palettes, textured wood, and layered lighting tailored to modern lifestyles in Patna."
    },
    {
      icon: CheckCircle2,
      title: "Practical Spatial Planning",
      desc: "Every inch is engineered for daily comfort, maximum ventilation, and clutter-free storage suitable for Indian families."
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Materials",
      desc: "Zero-compromise raw materials: BWP 710 marine ply, branded German fittings (Hafele/Blum), and durable low-VOC paints."
    },
    {
      icon: HeartHandshake,
      title: "Transparent & On-Time",
      desc: "Itemized bills with no hidden surprises, accompanied by our strict 45-day handover guarantee from design sign-off."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#151715] text-[#E5E1D8] border-t border-b border-[#E5E1D8]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0D0C] border border-[#E5E1D8]/10 text-[10px] font-bold text-[#2D4F3C] tracking-[0.3em] uppercase">
            <span>About EarthNest Interiors</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E5E1D8] tracking-tight">
            Crafting Patna’s Finest Living & Workspaces <span className="italic">Since {BUSINESS_INFO.established}</span>
          </h2>

          <p className="text-base sm:text-lg text-[#E5E1D8]/70 leading-relaxed font-light">
            EarthNest Interiors is a professional interior design studio based in Boring Road, Patna, Bihar. 
            We provide modern, functional, and elegant interior solutions for homes, offices, and commercial spaces.
          </p>
        </div>

        {/* Narrative & Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-[#E5E1D8]/10 bg-[#0C0D0C]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                alt="EarthNest Studio Design Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0C] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0C0D0C]/95 backdrop-blur-md rounded border border-[#E5E1D8]/10 text-[#E5E1D8]">
                <p className="font-serif font-bold text-base text-[#E5E1D8]">Our Studio on Boring Road, Patna</p>
                <p className="text-xs text-[#E5E1D8]/60 mt-0.5">
                  Walk in to experience tactile material samples, laminate libraries, and 3D VR design previews.
                </p>
              </div>
            </div>

            {/* Inset floating highlight box */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 z-20 bg-[#0C0D0C] text-[#E5E1D8] p-5 rounded-lg shadow-2xl max-w-[240px] border border-[#2D4F3C]/40">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-[#2D4F3C] shrink-0" />
                <div>
                  <p className="text-2xl font-serif font-bold text-[#D9D2C5]">6+ Years</p>
                  <p className="text-xs text-[#E5E1D8]/60">Transforming Bihar’s Architecture</p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy & Approach Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal italic text-[#E5E1D8]">
                "Design Your Space. <span className="not-italic font-medium">Live Your Story."</span>
              </h3>
              <p className="text-[#E5E1D8]/70 text-base leading-relaxed font-light">
                Our approach combines contemporary design with practical planning to create spaces that are comfortable, stylish, and suited to each client's needs.
              </p>
              <p className="text-[#E5E1D8]/60 text-sm leading-relaxed">
                Whether it is a compact 2BHK flat in Kankarbagh or an expansive duplex in Patliputra Colony, we understand how families in Bihar live, celebrate, and work. We banish clumsy layouts and substandard carpentry, replacing them with precision modular craftsmanship and timeless aesthetics.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-lg bg-[#0C0D0C] border border-[#E5E1D8]/10 hover:border-[#2D4F3C] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded bg-[#151715] border border-[#E5E1D8]/10 flex items-center justify-center text-[#2D4F3C] mb-2.5 group-hover:bg-[#2D4F3C] group-hover:text-[#E5E1D8] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm text-[#E5E1D8] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#E5E1D8]/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Patna Location Badge */}
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-[#D9D2C5]">
              <MapPin className="w-4 h-4 text-[#2D4F3C]" />
              <span>Proudly rooted in Boring Road, Patna • Serving residences across Bihar</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
