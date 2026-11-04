'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto my-6 opacity-60">
        {['Hari', 'Jam', 'Menit', 'Detik'].map((label, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/70 border border-sage-200 shadow-sm"
          >
            <span className="font-serif text-2xl sm:text-3xl text-sage-800">--</span>
            <span className="text-[10px] sm:text-xs text-sage-600 uppercase tracking-widest mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Menit', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Detik', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm sm:max-w-md mx-auto my-6">
      {units.map((unit, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center py-3.5 px-2 rounded-2xl bg-white/90 border border-sage-200/80 shadow-[0_4px_20px_-4px_rgba(114,140,112,0.12)] transition-all hover:scale-105"
        >
          <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-sage-800">
            {unit.value}
          </span>
          <span className="text-[10px] sm:text-xs text-sage-600/90 font-medium uppercase tracking-widest mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
