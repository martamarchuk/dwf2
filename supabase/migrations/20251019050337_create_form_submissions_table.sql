/*
  # Create Form Submissions Table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `created_at` (timestamptz) - Date and time of form submission
      - `form_name` (text) - Name/identifier of the form (e.g., "contact_form", "employee_booking_form", "home_cta_form")
      - `field_1` (text, nullable) - Flexible field for name/title
      - `field_2` (text, nullable) - Flexible field for email
      - `field_3` (text, nullable) - Flexible field for phone/company
      - `field_4` (text, nullable) - Flexible field for message/notes
      - `field_5` (text, nullable) - Additional flexible field for future use
      - `field_6` (text, nullable) - Additional flexible field for future use
      - `ip_address` (text, nullable) - IP address of the user submitting the form
      - `user_agent` (text, nullable) - Browser and device information
      - `page_url` (text) - Full URL of the page where form was submitted
      - `utm_parameters` (text, nullable) - URL parameters after "?" for tracking (UTM tags, etc.)
      - `referrer` (text, nullable) - HTTP referrer (where user came from)
      - `browser_language` (text, nullable) - User's browser language
      - `screen_resolution` (text, nullable) - User's screen resolution
      - `webhook_sent` (boolean) - Whether webhook was successfully sent
      - `webhook_sent_at` (timestamptz, nullable) - When webhook was sent
      - `webhook_error` (text, nullable) - Any webhook error message
      - `metadata` (jsonb, nullable) - Additional flexible data storage

  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for inserting form submissions (public access for form submissions)
    - Add policy for authenticated users to read all submissions (for admin/analysis)

  3. Indexes
    - Add index on `created_at` for efficient date-based queries
    - Add index on `form_name` for filtering by form type
    - Add index on `webhook_sent` for tracking webhook status
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  form_name text NOT NULL,
  field_1 text,
  field_2 text,
  field_3 text,
  field_4 text,
  field_5 text,
  field_6 text,
  ip_address text,
  user_agent text,
  page_url text NOT NULL,
  utm_parameters text,
  referrer text,
  browser_language text,
  screen_resolution text,
  webhook_sent boolean DEFAULT false NOT NULL,
  webhook_sent_at timestamptz,
  webhook_error text,
  metadata jsonb
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert form submissions"
  ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at 
  ON form_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_form_submissions_form_name 
  ON form_submissions(form_name);

CREATE INDEX IF NOT EXISTS idx_form_submissions_webhook_sent 
  ON form_submissions(webhook_sent) 
  WHERE webhook_sent = false;