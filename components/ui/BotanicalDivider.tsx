import React from 'react';
import Image from 'next/image';

interface BotanicalDividerProps {
  className?: string;
  size?: number;
}

export const BotanicalDivider: React.FC<BotanicalDividerProps> = ({
  className = '',
  size = 42,
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 py-3 select-none pointer-events-none ${className}`}>
      <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-sage-300" />
      <div className="relative inline-flex items-center justify-center transition-transform hover:scale-110 duration-300">
        <Image
          src="/decorations/golden-flower.webp"
          alt="Golden Floral Ornament"
          width={size}
          height={size}
          className="object-contain drop-shadow-xs"
        />
      </div>
      <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-sage-300" />
    </div>
  );
};
