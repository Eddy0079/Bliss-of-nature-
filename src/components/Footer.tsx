import React from 'react';
import { PageView } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  ArrowUp,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, sectionId?: string) => void;
  onSelectDestination?: (dest: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectDestination }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17231F] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: BON Holidays Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                BON Holidays
              </h3>
              <p className="text-xs text-[#E8A43A] uppercase tracking-widest font-semibold">
                Stay. Explore. Experience.
              </p>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              BON Holidays is a premier travel and hospitality company dedicated to mindful stays, luxury eco-resorts like Bliss of Nature in Rishikesh, curated Himalayan packages, and authentic Uttarakhand experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#16745A] text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61594779811083"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#16745A] text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#16745A] text-white/80 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8A43A]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bliss-of-nature')}
                  className="hover:text-white transition-colors cursor-pointer text-[#E8A43A] font-medium"
                >
                  Bliss of Nature Resort
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resorts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Resorts & Stays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Holiday Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experiences')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Destinations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8A43A]">
              Popular Destinations
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {['Rishikesh', 'Mussoorie', 'Haridwar', 'Dehradun', 'Tehri Lake', 'Kanatal & Dhanaulti', 'Auli Ski Resort', 'Chopta Valley'].map((dest) => (
                <li key={dest}>
                  <button
                    onClick={() => {
                      if (onSelectDestination) onSelectDestination(dest);
                      else onNavigate('destinations');
                    }}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {dest}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8A43A]">
              Contact Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#E8A43A] shrink-0 mt-0.5" />
                <span>+91 91490 74344</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#E8A43A] shrink-0 mt-0.5" />
                <span>info@bonholidays.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#E8A43A] shrink-0 mt-0.5" />
                <span>Tapovan & Mohan Chatti, Rishikesh, Uttarakhand, India</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-white/60 block">
                Approved Eco-Hospitality Partner in Uttarakhand
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 BON Holidays. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Booking
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
