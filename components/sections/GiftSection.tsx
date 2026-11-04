'use client';

import React, { useState } from 'react';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { BotanicalCorner } from '../ui/BotanicalCorner';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { ScrollReveal } from '../ui/ScrollReveal';
import { weddingData } from '@/data/weddingData';
import { Gift, Copy, Check, CreditCard } from 'lucide-react';

export const GiftSection: React.FC = () => {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyBank = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedBank(accountNumber);
    setTimeout(() => setCopiedBank(null), 2500);
  };

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="gift" className="py-24 px-4 bg-sage-50/50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">
              Tanda Kasih
            </span>
            <BotanicalBranch variant="crest" width={56} className="mx-auto opacity-85 hover:scale-110 transition-transform duration-300" />
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900">
              Amplop Digital &amp; Kado
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm text-sage-600 max-w-md mx-auto">
              Doa restu Anda merupakan karunia yang paling berarti bagi kami. Namun jika Anda bermaksud memberikan tanda kasih, Anda dapat menyampaikannya melalui:
            </p>
          </div>
        </ScrollReveal>

        {/* Bank & Gift Cards */}
        <div className="max-w-md mx-auto space-y-6">
          {weddingData.gifts.map((item, idx) => {
            const isCopied = copiedBank === item.accountNumber;
            return (
              <ScrollReveal key={idx} delay={200} direction="up">
                <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-[#FAF9F5] to-sage-50 border border-sage-200 shadow-[0_15px_40px_-5px_rgba(114,140,112,0.1)] text-left space-y-4 overflow-hidden group hover:shadow-xl transition-all duration-500">
                  
                  {/* Subtle Botanical Corner Watermark */}
                  <div className="absolute top-1 right-1 z-0 opacity-40 group-hover:opacity-75 transition-opacity">
                    <BotanicalCorner position="top-right" size={68} />
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-sage-600" />
                      <span className="font-serif text-lg font-semibold text-charcoal-900">
                        {item.bankName}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-sage-600 font-medium px-2.5 py-1 rounded-full bg-white border border-sage-200 shadow-sm">
                      Transfer Bank
                    </span>
                  </div>

                  <div className="relative z-10 space-y-1 pt-2">
                    <span className="text-[11px] text-sage-500 uppercase tracking-wider">
                      Nomor Rekening
                    </span>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-2xl font-bold text-charcoal-900 tracking-wider">
                        {item.accountNumber}
                      </p>
                      <button
                        onClick={() => handleCopyBank(item.accountNumber)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                          isCopied
                            ? 'bg-sage-700 text-white shadow-sm'
                            : 'bg-white hover:bg-sage-100 text-sage-700 border border-sage-200 shadow-sm'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-champagne-300" />
                            <span>Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin No. Rek</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-sage-700 font-medium pt-1">
                      Atas Nama: <span className="font-semibold text-charcoal-900">{item.accountHolder}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Physical Gift Option */}
          <ScrollReveal delay={300} direction="up">
            <div className="p-6 rounded-3xl bg-white border border-sage-200/90 shadow-sm text-left space-y-3 relative overflow-hidden group hover:border-sage-300 transition-colors">
              <div className="absolute bottom-1 right-1 z-0 opacity-30">
                <BotanicalCorner position="bottom-right" size={54} />
              </div>

              <div className="relative z-10 flex items-center gap-2 text-sage-700">
                <Gift className="w-4 h-4 text-champagne-600" />
                <span className="font-serif text-base font-semibold text-charcoal-900">
                  Kirim Kado Fisik
                </span>
              </div>
              <p className="relative z-10 text-xs text-sage-600 leading-relaxed">
                {weddingData.gifts[0].giftAddress}
              </p>
              <button
                onClick={() => handleCopyAddress(weddingData.gifts[0].giftAddress)}
                className="relative z-10 inline-flex items-center gap-1.5 text-xs text-sage-700 hover:text-sage-900 font-medium transition-colors"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-sage-600" />
                    <span className="text-sage-700">Alamat Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Alamat Lengkap</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
