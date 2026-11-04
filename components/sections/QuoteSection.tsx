import React from 'react';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { BotanicalCorner } from '../ui/BotanicalCorner';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { ScrollReveal } from '../ui/ScrollReveal';
import { weddingData } from '@/data/weddingData';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-white/60 to-transparent relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <ScrollReveal delay={150} direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/90 border border-sage-200/90 shadow-[0_15px_45px_rgba(72,91,70,0.06)] backdrop-blur-sm relative overflow-hidden group hover:border-sage-300 transition-colors">
            
            {/* Corner Botanical Foliage */}
            <div className="absolute top-2 left-2 z-0 opacity-60">
              <BotanicalCorner position="top-left" size={64} />
            </div>
            <div className="absolute bottom-2 right-2 z-0 opacity-60">
              <BotanicalCorner position="bottom-right" size={64} />
            </div>

            <div className="relative z-10">
              {/* Botanical Crest */}
              <BotanicalBranch variant="crest" width={56} className="mb-4 mx-auto opacity-85 hover:scale-110 transition-transform duration-300" />

              {/* Arabic Text */}
              <p
                dir="rtl"
                lang="ar"
                className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal-900 leading-[2.3] sm:leading-[2.5] mb-6 px-2 selection:bg-sage-200"
              >
                {weddingData.quote.arabic}
              </p>

              <BotanicalDivider className="py-2" />

              {/* Translation */}
              <blockquote className="text-xs sm:text-sm text-sage-700/90 font-sans leading-relaxed italic max-w-lg mx-auto mt-4">
                {weddingData.quote.translation}
              </blockquote>

              {/* Source Reference */}
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-champagne-600 font-sans">
                — {weddingData.quote.source} —
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
