import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ galleryItems }) => {
  const [filter, setFilter] = useState<'all' | 'resorts' | 'nature' | 'adventure' | 'dining'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery-section" className="py-16 sm:py-24 bg-[#17231F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8A43A] tracking-wider uppercase">
              <span>Visual Journey</span>
              <span aria-hidden="true">·</span>
              <span>Moments in Uttarakhand</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Captured Moments
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl">
              Glimpses into life at Bliss of Nature, roaring river rapids, quiet morning yoga, and starlight campfires.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/10 rounded-xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All' },
              { id: 'resorts', label: 'Resorts & Rooms' },
              { id: 'nature', label: 'Nature & Mountains' },
              { id: 'adventure', label: 'Adventures' },
              { id: 'dining', label: 'Dining & Food' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#16745A] text-white shadow-xs'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                fallbackTitle={item.title}
                fallbackCategory="nature"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                containerClassName="w-full h-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="self-end p-1.5 rounded-md bg-white/20 backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="font-display font-semibold text-sm line-clamp-1">{item.title}</p>
                  <p className="text-[11px] text-white/75 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E8A43A]" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox content container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4"
          >
            <div className="relative max-h-[70vh] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="text-center space-y-1 max-w-xl">
              <h3 className="font-display text-xl font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#E8A43A] font-medium flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{filteredItems[lightboxIndex].location}</span>
                <span className="text-white/40">·</span>
                <span className="text-white/60">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </p>
              <p className="text-xs text-white/80">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
