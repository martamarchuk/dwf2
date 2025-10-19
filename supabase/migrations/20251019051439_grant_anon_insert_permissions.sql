/*
  # Grant Anonymous Users Direct Insert Permissions

  1. Changes
    - Grant INSERT permission directly to anon role on form_submissions table
    - This ensures anonymous users can insert regardless of RLS policies
    - Keep RLS enabled but make it less restrictive for inserts

  2. Security
    - Anon users can INSERT data (for form submissions)
    - Only authenticated users can SELECT (read) data
*/

-- Grant INSERT permission to anon role
GRANT INSERT ON form_submissions TO anon;

-- Grant ALL permissions to authenticated role (for admin access)
GRANT ALL ON form_submissions TO authenticated;

-- Ensure the sequence can be used by anon
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;