import React from 'react';
import { BUSINESS_INFO, SERVICES, PACKAGES } from '../data/content';
import { Phone, Mail, MapPin, Clock, Compass, Heart, ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0D0C] text-[#E5E1D8] pt-16 pb-24 sm:pb-12 border-t border-[#E5E1D8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E5E1D8]/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#2D4F3C] text-[#E5E1D8] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6 text-[#E5E1D8]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-normal tracking-tight text-[#E5E1D8] block leading-none">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#2D4F3C] font-bold">
                  Interior Design & Home Décor
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#D9D2C5]">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-xs text-[#E5E1D8]/70 leading-relaxed max-w-sm font-light">
              Professional interior design studio based on Boring Road, Patna. Combining contemporary minimalism, functional space planning, and 45-day turnkey delivery for homes and offices across Bihar.
            </p>

            <div className="pt-2 text-xs text-[#2D4F3C] font-semibold">
              Established in {BUSINESS_INFO.established} • 380+ Delivered Projects
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2D4F3C]">
              Interior Services
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E1D8]/70 font-light">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#E5E1D8] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Packages */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2D4F3C]">
              Interior Packages
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E1D8]/70 font-light">
              {PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <a href="#packages" className="hover:text-[#E5E1D8] transition-colors">
                    {pkg.name} ({pkg.price})
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-[#D9D2C5] hover:underline"
                >
                  Custom Estimate →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2D4F3C]">
              Boring Road Studio
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#E5E1D8]/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2D4F3C] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}, Near Chauraha, Patna 800001</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2D4F3C] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-[#E5E1D8]/10">
                <Clock className="w-4 h-4 text-[#2D4F3C] shrink-0 mt-0.5" />
                <div>
                  <p>{BUSINESS_INFO.hoursWeekday}</p>
                  <p className="text-amber-400/80 text-[11px]">{BUSINESS_INFO.hoursSunday}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E1D8]/60 font-light">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Crafted for Modern Living in Patna, Bihar</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-[#151715] hover:bg-[#1A1D1A] border border-[#E5E1D8]/20 text-[#E5E1D8] flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating Action Bar on Mobile / Quick Access */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0D0C]/95 backdrop-blur-md border-t border-[#E5E1D8]/10 p-3 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
          className="flex-1 py-2.5 bg-[#151715] border border-[#E5E1D8]/20 text-[#E5E1D8] text-xs font-bold rounded flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#2D4F3C]" />
          <span>Call Studio</span>
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 bg-[#25D366] text-[#112019] text-xs font-bold rounded flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={onOpenConsultation}
          className="flex-1 py-2.5 bg-[#E5E1D8] text-[#0C0D0C] text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>Book Free</span>
        </button>
      </div>

    </footer>
  );
};
