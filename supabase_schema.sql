-- ========================================================
-- SKEMA SUPABASE: Buku Tamu & RSVP Undangan Pepy & Farhan
-- Jalankan skrip ini di SQL Editor dashboard Supabase Anda.
-- ========================================================

CREATE TABLE IF NOT EXISTS public.rsvps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    attendance TEXT NOT NULL CHECK (attendance IN ('hadir', 'tidak_hadir', 'ragu')),
    guest_count INTEGER DEFAULT 1 NOT NULL,
    message TEXT NOT NULL
);

-- Mengaktifkan Row Level Security (RLS)
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

-- Kebijakan akses publik (Read & Insert)
CREATE POLICY "Allow public read on rsvps" 
ON public.rsvps 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert on rsvps" 
ON public.rsvps 
FOR INSERT 
WITH CHECK (true);

-- Contoh data awal (opsional)
INSERT INTO public.rsvps (name, attendance, guest_count, message)
VALUES 
('Keluarga Besar Bpk. Ahmad', 'hadir', 2, 'Barakallahu lakum wa baraka alaikum wa jama''a bainakuma fii khair. Selamat untuk Pepy & Farhan!'),
('Sahabat Kuliah Farhan', 'hadir', 1, 'Selamat menempuh hidup baru Farhan & Pepy, semoga samawa selamanya.')
ON CONFLICT DO NOTHING;
