import React from 'react';
import { Destination, PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { MapPin, Mountain, Sun, ArrowUpRight } from 'lucide-react';

interface DestinationsSectionProps {
  destinations: Destination[];
  onNavigate: (page: PageView, sectionId?: string) => void;
  onSelectDestination: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  destinations,
  onNavigate,
  onSelectDestination,
}) => {
  return (
    <section id="destinations-section" className="py-16 sm:py-24 bg-white text-[#17231F] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Himalayan Gateways</span>
              <span aria-hidden="true">·</span>
              <span>Where We Host You</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F] text-balance">
              Explore Uttarakhand’s Finest
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              From the sacred river ghats of Rishikesh and Haridwar to the pine ridges of Mussoorie, turquoise waters of Tehri, and snow meadows of Auli.
            </p>
          </div>

          <button
            onClick={() => onNavigate('destinations')}
            className="self-start md:self-auto px-5 py-2.5 rounded-lg border border-neutral-300 hover:border-[#16745A] text-[#17231F] hover:text-[#16745A] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>All Destinations Guide</span>
            <ArrowUpRight className="w-4 h-4 text-[#E8A43A]" />
          </button>
        </div>

        {/* Large Image Cards Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.name)}
              className="group relative h-[360px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <ImageWithFallback
                src={dest.image}
                alt={dest.name}
                fallbackTitle={dest.name}
                fallbackCategory="destination"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                containerClassName="w-full h-full"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17231F] via-[#17231F]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Elevation & Distance Pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2 text-[11px] font-medium text-white/90">
                <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Mountain className="w-3 h-3 text-[#E8A43A]" />
                  <span>{dest.elevation}</span>
                </span>
                <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  {dest.distanceFromRishikesh}
                </span>
              </div>

              {/* Arrow Indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-[#E8A43A] group-hover:text-[#17231F] transition-all">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 text-white">
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {dest.name}
                </h3>

                <p className="text-xs text-[#E8A43A] font-medium">
                  {dest.tagline}
                </p>

                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                {/* Highlights tags */}
                <div className="pt-2 flex flex-wrap gap-1.5 opacity-90">
                  {dest.highlights.slice(0, 2).map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-white/90 bg-white/15 backdrop-blur-xs px-2 py-0.5 rounded"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
