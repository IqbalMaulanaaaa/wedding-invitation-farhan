import React from 'react';
import Image from 'next/image';

export const FloatingFoliage: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Top Left Floating Watercolor Blue Bouquet */}
      <div className="absolute -top-10 -left-10 w-36 h-48 opacity-25 animate-sway">
        <Image
          src="/decorations/blue-bouquet.webp"
          alt="Ambient Foliage"
          width={150}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Top Right Floating Gold Foliage Wreath (Faint) */}
      <div className="absolute top-1/4 -right-16 w-56 h-56 opacity-20 animate-spin-slow">
        <Image
          src="/decorations/wreath.webp"
          alt="Ambient Wreath"
          width={220}
          height={220}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Mid Left Golden Blossom */}
      <div className="absolute top-1/2 -left-8 w-28 h-28 opacity-30 animate-float">
        <Image
          src="/decorations/golden-flower.webp"
          alt="Golden Blossom"
          width={110}
          height={110}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom Right Floating Watercolor Blue Bouquet */}
      <div className="absolute bottom-16 -right-10 w-36 h-48 opacity-25 animate-sway-reverse">
        <Image
          src="/decorations/blue-bouquet.webp"
          alt="Ambient Bouquet"
          width={150}
          height={200}
          className="w-full h-full object-contain scale-x-[-1]"
        />
      </div>

      {/* Bottom Left Golden Blossom */}
      <div className="absolute bottom-28 -left-6 w-24 h-24 opacity-25 animate-float-slow">
        <Image
          src="/decorations/golden-flower.webp"
          alt="Golden Blossom"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
