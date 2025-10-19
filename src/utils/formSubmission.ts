import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface FormSubmissionData {
  formName: string;
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  field5?: string;
  field6?: string;
  metadata?: Record<string, any>;
}

interface DeviceInfo {
  userAgent: string;
  browserLanguage: string;
  screenResolution: string;
}

function getDeviceInfo(): DeviceInfo {
  return {
    userAgent: navigator.userAgent,
    browserLanguage: navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
  };
}

function getUrlParameters(): string {
  return window.location.search;
}

function getReferrer(): string {
  return document.referrer || 'direct';
}

async function getIpAddress(): Promise<string | null> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Failed to fetch IP address:', error);
    return null;
  }
}

async function sendWebhook(submissionId: string, formData: any): Promise<boolean> {
  try {
    const webhookUrl = 'https://n8n.project-launcher.com/webhook/digitalworkforce_form';

    const params = new URLSearchParams({
      submission_id: submissionId,
      form_name: formData.form_name,
      created_at: formData.created_at,
      field_1: formData.field_1 || '',
      field_2: formData.field_2 || '',
      field_3: formData.field_3 || '',
      field_4: formData.field_4 || '',
      field_5: formData.field_5 || '',
      field_6: formData.field_6 || '',
      page_url: formData.page_url,
      utm_parameters: formData.utm_parameters || '',
      ip_address: formData.ip_address || '',
      user_agent: formData.user_agent || '',
      referrer: formData.referrer || '',
    });

    const response = await fetch(`${webhookUrl}?${params.toString()}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Webhook error:', error);
    return false;
  }
}

export async function submitForm(data: FormSubmissionData): Promise<{ success: boolean; error?: string }> {
  try {
    const deviceInfo = getDeviceInfo();
    const urlParameters = getUrlParameters();
    const referrer = getReferrer();
    const ipAddress = await getIpAddress();

    const submissionData = {
      form_name: data.formName,
      field_1: data.field1 || null,
      field_2: data.field2 || null,
      field_3: data.field3 || null,
      field_4: data.field4 || null,
      field_5: data.field5 || null,
      field_6: data.field6 || null,
      ip_address: ipAddress,
      user_agent: deviceInfo.userAgent,
      page_url: window.location.href,
      utm_parameters: urlParameters || null,
      referrer: referrer,
      browser_language: deviceInfo.browserLanguage,
      screen_resolution: deviceInfo.screenResolution,
      webhook_sent: false,
      metadata: data.metadata || null,
    };

    const { data: insertedData, error: insertError } = await supabase
      .from('form_submissions')
      .insert(submissionData)
      .select()
      .maybeSingle();

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return { success: false, error: insertError.message };
    }

    if (!insertedData) {
      return { success: false, error: 'No data returned from insert' };
    }

    const webhookSuccess = await sendWebhook(insertedData.id, insertedData);

    await supabase
      .from('form_submissions')
      .update({
        webhook_sent: webhookSuccess,
        webhook_sent_at: webhookSuccess ? new Date().toISOString() : null,
        webhook_error: webhookSuccess ? null : 'Failed to send webhook',
      })
      .eq('id', insertedData.id);

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
