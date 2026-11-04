import React from 'react';
import Image from 'next/image';

interface BotanicalBranchProps {
  className?: string;
  variant?: 'crest' | 'wreath' | 'bouquet';
  width?: number;
}

export const BotanicalBranch: React.FC<BotanicalBranchProps> = ({
  className = '',
  variant = 'crest',
  width = 90,
}) => {
  if (variant === 'wreath') {
    return (
      <div
        className={`pointer-events-none select-none inline-block ${className}`}
        style={{ width, height: width }}
      >
        <Image
          src="/decorations/wreath.webp"
          alt="Botanical Wreath"
          width={width}
          height={width}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  if (variant === 'bouquet') {
    return (
      <div
        className={`pointer-events-none select-none inline-block ${className}`}
        style={{ width, height: width * 1.3 }}
      >
        <Image
          src="/decorations/blue-bouquet.webp"
          alt="Blue Floral Bouquet"
          width={width}
          height={Math.round(width * 1.3)}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Golden Flower Crest (default)
  return (
    <div
      className={`pointer-events-none select-none inline-flex items-center justify-center ${className}`}
      style={{ width }}
    >
      <Image
        src="/decorations/golden-flower.webp"
        alt="Golden Flower"
        width={width}
        height={width}
        className="w-full h-auto object-contain drop-shadow-xs"
      />
    </div>
  );
};
