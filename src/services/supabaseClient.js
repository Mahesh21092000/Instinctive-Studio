import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ijepuyabfrpfhotwnurh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZXB1eWFiZnJwZmhvdHdudXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NDA3NzIsImV4cCI6MjA1MDExNjc3Mn0.xyLda0g-ZIBTb7BwL4r7C8eCfG4Pc3Yf7WFcvJ0p6os';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
