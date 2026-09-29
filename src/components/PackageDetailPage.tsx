import React, { useState } from 'react';
import { HolidayPackage, PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  Clock, 
  MapPin, 
  Check, 
  X, 
  ChevronDown, 
  Calendar, 
  ArrowLeft, 
  ShieldCheck, 
  HelpCircle,
  Car,
  Hotel,
  Utensils
} from 'lucide-react';

interface PackageDetailPageProps {
  packageData: HolidayPackage;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onBookPackage: (pkgId: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({
  packageData,
  onNavigate,
  onBookPackage,
}) => {
  const [openDay, setOpenDay] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F7F6] text-[#17231F] pb-20">
      
      {/* Back Button Bar */}
      <div className="bg-white border-b border-neutral-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Holiday Packages</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-end bg-[#17231F] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={packageData.heroImage}
            alt={packageData.title}
            fallbackTitle={packageData.title}
            fallbackCategory="adventure"
            className="w-full h-full object-cover scale-105"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231F] via-[#17231F]/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#E8A43A] uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{packageData.destination}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{packageData.durationText}</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl">
            {packageData.title}
          </h1>

          <p className="text-sm sm:text-base text-white/85 max-w-2xl">
            {packageData.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
            <div>
              <span className="text-xs text-white/70 block">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
                  ₹{packageData.startingPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-white/70">/ person (inclusive of stays & transfers)</span>
              </div>
            </div>

            <button
              onClick={() => onBookPackage(packageData.id)}
              className="bg-[#E8A43A] hover:bg-[#d89329] text-[#17231F] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Package</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (8 cols): Overview, Itinerary, Inclusions/Exclusions, FAQs */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#17231F]">
                Package Overview
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {packageData.overview}
              </p>

              {/* Highlights */}
              <div className="pt-4 border-t border-neutral-100 space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Key Itinerary Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-neutral-800">
                  {packageData.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#16745A] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#17231F]">
                    Day-by-Day Itinerary
                  </h2>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Click each day to view detailed schedule, meals, and overnight stays.
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-[#16745A] bg-[#16745A]/10 px-2.5 py-1 rounded-md">
                  {packageData.durationDays} Days / {packageData.durationNights} Nights
                </span>
              </div>

              <div className="space-y-3">
                {packageData.itinerary.map((day) => {
                  const isOpen = openDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="border border-neutral-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenDay(isOpen ? 0 : day.day)}
                        className="w-full p-4 flex items-center justify-between text-left bg-[#F5F7F6] hover:bg-neutral-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#16745A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                            D{day.day}
                          </span>
                          <div>
                            <h4 className="font-display font-bold text-sm sm:text-base text-[#17231F]">
                              {day.title}
                            </h4>
                            <p className="text-xs text-neutral-500 line-clamp-1">
                              {day.highlights}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-500 transition-transform ${
                            isOpen ? 'rotate-180 text-[#16745A]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-5 bg-white space-y-3 text-xs sm:text-sm text-neutral-700 border-t border-neutral-200 animate-in fade-in duration-200">
                          <p className="leading-relaxed">{day.description}</p>
                          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-500 border-t border-neutral-100">
                            <span className="flex items-center gap-1.5">
                              <Utensils className="w-3.5 h-3.5 text-[#16745A]" />
                              <span>Meals: <strong className="text-neutral-700">{day.mealsIncluded}</strong></span>
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Hotel className="w-3.5 h-3.5 text-[#16745A]" />
                              <span>Overnight: <strong className="text-neutral-700">{day.stayLocation}</strong></span>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-[#16745A] flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#16745A]" />
                  <span>Package Inclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-neutral-700">
                  {packageData.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#16745A] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-neutral-800 flex items-center gap-2">
                  <X className="w-5 h-5 text-neutral-400" />
                  <span>Package Exclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-neutral-600">
                  {packageData.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#17231F] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#16745A]" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="space-y-3">
                {packageData.faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="border border-neutral-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full p-4 flex items-center justify-between text-left font-semibold text-xs sm:text-sm text-[#17231F] hover:bg-neutral-50 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Booking & Travel Summary Card */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-md space-y-6">
              <div className="space-y-1">
                <span className="text-xs text-neutral-500 font-medium">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#16745A] font-mono tabular-nums">
                    ₹{packageData.startingPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-neutral-500">/ person</span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  Customizable for couples, families, and group travelers.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-100 text-xs text-neutral-700">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Duration:</span>
                  <span className="font-semibold">{packageData.durationText}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Accommodation:</span>
                  <span className="font-semibold truncate max-w-[170px] text-right">{packageData.accommodationType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Transportation:</span>
                  <span className="font-semibold truncate max-w-[170px] text-right">{packageData.transportation}</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={() => onBookPackage(packageData.id)}
                  className="w-full py-3 px-4 rounded-xl bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#E8A43A]" />
                  <span>Reserve This Package</span>
                </button>

                <a
                  href={`https://wa.me/919149074344?text=${encodeURIComponent(
                    `Hello BON Holidays, I would like to inquire about the ${packageData.title} (${packageData.durationText}) package.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-neutral-300 hover:border-[#16745A] text-neutral-800 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-500 justify-center">
                <ShieldCheck className="w-4 h-4 text-[#16745A]" />
                <span>100% Verified Local Guides & Stays</span>
              </div>
            </div>

            {/* Need Customization Banner */}
            <div className="bg-[#17231F] text-white rounded-2xl p-5 space-y-2">
              <h4 className="font-display font-bold text-base">Want a Custom Route?</h4>
              <p className="text-xs text-white/75 leading-relaxed">
                Add extra days in Rishikesh, upgrade to the Riverside Villa, or include bungee jumping. Our travel planners customize at no extra fee.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-semibold text-[#E8A43A] hover:underline block pt-1 cursor-pointer"
              >
                Request Custom Itinerary →
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
