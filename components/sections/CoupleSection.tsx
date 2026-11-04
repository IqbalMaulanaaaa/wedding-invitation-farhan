import React from 'react';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { BotanicalCorner } from '../ui/BotanicalCorner';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { ScrollReveal } from '../ui/ScrollReveal';
import { weddingData } from '@/data/weddingData';

export const CoupleSection: React.FC = () => {
  const { bride, groom } = weddingData;

  return (
    <section id="couple" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-14 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={100} direction="up">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">
              Mempelai
            </span>
            <BotanicalBranch variant="crest" width={56} className="mx-auto opacity-85 hover:scale-110 transition-transform duration-300" />
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900">
              Pasangan Pengantin
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm text-sage-600 max-w-md mx-auto">
              Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, perkenankanlah kami merajut janji suci pernikahan:
            </p>
          </div>
        </ScrollReveal>

        {/* Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          
          {/* Mempelai Wanita: Pepy Ariska */}
          <ScrollReveal delay={200} direction="up" className="h-full">
            <div className="h-full flex flex-col items-center p-8 sm:p-10 rounded-3xl bg-white border border-sage-200 shadow-[0_12px_40px_-5px_rgba(114,140,112,0.09)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group">
              
              {/* Corner Foliage */}
              <div className="absolute top-2 left-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
                <BotanicalCorner position="top-left" size={60} />
              </div>
              <div className="absolute bottom-2 right-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
                <BotanicalCorner position="bottom-right" size={60} />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Monogram Badge */}
                <div className="w-16 h-16 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-sage-300 transition-all duration-500 shadow-sm">
                  <span className="font-serif text-2xl text-sage-700 font-semibold">P</span>
                </div>

                <span className="text-[11px] uppercase tracking-widest text-champagne-600 font-semibold mb-2">
                  Mempelai Wanita
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-3 font-normal group-hover:text-sage-800 transition-colors">
                  {bride.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-sage-700 font-sans leading-relaxed">
                  {bride.bio}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Center Ampersand Connector with Floral Aura */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white border border-sage-300 shadow-lg items-center justify-center font-serif text-xl italic text-champagne-600 hover:scale-110 transition-transform duration-300">
            &amp;
          </div>

          {/* Mempelai Pria: Muhammad Farhan */}
          <ScrollReveal delay={350} direction="up" className="h-full">
            <div className="h-full flex flex-col items-center p-8 sm:p-10 rounded-3xl bg-white border border-sage-200 shadow-[0_12px_40px_-5px_rgba(114,140,112,0.09)] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group">
              
              {/* Corner Foliage */}
              <div className="absolute top-2 right-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
                <BotanicalCorner position="top-right" size={60} />
              </div>
              <div className="absolute bottom-2 left-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
                <BotanicalCorner position="bottom-left" size={60} />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Monogram Badge */}
                <div className="w-16 h-16 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-sage-300 transition-all duration-500 shadow-sm">
                  <span className="font-serif text-2xl text-sage-700 font-semibold">F</span>
                </div>

                <span className="text-[11px] uppercase tracking-widest text-champagne-600 font-semibold mb-2">
                  Mempelai Pria
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-3 font-normal group-hover:text-sage-800 transition-colors">
                  {groom.name}
                </h3>

                <p className="text-xs sm:text-sm text-sage-700 font-sans leading-relaxed">
                  {groom.bio}
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
