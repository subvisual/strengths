export const ENV_VARS = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  SUPABASE_KEY: import.meta.env.VITE_SUPABASE_KEY
};

export const STRENGTH_CATEGORIES = ["Executing", "Influencing", "Relationship Building", "Strategic Thinking"] as const;
