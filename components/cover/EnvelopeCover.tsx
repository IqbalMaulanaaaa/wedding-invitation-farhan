'use client';

import React, { useEffect, useState } from 'react';
import { MailOpen, Sparkles } from 'lucide-react';
import { Monogram } from '../ui/Monogram';
import { BotanicalCorner } from '../ui/BotanicalCorner';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { weddingData } from '@/data/weddingData';

interface EnvelopeCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ isOpen, onOpen }) => {
  const [guestName, setGuestName] = useState<string>('Tamu Undangan');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const to = params.get('to');
      if (to) {
        setGuestName(to);
      }
    }
  }, []);

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center texture-paper-bg px-4 py-6 sm:py-10 overflow-hidden">
      {/* Ambient Lighting & Soft Background Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/[0.02] to-black/[0.06] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sage-200/35 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-champagne-200/40 blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Realistic Textured Paper Card */}
      <div className="relative max-w-md w-full text-center flex flex-col items-center justify-between min-h-[620px] p-6 sm:p-9 rounded-[28px] texture-paper-card animate-fade-in overflow-hidden border border-[#E8E2D2]">
        
        {/* Blind-Embossed Letterpress Inner Margin (Authentic Stationery Border) */}
        <div className="absolute inset-3 sm:inset-4 rounded-[22px] letterpress-border pointer-events-none z-0" />
        
        {/* Subtle Diagonal Envelope Crease Shadows */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-24 border-b border-black/[0.03] shadow-[0_4px_12px_rgba(0,0,0,0.02)] pointer-events-none transform -rotate-1" />

        {/* Four Botanical Floral Corners */}
        <div className="absolute top-2 left-2 z-10">
          <BotanicalCorner position="top-left" size={68} />
        </div>
        <div className="absolute top-2 right-2 z-10">
          <BotanicalCorner position="top-right" size={68} />
        </div>
        <div className="absolute bottom-2 left-2 z-10">
          <BotanicalCorner position="bottom-left" size={68} />
        </div>
        <div className="absolute bottom-2 right-2 z-10">
          <BotanicalCorner position="bottom-right" size={68} />
        </div>

        {/* Top Header Badge */}
        <div className="relative z-10 space-y-1.5 pt-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-sage-200/80 text-sage-800 text-[11px] font-medium tracking-[0.2em] uppercase shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-champagne-500" />
            The Wedding Invitation
          </div>
          <p className="font-serif italic text-sage-600 text-sm tracking-wide">
            Walimatul &apos;Ursy
          </p>
        </div>

        {/* Center: Wreath Monogram & Names */}
        <div className="relative z-10 my-auto py-3 flex flex-col items-center">
          <div className="relative mb-2">
            <Monogram size="lg" className="hover:scale-105 transition-transform duration-500 drop-shadow-xs" />
          </div>

          <BotanicalBranch
            variant="crest"
            width={52}
            className="mb-1.5 opacity-90 hover:scale-110 transition-transform duration-300"
          />

          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 tracking-tight leading-tight drop-shadow-xs font-normal">
            Pepy Ariska
          </h1>
          <span className="font-serif italic text-champagne-600 text-xl my-0.5 select-none">&amp;</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 tracking-tight leading-tight drop-shadow-xs font-normal">
            Muhammad Farhan
          </h1>

          <div className="inline-block mt-3 px-3 py-0.5 rounded-full bg-sage-100/60 border border-sage-200/60">
            <p className="text-[11px] uppercase tracking-[0.22em] text-sage-700 font-sans font-medium">
              {weddingData.event.dateFormatted}
            </p>
          </div>
        </div>

        {/* Bottom: Embossed Guest Greeting Tag & Open Button */}
        <div className="relative z-10 w-full space-y-3.5 pt-2">
          {/* Paper Label Tag */}
          <div className="p-3.5 rounded-2xl bg-white/85 border border-[#E5DFC9] shadow-[inset_0_1px_3px_rgba(0,0,0,0.04),_0_2px_6px_rgba(0,0,0,0.02)] backdrop-blur-xs">
            <p className="text-[10px] uppercase tracking-wider text-sage-600 font-sans font-medium">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <p className="font-serif text-lg font-semibold text-charcoal-900 mt-0.5 truncate tracking-wide">
              {guestName}
            </p>
          </div>

          {/* Luxury Seal-Style Button */}
          <button
            onClick={onOpen}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sage-700 via-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 text-white font-sans text-sm font-medium tracking-wide shadow-[0_8px_20px_-4px_rgba(72,91,70,0.35),_inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
          >
            <MailOpen className="w-4 h-4 text-champagne-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span>Buka Undangan</span>
          </button>

          <p className="text-[10px] text-sage-500 italic select-none">
            *Sentuh untuk membuka undangan &amp; memutar musik
          </p>
        </div>
      </div>
    </div>
  );
};
