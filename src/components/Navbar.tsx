import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Menu, X, Phone, Calendar, Compass, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView; sectionId?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Bliss of Nature', page: 'bliss-of-nature' },
    { label: 'Resorts', page: 'resorts' },
    { label: 'Holiday Packages', page: 'packages' },
    { label: 'Experiences', page: 'experiences' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageView, sectionId?: string) => {
    onNavigate(page, sectionId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#17231F]/95 backdrop-blur-md text-white shadow-lg border-b border-white/10 py-3.5'
            : 'bg-[#17231F] text-white py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="group flex items-baseline gap-2 text-left"
            >
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-[#E8A43A] transition-colors">
                BON Holidays
              </span>
              <span className="hidden sm:inline-block text-[11px] text-[#E8A43A] uppercase tracking-widest font-sans font-medium">
                Uttarakhand
              </span>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden xl:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.page, link.sectionId)}
                    className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-[#E8A43A] font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8A43A] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="hidden lg:flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors py-1.5 px-2.5 rounded-md hover:bg-white/5"
                title="Call Reservations"
              >
                <Phone className="w-3.5 h-3.5 text-[#E8A43A]" />
                <span className="whitespace-nowrap font-medium">+91 98765 43210</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg shadow-sm border border-[#16745A]/50 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E8A43A]" />
                <span>Book Now</span>
              </button>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[60px] z-30 bg-[#17231F]/98 backdrop-blur-xl text-white flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <div className="pb-3 border-b border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#E8A43A] font-semibold">
                Explore BON Holidays
              </p>
              <p className="text-xs text-white/60 mt-0.5">Stay. Explore. Experience.</p>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.page, link.sectionId)}
                    className={`flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium transition-colors text-left ${
                      isActive
                        ? 'bg-[#16745A] text-white font-semibold'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.label === 'Bliss of Nature' && (
                      <span className="text-[10px] tracking-wider uppercase font-semibold bg-[#E8A43A] text-[#17231F] px-2 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="flex items-center gap-3 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-[#16745A]" />
              <span>Certified Uttarakhand Eco-Hospitality Partner</span>
            </div>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8A43A]" />
              <span>Call: +91 98765 43210</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#E8A43A] hover:bg-[#d89329] text-[#17231F] font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Stay or Package</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
