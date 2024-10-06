import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uvormkzedklgzikndxmx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2b3Jta3plZGtsZ3ppa25keG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNzAxMzYsImV4cCI6MjA0Mzc0NjEzNn0.dwWkfVHkTLf02NrNB3HDZkHI0WEQ8rvN-K1V-ggHDS0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)