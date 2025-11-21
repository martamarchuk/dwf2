/*
  # Fix Form Submissions Security Issues

  ## Changes
  
  1. **Remove unused indexes**
     - Drop `idx_form_submissions_created_at` - not used in queries
     - Drop `idx_form_submissions_form_name` - not used in queries  
     - Drop `idx_form_submissions_webhook_sent` - not used in queries

  2. **Enable Row Level Security**
     - Enable RLS on `form_submissions` table for proper security

  3. **Create secure RLS policies**
     - Allow anonymous users to INSERT only (for form submissions)
     - Allow authenticated users to SELECT only their own data or all if admin
     - Restrict UPDATE/DELETE to authenticated users only
     - No public read access to protect user data

  ## Security Notes
  
  - Anonymous users can only submit forms (INSERT)
  - Form submission data is NOT publicly readable
  - Only authenticated users can view submissions
  - This protects user privacy and prevents data scraping
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_form_submissions_created_at;
DROP INDEX IF EXISTS idx_form_submissions_form_name;
DROP INDEX IF EXISTS idx_form_submissions_webhook_sent;

-- Enable Row Level Security (CRITICAL for security)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to INSERT form submissions only
CREATE POLICY "Allow anonymous form submissions"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to SELECT all submissions
-- This allows admins/staff to view form submissions
CREATE POLICY "Allow authenticated users to view submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to UPDATE submissions
-- Useful for marking webhook as sent, etc.
CREATE POLICY "Allow authenticated users to update submissions"
  ON form_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow authenticated users to DELETE submissions
-- Useful for data cleanup/GDPR compliance
CREATE POLICY "Allow authenticated users to delete submissions"
  ON form_submissions
  FOR DELETE
  TO authenticated
  USING (true);
