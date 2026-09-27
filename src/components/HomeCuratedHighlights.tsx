import React, { useState } from 'react';
import { Resort, HolidayPackage, PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Clock, MapPin, Star, ArrowRight, Calendar, Sparkles, Building2, Compass, Check, ShieldCheck } from 'lucide-react';

interface HomeCuratedHighlightsProps {
  packages: HolidayPackage[];
  resorts: Resort[];
  onNavigate: (page: PageView) => void;
  onSelectPackage: (pkgId: string) => void;
  onSelectResort: (resortId: string) => void;
  onBookItem: (type: 'resort' | 'package', id: string) => void;
}

export const HomeCuratedHighlights: React.FC<HomeCuratedHighlightsProps> = ({
  packages,
  resorts,
  onNavigate,
  onSelectPackage,
  onSelectResort,
  onBookItem,
}) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'resorts'>('packages');

  const blissPackage = packages[0];
  const topResorts = resorts.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-[#F5F7F6] text-[#17231F] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Group Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Curated Highlights</span>
              <span aria-hidden="true">·</span>
              <span>Uttarakhand Escapes</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17231F]">
              Signature Package & Boutique Stays
            </h2>
          </div>

          {/* Grouping Switcher Pill */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 bg-neutral-200/80 rounded-xl">
              <button
                onClick={() => setActiveTab('packages')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'packages'
                    ? 'bg-white text-[#17231F] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-[#16745A]" />
                <span>Bliss of Nature Package</span>
              </button>
              <button
                onClick={() => setActiveTab('resorts')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'resorts'
                    ? 'bg-white text-[#17231F] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-[#16745A]" />
                <span>Resorts & Stays</span>
              </button>
            </div>

            <button
              onClick={() => onNavigate(activeTab === 'packages' ? 'packages' : 'resorts')}
              className="hidden md:flex items-center gap-1 text-xs font-semibold text-[#16745A] hover:underline px-2 cursor-pointer"
            >
              <span>{activeTab === 'packages' ? 'View Package Details' : 'View All Resorts'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content View */}
        {activeTab === 'packages' ? (
          blissPackage ? (
            <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Side */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-neutral-900 min-h-[260px] sm:min-h-[320px]">
                  <ImageWithFallback
                    src={blissPackage.heroImage}
                    alt={blissPackage.title}
                    fallbackTitle={blissPackage.title}
                    fallbackCategory="adventure"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-[#17231F]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E8A43A]" />
                      <span>{blissPackage.durationText}</span>
                    </span>
                    <span className="bg-[#16745A] text-white text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#E8A43A]" />
                      <span>Signature Package</span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 text-[#17231F] text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-[#E8A43A] text-[#E8A43A]" />
                    <span>{blissPackage.rating} ({blissPackage.reviewsCount} reviews)</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#E8A43A] font-semibold block mb-0.5">
                      All-Inclusive Himalayan Retreat
                    </span>
                    <p className="text-sm font-medium text-white/90 line-clamp-1">
                      Rishikesh · Ganges River Rafting · Ganga Aarti · Sunrise Yoga
                    </p>
                  </div>
                </div>

                {/* Details Side */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                      <MapPin className="w-4 h-4 text-[#16745A] shrink-0" />
                      <span>{blissPackage.destination}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#17231F]">
                      {blissPackage.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {blissPackage.overview}
                    </p>

                    {/* Highlights bullets */}
                    <div className="pt-2">
                      <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                        Package Inclusions & Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {blissPackage.highlights.slice(0, 4).map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                            <Check className="w-4 h-4 text-[#16745A] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-neutral-400 block font-medium">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-[#16745A] font-mono tabular-nums">
                          ₹{blissPackage.startingPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-neutral-500">/ person (all-inclusive)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onSelectPackage(blissPackage.id)}
                        className="px-4 py-2.5 rounded-xl border border-neutral-300 hover:border-[#16745A] text-neutral-800 hover:text-[#16745A] text-xs font-semibold transition-colors cursor-pointer"
                      >
                        View Full Itinerary
                      </button>
                      <button
                        onClick={() => onBookItem('package', blissPackage.id)}
                        className="px-5 py-2.5 rounded-xl bg-[#16745A] hover:bg-[#0D5743] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                      >
                        Book Package
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ) : null
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {topResorts.map((resort) => (
              <div
                key={resort.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <ImageWithFallback
                    src={resort.heroImage}
                    alt={resort.name}
                    fallbackTitle={resort.name}
                    fallbackCategory="resort"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-[#17231F]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {resort.propertyType}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 text-[#17231F] text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-[#E8A43A] text-[#E8A43A]" />
                    <span>{resort.rating}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1 text-xs text-neutral-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#16745A] shrink-0" />
                      <span className="truncate">{resort.location}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#17231F] group-hover:text-[#16745A] transition-colors">
                      {resort.name}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {resort.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block font-medium">From</span>
                      <span className="text-base font-bold text-[#16745A] font-mono tabular-nums">
                        ₹{resort.startingPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-neutral-500"> / night</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectResort(resort.id)}
                        className="text-xs font-semibold text-neutral-700 hover:text-[#16745A] cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onBookItem('resort', resort.id)}
                        className="px-3 py-1.5 rounded-lg bg-[#16745A] hover:bg-[#0D5743] text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile View All Link */}
        <div className="mt-6 text-center md:hidden">
          <button
            onClick={() => onNavigate(activeTab === 'packages' ? 'packages' : 'resorts')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16745A] hover:underline"
          >
            <span>{activeTab === 'packages' ? 'Explore Bliss of Nature Package' : 'Explore All Resorts & Stays'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
