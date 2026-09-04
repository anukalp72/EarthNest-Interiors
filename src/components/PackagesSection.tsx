import React, { useState } from 'react';
import { PACKAGES, PackageItem } from '../data/content';
import { Check, ShieldCheck, Clock, Calculator, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

interface PackagesSectionProps {
  onOpenConsultation: (packageIdOrName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenConsultation }) => {
  // Cost Estimator State
  const [propertyType, setPropertyType] = useState<string>('3bhk');
  const [scope, setScope] = useState<string>('full');
  const [finishGrade, setFinishGrade] = useState<string>('modern');

  // Calculation logic
  const calculateEstimate = () => {
    let base = 350000;
    if (propertyType === '1bhk') base = 160000;
    if (propertyType === '2bhk') base = 280000;
    if (propertyType === '3bhk') base = 420000;
    if (propertyType === '4bhk') base = 680000;
    if (propertyType === 'commercial') base = 380000;

    // Scope multiplier
    let scopeMult = 1.0;
    if (scope === 'kitchen_wardrobe') scopeMult = 0.65;
    if (scope === 'living_decor') scopeMult = 0.50;
    if (scope === 'full') scopeMult = 1.0;

    // Finish grade
    let gradeMult = 1.0;
    if (finishGrade === 'essential') gradeMult = 0.8;
    if (finishGrade === 'modern') gradeMult = 1.0;
    if (finishGrade === 'luxury') gradeMult = 1.6;

    const total = Math.round((base * scopeMult * gradeMult) / 10000) * 10000;
    const inLakhs = (total / 100000).toFixed(1);

    let recPackage = "Modern Home Package";
    if (total <= 200000) recPackage = "Essential Package";
    else if (total <= 450000) recPackage = "Modern Home Package";
    else if (total <= 750000) recPackage = "Premium Package";
    else recPackage = "Luxury Package";

    return { total: `₹${inLakhs} Lakh`, recPackage };
  };

  const estimate = calculateEstimate();

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#151715] text-[#E5E1D8] border-t border-b border-[#E5E1D8]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0D0C] border border-[#E5E1D8]/10 text-[10px] font-bold text-[#2D4F3C] uppercase tracking-[0.3em]">
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E5E1D8] tracking-tight">
            Curated Interior Packages
          </h2>
          <p className="text-base text-[#E5E1D8]/70 font-light leading-relaxed">
            Clear, transparent budgets with zero hidden costs. Every package includes factory-grade finishes, dedicated project management, and comprehensive warranties.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-[#0C0D0C] text-[#E5E1D8] shadow-2xl border-2 border-[#2D4F3C] -translate-y-2'
                  : 'bg-[#0C0D0C] text-[#E5E1D8] border border-[#E5E1D8]/10 hover:border-[#2D4F3C] shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Most Popular Ribbon */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2D4F3C] text-[#E5E1D8] text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full shadow-md border border-[#E5E1D8]/10">
                  Most Popular in Patna
                </div>
              )}

              <div>
                {/* Package Title & Price */}
                <div className="border-b pb-4 mb-4 border-[#E5E1D8]/10">
                  <h3 className="font-serif text-xl font-normal text-[#E5E1D8]">
                    {pkg.name}
                  </h3>
                  <p className="text-xs mt-1 text-[#E5E1D8]/60 font-light">
                    {pkg.subtitle}
                  </p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5E1D8]/50">Starting</span>
                    <span className="text-3xl font-serif font-bold text-[#D9D2C5]">{pkg.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] mt-1 text-[#E5E1D8]/70">
                    <Clock className="w-3 h-3 text-[#2D4F3C]" />
                    <span>{pkg.timeline}</span>
                  </div>
                </div>

                {/* Scope & Ideal For */}
                <div className="p-3 rounded text-xs mb-4 bg-[#151715] border border-[#E5E1D8]/10">
                  <span className="font-bold block text-[10px] uppercase text-[#2D4F3C] tracking-wider">Best Suited For</span>
                  <span className="mt-0.5 block line-clamp-1 text-[#E5E1D8]/80">{pkg.idealFor}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D9D2C5]">What’s Included:</p>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#E5E1D8]/75">
                      <Check className="w-3.5 h-3.5 text-[#2D4F3C] shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E5E1D8]/10">
                <button
                  onClick={() => onOpenConsultation(pkg.name)}
                  className={`w-full py-3 rounded text-[11px] uppercase tracking-[0.15em] font-bold transition-colors flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C]'
                      : 'bg-[#151715] hover:bg-[#1A1D1A] text-[#E5E1D8] border border-[#E5E1D8]/15'
                  }`}
                >
                  <span>Choose {pkg.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Cost Estimator Tool */}
        <div className="mt-16 bg-[#0C0D0C] rounded-2xl p-6 sm:p-10 border border-[#E5E1D8]/10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Tool Heading */}
            <div className="space-y-2 max-w-sm">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#2D4F3C] uppercase tracking-[0.25em]">
                <Calculator className="w-4 h-4 text-[#2D4F3C]" />
                <span>Instant Estimator</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#E5E1D8]">
                Estimate Your Interior Budget
              </h3>
              <p className="text-xs sm:text-sm text-[#E5E1D8]/60 leading-relaxed font-light">
                Select your property type and scope to view estimated ballpark cost for Patna residential or commercial properties.
              </p>
            </div>

            {/* Interactive Selectors */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Selector 1: Property Type */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5E1D8]/70">Property Size</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-[#151715] border border-[#E5E1D8]/15 rounded p-2.5 text-xs font-medium text-[#E5E1D8] focus:border-[#2D4F3C] focus:outline-none"
                >
                  <option value="1bhk" className="bg-[#151715]">1 BHK Apartment</option>
                  <option value="2bhk" className="bg-[#151715]">2 BHK Flat / Floor</option>
                  <option value="3bhk" className="bg-[#151715]">3 BHK Flat / Duplex</option>
                  <option value="4bhk" className="bg-[#151715]">4 BHK / Luxury Villa</option>
                  <option value="commercial" className="bg-[#151715]">Office / Commercial Space</option>
                </select>
              </div>

              {/* Selector 2: Scope */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5E1D8]/70">Design Scope</label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-[#151715] border border-[#E5E1D8]/15 rounded p-2.5 text-xs font-medium text-[#E5E1D8] focus:border-[#2D4F3C] focus:outline-none"
                >
                  <option value="full" className="bg-[#151715]">Complete Home Turnkey</option>
                  <option value="kitchen_wardrobe" className="bg-[#151715]">Modular Kitchen & Wardrobes</option>
                  <option value="living_decor" className="bg-[#151715]">Living Room & False Ceiling</option>
                </select>
              </div>

              {/* Selector 3: Material Tier */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#E5E1D8]/70">Finish Level</label>
                <select
                  value={finishGrade}
                  onChange={(e) => setFinishGrade(e.target.value)}
                  className="w-full bg-[#151715] border border-[#E5E1D8]/15 rounded p-2.5 text-xs font-medium text-[#E5E1D8] focus:border-[#2D4F3C] focus:outline-none"
                >
                  <option value="essential" className="bg-[#151715]">Essential (Laminate / Standard)</option>
                  <option value="modern" className="bg-[#151715]">Modern (Acrylic / Hettich / Profile LED)</option>
                  <option value="luxury" className="bg-[#151715]">Luxury (Veneer / Blum / Quartz / PU)</option>
                </select>
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="bg-[#151715] text-[#E5E1D8] p-5 rounded-xl text-center min-w-[220px] shrink-0 border border-[#2D4F3C]/40 space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#E5E1D8]/60">Estimated Budget</span>
              <p className="font-serif text-3xl font-bold text-[#D9D2C5]">{estimate.total}</p>
              <div className="text-[11px] text-[#E5E1D8]/70">
                Recommended: <span className="font-semibold text-[#E5E1D8]">{estimate.recPackage}</span>
              </div>
              <button
                onClick={() => onOpenConsultation(`Estimated Plan: ${estimate.recPackage} (${estimate.total})`)}
                className="w-full mt-2 bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C] text-[11px] uppercase tracking-wider font-bold py-2.5 rounded transition-colors"
              >
                Book This Estimate
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
