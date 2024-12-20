const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseKey);
}
