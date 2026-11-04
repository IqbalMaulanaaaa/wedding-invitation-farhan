import React from 'react';
import Image from 'next/image';

interface MonogramProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withAnimation?: boolean;
}

export const Monogram: React.FC<MonogramProps> = ({
  className = '',
  size = 'md',
  withAnimation = true,
}) => {
  const sizeMap = {
    sm: { container: 'w-20 h-20', text: 'text-2xl', ampersand: 'text-xs', img: 80 },
    md: { container: 'w-28 h-28', text: 'text-3xl', ampersand: 'text-sm', img: 112 },
    lg: { container: 'w-36 h-36', text: 'text-4xl', ampersand: 'text-base', img: 144 },
    xl: { container: 'w-48 h-48 sm:w-56 sm:h-56', text: 'text-5xl sm:text-6xl', ampersand: 'text-lg sm:text-xl', img: 224 },
  };

  const current = sizeMap[size];

  return (
    <div
      className={`relative flex items-center justify-center select-none ${current.container} ${className}`}
    >
      {/* Real Botanical Gold Wreath Asset (WebP) */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
          withAnimation ? 'animate-sway' : ''
        }`}
      >
        <Image
          src="/decorations/wreath.webp"
          alt="Botanical Wreath"
          width={current.img}
          height={current.img}
          priority={size === 'xl' || size === 'lg'}
          className="w-full h-full object-contain drop-shadow-sm transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Monogram Initials "P & F" in center */}
      <div className="relative z-10 flex items-center justify-center font-serif text-charcoal-900 pointer-events-none pt-1">
        <span className={`${current.text} font-normal tracking-tight text-sage-900 drop-shadow-sm`}>
          P
        </span>
        <span className={`${current.ampersand} font-serif italic text-champagne-500 mx-1`}>
          &amp;
        </span>
        <span className={`${current.text} font-normal tracking-tight text-sage-900 drop-shadow-sm`}>
          F
        </span>
      </div>
    </div>
  );
};
