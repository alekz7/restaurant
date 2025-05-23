import { createClient } from "@supabase/supabase-js";
// import { Database } from './database.types';
// Use a fallback type for Database until database.types is available
export type Database = any;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
