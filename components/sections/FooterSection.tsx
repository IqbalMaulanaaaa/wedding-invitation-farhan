import React from 'react';
import { Monogram } from '../ui/Monogram';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { ScrollReveal } from '../ui/ScrollReveal';
import { weddingData } from '@/data/weddingData';

export const FooterSection: React.FC = () => {
  return (
    <footer className="pt-20 pb-32 px-4 text-center bg-[#FAF9F5] border-t border-sage-200/60 relative overflow-hidden">
      <div className="max-w-xl mx-auto space-y-6 relative z-10">
        
        <ScrollReveal delay={100} direction="up">
          <div className="relative inline-block">
            <BotanicalBranch variant="crest" width={56} className="mx-auto mb-2 opacity-85 hover:scale-110 transition-transform duration-300" />
            <Monogram size="md" className="mx-auto hover:scale-105 transition-transform duration-500" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <div className="space-y-2">
            <p className="font-serif italic text-sage-600 text-sm">
              Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i sekalian,
            </p>
            <p className="font-serif italic text-sage-600 text-sm">
              kami mengucapkan terima kasih yang tulus.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="up">
          <BotanicalDivider />
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-sage-500 font-sans">
              Kami yang berbahagia
            </p>
            <h4 className="font-serif text-2xl text-charcoal-900 font-medium">
              {weddingData.bride.nickname} &amp; {weddingData.groom.nickname}
            </h4>
            <p className="text-xs text-sage-600 font-sans">
              Beserta Keluarga Besar Kedua Mempelai
            </p>
          </div>
        </ScrollReveal>

        <div className="pt-8 text-[11px] text-sage-400 font-sans">
          &copy; 2026 Pepy &amp; Farhan Wedding Invitation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
