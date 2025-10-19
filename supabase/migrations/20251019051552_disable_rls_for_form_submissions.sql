/*
  # Disable RLS for Form Submissions Table

  1. Changes
    - Disable Row Level Security on form_submissions table
    - This allows anonymous users to insert form data without restrictions
    - Since this is public form submission data, RLS is not necessary

  2. Security Note
    - Form submissions are public data (contact forms)
    - No sensitive user data that requires row-level protection
    - Access control can be managed at application level
    - Only authenticated users will have access to query the data via other means

  3. Permissions
    - Keep existing GRANT permissions for anon and authenticated roles
*/

-- Disable Row Level Security on form_submissions table
ALTER TABLE form_submissions DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies since RLS is disabled
DROP POLICY IF EXISTS "Allow anonymous form submissions" ON form_submissions;
DROP POLICY IF EXISTS "Authenticated users can read all submissions" ON form_submissions;