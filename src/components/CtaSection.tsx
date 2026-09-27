import React from 'react';
import { PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';

interface CtaSectionProps {
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#17231F] text-white">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80"
          alt="Majestic mountains and river in Rishikesh"
          fallbackTitle="Plan Your Himalayan Holiday"
          fallbackCategory="nature"
          className="w-full h-full object-cover scale-105"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-[#17231F]/85 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17231F] via-[#0D5743]/50 to-[#17231F]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8A43A] tracking-wider uppercase">
          <span>Start Planning Today</span>
          <span aria-hidden="true">·</span>
          <span>BON Holidays Concierge</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
          Plan Your Next Escape With BON Holidays
        </h2>

        <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed text-balance">
          From peaceful nature retreats to exciting Uttarakhand adventures, we’ll help you create a memorable holiday.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('packages')}
            className="bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg border border-[#16745A] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-4 h-4 text-[#E8A43A]" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/25 transition-all flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#E8A43A]" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};
