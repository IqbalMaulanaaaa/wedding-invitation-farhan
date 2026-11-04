'use client';

import React from 'react';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { BotanicalCorner } from '../ui/BotanicalCorner';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { CountdownTimer } from '../ui/CountdownTimer';
import { ScrollReveal } from '../ui/ScrollReveal';
import { weddingData } from '@/data/weddingData';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus } from 'lucide-react';

export const EventSection: React.FC = () => {
  const { event } = weddingData;

  return (
    <section id="event" className="py-24 px-4 bg-sage-50/50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal delay={100} direction="up">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">
              Waktu &amp; Tempat
            </span>
            <BotanicalBranch variant="crest" width={56} className="mx-auto opacity-85 hover:scale-110 transition-transform duration-300" />
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900">
              Rangkaian Acara
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm text-sage-600 max-w-md mx-auto">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            </p>
          </div>
        </ScrollReveal>

        {/* Live Countdown */}
        <ScrollReveal delay={200} direction="up">
          <div className="py-2">
            <p className="text-xs uppercase tracking-widest text-sage-600 mb-3 font-medium">
              Menghitung Hari Menuju Hari Bahagia
            </p>
            <CountdownTimer targetDate={event.targetIsoDate} />
          </div>
        </ScrollReveal>

        {/* Event Card with Botanical Corners */}
        <ScrollReveal delay={300} direction="up">
          <div className="max-w-xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-sage-200/90 shadow-[0_18px_50px_rgba(72,91,70,0.08)] space-y-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            
            {/* 4 Botanical Corners */}
            <div className="absolute top-2 left-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
              <BotanicalCorner position="top-left" size={60} />
            </div>
            <div className="absolute top-2 right-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
              <BotanicalCorner position="top-right" size={60} />
            </div>
            <div className="absolute bottom-2 left-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
              <BotanicalCorner position="bottom-left" size={60} />
            </div>
            <div className="absolute bottom-2 right-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
              <BotanicalCorner position="bottom-right" size={60} />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 text-sage-700 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Calendar className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <BotanicalBranch variant="crest" width={48} className="mx-auto opacity-80 mb-1 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-semibold">
                  {event.title}
                </h3>
                <p className="font-serif text-lg text-champagne-600 italic">
                  {event.dayFormatted}, {event.dateFormatted}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-2 text-xs sm:text-sm text-sage-700 font-sans border-y border-sage-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sage-500" />
                  <span>{event.timeFormatted}</span>
                </div>
                <span className="hidden sm:inline text-sage-300">•</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sage-500" />
                  <span>Kotawaringin Barat, Kalteng</span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-sage-600 leading-relaxed font-sans px-2">
                <p className="font-medium text-charcoal-800">
                  {event.venueName}
                </p>
                <p className="text-sage-500 text-xs">
                  {event.address}
                </p>
              </div>

              {/* Action Buttons: Maps & Calendar */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-sage-700 hover:bg-sage-800 text-white text-xs sm:text-sm font-medium shadow-md shadow-sage-700/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Buka Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={event.googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-sage-50 border border-sage-300 text-sage-700 text-xs sm:text-sm font-medium shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <CalendarPlus className="w-4 h-4 text-sage-600" />
                  <span>Simpan ke Kalender</span>
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
