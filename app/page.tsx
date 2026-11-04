'use client';

import React, { useState } from 'react';
import { EnvelopeCover } from '@/components/cover/EnvelopeCover';
import { AudioPlayer } from '@/components/ui/AudioPlayer';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { FloatingFoliage } from '@/components/ui/FloatingFoliage';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { CoupleSection } from '@/components/sections/CoupleSection';
import { EventSection } from '@/components/sections/EventSection';
import { RSVPSection } from '@/components/sections/RSVPSection';
import { GiftSection } from '@/components/sections/GiftSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { weddingData } from '@/data/weddingData';

export default function WeddingPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlayingAudio(true);
  };

  const handleToggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen bg-[#FAF9F5] text-charcoal-800 selection:bg-sage-200 overflow-x-hidden">
      {/* 1. Envelope Cover (Modal / Screen lock until user opens) */}
      <EnvelopeCover isOpen={isOpened} onOpen={handleOpenInvitation} />

      {/* Main Content Area - accessible once opened */}
      <div
        className={`transition-opacity duration-1000 relative ${
          isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'
        }`}
      >
        {/* Ambient Floating Foliage across background */}
        {isOpened && <FloatingFoliage />}

        {/* Floating Audio Controller */}
        <AudioPlayer
          audioUrl={weddingData.audio.url}
          isPlaying={isPlayingAudio}
          onToggle={handleToggleAudio}
        />

        {/* Floating Navigation Pill */}
        {isOpened && <FloatingNav />}

        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Ayat / Quote Section */}
        <QuoteSection />

        {/* 4. Mempelai Section */}
        <CoupleSection />

        {/* 5. Acara & Countdown Section */}
        <EventSection />

        {/* 6. RSVP & Guestbook Section (Supabase / Local) */}
        <RSVPSection />

        {/* 7. Amplop Digital & Kado Section */}
        <GiftSection />

        {/* 8. Footer Section */}
        <FooterSection />
      </div>
    </main>
  );
}
