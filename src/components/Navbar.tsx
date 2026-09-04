import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Compass, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenConsultation: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Packages', href: '#packages' },
    { label: 'Why Us', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar with location, hours and direct contact */}
      <div className="bg-[#080908] text-[#E5E1D8]/80 text-xs py-1.5 px-4 hidden md:block border-b border-[#E5E1D8]/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide text-[11px]">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#2D4F3C]" />
              <span>Boring Road, Patna, Bihar</span>
            </span>
            <span className="text-[#E5E1D8]/20">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2D4F3C]" />
              <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
            </span>
            <span className="text-[#E5E1D8]/20">|</span>
            <span className="text-[#D9D2C5] font-medium tracking-wider">Est. 2019 • 380+ Completed Interiors</span>
          </div>
          <div className="flex items-center space-x-5">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#2D4F3C]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-[#E5E1D8]/20">|</span>
            <span className="italic text-[#D9D2C5]/90 font-serif">"{BUSINESS_INFO.tagline}"</span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0C0D0C]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#E5E1D8]/10' 
            : 'bg-[#0C0D0C]/90 backdrop-blur-sm py-4 border-b border-[#E5E1D8]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-sm bg-[#151715] border border-[#2D4F3C]/40 text-[#E5E1D8] flex items-center justify-center shadow-sm group-hover:border-[#2D4F3C] transition-colors">
              <Compass className="w-5 h-5 text-[#2D4F3C]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#E5E1D8] leading-none">
                EARTHNEST
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#2D4F3C] font-bold mt-0.5">
                Interiors • Patna
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#D9D2C5]/75 hover:text-[#E5E1D8] relative py-1 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D4F3C] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#E5E1D8] px-3.5 py-2.5 rounded border border-[#E5E1D8]/20 bg-[#151715] hover:bg-[#1A1D1A] transition-colors"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#2D4F3C]" />
              <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="flex items-center gap-2 bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C] text-[11px] uppercase tracking-[0.15em] font-bold px-5 py-2.5 rounded transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5 text-[#2D4F3C]" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="bg-[#E5E1D8] text-[#0C0D0C] text-[10px] uppercase tracking-wider font-bold px-2.5 py-1.5 rounded"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E5E1D8] hover:bg-[#151715] rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0C0D0C] border-b border-[#E5E1D8]/10 shadow-2xl px-4 pt-2 pb-6 space-y-3">
          <div className="py-2 border-b border-[#E5E1D8]/10 flex items-center justify-between text-xs text-[#E5E1D8]/60">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#2D4F3C]" /> Boring Road, Patna
            </span>
            <span className="text-[#2D4F3C] font-semibold">Since 2019</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-wider font-medium text-[#E5E1D8]/80 py-2.5 px-3 rounded hover:bg-[#151715] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E5E1D8]/10 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-[#E5E1D8] border border-[#E5E1D8]/20 rounded bg-[#151715]"
            >
              <Phone className="w-3.5 h-3.5 text-[#2D4F3C]" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs uppercase tracking-wider font-bold text-[#0C0D0C] bg-[#E5E1D8] rounded shadow"
            >
              <Calendar className="w-3.5 h-3.5 text-[#2D4F3C]" />
              <span>Book Free Design Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
