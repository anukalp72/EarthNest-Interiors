import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, CheckCircle2, MessageSquare, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTopic
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    neighborhood: 'Boring Road',
    propertyType: '3 BHK Flat',
    preference: 'Studio Visit (Boring Road)',
    topic: preselectedTopic || 'General Consultation'
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (preselectedTopic) {
      setFormData(prev => ({ ...prev, topic: preselectedTopic }));
    }
  }, [preselectedTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(`EN-CONSULT-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };

  const whatsappText = encodeURIComponent(
    `Hello EarthNest Interiors, I would like to schedule a consultation regarding "${formData.topic}" for my ${formData.propertyType} in ${formData.neighborhood}, Patna.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#151715] text-[#E5E1D8] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E5E1D8]/20 relative max-h-[95vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#0C0D0C] text-[#E5E1D8] p-5 flex items-center justify-between border-b border-[#E5E1D8]/10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D4F3C]">
              EarthNest Studio • Patna
            </span>
            <h3 className="font-serif text-xl font-normal text-[#E5E1D8] mt-0.5">
              Book Design Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#151715] border border-[#E5E1D8]/10 text-[#E5E1D8] flex items-center justify-center hover:bg-[#1A1D1A] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {formData.topic && (
                <div className="p-2.5 bg-[#0C0D0C] border border-[#E5E1D8]/10 rounded text-xs text-[#E5E1D8]/80 font-medium flex items-center justify-between">
                  <span>Selected Focus:</span>
                  <span className="font-bold text-[#D9D2C5]">{formData.topic}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Contact Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Locality in Patna</label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                  >
                    <option value="Boring Road">Boring Road</option>
                    <option value="Bailey Road">Bailey Road</option>
                    <option value="Patliputra Colony">Patliputra Colony</option>
                    <option value="Kankarbagh">Kankarbagh</option>
                    <option value="Danapur / Khagaul">Danapur / Khagaul</option>
                    <option value="Rajendra Nagar">Rajendra Nagar</option>
                    <option value="Other Patna Location">Other Locality</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Configuration</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                  >
                    <option value="2 BHK Apartment">2 BHK Apartment</option>
                    <option value="3 BHK Apartment">3 BHK Apartment</option>
                    <option value="4 BHK / Duplex">4 BHK / Duplex</option>
                    <option value="Villa / Bungalow">Villa / Bungalow</option>
                    <option value="Commercial">Office / Clinic</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#E5E1D8]/80 uppercase tracking-wider">Preferred Meeting Format</label>
                <select
                  value={formData.preference}
                  onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                  className="w-full bg-[#0C0D0C] border border-[#E5E1D8]/20 rounded p-2.5 text-xs text-[#E5E1D8] focus:border-[#2D4F3C] focus:ring-1 focus:ring-[#2D4F3C] focus:outline-none"
                >
                  <option value="Studio Visit (Boring Road)">Visit Boring Road Studio (Material Touch & Feel)</option>
                  <option value="On-Site Laser Measurement">On-Site Laser Measurement at My Property</option>
                  <option value="Online Video Call">Virtual 3D Video Call</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E5E1D8] hover:bg-[#D9D2C5] text-[#0C0D0C] text-[11px] uppercase tracking-wider font-bold py-3 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-3.5 h-3.5 text-[#0C0D0C]" />
                <span>Confirm Consultation Appointment</span>
              </button>

              <p className="text-[10px] text-center text-[#E5E1D8]/50 font-light">
                Studio Hours: Mon – Sat (10:00 AM – 7:00 PM) • Boring Road, Patna
              </p>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 bg-[#2D4F3C]/30 border border-[#2D4F3C] text-[#2D4F3C] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#2D4F3C]" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#E5E1D8]">
                Consultation Reserved!
              </h4>
              <p className="text-xs text-[#E5E1D8]/70">
                Appointment Ticket: <span className="font-mono font-bold text-[#D9D2C5]">{ticketId}</span>
              </p>
              <p className="text-xs text-[#E5E1D8]/60 max-w-xs mx-auto font-light">
                Our design coordinator will call <span className="font-semibold text-[#E5E1D8]">{formData.phone}</span> to confirm your time slot at our Boring Road studio.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-[#112019] text-xs font-bold px-4 py-2.5 rounded shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E5E1D8]/10">
                <button
                  onClick={onClose}
                  className="text-xs font-semibold text-[#E5E1D8]/60 hover:text-[#E5E1D8]"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
