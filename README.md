# 💍 Undangan Pernikahan Digital: Pepy Ariska & Muhammad Farhan

Website undangan pernikahan digital minimalis modern bernuansa *Warm Ivory & Soft Sage Green*, dirancang eksklusif berbasis **Next.js (App Router)**, **Tailwind CSS**, dan **Supabase**.

---

## ✨ Fitur Utama

1. **Cover / Amplop Interaktif**:
   - Menampilkan salam personal kepada tamu berdasarkan parameter URL (contoh: `?to=Bapak+Budi+dan+Keluarga`).
   - Tombol **"Buka Undangan"** dengan animasi pembuka dan pemutar instrumen piano romantis otomatis.
2. **Desain Editorial & Typographic Modern (Tanpa Foto)**:
   - Kombinasi tipografi *Cormorant Garamond* (Serif Elegan) dan *Plus Jakarta Sans*.
   - Monogram kustom inisial **P & F** dengan ornamen botani *Soft Sage Green*.
3. **Kutipan Suci**:
   - QS. Ar-Rum: 21 dengan teks kaligrafi Arab dan terjemahan bahasa Indonesia.
4. **Profil Pasangan Mempelai**:
   - Informasi mempelai wanita (**Pepy Ariska**) dan mempelai pria (**Muhammad Farhan**) beserta nasab keluarga.
5. **Detail Acara & Hitung Mundur (Countdown Timer)**:
   - Resepsi: **Minggu, 08 November 2026** pukul 09.00 WIB di Mendawai, Kotawaringin Barat, Kalteng.
   - Live Countdown hari, jam, menit, detik.
   - Tombol langsung ke **Google Maps** dan **Simpan ke Google Calendar**.
6. **Buku Doa & RSVP Real-time**:
   - Terintegrasi dengan database **Supabase** (PostgreSQL).
   - Form konfirmasi kehadiran (Hadir, Ragu-ragu, Berhalangan) & ucapan selamat.
   - Efek selebrasi konfeti saat mengirim ucapan.
   - Dilengkapi *fallback* penyimpanan lokal otomatis jika kunci Supabase belum diisi.
7. **Amplop Digital & Kado**:
   - Transfer Bank BCA (`8585` a/n **Muhammad Farhan**) dengan tombol *Copy to Clipboard* instan.
   - Alamat pengiriman kado fisik.
8. **Floating Audio Player & Navigasi**:
   - Pemutar audio melayang di sudut layar (Play/Pause).
   - Dock navigasi bawah untuk akses cepat antar bagian di smartphone maupun desktop.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

1. Buka terminal di folder proyek:
   ```bash
   cd "C:\Users\labqi\.gemini\antigravity\scratch\wedding-invitation"
   ```

2. Jalankan server pengembangan (Development Server):
   ```bash
   npm run dev
   ```

3. Buka di browser:
   - [http://localhost:3000](http://localhost:3000)
   - Uji coba link tamu personal: [http://localhost:3000?to=Bapak+Budi+dan+Keluarga](http://localhost:3000?to=Bapak+Budi+dan+Keluarga)

---

## 🗄️ Menghubungkan ke Supabase (Database)

1. Buka [Supabase Dashboard](https://supabase.com/dashboard) dan buat proyek baru.
2. Buka menu **SQL Editor**, salin dan jalankan seluruh isi berkas `supabase_schema.sql`.
3. Buka menu **Project Settings > API**, salin `Project URL` dan `Project API anon key`.
4. Buka berkas `.env.local` pada proyek ini, lalu masukkan kunci Anda:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
5. Restart server pengembangan (`npm run dev`). RSVP dan buku tamu Anda kini tersinkronisasi secara langsung di cloud!
