import React from 'react';
import { Building2, Compass, ShieldCheck, Headphones, Star, Quote } from 'lucide-react';
import { PageView } from '../types';

interface HomeTrustStripProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const HomeTrustStrip: React.FC<HomeTrustStripProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="py-12 bg-white text-[#17231F] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 4 Clean Value Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-[#16745A]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#17231F]">Handpicked Stays</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Vetted nature retreats & chalets</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-[#16745A]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#17231F]">Local Experiences</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Rafting, treks & sacred rituals</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#16745A]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#17231F]">Trusted Booking</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Direct transparent mountain rates</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5 text-[#16745A]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#17231F]">24/7 Local Support</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Rishikesh concierge team</p>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Banner */}
        <div className="bg-[#F5F7F6] rounded-2xl p-6 sm:p-7 border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E8A43A] text-[#E8A43A]" />
              ))}
              <span className="text-xs font-bold text-neutral-700 ml-2">4.9 / 5 Guest Rating</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
              “Bliss of Nature Resort was heaven on earth. Waking up to the mist over the valley and having BON Holidays coordinate our river rafting and Ganga Aarti made our trip effortless.”
            </p>
            <div className="text-xs text-neutral-500">
              <strong className="text-neutral-900 font-semibold">Vikram & Ananya Sen</strong> · New Delhi · Stayed at Bliss of Nature Resort
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 rounded-lg bg-white border border-neutral-300 hover:border-neutral-400 text-xs font-semibold text-neutral-800 transition-colors cursor-pointer"
            >
              Contact Concierge
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-lg bg-[#16745A] hover:bg-[#0D5743] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              Book Your Trip
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
