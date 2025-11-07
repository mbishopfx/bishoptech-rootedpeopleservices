import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

if (typeof window !== 'undefined' && (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) {
  console.warn('Supabase credentials not found. Please check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest?: string;
  message?: string;
  source_page?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceInquiry {
  id?: string;
  lead_id?: string;
  service_type: string;
  company_size?: string;
  urgency?: string;
  budget_range?: string;
  preferred_start_date?: string;
  additional_details?: string;
  created_at?: string;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  name?: string;
  subscribed_at?: string;
  is_active?: boolean;
  unsubscribed_at?: string;
}

