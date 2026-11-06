'use client';

import React, { useState } from 'react';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { BotanicalCorner } from '../ui/BotanicalCorner';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { ScrollReveal } from '../ui/ScrollReveal';
import { weddingData } from '@/data/weddingData';
import { Gift, Copy, Check, CreditCard, Smartphone } from 'lucide-react';

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
            <p className="text-xs sm:text-sm text-sage-600 max-w-md mx-auto leading-relaxed">
              Doa restu Anda merupakan karunia yang paling berarti bagi kami. Namun jika Anda bermaksud memberikan tanda kasih, Anda dapat menyampaikannya melalui:
            </p>
          </div>
        </ScrollReveal>

        {/* Bank & e-Wallet Cards Grid (4 Accounts) */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {weddingData.gifts.map((item, idx) => {
            const isCopied = copiedBank === item.accountNumber;
            const isEwallet = item.category === 'ewallet' || item.bankName.toLowerCase().includes('gopay');
            
            return (
              <ScrollReveal key={idx} delay={150 + idx * 80} direction="up">
                <div className="relative h-full p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-white via-[#FAF9F5] to-sage-50/70 border border-sage-200/90 shadow-[0_12px_30px_-5px_rgba(114,140,112,0.08)] text-left flex flex-col justify-between space-y-4 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Subtle Botanical Corner Watermark */}
                  <div className="absolute -top-1 -right-1 z-0 opacity-30 group-hover:opacity-60 transition-opacity">
                    <BotanicalCorner position="top-right" size={56} />
                  </div>

                  {/* Header: Bank Name & Badge */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {isEwallet ? (
                        <Smartphone className="w-4 h-4 text-sage-600 shrink-0" />
                      ) : (
                        <CreditCard className="w-4 h-4 text-sage-600 shrink-0" />
                      )}
                      <span className="font-serif text-base sm:text-lg font-semibold text-charcoal-900 leading-tight">
                        {item.bankName}
                      </span>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-sage-700 font-semibold px-2 py-0.5 rounded-full bg-white/90 border border-sage-200 shadow-xs shrink-0">
                      {isEwallet ? 'E-Wallet' : 'Transfer'}
                    </span>
                  </div>

                  {/* Body: Account Number & Copy Button */}
                  <div className="relative z-10 space-y-1.5 pt-1">
                    <span className="text-[10px] text-sage-500 uppercase tracking-wider font-sans font-medium">
                      {isEwallet ? 'Nomor E-Wallet / HP' : 'Nomor Rekening'}
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono text-lg sm:text-xl font-bold text-charcoal-900 tracking-wider select-all truncate">
                        {item.accountNumber}
                      </p>
                      <button
                        onClick={() => handleCopyBank(item.accountNumber)}
                        className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                          isCopied
                            ? 'bg-sage-700 text-white shadow-sm'
                            : 'bg-white hover:bg-sage-100 text-sage-700 border border-sage-200 shadow-xs active:scale-95'
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
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-sage-700 font-sans pt-0.5">
                      a.n. <span className="font-semibold text-charcoal-900">{item.accountHolder}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Physical Gift Option */}
        <div className="max-w-2xl mx-auto">
          <ScrollReveal delay={450} direction="up">
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
              <p className="relative z-10 text-xs sm:text-sm text-sage-600 leading-relaxed font-sans">
                {weddingData.physicalGiftAddress}
              </p>
              <button
                onClick={() => handleCopyAddress(weddingData.physicalGiftAddress)}
                className="relative z-10 inline-flex items-center gap-1.5 text-xs text-sage-700 hover:text-sage-900 font-medium transition-colors cursor-pointer"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-sage-600" />
                    <span className="text-sage-700 font-semibold">Alamat Berhasil Disalin!</span>
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
