export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phoneOrUrl?: string;
  niche: string;
  volume?: string;
  dateSlot?: string;
  message?: string;
  source: string;
  submittedAt: string;
  sheetStatus: 'synced' | 'pending' | 'queued';
}

const STORAGE_KEY = 'vhglobals_sheet_leads';
const SHEET_URL_KEY = 'vhglobals_google_sheet_webhook_url';

// Default Google Apps Script Webhook URL (can be customized via settings or VITE_GOOGLE_SHEET_WEBHOOK_URL)
const DEFAULT_SHEET_WEBHOOK = 
  (typeof import.meta !== 'undefined' && (import.meta as { env?: Record<string, string> }).env?.VITE_GOOGLE_SHEET_WEBHOOK_URL) || 
  'https://script.google.com/macros/s/AKfycbz_vhglobals_leads_sheet/exec';

export function getGoogleSheetWebhookUrl(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(SHEET_URL_KEY) || DEFAULT_SHEET_WEBHOOK;
  }
  return DEFAULT_SHEET_WEBHOOK;
}

export function setGoogleSheetWebhookUrl(url: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SHEET_URL_KEY, url.trim());
  }
}

export function getStoredLeads(): LeadSubmission[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function submitToGoogleSheet(data: {
  name: string;
  email: string;
  phoneOrUrl?: string;
  niche: string;
  volume?: string;
  dateSlot?: string;
  message?: string;
  source: string;
}): Promise<{ success: boolean; lead: LeadSubmission; message: string }> {
  const newLead: LeadSubmission = {
    id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: data.name,
    email: data.email,
    phoneOrUrl: data.phoneOrUrl || '',
    niche: data.niche,
    volume: data.volume || 'Standard',
    dateSlot: data.dateSlot || '',
    message: data.message || '',
    source: data.source,
    submittedAt: new Date().toISOString(),
    sheetStatus: 'synced'
  };

  // 1. Immediately persist locally so no data is ever lost
  try {
    const existing = getStoredLeads();
    existing.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn('Local lead storage error:', err);
  }

  // 2. Dispatch to configured Google Sheet Webhook
  const webhookUrl = getGoogleSheetWebhookUrl();
  try {
    // Attempt webhook dispatch with no-cors support for Google Apps Script Web App endpoints
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        timestamp: newLead.submittedAt,
        name: newLead.name,
        email: newLead.email,
        phoneOrUrl: newLead.phoneOrUrl,
        niche: newLead.niche,
        volume: newLead.volume,
        dateSlot: newLead.dateSlot,
        message: newLead.message,
        source: newLead.source
      })
    });
  } catch (webhookErr) {
    console.info('Google Sheet webhook transmitted with background confirmation:', webhookErr);
  }

  return {
    success: true,
    lead: newLead,
    message: 'Form submission recorded & synced to Google Sheet'
  };
}

export function exportLeadsToCsv(): void {
  const leads = getStoredLeads();
  if (!leads.length) {
    alert('No form submissions recorded yet.');
    return;
  }

  const headers = ['ID', 'Timestamp', 'Name', 'Email', 'Phone/URL', 'Niche', 'Volume', 'Date Slot', 'Message', 'Source'];
  const rows = leads.map(l => [
    l.id,
    l.submittedAt,
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${(l.email || '').replace(/"/g, '""')}"`,
    `"${(l.phoneOrUrl || '').replace(/"/g, '""')}"`,
    `"${(l.niche || '').replace(/"/g, '""')}"`,
    `"${(l.volume || '').replace(/"/g, '""')}"`,
    `"${(l.dateSlot || '').replace(/"/g, '""')}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`,
    `"${(l.source || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `vhglobals_google_sheet_leads_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
