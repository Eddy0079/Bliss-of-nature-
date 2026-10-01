import React, { useState } from 'react';
import { Resort, PageView, RoomOption } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { 
  MapPin, 
  Star, 
  Calendar, 
  Check, 
  Coffee, 
  Wifi, 
  Waves, 
  Wind, 
  Trees, 
  Sparkles, 
  Compass, 
  ArrowRight,
  Maximize2,
  Users,
  Bed,
  Phone,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface BlissOfNaturePageProps {
  resort: Resort;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onBookRoom: (resortId: string, roomId?: string) => void;
}

export const BlissOfNaturePage: React.FC<BlissOfNaturePageProps> = ({
  resort,
  onNavigate,
  onBookRoom,
}) => {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F6] text-[#17231F] pb-16">
      
      {/* 1. Full-Screen Cinematic Hero Image */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden bg-[#17231F] text-white">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={resort.heroImage}
            alt={resort.name}
            fallbackTitle="Bliss of Nature Resort"
            fallbackCategory="resort"
            className="w-full h-full object-cover scale-105 transform animate-fade-in"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231F] via-[#17231F]/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8A43A] uppercase tracking-widest">
              <span>Signature Eco-Resort</span>
              <span aria-hidden="true">·</span>
              <span>Rishikesh, Uttarakhand</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Bliss of Nature Resort
            </h1>

            <p className="font-display italic text-xl sm:text-2xl text-[#E8A43A]">
              “A peaceful escape surrounded by nature.”
            </p>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl">
              Nestled in the lush Mohan Chatti valley near Rishikesh, where mountain streams whisper past fragrant pine groves. Suitable for couples, families, groups, and mindful travelers seeking a tranquil Himalayan sanctuary.
            </p>
          </div>

          {/* Quick Stats & Booking Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/90">
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-[#E8A43A]" />
                <span>Mohanchatti, Rishikesh</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                <Star className="w-3.5 h-3.5 fill-[#E8A43A] text-[#E8A43A]" />
                <span>4.9 / 5 (148 Verified Guest Reviews)</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                <Trees className="w-3.5 h-3.5 text-[#16745A]" />
                <span>100% Eco-Conscious Sanctuary</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection('rooms-section')}
                className="bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg backdrop-blur-xs transition-colors cursor-pointer"
              >
                View Rooms
              </button>
              <button
                onClick={() => onBookRoom(resort.id)}
                className="bg-[#E8A43A] hover:bg-[#d89329] text-[#17231F] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Navigation Anchor Bar */}
      <div className="sticky top-[60px] z-30 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto py-3 text-xs font-semibold text-neutral-600">
            <button onClick={() => scrollToSection('about-section')} className="hover:text-[#16745A] whitespace-nowrap cursor-pointer">
              About The Resort
            </button>
            <button onClick={() => scrollToSection('rooms-section')} className="hover:text-[#16745A] whitespace-nowrap cursor-pointer">
              Rooms & Cottages
            </button>
            <button onClick={() => scrollToSection('amenities-section')} className="hover:text-[#16745A] whitespace-nowrap cursor-pointer">
              Resort Amenities
            </button>
            <button onClick={() => scrollToSection('gallery-section')} className="hover:text-[#16745A] whitespace-nowrap cursor-pointer">
              Photo Gallery
            </button>
            <button onClick={() => scrollToSection('dining-section')} className="hover:text-[#16745A] whitespace-nowrap cursor-pointer">
              Organic Dining
            </button>
            <button onClick={() => scrollToSection('nearby-section')} className="hover:text-[#16745A] whitespace-nowrap cursor-pointer">
              Nearby Attractions
            </button>
            <button onClick={() => scrollToSection('reviews-section')} className="hover:text-[#16745A] whitespace-nowrap cursor-pointer">
              Reviews & Location
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* 3. About The Resort */}
        <section id="about-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Sanctuary in the Hills</span>
              <span aria-hidden="true">·</span>
              <span>Our Story</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#17231F]">
              A Peaceful Escape Surrounded by Nature
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {resort.longDescription}
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Designed with traditional Garhwali stone architecture and reclaimed teak timber, Bliss of Nature ensures you feel intimately connected with the outdoors without sacrificing plush modern comfort.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
              <div className="p-3 bg-white rounded-xl border border-neutral-200">
                <span className="text-2xl font-bold text-[#16745A] font-mono tabular-nums">25</span>
                <span className="text-xs text-neutral-500 block">Mins from Rishikesh</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200">
                <span className="text-2xl font-bold text-[#16745A] font-mono tabular-nums">14</span>
                <span className="text-xs text-neutral-500 block">Acres of Forest Orchard</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200">
                <span className="text-2xl font-bold text-[#16745A] font-mono tabular-nums">100%</span>
                <span className="text-xs text-neutral-500 block">Organic Ingredients</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md">
              <ImageWithFallback
                src={resort.gallery[0]}
                alt="Bliss of Nature Resort Garden"
                fallbackTitle="Pine Garden"
                fallbackCategory="resort"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md mt-6">
              <ImageWithFallback
                src={resort.gallery[1]}
                alt="Riverside Cottages"
                fallbackTitle="Riverside Stream"
                fallbackCategory="resort"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* 4. Rooms & Accommodations */}
        <section id="rooms-section" className="space-y-8 pt-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Bespoke Stays</span>
              <span aria-hidden="true">·</span>
              <span>Cottages & Suites</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#17231F]">
              Handcrafted Himalayan Accommodations
            </h2>
            <p className="text-sm text-neutral-600">
              Each cottage and suite at Bliss of Nature is carefully positioned to afford maximum privacy, fresh mountain breezes, and uninterrupted natural views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resort.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    fallbackTitle={room.name}
                    fallbackCategory="room"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-[#17231F]/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {room.type}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-bold text-[#17231F]">
                        {room.name}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 font-medium">
                      <span>{room.size}</span>
                      <span aria-hidden="true">·</span>
                      <span>{room.capacity}</span>
                      <span aria-hidden="true">·</span>
                      <span>{room.bed}</span>
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {room.amenities.map((a, i) => (
                        <span key={i} className="text-[11px] bg-[#F5F7F6] text-neutral-700 px-2 py-0.5 rounded font-medium">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block font-medium">Tariff</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-[#16745A]">
                          Available on Request
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onBookRoom(resort.id, room.id)}
                      className="px-4 py-2.5 rounded-lg bg-[#16745A] hover:bg-[#0D5743] text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Enquire / Book</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E8A43A]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Amenities Showcase */}
        <section id="amenities-section" className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Resort Living</span>
              <span aria-hidden="true">·</span>
              <span>Features & Facilities</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#17231F]">
              Thoughtful Amenities in Nature
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resort.amenities.map((amenity, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#F5F7F6] border border-neutral-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#16745A]" />
                </div>
                <span className="text-xs font-semibold text-neutral-800">{amenity}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Photo Gallery */}
        <section id="gallery-section" className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Visual Tour</span>
              <span aria-hidden="true">·</span>
              <span>Bliss of Nature</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#17231F]">
              Property Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[resort.heroImage, ...resort.gallery].map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedGalleryImg(img)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Bliss of Nature photo ${idx + 1}`}
                  fallbackTitle="Bliss of Nature"
                  fallbackCategory="resort"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Dining Experience */}
        <section id="dining-section" className="bg-[#17231F] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8A43A] tracking-wider uppercase">
              <span>Gastronomy</span>
              <span aria-hidden="true">·</span>
              <span>Farm-to-Table</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Whispering Pines Bistro
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              {resort.diningOverview}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs text-white/90">
              <div className="border-l-2 border-[#E8A43A] pl-3">
                <span className="font-bold block text-white">Organic Himalayan Herbs</span>
                <span className="text-white/70">Picked from terraced plots</span>
              </div>
              <div className="border-l-2 border-[#E8A43A] pl-3">
                <span className="font-bold block text-white">Garhwali Specialties</span>
                <span className="text-white/70">Authentic regional flavors</span>
              </div>
              <div className="border-l-2 border-[#E8A43A] pl-3">
                <span className="font-bold block text-white">Woodfired Oven</span>
                <span className="text-white/70">Artisan pizzas & breads</span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Nearby Attractions */}
        <section id="nearby-section" className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Day Trips & Excursions</span>
              <span aria-hidden="true">·</span>
              <span>Around Rishikesh</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#17231F]">
              Nearby Attractions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resort.nearbyAttractions.map((att, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-neutral-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-base text-[#17231F]">{att.name}</h4>
                  <span className="text-xs font-mono font-semibold text-[#16745A] bg-[#16745A]/10 px-2 py-0.5 rounded">
                    {att.distance}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {att.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Location & How to Reach */}
        <section id="reviews-section" className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
              <span>Getting Here</span>
              <span aria-hidden="true">·</span>
              <span>Mohan Chatti, Rishikesh</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-[#17231F]">
              Directions to Bliss of Nature
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              The resort is located along Mohan Chatti Road, 25 minutes scenic drive from Tapovan / Laxman Jhula. Private transfers can be arranged directly from Dehradun Jolly Grant Airport (45 mins) or Rishikesh Railway Station (30 mins).
            </p>

            <div className="space-y-2 text-xs text-neutral-700">
              <p>📍 <strong>Address:</strong> {resort.address}</p>
              <p>✈️ <strong>Nearest Airport:</strong> Dehradun Jolly Grant Airport (DED) - 38 km</p>
              <p>🚆 <strong>Nearest Train Station:</strong> Yog Nagari Rishikesh (YNRK) - 22 km</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onBookRoom(resort.id)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#16745A] hover:bg-[#0D5743] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E8A43A]" />
                <span>Reserve at Bliss of Nature</span>
              </button>
            </div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden border border-neutral-200">
            <iframe
              title="Bliss of Nature Resort Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.14936496457!2d78.24357321598285!3d30.108427956426437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e0b2d6a5f71%3A0xb363c46e3e5cf7e8!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%]"
            />
          </div>
        </section>

      </div>

      {/* Sticky Mobile Booking Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-neutral-500 block">Tariff</span>
          <span className="text-xs font-bold text-[#16745A]">
            On Request
          </span>
        </div>
        <button
          onClick={() => onBookRoom(resort.id)}
          className="flex-1 py-2.5 px-4 bg-[#16745A] active:bg-[#0D5743] text-white text-xs font-bold rounded-lg shadow-md flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5 text-[#E8A43A]" />
          <span>Book Bliss of Nature</span>
        </button>
      </div>

    </div>
  );
};
