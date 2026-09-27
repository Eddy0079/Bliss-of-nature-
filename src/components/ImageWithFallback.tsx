import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: 'nature' | 'resort' | 'room' | 'adventure' | 'destination';
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'BON Holidays Uttarakhand',
  fallbackTitle,
  fallbackCategory = 'nature',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // If error or empty src, render the styled luxury SVG placeholder
  if (error || !src) {
    return (
      <div 
        className={`relative overflow-hidden flex flex-col justify-end p-6 bg-gradient-to-br from-[#16745A] via-[#0D5743] to-[#17231F] text-white ${containerClassName || className}`}
      >
        {/* Subtle decorative Himalayan silhouette */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none object-cover" 
          viewBox="0 0 400 300" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,300 L0,180 L80,110 L160,200 L240,90 L320,160 L400,120 L400,300 Z" fill="#ffffff" />
          <path d="M0,300 L0,220 L100,160 L180,240 L280,150 L400,210 L400,300 Z" fill="#E8A43A" opacity="0.4" />
        </svg>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#E8A43A] font-semibold tracking-wider uppercase mb-1">
            <span>BON Holidays</span>
            <span aria-hidden="true">·</span>
            <span>Uttarakhand</span>
          </div>
          <p className="font-display font-medium text-lg text-white/95 line-clamp-2">
            {fallbackTitle || alt || 'Experience Uttarakhand'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#17231F]/10 ${containerClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#16745A]/10 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};
