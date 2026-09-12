import { useState, useEffect } from 'react';
import { 
  X, 
  FileSpreadsheet, 
  CheckCircle2, 
  Copy, 
  Download, 
  ExternalLink, 
  Sparkles, 
  Settings2,
  Table
} from 'lucide-react';
import { 
  getGoogleSheetWebhookUrl, 
  setGoogleSheetWebhookUrl, 
  getStoredLeads, 
  exportLeadsToCsv,
  type LeadSubmission 
} from '../services/googleSheetService';

interface GoogleSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GoogleSheetModal({ isOpen, onClose }: GoogleSheetModalProps) {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [leads, setLeads] = useState<LeadSubmission[]>([]);

  useEffect(() => {
    if (isOpen) {
      setWebhookUrl(getGoogleSheetWebhookUrl());
      setLeads(getStoredLeads());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveUrl = () => {
    setGoogleSheetWebhookUrl(webhookUrl);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const appsScriptCode = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phoneOrUrl || '',
      data.niche || '',
      data.volume || '',
      data.dateSlot || '',
      data.message || '',
      data.source || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

  const copyScript = () => {
    navigator.clipboard.writeText(appsScriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#2596be]/30 flex items-center justify-center shadow-sm">
              <FileSpreadsheet className="w-5 h-5 text-[#2596be]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-neutral-900 font-display">
                  Google Sheet Integration
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#2596be]" />
                  Connected
                </span>
              </div>
              <p className="text-xs text-neutral-500">
                All form submissions and discovery call requests stream directly to your Google Sheet.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-[#2596be]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Status summary */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-[#2596be]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2596be] mb-0.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
                Live Synchronization Active
              </div>
              <p className="text-xs text-neutral-600">
                Total Submissions Captured: <strong className="text-neutral-900 font-mono">{leads.length}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => exportLeadsToCsv()}
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-300 text-xs font-semibold text-neutral-700 hover:text-[#2596be] hover:border-[#2596be] shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#2596be]" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Webhook Configuration */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5">
              <Settings2 className="w-3.5 h-3.5 text-[#2596be]" />
              Google Sheet Webhook Endpoint
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://script.google.com/macros/s/.../exec"
                className="flex-1 px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-xs font-mono text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
              />
              <button
                onClick={handleSaveUrl}
                className="cursor-pointer px-4 py-2.5 rounded-xl bg-[#2596be] text-white text-xs font-bold hover:bg-[#2083a6] transition-colors shadow-sm"
              >
                {saved ? 'Saved!' : 'Update'}
              </button>
            </div>
            <p className="text-[11px] text-neutral-500">
              Paste your deployed Google Apps Script Web App URL to append incoming rows directly to your private Google Sheet.
            </p>
          </div>

          {/* 30-Second Google Apps Script Guide */}
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-[#2596be]" />
                Google Apps Script (Ready to Paste)
              </div>
              <button
                onClick={copyScript}
                className="cursor-pointer inline-flex items-center gap-1 text-xs font-semibold text-[#2596be] hover:underline"
              >
                <Copy className="w-3.5 h-3.5 text-[#2596be]" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Script'}</span>
              </button>
            </div>
            <p className="text-[11px] text-neutral-600">
              In your Google Sheet, click <strong>Extensions &gt; Apps Script</strong>, replace the file with this script, click <strong>Deploy &gt; New deployment &gt; Web app (access: Anyone)</strong>, and paste the resulting URL above!
            </p>
            <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-lg text-[10px] font-mono overflow-x-auto max-h-36">
              {appsScriptCode}
            </pre>
          </div>

          {/* Recent Submissions Log */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
              Recent Submissions Log
            </div>
            {leads.length > 0 ? (
              <div className="border border-neutral-200 rounded-xl overflow-hidden text-xs">
                <div className="max-h-48 overflow-y-auto">
                  <table className="w-full text-left">
                    <thead className="bg-neutral-100 text-neutral-600 text-[10px] uppercase font-bold sticky top-0">
                      <tr>
                        <th className="p-2.5">Name</th>
                        <th className="p-2.5">Email</th>
                        <th className="p-2.5">Niche</th>
                        <th className="p-2.5">Source</th>
                        <th className="p-2.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {leads.map((l) => (
                        <tr key={l.id} className="hover:bg-neutral-50">
                          <td className="p-2.5 font-medium text-neutral-900">{l.name}</td>
                          <td className="p-2.5 font-mono text-[11px] text-neutral-600">{l.email}</td>
                          <td className="p-2.5 capitalize text-neutral-700">{l.niche.replace('-', ' ')}</td>
                          <td className="p-2.5 text-neutral-500 text-[11px]">{l.source}</td>
                          <td className="p-2.5">
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                              <CheckCircle2 className="w-3 h-3 text-[#2596be]" />
                              Synced
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center border border-dashed border-neutral-300 rounded-xl text-neutral-500 text-xs">
                No form submissions recorded yet. Once visitors submit the Contact form or Book a Call dialog, they will immediately appear here and sync to your Google Sheet.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-neutral-50 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer px-5 py-2 text-xs font-semibold rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
