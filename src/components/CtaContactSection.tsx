import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Calendar,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface CtaContactSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const CtaContactSection: React.FC<CtaContactSectionProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    interest: 'Bliss of Nature Resort',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello BON Holidays! I would like to plan a stay or holiday package in Uttarakhand.`
  );

  return (
    <section id="cta-contact-section" className="relative bg-[#17231F] text-white py-16 sm:py-20 overflow-hidden">
      
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#16745A]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#E8A43A]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Unified CTA Header Banner */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8A43A] tracking-wider uppercase">
            <span>Direct Reservations & Concierge</span>
            <span aria-hidden="true">·</span>
            <span>Rishikesh, Uttarakhand</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Plan Your Next Escape With BON Holidays
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            From peaceful nature retreats at Bliss of Nature to exciting Uttarakhand adventures, we’ll help you create a memorable holiday.
          </p>
        </div>

        {/* Grouped 2-Column Focus Grid: Left = Direct Channels & Booking, Right = Quick Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Direct Contact Channels & Quick Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-6">
              <h3 className="font-display text-xl font-bold text-white">
                Connect Directly With Our Local Team
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#16745A] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#E8A43A]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/60 block">Phone Support</span>
                    <a href="tel:+919876543210" className="font-semibold text-white hover:text-[#E8A43A] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/60 block">WhatsApp Desk</span>
                    <a
                      href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white hover:text-[#E8A43A] transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#E8A43A]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/60 block">Email Inquiries</span>
                    <a href="mailto:info@bonholidays.com" className="font-semibold text-white hover:text-[#E8A43A] transition-colors">
                      info@bonholidays.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#E8A43A]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/60 block">Head Office & Retreat</span>
                    <span className="font-semibold text-white">
                      Rishikesh, Uttarakhand, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Trigger Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 rounded-xl bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#E8A43A]" />
                  <span>Reserve a Stay or Package</span>
                </button>

                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/70 pl-1">
              <ShieldCheck className="w-4 h-4 text-[#16745A]" />
              <span>Certified Eco-Hospitality & Adventure Operator in Uttarakhand</span>
            </div>
          </div>

          {/* Column 2: Quick Inline Inquiry Form */}
          <div className="lg:col-span-6 bg-white text-[#17231F] rounded-2xl p-6 sm:p-7 shadow-xl border border-white/20">
            {submitted ? (
              <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#16745A]/10 text-[#16745A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#16745A]" />
                </div>
                <h4 className="font-display text-xl font-bold text-[#17231F]">
                  Inquiry Sent Successfully!
                </h4>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-neutral-900">{formState.name}</strong>. Our Rishikesh destination specialist will get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', phone: '', interest: 'Bliss of Nature Resort', message: '' });
                  }}
                  className="text-xs font-semibold text-[#16745A] hover:underline pt-2 block mx-auto cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <h4 className="font-display font-bold text-lg text-[#17231F]">
                    Quick Inquiry
                  </h4>
                  <span className="text-[11px] text-[#16745A] font-semibold bg-[#16745A]/10 px-2 py-0.5 rounded">
                    Response within 2 hours
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sen"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3 py-2 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3 py-2 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                    Interested In
                  </label>
                  <select
                    value={formState.interest}
                    onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3 py-2 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  >
                    <option value="Bliss of Nature Resort">Bliss of Nature Resort Stay (Rishikesh)</option>
                    <option value="Bliss of Nature Package">Bliss of Nature Resort Package (3D/2N)</option>
                    <option value="Customized Trip">Customized Trip / Group Retreat</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                    Message / Dates (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tentative travel dates or guest count..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3 py-2 text-xs text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#E8A43A]" />
                  <span>Send Inquiry to Concierge</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
