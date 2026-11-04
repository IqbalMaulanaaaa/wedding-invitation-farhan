'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { BotanicalCorner } from '../ui/BotanicalCorner';
import { BotanicalBranch } from '../ui/BotanicalBranch';
import { ScrollReveal } from '../ui/ScrollReveal';
import { supabase, isSupabaseConfigured, RsvpItem } from '@/lib/supabase';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle2,
  MessageSquareHeart,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';

export const RSVPSection: React.FC = () => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir' | 'ragu'>('hadir');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wishes, setWishes] = useState<RsvpItem[]>([]);

  // Fungsi untuk memuat data dari Supabase atau LocalStorage
  const loadData = useCallback(async () => {
    setIsLoading(true);

    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('rsvps')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(50);

        if (!error && data !== null) {
          setWishes(data as RsvpItem[]);
          if (typeof window !== 'undefined') {
            localStorage.removeItem('pepy_farhan_wishes');
          }
          setIsLoading(false);
          return;
        } else if (error) {
          console.error('Error saat mengambil data dari Supabase:', error);
        }
      } catch (err) {
        console.warn('Gagal menghubungi Supabase:', err);
      }
    }

    // Fallback: Hanya jika Supabase belum dikonfigurasi
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem('pepy_farhan_wishes');
      if (cached) {
        try {
          setWishes(JSON.parse(cached));
        } catch (e) {
          console.error('Error parsing local cache:', e);
          setWishes([]);
        }
      } else {
        setWishes([]);
      }
    }
    setIsLoading(false);
  }, []);

  // Initial fetch & Realtime subscription
  useEffect(() => {
    loadData();

    // Aktifkan Supabase Realtime jika Supabase terhubung
    const client = supabase;
    if (isSupabaseConfigured && client) {
      const channel = client
        .channel('realtime_rsvps')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'rsvps' },
          () => {
            loadData();
          }
        )
        .subscribe();

      return () => {
        client.removeChannel(channel);
      };
    }
  }, [loadData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);

    const newEntryPayload = {
      name: name.trim(),
      attendance,
      guest_count: attendance === 'tidak_hadir' ? 0 : guestCount,
      message: message.trim(),
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.from('rsvps').insert([newEntryPayload]);
        if (error) {
          console.error('Gagal menyimpan ke Supabase:', error);
          alert('Terjadi kesalahan saat menyimpan ke database: ' + error.message);
        } else {
          await loadData();
        }
      } catch (err) {
        console.error('Error saat insert Supabase:', err);
      }
    } else {
      const newEntry: RsvpItem = {
        id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        created_at: new Date().toISOString(),
        ...newEntryPayload,
      };
      const updated = [newEntry, ...wishes];
      setWishes(updated);
      if (typeof window !== 'undefined') {
        localStorage.setItem('pepy_farhan_wishes', JSON.stringify(updated));
      }
    }

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#728C70', '#C5A880', '#E7EFE6', '#B38F5C'],
      });
    } catch (err) {
      console.log(err);
    }

    setSubmitting(false);
    setSubmitted(true);
    setName('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="rsvp" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <ScrollReveal delay={100} direction="up">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">
              Konfirmasi &amp; Doa
            </span>
            <BotanicalBranch variant="crest" width={56} className="mx-auto opacity-85 hover:scale-110 transition-transform duration-300" />
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900">
              RSVP &amp; Buku Ucapan
            </h2>
            <BotanicalDivider />
            <p className="text-xs sm:text-sm text-sage-600 max-w-md mx-auto">
              Untaian doa restu dan konfirmasi kehadiran Anda adalah kebahagiaan tak terhingga bagi kami.
            </p>
          </div>
        </ScrollReveal>

        {/* Informational Banner if Supabase not yet plugged */}
        {!isSupabaseConfigured && (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-sage-50/80 border border-sage-200 text-sage-800 text-xs">
            <AlertCircle className="w-4 h-4 text-sage-600 shrink-0" />
            <p>
              <strong>Status Database:</strong> Berjalan dalam mode lokal. Masukkan kredensial di{' '}
              <code className="bg-white px-1.5 py-0.5 rounded border border-sage-200">.env.local</code>{' '}
              untuk sinkronisasi Supabase live.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Form Card (6 cols) */}
          <ScrollReveal delay={200} direction="up" className="md:col-span-6 w-full">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sage-200 shadow-[0_12px_40px_-5px_rgba(114,140,112,0.08)] relative overflow-hidden">
              {/* Corner Foliage */}
              <div className="absolute top-2 left-2 z-0 opacity-40">
                <BotanicalCorner position="top-left" size={54} />
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-xl text-charcoal-900 mb-6 flex items-center gap-2 font-medium">
                  <MessageSquareHeart className="w-5 h-5 text-sage-600" />
                  Kirim Doa &amp; Konfirmasi
                </h3>

                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-sage-50 border border-sage-300 text-sage-800 text-xs flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                    <span>Terima kasih! Ucapan dan konfirmasi kehadiran Anda telah tercatat.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-medium text-sage-700 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:border-sage-500 text-xs text-charcoal-800 bg-[#FAF9F5]/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sage-700 mb-1.5">
                      Konfirmasi Kehadiran *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'hadir', label: 'Hadir' },
                        { id: 'ragu', label: 'Ragu-ragu' },
                        { id: 'tidak_hadir', label: 'Tidak Hadir' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setAttendance(opt.id as any)}
                          className={`py-2 px-1 text-center text-xs rounded-xl border transition-all ${
                            attendance === opt.id
                              ? 'bg-sage-700 text-white border-sage-700 font-medium shadow-sm'
                              : 'bg-white text-sage-700 border-sage-200 hover:bg-sage-50'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {attendance !== 'tidak_hadir' && (
                    <div>
                      <label className="block text-xs font-medium text-sage-700 mb-1.5">
                        Jumlah Tamu
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:border-sage-500 text-xs text-charcoal-800 bg-[#FAF9F5]/40"
                      >
                        <option value={1}>1 Orang</option>
                        <option value={2}>2 Orang</option>
                        <option value={3}>3 Orang</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-sage-700 mb-1.5">
                      Doa &amp; Ucapan Selamat *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan doa restu untuk Pepy & Farhan..."
                      className="w-full px-4 py-2.5 rounded-xl border border-sage-200 focus:outline-none focus:border-sage-500 text-xs text-charcoal-800 bg-[#FAF9F5]/40 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sage-700 hover:bg-sage-800 text-white text-xs font-medium shadow-md shadow-sage-700/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Mengirim...' : 'Kirim Ucapan'}</span>
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Wishes Feed (6 cols) */}
          <ScrollReveal delay={350} direction="up" className="md:col-span-6 w-full">
            <div className="flex flex-col bg-white p-6 sm:p-8 rounded-3xl border border-sage-200 shadow-[0_12px_40px_-5px_rgba(114,140,112,0.08)] min-h-[440px] max-h-[580px] relative overflow-hidden">
              {/* Corner Foliage */}
              <div className="absolute top-2 right-2 z-0 opacity-40">
                <BotanicalCorner position="top-right" size={54} />
              </div>

              <div className="relative z-10 flex flex-col h-full flex-1">
                <div className="flex items-center justify-between pb-4 border-b border-sage-100 mb-4">
                  <h3 className="font-serif text-xl text-charcoal-900 font-medium">
                    Untaian Doa ({wishes.length})
                  </h3>
                  <span className="text-[11px] text-sage-500">
                    {isSupabaseConfigured ? 'Live Supabase' : 'Lokal'}
                  </span>
                </div>

                {isLoading ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-12 text-sage-500 space-y-2">
                    <Loader2 className="w-6 h-6 animate-spin text-sage-600" />
                    <span className="text-xs">Memuat ucapan...</span>
                  </div>
                ) : wishes.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 text-center text-sage-600 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center text-sage-600 shadow-sm">
                      <Sparkles className="w-5 h-5 text-champagne-500" />
                    </div>
                    <p className="font-serif text-base text-charcoal-800">
                      Belum ada ucapan
                    </p>
                    <p className="text-xs text-sage-500 max-w-xs leading-relaxed">
                      Jadilah orang pertama yang mengirimkan doa restu dan ucapan selamat untuk Pepy &amp; Farhan melalui form di samping!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 overflow-y-auto pr-1 flex-1">
                    {wishes.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-2xl bg-[#FAF9F5]/70 border border-sage-100/80 space-y-1.5 transition-all hover:bg-sage-50/60 hover:translate-x-1 duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif font-medium text-sm text-charcoal-900">
                            {item.name}
                          </span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              item.attendance === 'hadir'
                                ? 'bg-sage-100 text-sage-800'
                                : item.attendance === 'ragu'
                                ? 'bg-champagne-100 text-champagne-800'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {item.attendance === 'hadir'
                              ? 'Hadir'
                              : item.attendance === 'ragu'
                              ? 'Ragu'
                              : 'Berhalangan'}
                          </span>
                        </div>
                        <p className="text-xs text-sage-800 font-sans leading-relaxed">
                          {item.message}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
