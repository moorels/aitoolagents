import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjkgubgjapdsxtotdzjg.supabase.co';

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqa2d1YmdqYXBkc3h0b3RkempnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyNzAwMjUsImV4cCI6MjA1MDg0NjAyNX0.qTMeBGh9vn7monC0pFvmfEPdhJbJDS0hDxXZi6zjocU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);