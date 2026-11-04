import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured =
  Boolean(supabaseUrl) &&
  Boolean(supabaseAnonKey) &&
  !supabaseUrl.includes('your-project-id') &&
  supabaseUrl.startsWith('https://');

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface RsvpItem {
  id: string;
  created_at: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  guest_count: number;
  message: string;
}
