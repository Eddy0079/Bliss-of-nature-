import React from 'react';
import { HolidayPackage, PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Clock, MapPin, Check, ArrowRight, Star, ShieldCheck, Sparkles, Compass, MessageCircle, Calendar } from 'lucide-react';

interface PackagesSectionProps {
  packages: HolidayPackage[];
  onNavigate: (page: PageView, sectionId?: string) => void;
  onSelectPackage: (pkgId: string) => void;
  onBookPackage: (pkgId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  onNavigate,
  onSelectPackage,
  onBookPackage,
}) => {
  const singlePackage = packages.length === 1 ? packages[0] : null;

  return (
    <section id="packages-section" className="py-16 sm:py-24 bg-white text-[#17231F] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Signature Travel Experience</span>
              <span aria-hidden="true">·</span>
              <span>All-Inclusive Itinerary</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F] text-balance">
              Curated Holidays, Made For You
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Thoughtfully handcrafted travel journey blending luxury eco-resort stays at Bliss of Nature, thrilling river rafting, sacred rituals, and serene Himalayan vistas.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg border border-neutral-300 hover:border-[#16745A] text-[#17231F] hover:text-[#16745A] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Custom Trip Inquiry</span>
            <ArrowRight className="w-4 h-4 text-[#E8A43A]" />
          </button>
        </div>

        {/* If single package: render high-impact luxury spotlight */}
        {singlePackage ? (
          <div className="space-y-8">
            <div className="bg-[#F5F7F6] rounded-3xl overflow-hidden border border-neutral-200 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[340px] lg:min-h-[460px] overflow-hidden bg-neutral-900">
                  <ImageWithFallback
                    src={singlePackage.heroImage}
                    alt={singlePackage.title}
                    fallbackTitle={singlePackage.title}
                    fallbackCategory="adventure"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-[#17231F]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E8A43A]" />
                      <span>{singlePackage.durationText}</span>
                    </span>
                    <span className="bg-[#16745A] text-white text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#E8A43A]" />
                      <span>Flagship Retreat</span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 text-[#17231F] text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                    <Star className="w-4 h-4 fill-[#E8A43A] text-[#E8A43A]" />
                    <span>{singlePackage.rating} ({singlePackage.reviewsCount} reviews)</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs uppercase tracking-wider text-[#E8A43A] font-semibold block">
                      Rishikesh & Ganga Valley Escape
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {singlePackage.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                      <MapPin className="w-4 h-4 text-[#16745A] shrink-0" />
                      <span>{singlePackage.destination}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#17231F]">
                      {singlePackage.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {singlePackage.overview}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2 border-t border-neutral-200">
                      <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-3">
                        Included Experience Highlights:
                      </span>
                      <div className="space-y-2.5">
                        {singlePackage.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                            <Check className="w-4 h-4 text-[#16745A] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & Booking Actions */}
                  <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-neutral-400 block font-medium">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-[#16745A] font-mono tabular-nums">
                          ₹{singlePackage.startingPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-neutral-500">/ person (all-inclusive)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onSelectPackage(singlePackage.id)}
                        className="px-4 py-2.5 rounded-xl border border-neutral-300 hover:border-[#16745A] text-neutral-800 hover:text-[#16745A] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        Full Itinerary & Details
                      </button>
                      <button
                        onClick={() => onBookPackage(singlePackage.id)}
                        className="px-6 py-2.5 rounded-xl bg-[#16745A] hover:bg-[#0D5743] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Custom group package note */}
            <div className="bg-[#17231F] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E8A43A]">
                  Custom & Group Journeys
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-display">
                  Planning a Corporate Retreat or Family Group at Bliss of Nature?
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                  We customize durations, private riverside bonfires, guided expeditions, and team-building sessions to fit your group's schedule.
                </p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="shrink-0 px-5 py-2.5 rounded-xl bg-[#E8A43A] hover:bg-[#d6932b] text-[#17231F] text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Inquire for Groups
              </button>
            </div>
          </div>
        ) : (
          /* Multi-package grid fallback */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-[#F5F7F6] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <ImageWithFallback
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fallbackTitle={pkg.title}
                    fallbackCategory="adventure"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-[#17231F]/85 backdrop-blur-xs text-white text-xs font-medium px-3 py-1 rounded-md flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E8A43A]" />
                    <span>{pkg.durationText}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#17231F] text-xs font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#E8A43A] text-[#E8A43A]" />
                    <span>{pkg.rating}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#16745A] shrink-0" />
                      <span className="truncate">{pkg.destination}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-[#17231F] group-hover:text-[#16745A] transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {pkg.overview}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-neutral-200">
                      <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                        Trip Highlights:
                      </span>
                      {pkg.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-[#16745A] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-500 block font-medium">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-[#16745A] font-mono tabular-nums">
                          ₹{pkg.startingPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-neutral-500">/ person</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectPackage(pkg.id)}
                        className="px-3 py-2 rounded-lg bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-800 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onBookPackage(pkg.id)}
                        className="px-3.5 py-2 rounded-lg bg-[#16745A] hover:bg-[#0D5743] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
