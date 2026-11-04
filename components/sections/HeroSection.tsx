import React from 'react';
import { Monogram } from '../ui/Monogram';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { BotanicalCorner } from '../ui/BotanicalCorner';
import { ScrollReveal } from '../ui/ScrollReveal';
import { weddingData } from '@/data/weddingData';
import { ChevronDown, CalendarDays } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-16 text-center overflow-hidden">
      {/* Background Subtle Gradient & Corner Botanical Sprigs */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage-50/40 to-transparent pointer-events-none" />
      <div className="absolute top-4 left-4 hidden sm:block opacity-70">
        <BotanicalCorner position="top-left" size={90} />
      </div>
      <div className="absolute top-4 right-4 hidden sm:block opacity-70">
        <BotanicalCorner position="top-right" size={90} />
      </div>

      <div className="relative max-w-xl mx-auto flex flex-col items-center space-y-6 z-10">
        
        {/* Monogram Badge */}
        <ScrollReveal delay={100} direction="up">
          <div className="relative">
            <Monogram size="xl" className="shadow-sm hover:scale-105 transition-transform duration-700" />
          </div>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal delay={250} direction="up">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-sage-600 font-sans font-medium">
              The Wedding of
            </span>
            <BotanicalBranch variant="crest" width={60} className="mx-auto opacity-85 hover:scale-110 transition-transform duration-300" />
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 font-normal tracking-tight">
              Pepy &amp; Farhan
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350} direction="up">
          <BotanicalDivider />
        </ScrollReveal>

        {/* Date & Location Highlight */}
        <ScrollReveal delay={450} direction="up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 border border-sage-200/90 text-sage-800 text-xs sm:text-sm font-sans shadow-[0_4px_20px_rgba(114,140,112,0.08)] hover:shadow-md transition-shadow">
            <CalendarDays className="w-4 h-4 text-champagne-500 animate-pulse-slow" />
            <span className="font-medium">{weddingData.event.dayFormatted}, {weddingData.event.dateFormatted}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={550} direction="up">
          <p className="text-xs sm:text-sm text-sage-600 max-w-md mx-auto font-sans leading-relaxed">
            Dengan penuh rasa syukur dan memohon ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri hari bahagia kami.
          </p>
        </ScrollReveal>

        {/* Scroll down indicator */}
        <div className="pt-6 animate-bounce opacity-70">
          <ChevronDown className="w-5 h-5 text-sage-500" />
        </div>
      </div>
    </section>
  );
};
