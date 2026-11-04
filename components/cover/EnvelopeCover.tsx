'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MailOpen, Sparkles } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center texture-mottled-paper px-3 py-4 sm:p-6 overflow-hidden">
      {/* Outer Card / Canvas styled exactly like the portrait invitation */}
      <div className="relative w-full max-w-md h-[94vh] max-h-[820px] texture-mottled-paper rounded-3xl shadow-[0_20px_60px_rgba(60,45,35,0.18)] border border-[#E0D2C5] flex flex-col items-center justify-between p-6 sm:p-8 overflow-hidden select-none animate-fade-in">
        
        {/* ======================================================== */}
        {/* 1. FOUR CORNER BOTANICAL ASSETS (Matching Reference)    */}
        {/* ======================================================== */}

        {/* Top-Left: Golden Flower (Leaves pointing inward) */}
        <div className="absolute -top-3 -left-3 w-36 sm:w-44 h-auto pointer-events-none z-10 animate-sway">
          <Image
            src="/decorations/golden-flower.webp"
            alt="Golden Flower Top-Left"
            width={180}
            height={180}
            priority
            className="w-full h-auto object-contain drop-shadow-xs"
          />
        </div>

        {/* Top-Right: Blue Roses & Foliage Bouquet (Cascading downward) */}
        <div className="absolute -top-4 -right-3 w-36 sm:w-44 h-auto pointer-events-none z-10 animate-sway-reverse">
          <Image
            src="/decorations/blue-bouquet.webp"
            alt="Blue Bouquet Top-Right"
            width={180}
            height={220}
            priority
            className="w-full h-auto object-contain drop-shadow-xs"
          />
        </div>

        {/* Bottom-Left: Blue Roses & Foliage Bouquet (Ascending upward) */}
        <div className="absolute -bottom-4 -left-3 w-36 sm:w-44 h-auto pointer-events-none z-10 animate-sway">
          <Image
            src="/decorations/blue-bouquet.webp"
            alt="Blue Bouquet Bottom-Left"
            width={180}
            height={220}
            priority
            className="w-full h-auto object-contain scale-x-[-1] drop-shadow-xs"
          />
        </div>

        {/* Bottom-Right: Golden Flower (Leaves pointing inward) */}
        <div className="absolute -bottom-3 -right-3 w-36 sm:w-44 h-auto pointer-events-none z-10 animate-sway-reverse">
          <Image
            src="/decorations/golden-flower.webp"
            alt="Golden Flower Bottom-Right"
            width={180}
            height={180}
            priority
            className="w-full h-auto object-contain scale-x-[-1] drop-shadow-xs"
          />
        </div>

        {/* ======================================================== */}
        {/* 2. TOP SUBTITLE: ANDA DI UNDANG                          */}
        {/* ======================================================== */}
        <div className="relative z-20 pt-6 sm:pt-8 text-center">
          <p className="font-sans text-xs sm:text-sm tracking-[0.38em] uppercase font-medium text-[#4E453D]">
            Anda Di Undang
          </p>
          <p className="font-serif italic text-xs tracking-widest text-[#7E7368] mt-0.5">
            Walimatul &apos;Ursy
          </p>
        </div>

        {/* ======================================================== */}
        {/* 3. CENTER WREATH & NAMES: PEPY & FARHAN                  */}
        {/* ======================================================== */}
        <div className="relative z-20 my-auto flex flex-col items-center justify-center w-full max-w-[290px] sm:max-w-[320px] aspect-square">
          {/* Circular Botanical Gold Wreath Asset */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/decorations/wreath.webp"
              alt="Wreath Gold & Foliage"
              width={340}
              height={340}
              priority
              className="w-full h-full object-contain drop-shadow-sm animate-spin-slow"
              style={{ animationDuration: '40s' }}
            />
          </div>

          {/* Bold Serif Typography (Matching Claudia & Daniel) */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-serif font-bold text-3xl sm:text-4xl tracking-[0.16em] text-[#2B231D] uppercase leading-none drop-shadow-xs">
              Pepy
            </h1>
            <span className="font-serif italic text-2xl sm:text-3xl text-[#53473D] my-1 leading-none select-none">
              &amp;
            </span>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl tracking-[0.16em] text-[#2B231D] uppercase leading-none drop-shadow-xs">
              Farhan
            </h1>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. BOTTOM SECTION: DATE, VENUE & INTERACTIVE BUTTON      */}
        {/* ======================================================== */}
        <div className="relative z-20 w-full text-center space-y-3 pb-2 sm:pb-4">
          {/* Date & Location (Matching Reference Style) */}
          <div className="space-y-0.5">
            <p className="font-sans text-xs sm:text-sm tracking-[0.24em] uppercase font-semibold text-[#443C34]">
              {weddingData.event.dayFormatted} {weddingData.event.dateFormatted}
            </p>
            <p className="font-sans text-[11px] sm:text-xs text-[#6E645A] tracking-wider font-normal">
              Mendawai, Kotawaringin Barat, Kalteng
            </p>
          </div>

          {/* Guest Name Plaque */}
          <div className="max-w-[270px] mx-auto py-2 px-3 rounded-xl bg-white/70 backdrop-blur-xs border border-[#DFD1C2] shadow-xs">
            <p className="text-[10px] tracking-wider uppercase text-[#73685E] font-sans">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <p className="font-serif font-semibold text-base text-[#2C241E] truncate mt-0.5">
              {guestName}
            </p>
          </div>

          {/* Interactive "Buka Undangan" Button */}
          <div className="pt-1">
            <button
              onClick={onOpen}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#4E5B4B] hover:bg-[#3D473A] text-white font-sans text-xs sm:text-sm font-medium tracking-wider uppercase shadow-md shadow-[#4E5B4B]/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <MailOpen className="w-4 h-4 text-champagne-300 transition-transform group-hover:rotate-12" />
              <span>Buka Undangan</span>
            </button>
            <p className="text-[9px] text-[#7C7166] italic mt-1.5">
              *Sentuh untuk membuka undangan &amp; memutar musik
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
