import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/content';
import { ArrowUpRight, Check, Sparkles, X } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0C0D0C] text-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151715] border border-[#E5E1D8]/10 text-[10px] font-bold text-[#2D4F3C] uppercase tracking-[0.3em]">
              <span>Curated Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E5E1D8] tracking-tight">
              Thoughtful Interior Services
            </h2>
            <p className="text-base text-[#E5E1D8]/70 leading-relaxed font-light">
              From individual modular kitchens to complete turnkey estate handovers, our specialized services 
              harmonize functionality, ergonomics, and understated luxury.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenConsultation("All Services")}
              className="inline-flex items-center gap-2 bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C] text-[11px] uppercase tracking-[0.15em] font-bold px-6 py-3 rounded transition-colors"
            >
              <span>Custom Service Request</span>
              <ArrowUpRight className="w-4 h-4 text-[#0C0D0C]" />
            </button>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#151715] rounded-xl overflow-hidden border border-[#E5E1D8]/10 hover:border-[#2D4F3C] transition-all duration-300 hover:shadow-2xl flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-56 w-full overflow-hidden bg-[#0C0D0C]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151715] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                {/* Service Tag */}
                <div className="absolute top-3 left-3 bg-[#0C0D0C]/90 backdrop-blur-xs text-[#E5E1D8] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border border-[#E5E1D8]/10">
                  {service.tag}
                </div>

                {/* Service Number Badge */}
                <div className="absolute top-3 right-3 text-[11px] font-mono font-bold text-[#2D4F3C] bg-[#0C0D0C]/90 border border-[#2D4F3C]/40 px-2 py-0.5 rounded">
                  0{index + 1}
                </div>

                {/* Title overlay on hover / bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-[#E5E1D8] font-serif font-normal text-xl leading-snug drop-shadow-xs">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-[#E5E1D8]/65 leading-relaxed font-light">
                  {service.shortDesc}
                </p>

                {/* Quick bullet points */}
                <div className="space-y-1.5 pt-1">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#E5E1D8]/80">
                      <Check className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#E5E1D8]/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-[#E5E1D8] hover:text-[#D9D2C5] transition-colors"
                  >
                    View Details & Specs
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-bold text-[#2D4F3C] hover:text-[#D9D2C5] transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Studio Quality Assurance Banner */}
        <div className="mt-16 bg-[#151715] text-[#E5E1D8] border border-[#2D4F3C]/40 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#2D4F3C] font-bold flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2D4F3C]" /> Need a tailored combination?
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#E5E1D8]">
              We customize modular setups to match your exact floor plan.
            </h3>
            <p className="text-xs sm:text-sm text-[#E5E1D8]/70">
              Bring your builder blueprint to our Boring Road studio or request a home visit by our senior architect.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation("Custom Floor Plan Review")}
            className="shrink-0 bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C] text-[11px] uppercase tracking-wider font-bold px-6 py-3.5 rounded transition-colors shadow"
          >
            Get Free Floor Plan Review
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#151715] text-[#E5E1D8] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E5E1D8]/20 relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative h-56 w-full shrink-0">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151715] via-black/50 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0C0D0C]/80 border border-[#E5E1D8]/20 text-[#E5E1D8] flex items-center justify-center hover:bg-[#0C0D0C] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#2D4F3C] bg-[#0C0D0C]/90 border border-[#2D4F3C]/40 px-2 py-0.5 rounded">
                  {selectedService.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1 text-[#E5E1D8]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#2D4F3C] mb-2">Service Overview</h4>
                <p className="text-sm text-[#E5E1D8]/70 leading-relaxed font-light">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#D9D2C5] mb-3">Key Deliverables & Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#E5E1D8]/85 p-2.5 rounded bg-[#0C0D0C] border border-[#E5E1D8]/10">
                      <Check className="w-4 h-4 text-[#2D4F3C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#0C0D0C] border border-[#E5E1D8]/10 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#E5E1D8]">Included in EarthNest Packages</p>
                  <p className="text-[11px] text-[#E5E1D8]/60">Backed by our 10-year warranty and 45-day handover policy.</p>
                </div>
                <span className="text-xs font-semibold text-[#D9D2C5] bg-[#151715] px-2.5 py-1 rounded border border-[#E5E1D8]/10">
                  Patna Certified
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#0C0D0C] border-t border-[#E5E1D8]/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-[#E5E1D8]/60 hover:text-[#E5E1D8]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sName = selectedService.title;
                  setSelectedService(null);
                  onOpenConsultation(sName);
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0C0D0C] bg-[#E5E1D8] hover:bg-[#D9D2C5] rounded shadow-xs"
              >
                Book Consultation for {selectedService.title}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
