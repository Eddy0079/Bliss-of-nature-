/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { 
  RESORTS_DATA, 
  HOLIDAY_PACKAGES, 
  EXPERIENCES_DATA, 
  DESTINATIONS_DATA, 
  REVIEWS_DATA, 
  GALLERY_DATA 
} from './data/mockData';

// Core Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedResort } from './components/FeaturedResort';
import { HomeCuratedHighlights } from './components/HomeCuratedHighlights';
import { CtaContactSection } from './components/CtaContactSection';
import { ResortsSection } from './components/ResortsSection';
import { PackagesSection } from './components/PackagesSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Dedicated Views
import { BlissOfNaturePage } from './components/BlissOfNaturePage';
import { PackageDetailPage } from './components/PackageDetailPage';
import { AboutPage } from './components/AboutPage';

// Interactive Overlays
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('bliss-of-nature-package');
  
  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingItemType, setBookingItemType] = useState<'resort' | 'package'>('resort');
  const [bookingItemId, setBookingItemId] = useState<string>('bliss-of-nature');
  const [bookingRoomId, setBookingRoomId] = useState<string | undefined>(undefined);

  // Quick Notification Banner dismiss state
  const [showOfferBanner, setShowOfferBanner] = useState<boolean>(true);

  const blissOfNatureResort = RESORTS_DATA.find((r) => r.id === 'bliss-of-nature') || RESORTS_DATA[0];
  const activePackage = HOLIDAY_PACKAGES.find((p) => p.id === selectedPackageId) || HOLIDAY_PACKAGES[0];

  const handleNavigate = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleOpenBooking = (type: 'resort' | 'package' = 'resort', itemId?: string, roomId?: string) => {
    setBookingItemType(type);
    if (itemId) setBookingItemId(itemId);
    if (roomId) setBookingRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleQuickSearch = (destination: string, checkIn: string, checkOut: string, guests: number) => {
    setBookingItemType('resort');
    // If destination matches bliss of nature or rishikesh
    if (destination.includes('rishikesh')) {
      setBookingItemId('bliss-of-nature');
    } else {
      setBookingItemId('himalayan-pine-chalet');
    }
    setIsBookingOpen(true);
  };

  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    setCurrentPage('package-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectResort = (resortId: string) => {
    if (resortId === 'bliss-of-nature') {
      setCurrentPage('bliss-of-nature');
    } else {
      handleOpenBooking('resort', resortId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquireExperience = (experienceTitle: string) => {
    handleOpenBooking('package', 'bliss-of-nature-package');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#17231F] selection:bg-[#16745A]/20 selection:text-[#16745A]">
      
      {/* Top Notification Announcement Bar */}
      {showOfferBanner && (
        <div className="bg-[#16745A] text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium relative z-50 flex items-center justify-center gap-2">
          <span>
            🌿 <strong>Exclusive Season Offer:</strong> Enjoy complimentary Ganges river rafting with every 2+ night stay at <strong>Bliss of Nature Resort</strong>.
          </span>
          <button
            onClick={() => handleOpenBooking('resort', 'bliss-of-nature')}
            className="underline font-bold hover:text-[#E8A43A] ml-1 cursor-pointer"
          >
            Claim Offer
          </button>
          <button
            onClick={() => setShowOfferBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-sm p-1"
            aria-label="Dismiss banner"
          >
            ×
          </button>
        </div>
      )}

      {/* Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking('resort')}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onNavigate={handleNavigate}
              onQuickSearch={handleQuickSearch}
            />

            <FeaturedResort
              resort={blissOfNatureResort}
              onNavigate={handleNavigate}
              onBookResort={(id) => handleOpenBooking('resort', id)}
            />

            <HomeCuratedHighlights
              packages={HOLIDAY_PACKAGES}
              resorts={RESORTS_DATA}
              onNavigate={handleNavigate}
              onSelectPackage={handleSelectPackage}
              onSelectResort={handleSelectResort}
              onBookItem={(type, id) => handleOpenBooking(type, id)}
            />

            <CtaContactSection
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking('resort')}
            />
          </>
        )}

        {currentPage === 'bliss-of-nature' && (
          <BlissOfNaturePage
            resort={blissOfNatureResort}
            onNavigate={handleNavigate}
            onBookRoom={(resortId, roomId) => handleOpenBooking('resort', resortId, roomId)}
          />
        )}

        {currentPage === 'package-detail' && (
          <PackageDetailPage
            packageData={activePackage}
            onNavigate={handleNavigate}
            onBookPackage={(id) => handleOpenBooking('package', id)}
          />
        )}

        {currentPage === 'resorts' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-2">
              <span className="text-xs font-semibold text-[#16745A] uppercase tracking-wider">
                Luxury Stays & Eco-Sanctuaries
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold">
                Resorts in Uttarakhand
              </h1>
              <p className="text-sm text-neutral-600 max-w-2xl">
                Explore handpicked boutique properties starting from our flagship Bliss of Nature Resort in Rishikesh to snow-view chalets in Mussoorie and Kanatal.
              </p>
            </div>
            <ResortsSection
              resorts={RESORTS_DATA}
              onNavigate={handleNavigate}
              onSelectResort={handleSelectResort}
              onBookResort={(id) => handleOpenBooking('resort', id)}
            />
            <FeaturedResort
              resort={blissOfNatureResort}
              onNavigate={handleNavigate}
              onBookResort={(id) => handleOpenBooking('resort', id)}
            />
          </div>
        )}

        {currentPage === 'packages' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-2">
              <span className="text-xs font-semibold text-[#16745A] uppercase tracking-wider">
                Signature Holiday Package
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold">
                Bliss of Nature Holiday Package
              </h1>
              <p className="text-sm text-neutral-600 max-w-2xl">
                Our exclusive all-inclusive holiday package at Bliss of Nature Resort in Rishikesh — featuring luxury eco-cottages, Ganges white water rafting, sacred Triveni Ghat aarti, and rejuvenating mountain wellness.
              </p>
            </div>
            <PackagesSection
              packages={HOLIDAY_PACKAGES}
              onNavigate={handleNavigate}
              onSelectPackage={handleSelectPackage}
              onBookPackage={(id) => handleOpenBooking('package', id)}
            />
          </div>
        )}

        {currentPage === 'experiences' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-2">
              <span className="text-xs font-semibold text-[#16745A] uppercase tracking-wider">
                Beyond the Ordinary
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold">
                Unforgettable Experiences
              </h1>
              <p className="text-sm text-neutral-600 max-w-2xl">
                From white water river rafting on the holy Ganges to serene forest bathing and sacred evening aartis, discover what makes Uttarakhand legendary.
              </p>
            </div>
            <ExperiencesSection
              experiences={EXPERIENCES_DATA}
              onNavigate={handleNavigate}
              onInquireExperience={handleInquireExperience}
            />
          </div>
        )}

        {currentPage === 'destinations' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-2">
              <span className="text-xs font-semibold text-[#16745A] uppercase tracking-wider">
                Himalayan Geography
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold">
                Destinations We Host
              </h1>
              <p className="text-sm text-neutral-600 max-w-2xl">
                Explore the most captivating valleys, high-altitude ridges, and sacred rivers across the state of Uttarakhand.
              </p>
            </div>
            <DestinationsSection
              destinations={DESTINATIONS_DATA}
              onNavigate={handleNavigate}
              onSelectDestination={(dest) => handleNavigate('contact')}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('resort')}
          />
        )}

        {currentPage === 'contact' && (
          <div className="py-12">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectDestination={(dest) => handleNavigate('destinations')}
      />

      {/* Interactive Booking System Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        resorts={RESORTS_DATA}
        packages={HOLIDAY_PACKAGES}
        initialItemType={bookingItemType}
        initialItemId={bookingItemId}
        initialRoomId={bookingRoomId}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
