import React, { useState } from 'react';
import { Resort, PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { MapPin, Star, Sparkles, Check, ArrowRight, Bed, Eye } from 'lucide-react';

interface ResortsSectionProps {
  resorts: Resort[];
  onNavigate: (page: PageView, sectionId?: string) => void;
  onSelectResort: (resortId: string) => void;
  onBookResort: (resortId: string) => void;
}

export const ResortsSection: React.FC<ResortsSectionProps> = ({
  resorts,
  onNavigate,
  onSelectResort,
  onBookResort,
}) => {
  const [filter, setFilter] = useState<'all' | 'eco' | 'river' | 'chalet'>('all');

  const filteredResorts = resorts.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'eco') return r.propertyType === 'Nature Eco-Resort';
    if (filter === 'river') return r.propertyType === 'Riverside Retreat';
    if (filter === 'chalet') return r.propertyType === 'Mountain Chalet' || r.propertyType === 'Wilderness Lodge';
    return true;
  });

  return (
    <section id="resorts-section" className="py-16 sm:py-24 bg-[#F5F7F6] text-[#17231F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Handpicked Accommodations</span>
              <span aria-hidden="true">·</span>
              <span>Uttarakhand</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F] text-balance">
              Stay Somewhere Special
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              From forested riverside cottages in Rishikesh to misty high-altitude deodar chalets in Mussoorie and Kanatal.
            </p>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-200/70 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#17231F] shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Stays ({resorts.length})
            </button>
            <button
              onClick={() => setFilter('eco')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'eco'
                  ? 'bg-white text-[#17231F] shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Eco-Resorts
            </button>
            <button
              onClick={() => setFilter('river')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'river'
                  ? 'bg-white text-[#17231F] shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Riverside
            </button>
            <button
              onClick={() => setFilter('chalet')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'chalet'
                  ? 'bg-white text-[#17231F] shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Mountain Chalets
            </button>
          </div>
        </div>

        {/* Resorts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResorts.map((resort) => (
            <div
              key={resort.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src={resort.heroImage}
                  alt={resort.name}
                  fallbackTitle={resort.name}
                  fallbackCategory="resort"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
                
                {/* Property Type Badge */}
                <div className="absolute top-3 left-3 bg-[#17231F]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {resort.propertyType}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#17231F] text-xs font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#E8A43A] text-[#E8A43A]" />
                  <span>{resort.rating}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#16745A] shrink-0" />
                    <span className="truncate">{resort.location}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#17231F] group-hover:text-[#16745A] transition-colors line-clamp-1">
                    {resort.name}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {resort.shortDescription}
                  </p>

                  {/* Amenities Preview */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {resort.amenities.slice(0, 3).map((amenity, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded font-medium truncate max-w-[190px]"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-medium">Tariff</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-[#16745A]">
                        On Request
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectResort(resort.id)}
                      className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onBookResort(resort.id)}
                      className="px-3 py-2 rounded-lg bg-[#16745A] hover:bg-[#0D5743] text-white text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3 text-[#E8A43A]" />
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
