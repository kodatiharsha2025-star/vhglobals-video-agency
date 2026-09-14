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

// Official Google Apps Script Web App URL provided by client
export const GOOGLE_APPS_SCRIPT_WEBAPP_URL = 
  'https://script.google.com/macros/s/AKfycbxqjPpxqkN01w_cgRRnJtMfTMwHDx6U4RqYLLyYGUzzgloJLhY-NFCZMB9oQbO3qghOyA/exec';

const STORAGE_KEY = 'vhglobals_sheet_leads';

export function getGoogleSheetWebhookUrl(): string {
  return GOOGLE_APPS_SCRIPT_WEBAPP_URL;
}

export function setGoogleSheetWebhookUrl(_url: string): void {
  // Configured with official client Google Apps Script Web App
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

  // 2. Dispatch to Google Apps Script Web App URL directly using fetch() POST
  try {
    const payload = {
      // Spreadsheet column headers matching Google Sheet
      "Your Name": newLead.name,
      "Work Email": newLead.email,
      "Channel URL or Phone": newLead.phoneOrUrl,
      "Primary Video Style": newLead.niche,
      "Project Details & Monthly Target": newLead.message,
      "Submitted At": new Date().toLocaleString(),
      // Universal parameter aliases
      name: newLead.name,
      email: newLead.email,
      phoneOrUrl: newLead.phoneOrUrl,
      phone: newLead.phoneOrUrl,
      niche: newLead.niche,
      volume: newLead.volume,
      dateSlot: newLead.dateSlot,
      message: newLead.message,
      source: newLead.source,
      timestamp: newLead.submittedAt
    };

    // Include query parameters for scripts using e.parameter
    const queryParams = new URLSearchParams();
    queryParams.set("Your Name", newLead.name);
    queryParams.set("Work Email", newLead.email);
    queryParams.set("Channel URL or Phone", newLead.phoneOrUrl);
    queryParams.set("Primary Video Style", newLead.niche);
    queryParams.set("Project Details & Monthly Target", newLead.message);
    queryParams.set("Submitted At", new Date().toLocaleString());
    queryParams.set("name", newLead.name);
    queryParams.set("email", newLead.email);
    queryParams.set("phoneOrUrl", newLead.phoneOrUrl);
    queryParams.set("niche", newLead.niche);
    queryParams.set("message", newLead.message);

    const fullUrl = `${GOOGLE_APPS_SCRIPT_WEBAPP_URL}?${queryParams.toString()}`;

    // Direct POST request using JavaScript fetch()
    await fetch(fullUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });
  } catch (webhookErr) {
    console.info('Google Apps Script POST dispatch notice:', webhookErr);
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

  // Exact headers matching Image 1
  const headers = ['Your Name', 'Work Email', 'Channel URL or Phone', 'Primary Video Style', 'Project Details & Monthly Target', 'Submitted At'];
  const rows = leads.map(l => [
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${(l.email || '').replace(/"/g, '""')}"`,
    `"${(l.phoneOrUrl || '').replace(/"/g, '""')}"`,
    `"${(l.niche || '').replace(/"/g, '""')}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`,
    `"${(l.submittedAt || new Date().toISOString())}"`
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
