import React, { useState } from 'react';
import { MessageCircle, Facebook, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = '919149074344';
  const message = encodeURIComponent(
    'Hello BON Holidays, I would like to know more about your resorts and holiday packages.'
  );

  return (
    <>
      <style>{`
        @keyframes floatOscillate {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float-vertical {
          animation: floatOscillate 3.2s ease-in-out infinite;
        }
        .animate-float-vertical:hover {
          animation-play-state: paused;
        }
        .animate-float-vertical-delayed {
          animation: floatOscillate 3.2s ease-in-out infinite 0.4s;
        }
        .animate-float-vertical-delayed:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Optional dismissible quick tooltip */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-[#17231F] text-white text-xs py-2 px-3.5 rounded-xl shadow-xl border border-white/10 animate-in fade-in slide-in-from-right-2 duration-300 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>Chat or Follow Us</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/60 hover:text-white ml-1 p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="flex items-center gap-2.5">
          {/* Floating Facebook Button */}
          <a
            href="https://www.facebook.com/profile.php?id=61594779811083"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit BON Holidays on Facebook"
            className="group relative w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#166fe5] active:scale-95 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 animate-float-vertical-delayed"
          >
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Visit BON Holidays on Facebook</span>
          </a>

          {/* Floating WhatsApp Button */}
          <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with BON Holidays on WhatsApp"
            className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 animate-float-vertical"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="sr-only">Chat with BON Holidays on WhatsApp</span>

            {/* Pulse ring */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden pointer-events-none" />
          </a>
        </div>
      </div>
    </>
  );
};
