import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Wedding of Pepy & Farhan',
  description:
    'Undangan Pernikahan Pepy Ariska & Muhammad Farhan - Minggu, 08 November 2026. Merupakan suatu kehormatan dan kebahagiaan bagi kami atas kehadiran dan doa restu Anda.',
  openGraph: {
    title: 'The Wedding of Pepy & Farhan',
    description: 'Undangan Pernikahan Pepy Ariska & Muhammad Farhan - 08 November 2026',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="antialiased min-h-screen relative">{children}</body>
    </html>
  );
}
