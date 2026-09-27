import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Compass, 
  CheckCircle, 
  Headphones, 
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Building2,
      title: 'Handpicked Stays',
      description: 'Carefully curated eco-resorts, colonial pine chalets, and riverside villas vetted for hygiene, aesthetics, and serene natural settings.'
    },
    {
      icon: Sparkles,
      title: 'Customized Packages',
      description: 'Flexible holiday itineraries tailored to romantic couples, family reunions, adventure seekers, and corporate wellness groups.'
    },
    {
      icon: Compass,
      title: 'Local Experiences',
      description: 'Deep-rooted connections with licensed river captains, local Pahadi naturalists, and sacred ghat priests for authentic immersion.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Booking',
      description: 'Transparent pricing with no hidden charges, instant availability verification, and seamless reservation via online portal or WhatsApp.'
    },
    {
      icon: Headphones,
      title: 'Local Support',
      description: 'On-ground Himalayan travel concierges located in Rishikesh and Dehradun assisting you 24/7 throughout your journey.'
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Service',
      description: 'Professional hospitality standards, certified river guides, modern private sanitized vehicles, and top guest safety ratings.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#17231F] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
            <span>The BON Standard</span>
            <span aria-hidden="true">·</span>
            <span>Why Travel With Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F] text-balance">
            Why BON Holidays
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            We are more than a booking engine. We are Uttarakhand locals passionate about delivering transformative stays and seamless Himalayan adventures.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F5F7F6] border border-neutral-200 hover:border-[#16745A]/40 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#16745A]/10 text-[#16745A] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#16745A]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#17231F]">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
