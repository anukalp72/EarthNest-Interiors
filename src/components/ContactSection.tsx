import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle2, MessageSquare, Compass, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  preselectedServiceOrPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedServiceOrPackage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    locality: 'Boring Road, Patna',
    propertyType: '3 BHK Flat',
    budgetPackage: preselectedServiceOrPackage || 'Modern Home Package (₹3.5L)',
    visitType: 'Studio Visit (Boring Road)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  // Check if currently open
  const isStudioOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    if (day === 0) return false;
    const hour = now.getHours();
    return hour >= 10 && hour < 19;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `EN-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello EarthNest Interiors, I would like to book an interior design consultation for my ${formData.propertyType} in ${formData.locality}. My budget tier is ${formData.budgetPackage}.`
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0C0D0C] text-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151715] border border-[#E5E1D8]/10 text-[10px] font-bold text-[#2D4F3C] uppercase tracking-[0.3em]">
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#E5E1D8] tracking-tight">
            Visit Our Boring Road Studio
          </h2>
          <p className="text-base text-[#E5E1D8]/70 font-light leading-relaxed">
            Schedule an in-person design consultation, inspect physical material swatches, or book a complimentary on-site laser measurement of your Patna home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Info & Studio Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Info Card */}
            <div className="bg-[#151715] text-[#E5E1D8] p-8 rounded-2xl shadow-xl border border-[#E5E1D8]/10 space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D4F3C]">
                    Studio Headquarters
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                    isStudioOpen() 
                      ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-700/40' 
                      : 'bg-amber-950/70 text-amber-400 border border-amber-700/40'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isStudioOpen() ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    {isStudioOpen() ? 'Open Today' : 'Currently Closed'}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal mt-1 text-[#E5E1D8]">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#E5E1D8]/60 mt-1 font-light">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-4 pt-2 border-t border-[#E5E1D8]/10 text-xs">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0C0D0C] border border-[#E5E1D8]/10 flex items-center justify-center text-[#2D4F3C] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#E5E1D8]">Location & Address</p>
                    <p className="text-[#E5E1D8]/70 mt-0.5 leading-relaxed font-light">
                      {BUSINESS_INFO.location}
                    </p>
                    <p className="text-[11px] text-[#2D4F3C] mt-0.5">
                      Near Boring Road Chauraha, Patna, Bihar 800001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0C0D0C] border border-[#E5E1D8]/10 flex items-center justify-center text-[#2D4F3C] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#E5E1D8]">Phone Support</p>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} 
                      className="text-[#E5E1D8]/80 hover:text-[#E5E1D8] transition-colors block mt-0.5 text-sm font-medium"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0C0D0C] border border-[#E5E1D8]/10 flex items-center justify-center text-[#2D4F3C] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#E5E1D8]">Email Inquiries</p>
                    <a 
                      href={`mailto:${BUSINESS_INFO.email}`} 
                      className="text-[#E5E1D8]/80 hover:text-[#E5E1D8] transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0C0D0C] border border-[#E5E1D8]/10 flex items-center justify-center text-[#2D4F3C] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#E5E1D8]">Business Hours</p>
                    <p className="text-[#E5E1D8]/70 mt-0.5 font-light">{BUSINESS_INFO.hoursWeekday}</p>
                    <p className="text-amber-400/80 text-[11px] mt-0.5 font-light">{BUSINESS_INFO.hoursSunday}</p>
                  </div>
                </div>

              </div>

              {/* Direct Quick WhatsApp Call-out */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#112019] text-xs font-bold py-3 rounded-lg shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 98765 43210)</span>
                </a>
              </div>
            </div>

            {/* Neighborhoods served pill cluster */}
            <div className="bg-[#151715] p-5 rounded-xl border border-[#E5E1D8]/10">
              <p className="text-[10px] font-bold text-[#2D4F3C] mb-2 uppercase tracking-widest">
                Key Patna Neighborhoods We Actively Serve
              </p>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS_INFO.patnaNeighborhoods.map((n, i) => (
                  <span key={i} className="text-[11px] bg-[#0C0D0C] text-[#E5E1D8]/70 border border-[#E5E1D8]/10 px-2.5 py-1 rounded">
                    {n}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-[#151715] p-8 sm:p-10 rounded-2xl shadow-xl border border-[#E5E1D8]/10">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#E5E1D8]">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-xs text-[#E5E1D8]/60 mt-1 font-light">
                    Fill in your details to reserve a private consultation session or arrange an on-site measurement.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. anand@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                    />
                  </div>

                  {/* Patna Locality */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Project Location in Patna *</label>
                    <select
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                    >
                      <option value="Boring Road, Patna">Boring Road</option>
                      <option value="Bailey Road, Patna">Bailey Road / Rupaspur</option>
                      <option value="Patliputra Colony, Patna">Patliputra Colony</option>
                      <option value="Kankarbagh, Patna">Kankarbagh</option>
                      <option value="Danapur / Khagaul, Patna">Danapur / Khagaul</option>
                      <option value="Rajendra Nagar, Patna">Rajendra Nagar</option>
                      <option value="Ashiana Nagar, Patna">Ashiana Nagar</option>
                      <option value="Fraser Road / Exhibition Rd">Fraser Road / Exhibition Rd</option>
                      <option value="Other Patna Locality">Other Patna Locality / Bihar</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Property Type */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Property Configuration</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                    >
                      <option value="2 BHK Flat">2 BHK Apartment</option>
                      <option value="3 BHK Flat">3 BHK Apartment</option>
                      <option value="4 BHK Flat / Penthouse">4 BHK / Penthouse</option>
                      <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                      <option value="Commercial Office / Clinic">Commercial Office / Clinic</option>
                    </select>
                  </div>

                  {/* Consultation Preference */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Consultation Type</label>
                    <select
                      value={formData.visitType}
                      onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
                      className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                    >
                      <option value="Studio Visit (Boring Road)">Visit Boring Road Studio</option>
                      <option value="Site Laser Measurement">Free On-Site Laser Measurement</option>
                      <option value="Virtual Video Call">Virtual Video Call & 3D Walkthrough</option>
                    </select>
                  </div>
                </div>

                {/* Scope / Notes */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Scope or Special Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Modular kitchen with breakfast bar, TV wall in living room, possession date in next 2 months..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C] text-[11px] uppercase tracking-wider font-bold py-3.5 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#0C0D0C]" />
                  <span>Submit Consultation Request</span>
                </button>

                <p className="text-[11px] text-center text-[#E5E1D8]/50">
                  Zero spam guarantee. Our senior design manager will contact you within 4 business hours.
                </p>
              </form>
            ) : (
              /* Success State */
              <div className="py-8 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 bg-[#2D4F3C]/30 border border-[#2D4F3C] text-[#2D4F3C] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#2D4F3C]" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D4F3C]">
                    Request Confirmed
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#E5E1D8] mt-1">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-xs text-[#E5E1D8]/70 max-w-md mx-auto mt-1 font-light">
                    Your appointment reference ID is <span className="font-mono font-bold text-[#D9D2C5]">{refNumber}</span>. 
                    Our senior architect from Boring Road studio will call you at <span className="font-bold text-[#E5E1D8]">{formData.phone}</span> shortly.
                  </p>
                </div>

                <div className="p-4 bg-[#0C0D0C] rounded-lg max-w-md mx-auto text-left text-xs space-y-1.5 border border-[#E5E1D8]/10">
                  <p><span className="text-[#E5E1D8]/60">Consultation Type:</span> <strong className="text-[#E5E1D8]">{formData.visitType}</strong></p>
                  <p><span className="text-[#E5E1D8]/60">Property:</span> <strong className="text-[#E5E1D8]">{formData.propertyType} ({formData.locality})</strong></p>
                  <p><span className="text-[#E5E1D8]/60">Studio Hours:</span> <strong className="text-[#E5E1D8]">Mon – Sat: 10:00 AM – 7:00 PM</strong></p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-[#112019] text-xs font-bold px-5 py-2.5 rounded shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        locality: 'Boring Road, Patna',
                        propertyType: '3 BHK Flat',
                        budgetPackage: 'Modern Home Package (₹3.5L)',
                        visitType: 'Studio Visit (Boring Road)',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-[#D9D2C5] hover:underline px-4 py-2"
                  >
                    Submit Another Request
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
