import React from 'react';
import { Review } from '../types';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialsSectionProps {
  reviews: Review[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ reviews }) => {
  return (
    <section className="py-16 sm:py-24 bg-white text-[#17231F] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
            <span>Guest Stories</span>
            <span aria-hidden="true">·</span>
            <span>Real Experiences</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F] text-balance">
            Loved by Travelers
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Read how couples, families, and mountain adventurers experienced Bliss of Nature and our curated Uttarakhand holiday journeys.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F5F7F6] p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E8A43A] text-[#E8A43A]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                  “{rev.comment}”
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-sm text-[#17231F]">
                    {rev.author}
                  </h4>
                  <span className="flex items-center gap-1 text-[11px] text-[#16745A] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="text-[11px] text-neutral-500 flex items-center justify-between">
                  <span>{rev.location}</span>
                  <span>{rev.date}</span>
                </div>

                <div className="text-[11px] text-[#16745A] font-medium truncate pt-0.5">
                  Trip: {rev.tripTaken}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
