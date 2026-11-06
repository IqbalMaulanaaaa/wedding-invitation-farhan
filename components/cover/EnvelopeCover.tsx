'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { MailOpen, Pencil, Check } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

interface EnvelopeCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ isOpen, onOpen }) => {
  const [guestName, setGuestName] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [hasName, setHasName] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const to = params.get('to');
      if (to && to.trim()) {
        const decoded = decodeURIComponent(to.trim());
        setGuestName(decoded);
        setInputValue(decoded);
        setHasName(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleConfirmName = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      setGuestName(trimmed);
      setHasName(true);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleConfirmName();
    if (e.key === 'Escape') {
      setInputValue(guestName);
      setIsEditing(false);
    }
  };

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 w-screen h-[100dvh] max-h-[100dvh] texture-mottled-paper flex flex-col items-center justify-between px-4 py-3 sm:py-6 md:py-8 overflow-hidden select-none animate-fade-in">
      
      {/* ======================================================== */}
      {/* 1. FOUR CORNER BOTANICAL ASSETS (RESPONSIVE SCALE)       */}
      {/* ======================================================== */}

      {/* Top-Left: Golden Flower */}
      <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-28 xs:w-32 sm:w-48 md:w-60 h-auto pointer-events-none z-10 animate-sway">
        <Image
          src="/decorations/golden-flower.webp"
          alt="Golden Flower Top-Left"
          width={240}
          height={240}
          priority
          className="w-full h-auto object-contain drop-shadow-xs"
        />
      </div>

      {/* Top-Right: Blue Roses & Foliage Bouquet */}
      <div className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 w-28 xs:w-32 sm:w-48 md:w-60 h-auto pointer-events-none z-10 animate-sway-reverse">
        <Image
          src="/decorations/blue-bouquet.webp"
          alt="Blue Bouquet Top-Right"
          width={240}
          height={300}
          priority
          className="w-full h-auto object-contain drop-shadow-xs"
        />
      </div>

      {/* Bottom-Left: Blue Roses & Foliage Bouquet */}
      <div className="absolute -bottom-3 -left-2 sm:-bottom-5 sm:-left-4 w-28 xs:w-32 sm:w-48 md:w-60 h-auto pointer-events-none z-10 animate-sway">
        <Image
          src="/decorations/blue-bouquet.webp"
          alt="Blue Bouquet Bottom-Left"
          width={240}
          height={300}
          priority
          className="w-full h-auto object-contain scale-x-[-1] drop-shadow-xs"
        />
      </div>

      {/* Bottom-Right: Golden Flower */}
      <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-28 xs:w-32 sm:w-48 md:w-60 h-auto pointer-events-none z-10 animate-sway-reverse">
        <Image
          src="/decorations/golden-flower.webp"
          alt="Golden Flower Bottom-Right"
          width={240}
          height={240}
          priority
          className="w-full h-auto object-contain scale-x-[-1] drop-shadow-xs"
        />
      </div>

      {/* ======================================================== */}
      {/* 2. TOP SUBTITLE: ANDA DI UNDANG                          */}
      {/* ======================================================== */}
      <div className="relative z-20 pt-2 sm:pt-4 text-center">
        <p className="font-sans text-[11px] sm:text-xs md:text-sm tracking-[0.35em] uppercase font-medium text-[#4E453D]">
          Anda Di Undang
        </p>
        <p className="font-serif italic text-[11px] sm:text-xs tracking-widest text-[#7E7368] mt-0.5">
          Walimatul &apos;Ursy
        </p>
      </div>

      {/* ======================================================== */}
      {/* 3. CENTER WREATH & NAMES (NO FULL 360° SPIN - GENTLE SWAY)*/}
      {/* ======================================================== */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center w-[210px] h-[210px] xs:w-[240px] xs:h-[240px] sm:w-[290px] sm:h-[290px] md:w-[340px] md:h-[340px] aspect-square">
        {/* Subtle, Natural Sway & Breathe - NO 360° SPIN */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-wreath-sway">
          <Image
            src="/decorations/wreath.webp"
            alt="Wreath Gold & Foliage"
            width={340}
            height={340}
            priority
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </div>

        {/* Bold Serif Typography (Matching Reference Style) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-2">
          <h1 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl tracking-[0.16em] text-[#2B231D] uppercase leading-none drop-shadow-xs">
            Pepy
          </h1>
          <span className="font-serif italic text-xl xs:text-2xl sm:text-3xl text-[#53473D] my-1 leading-none select-none">
            &amp;
          </span>
          <h1 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl tracking-[0.16em] text-[#2B231D] uppercase leading-none drop-shadow-xs">
            Farhan
          </h1>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. BOTTOM SECTION (ALWAYS VISIBLE ON IPHONE XS & MOBILE) */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full max-w-sm mx-auto text-center space-y-2 sm:space-y-2.5 pb-2 sm:pb-4">
        {/* Date & Location */}
        <div className="space-y-0.5">
          <p className="font-sans text-[11px] sm:text-xs md:text-sm tracking-[0.22em] uppercase font-semibold text-[#443C34]">
            {weddingData.event.dayFormatted} {weddingData.event.dateFormatted}
          </p>
          <p className="font-sans text-[10px] sm:text-[11px] text-[#6E645A] tracking-wider font-normal">
            Mendawai, Kotawaringin Barat, Kalteng
          </p>
        </div>

        {/* Guest Name Plaque */}
        <div className="max-w-[270px] sm:max-w-[300px] mx-auto">
          {isEditing ? (
            /* ── INPUT MODE ── */
            <div className="flex items-center gap-2 py-1.5 px-3 rounded-xl bg-white/90 backdrop-blur-xs border border-[#C5A880] shadow-sm">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={40}
                placeholder="Ketik nama Anda..."
                className="flex-1 bg-transparent font-serif text-sm sm:text-base text-[#2C241E] placeholder:text-[#A89C93] outline-none min-w-0"
              />
              <button
                onClick={handleConfirmName}
                className="flex-shrink-0 w-7 h-7 rounded-full bg-[#4E5B4B] flex items-center justify-center hover:bg-[#3D473A] transition-colors active:scale-95"
              >
                <Check className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          ) : (
            /* ── DISPLAY MODE ── */
            <div
              className="group relative py-1.5 px-3 rounded-xl bg-white/80 backdrop-blur-xs border border-[#DFD1C2] shadow-xs cursor-pointer hover:border-[#C5A880] hover:bg-white/90 transition-all duration-200"
              onClick={() => { setInputValue(guestName || ''); setIsEditing(true); }}
              title="Klik untuk ubah nama"
            >
              <p className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#73685E] font-sans font-medium">
                Kepada Yth. Bapak/Ibu/Saudara/i:
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-0.5">
                <p className={`font-serif font-semibold text-sm sm:text-base truncate ${hasName ? 'text-[#2C241E]' : 'text-[#A89C93] italic'}`}>
                  {hasName ? guestName : 'Ketuk untuk isi nama Anda'}
                </p>
                <Pencil className="w-3 h-3 text-[#A89C93] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          )}
        </div>

        {/* Interactive "Buka Undangan" Button */}
        <div className="pt-0.5">
          <button
            onClick={onOpen}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#4E5B4B] hover:bg-[#3D473A] text-white font-sans text-xs sm:text-sm font-medium tracking-wider uppercase shadow-md shadow-[#4E5B4B]/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <MailOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-champagne-300 transition-transform group-hover:rotate-12" />
            <span>Buka Undangan</span>
          </button>
          <p className="text-[9px] text-[#7C7166] italic mt-1">
            *Sentuh untuk membuka undangan &amp; memutar musik
          </p>
        </div>
      </div>

    </div>
  );
};
