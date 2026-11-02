
import { createClient } from
"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL =
"https://mgxeyjyhuzbsgnbpbkst.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_ANZvxJnS89wrYo0MTx6LRA_Nu2XPss5";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
