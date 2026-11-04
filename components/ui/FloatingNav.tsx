'use client';

import React from 'react';
import { Heart, Calendar, MessageSquareHeart, Gift, Sparkles } from 'lucide-react';

export const FloatingNav: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Sparkles },
    { id: 'couple', label: 'Mempelai', icon: Heart },
    { id: 'event', label: 'Acara', icon: Calendar },
    { id: 'rsvp', label: 'Ucapan', icon: MessageSquareHeart },
    { id: 'gift', label: 'Kado', icon: Gift },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-white/90 backdrop-blur-md border border-sage-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-100/70 transition-all active:scale-95"
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
