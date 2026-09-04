import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#151715] text-[#E5E1D8] border-t border-[#E5E1D8]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C0D0C] border border-[#E5E1D8]/10 text-[10px] font-bold text-[#2D4F3C] uppercase tracking-[0.3em]">
            <HelpCircle className="w-3.5 h-3.5 text-[#2D4F3C]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#E5E1D8] tracking-tight">
            Planning Interiors in Patna
          </h2>
          <p className="text-sm text-[#E5E1D8]/70 font-light">
            Everything you need to know about material standards, timelines, costs, and studio visits.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0C0D0C] rounded-xl border border-[#E5E1D8]/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-normal text-sm sm:text-base text-[#E5E1D8] hover:text-[#D9D2C5]"
                >
                  <span className="font-serif font-normal">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#2D4F3C] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#E5E1D8]/70 font-light leading-relaxed border-t border-[#E5E1D8]/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Question Helpline */}
        <div className="mt-10 p-4 bg-[#0C0D0C] border border-[#E5E1D8]/10 rounded-xl flex items-center justify-between text-xs text-[#E5E1D8]">
          <span className="flex items-center gap-2 font-light">
            <PhoneCall className="w-4 h-4 text-[#2D4F3C]" />
            <span>Have a specific architectural query about your apartment?</span>
          </span>
          <a
            href="tel:+919876543210"
            className="font-bold underline text-[#D9D2C5] hover:text-[#E5E1D8]"
          >
            Call +91 98765 43210
          </a>
        </div>

      </div>
    </section>
  );
};
