import React from 'react';
import { PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { ShieldCheck, Heart, Trees, Compass, Users, Award, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#F5F7F6] text-[#17231F] pb-20">
      
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#17231F] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80"
            alt="Uttarakhand mountain landscapes"
            fallbackTitle="About BON Holidays"
            fallbackCategory="nature"
            className="w-full h-full object-cover opacity-35"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231F] via-[#17231F]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8A43A] uppercase tracking-wider">
            <span>Our Roots & Philosophy</span>
            <span aria-hidden="true">·</span>
            <span>Rishikesh, Uttarakhand</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Stay. Explore. Experience.
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            BON Holidays was founded with a singular vision: to connect travelers with the authentic soul of Uttarakhand through mindful hospitality and unforgettable adventures.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Born in the Garhwal Hills</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#17231F]">
              Hospitality Rooted in Mountain Wisdom
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              We started along the sacred banks of the Ganges in Rishikesh. Over the years, we observed that travelers were forced to choose between crowded generic city hotels or rugged, uncomfortable camps.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              BON Holidays bridges that gap. We create and curate properties—most notably our signature <strong>Bliss of Nature Resort</strong> in Mohan Chatti—where modern comfort, architectural elegance, and untouched nature harmonize.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('bliss-of-nature')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#16745A] hover:underline"
              >
                <span>Discover Bliss of Nature Resort</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                alt="Bliss of Nature Cottage"
                fallbackTitle="Himalayan Haven"
                fallbackCategory="resort"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md mt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Ganges River Landscape"
                fallbackTitle="Ganges Valley"
                fallbackCategory="nature"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Pillars / Values */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-3xl font-bold tracking-tight text-[#17231F]">
              Our Guiding Principles
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              How we operate our resorts and run every travel journey in Uttarakhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#16745A]/10 text-[#16745A] flex items-center justify-center">
                <Trees className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-[#17231F]">
                Eco-Conscious Stewardship
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Zero single-use plastic policy, rainwater harvesting, solar heating, and sourcing organic seasonal produce directly from Garhwali farm collectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#16745A]/10 text-[#16745A] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-[#17231F]">
                Local Community Empowerment
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Over 85% of our hospitality team, naturalists, and certified river marshals are native Uttarakhand locals paid fair and respectful living wages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#16745A]/10 text-[#16745A] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-[#17231F]">
                Uncompromising Safety
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                State-of-the-art life safety gear for water sports, sanitized luxury SUVs with seasoned mountain drivers, and 24/7 dedicated concierge assistance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#17231F] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-display text-2xl sm:text-3xl font-bold">
            Ready to Experience Uttarakhand with Us?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
            Let our local destination planners craft your perfect getaway or corporate offsite.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#E8A43A] hover:bg-[#d89329] text-[#17231F] font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              Book Your Holiday
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
