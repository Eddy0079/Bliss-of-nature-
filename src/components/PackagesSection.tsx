import React from 'react';
import { HolidayPackage, PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Clock, MapPin, Check, ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

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
  return (
    <section id="packages-section" className="py-16 sm:py-24 bg-white text-[#17231F] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>All-Inclusive Itineraries</span>
              <span aria-hidden="true">·</span>
              <span>Himalayan Expeditions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F] text-balance">
              Curated Holidays, Made For You
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Thoughtfully handcrafted travel journeys blending luxury resort stays, river rafting thrills, sacred rituals, and scenic mountain transfers.
            </p>
          </div>

          <button
            onClick={() => onNavigate('packages')}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg border border-neutral-300 hover:border-[#16745A] text-[#17231F] hover:text-[#16745A] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 text-[#E8A43A]" />
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-[#F5F7F6] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Floating Duration */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                <ImageWithFallback
                  src={pkg.heroImage}
                  alt={pkg.title}
                  fallbackTitle={pkg.title}
                  fallbackCategory="adventure"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-[#17231F]/85 backdrop-blur-xs text-white text-xs font-medium px-3 py-1 rounded-md flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E8A43A]" />
                  <span>{pkg.durationText}</span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#17231F] text-xs font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#E8A43A] text-[#E8A43A]" />
                  <span>{pkg.rating}</span>
                </div>
              </div>

              {/* Package Details */}
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

                  {/* Highlights Bullet List */}
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

                {/* Price & Actions */}
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

      </div>
    </section>
  );
};
