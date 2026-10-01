import React, { useState } from 'react';
import { Resort, PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  MapPin, 
  Star, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Utensils, 
  Compass, 
  Trees, 
  Waves, 
  Calendar,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface FeaturedResortProps {
  resort: Resort;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onBookResort: (resortId: string) => void;
  onOpenGalleryItem?: (index: number) => void;
}

export const FeaturedResort: React.FC<FeaturedResortProps> = ({
  resort,
  onNavigate,
  onBookResort,
}) => {
  const [activeTab, setActiveTab] = useState<'rooms' | 'nature' | 'dining' | 'activities'>('rooms');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const displayImages = [resort.heroImage, ...resort.gallery.slice(0, 4)];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#17231F] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Signature Property</span>
              <span aria-hidden="true">·</span>
              <span>Rishikesh, Uttarakhand</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F] text-balance">
              Bliss of Nature Resort
            </h2>
            <p className="font-display italic text-xl text-[#16745A]">
              “A peaceful escape surrounded by nature.”
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('bliss-of-nature')}
              className="px-5 py-2.5 rounded-lg border border-[#16745A] text-[#16745A] hover:bg-[#16745A] hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Bliss of Nature</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onBookResort(resort.id)}
              className="px-5 py-2.5 rounded-lg bg-[#16745A] hover:bg-[#0D5743] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8A43A]" />
              <span>Book Your Stay</span>
            </button>
          </div>
        </div>

        {/* Cinematic Main Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#F5F7F6] rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
          
          {/* Left Column: Visual Gallery Carousel */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md group">
              <ImageWithFallback
                src={displayImages[selectedImageIndex] || resort.heroImage}
                alt={resort.name}
                fallbackTitle={resort.name}
                fallbackCategory="resort"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                containerClassName="w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-[#17231F]/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E8A43A]" />
                <span>{resort.location}</span>
              </div>
              <div className="absolute top-4 right-4 bg-[#17231F]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#E8A43A] text-[#E8A43A]" />
                <span>{resort.rating}</span>
                <span className="text-white/60">({resort.reviewsCount})</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2.5">
              {displayImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImageIndex === idx
                      ? 'border-[#16745A] ring-2 ring-[#16745A]/20 scale-102'
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fallbackTitle="Bliss of Nature"
                    fallbackCategory="resort"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Key Details & Overview */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-3">
                <div>
                  <span className="text-xs text-neutral-500 font-medium">Tariff</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-[#16745A]">
                      Available on Request
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-[#16745A] bg-[#16745A]/10 px-2.5 py-1 rounded-md">
                    {resort.propertyType}
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                {resort.shortDescription}
              </p>

              {/* Highlights Pill-Free Bullet Points */}
              <div className="space-y-2.5 pt-1">
                <p className="text-xs uppercase tracking-wider font-bold text-neutral-500">
                  Featured Inclusions & Experiences
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-neutral-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16745A] shrink-0" />
                    <span>Himalayan Infinity Pool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16745A] shrink-0" />
                    <span>Riverside Yoga Shala</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16745A] shrink-0" />
                    <span>Organic Farm Dining</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16745A] shrink-0" />
                    <span>Evening Bonfires & Trails</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick interactive feature tabs */}
            <div className="space-y-3 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-neutral-200">
                <button
                  onClick={() => setActiveTab('rooms')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeTab === 'rooms' ? 'bg-[#16745A] text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Rooms
                </button>
                <button
                  onClick={() => setActiveTab('nature')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeTab === 'nature' ? 'bg-[#16745A] text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Nature Views
                </button>
                <button
                  onClick={() => setActiveTab('dining')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeTab === 'dining' ? 'bg-[#16745A] text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Dining
                </button>
                <button
                  onClick={() => setActiveTab('activities')}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeTab === 'activities' ? 'bg-[#16745A] text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Nearby
                </button>
              </div>

              {/* Tab content panel */}
              <div className="p-3 bg-white rounded-lg border border-neutral-200 text-xs text-neutral-700 min-h-[90px] flex items-center">
                {activeTab === 'rooms' && (
                  <div className="space-y-1 w-full">
                    <p className="font-semibold text-neutral-900">4 Bespoke Accommodation Categories:</p>
                    <p className="text-neutral-600">
                      Valley View Teak Cottages, Riverside Stone Villas with stream access, and Himalayan Master Suites with 270° glass walls.
                    </p>
                  </div>
                )}
                {activeTab === 'nature' && (
                  <div className="space-y-1 w-full">
                    <p className="font-semibold text-neutral-900">Forest Canopies & Mountain Streams:</p>
                    <p className="text-neutral-600">
                      Surrounded by pine-covered slopes, clear mountain water cascades, and breathtaking sunrise vistas over Mohan Chatti.
                    </p>
                  </div>
                )}
                {activeTab === 'dining' && (
                  <div className="space-y-1 w-full">
                    <p className="font-semibold text-neutral-900">The Whispering Pines Bistro:</p>
                    <p className="text-neutral-600">
                      Organic farm-to-table dining serving authentic Garhwali Kafuli, continental woodfired flatbreads, and herbal infusions.
                    </p>
                  </div>
                )}
                {activeTab === 'activities' && (
                  <div className="space-y-1 w-full">
                    <p className="font-semibold text-neutral-900">Close to Major Attractions:</p>
                    <p className="text-neutral-600">
                      Neer Garh Waterfall (8 km), Beatles Ashram (13 km), and Shivpuri Ganga Rafting launch (10 km).
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onNavigate('bliss-of-nature')}
                className="flex-1 py-2.5 px-4 rounded-lg bg-[#17231F] hover:bg-black text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Full Property Details</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#E8A43A]" />
              </button>
              <button
                onClick={() => onBookResort(resort.id)}
                className="flex-1 py-2.5 px-4 rounded-lg bg-[#E8A43A] hover:bg-[#d89329] text-[#17231F] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Reserve Room</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
