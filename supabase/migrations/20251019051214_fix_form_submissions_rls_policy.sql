/*
  # Fix RLS Policy for Form Submissions

  1. Changes
    - Drop existing restrictive INSERT policy
    - Create new policy that allows anonymous users to insert form submissions
    - Ensure public (anon) users can submit forms without authentication

  2. Security
    - INSERT: Allow anyone (including anonymous users) to submit forms
    - SELECT: Only authenticated users can read submissions (for admin access)
*/

-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Anyone can insert form submissions" ON form_submissions;

-- Create a new policy that explicitly allows anonymous inserts
CREATE POLICY "Allow anonymous form submissions"
  ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure the SELECT policy exists for authenticated users
DROP POLICY IF EXISTS "Authenticated users can read all submissions" ON form_submissions;

CREATE POLICY "Authenticated users can read all submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);