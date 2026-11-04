import React from 'react';
import Image from 'next/image';

interface BotanicalCornerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
  animate?: boolean;
}

export const BotanicalCorner: React.FC<BotanicalCornerProps> = ({
  position = 'top-left',
  className = '',
  size = 76,
  animate = true,
}) => {
  // Positioning transform classes for the bouquet
  const transformMap = {
    'top-left': 'origin-top-left',
    'top-right': 'scale-x-[-1] origin-top-right',
    'bottom-left': 'scale-y-[-1] origin-bottom-left',
    'bottom-right': 'scale-x-[-1] scale-y-[-1] origin-bottom-right',
  };

  const animClass = animate
    ? position.includes('left')
      ? 'animate-sway'
      : 'animate-sway-reverse'
    : '';

  return (
    <div
      className={`pointer-events-none select-none ${transformMap[position]} ${animClass} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/decorations/blue-bouquet.webp"
        alt="Floral Corner"
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow-xs"
      />
    </div>
  );
};
