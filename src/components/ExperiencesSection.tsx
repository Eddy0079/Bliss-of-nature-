import React, { useState } from 'react';
import { Experience, PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Compass, Clock, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface ExperiencesSectionProps {
  experiences: Experience[];
  onNavigate: (page: PageView, sectionId?: string) => void;
  onInquireExperience: (experienceTitle: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  experiences,
  onNavigate,
  onInquireExperience,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Adventure', 'Spiritual & Cultural', 'Nature & Wildlife', 'Wellness'];

  const filtered = selectedCategory === 'all'
    ? experiences
    : experiences.filter((e) => e.category === selectedCategory);

  return (
    <section id="experiences-section" className="py-16 sm:py-24 bg-[#F5F7F6] text-[#17231F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Authentic Adventures</span>
              <span aria-hidden="true">·</span>
              <span>Local Immersion</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F] text-balance">
              More Than Just A Stay
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Immerse yourself in authentic Himalayan culture, world-class river thrills, tranquil forest bathing, and ancient spiritual traditions.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-200/70 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors capitalize whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-[#17231F] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat === 'all' ? 'All Activities' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src={exp.image}
                  alt={exp.title}
                  fallbackTitle={exp.title}
                  fallbackCategory="adventure"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
                
                {/* Clean unboxed category & duration */}
                <div className="absolute top-3 left-3 bg-[#17231F]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {exp.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 font-medium px-2.5 py-1 bg-black/60 backdrop-blur-xs rounded-md">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E8A43A]" />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="text-[#E8A43A] font-semibold">
                    {exp.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#16745A] shrink-0" />
                    <span className="truncate">{exp.location}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#17231F] group-hover:text-[#16745A] transition-colors">
                    {exp.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {exp.shortDescription}
                  </p>

                  <div className="pt-2 space-y-1">
                    {exp.highlights.slice(0, 2).map((hl, i) => (
                      <p key={i} className="text-[11px] text-neutral-700 flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16745A] shrink-0" />
                        <span>{hl}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">
                    Season: <strong className="text-neutral-700 font-semibold">{exp.bestSeason}</strong>
                  </span>
                  <button
                    onClick={() => onInquireExperience(exp.title)}
                    className="px-3 py-1.5 rounded-lg bg-[#16745A]/10 hover:bg-[#16745A] text-[#16745A] hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
