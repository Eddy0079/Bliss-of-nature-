import React, { useState } from 'react';
import { PageView } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { MapPin, Calendar, Users, Search, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageView, sectionId?: string) => void;
  onQuickSearch: (destination: string, checkIn: string, checkOut: string, guests: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onQuickSearch }) => {
  const [destination, setDestination] = useState('rishikesh');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch(destination, checkIn, checkOut, guests);
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#17231F]">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Majestic Himalayan valleys and pine forests in Uttarakhand"
          fallbackTitle="Himalayan Foothills · Uttarakhand"
          fallbackCategory="nature"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
          containerClassName="w-full h-full"
        />
        {/* Measured contrast scrim: dark gradient overlay for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17231F] via-[#17231F]/60 to-black/40" />
        <div className="absolute inset-0 bg-[#0D5743]/20 mix-blend-multiply" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Quiet brand subtext */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-[#E8A43A] uppercase">
            <span>BON Holidays</span>
            <span aria-hidden="true">·</span>
            <span>Stay. Explore. Experience.</span>
          </div>

          {/* Headline with balanced wrap */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance">
            Your Journey Begins Here.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-2xl font-normal leading-relaxed text-balance">
            Discover beautiful stays, unforgettable experiences and carefully crafted holidays with BON Holidays in the serene valleys of Uttarakhand.
          </p>

          {/* Hero Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('resorts')}
              className="bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg border border-[#16745A] transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Explore Resorts</span>
              <ArrowRight className="w-4 h-4 text-[#E8A43A]" />
            </button>

            <button
              onClick={() => onNavigate('packages')}
              className="bg-white/10 hover:bg-white/20 active:scale-[0.98] backdrop-blur-sm text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View Holiday Packages</span>
            </button>
          </div>
        </div>
      </div>

      {/* Booking / Search Panel Near Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-white/95 backdrop-blur-md text-[#17231F] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl border border-white/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-center"
        >
          {/* Destination */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16745A]">
              Destination
            </label>
            <div className="relative flex items-center">
              <MapPin className="w-4 h-4 text-[#16745A] absolute left-3 pointer-events-none" />
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg pl-9 pr-3 py-2 text-xs sm:text-sm font-medium text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
              >
                <option value="rishikesh">Rishikesh & Mohanchatti</option>
                <option value="mussoorie">Mussoorie & Dhanaulti</option>
                <option value="haridwar">Haridwar</option>
                <option value="tehri">Tehri Lake</option>
                <option value="kanatal">Kanatal Alpine Heights</option>
                <option value="auli">Auli & Chamoli</option>
                <option value="chopta">Chopta & Tungnath</option>
              </select>
            </div>
          </div>

          {/* Check-In */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16745A]">
              Check-In
            </label>
            <div className="relative flex items-center">
              <Calendar className="w-4 h-4 text-[#16745A] absolute left-3 pointer-events-none" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg pl-9 pr-3 py-2 text-xs sm:text-sm font-medium text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
              />
            </div>
          </div>

          {/* Check-Out */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16745A]">
              Check-Out
            </label>
            <div className="relative flex items-center">
              <Calendar className="w-4 h-4 text-[#16745A] absolute left-3 pointer-events-none" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg pl-9 pr-3 py-2 text-xs sm:text-sm font-medium text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16745A]">
              Guests
            </label>
            <div className="relative flex items-center">
              <Users className="w-4 h-4 text-[#16745A] absolute left-3 pointer-events-none" />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg pl-9 pr-3 py-2 text-xs sm:text-sm font-medium text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Family Group</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="pt-2 sm:pt-0 lg:self-end">
            <button
              type="submit"
              className="w-full bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white font-semibold py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#E8A43A]" />
              <span>Search Availability</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
