import { useState, useEffect, type FormEvent } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  FileSpreadsheet
} from 'lucide-react';
import { NicheId } from '../types';
import { submitToGoogleSheet } from '../services/googleSheetService';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedNiche?: NicheId | string;
  sourceContext?: string;
  onOpenSheetModal?: () => void;
}

export default function BookCallModal({
  isOpen,
  onClose,
  preselectedNiche,
  sourceContext,
  onOpenSheetModal
}: BookCallModalProps) {
  const [selectedNiche, setSelectedNiche] = useState<string>('real-estate');
  const [volume, setVolume] = useState<string>('5-10');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 2:00 PM EST');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [channelUrl, setChannelUrl] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedNiche) {
      setSelectedNiche(preselectedNiche);
    }
  }, [preselectedNiche]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToGoogleSheet({
        name,
        email,
        phoneOrUrl: channelUrl,
        niche: selectedNiche,
        volume: `${volume} videos/month`,
        dateSlot: selectedDate,
        message: `Booked via: ${sourceContext || 'Direct Modal'}`,
        source: 'Discovery Call Modal'
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const datesList = [
    'Today, 4:30 PM EST',
    'Tomorrow, 11:00 AM EST',
    'Tomorrow, 2:00 PM EST',
    'Thursday, 1:30 PM EST',
    'Friday, 10:00 AM EST'
  ];

  const niches = [
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'saas-explainer', label: 'SaaS Explainer' },
    { id: 'documentary', label: 'Documentary' },
    { id: 'talking-head', label: 'Talking Head' },
    { id: 'geo-layer-3', label: 'Geo Layer 3' },
    { id: 'hybrid', label: 'Multi-Niche / Full Suite' }
  ];

  return (
    <div 
      id="book-call-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="book-call-modal-dialog"
        className="relative w-full max-w-xl bg-white border-2 border-[#2596be] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 pt-6 pb-4 bg-neutral-50 border-b border-neutral-200 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#2596be]/40 flex items-center justify-center shadow-sm">
              <TrendingUp className="w-5 h-5 text-[#2596be]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-neutral-900 font-display">
                  Book a Discovery Call
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#2596be] border border-[#2596be]/30">
                  15 Min Strategy
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                {sourceContext ? `Inquiring about: ${sourceContext}` : 'Align with your dedicated VHGlobals video editing lead.'}
              </p>
            </div>
          </div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
            className="cursor-pointer p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-[#2596be]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Niche Selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Primary Video Focus / Niche
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {niches.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => setSelectedNiche(n.id)}
                      className={`cursor-pointer px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-all ${
                        selectedNiche === n.id
                          ? 'bg-blue-50 border-[#2596be] text-neutral-900 shadow-sm'
                          : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      {n.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Volume Requirements */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Estimated Monthly Volume
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '1-4', label: '1 - 4 videos/mo' },
                    { id: '5-10', label: '5 - 10 videos/mo' },
                    { id: '10+', label: '10 - 25+ videos/mo' }
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVolume(v.id)}
                      className={`cursor-pointer p-2 text-xs text-center font-medium rounded-lg border transition-all ${
                        volume === v.id
                          ? 'bg-blue-50 border-[#2596be] text-neutral-900 shadow-sm'
                          : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#2596be]" />
                  Select Date & Time Slot
                </label>
                <select
                  id="booking-date-select"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                >
                  {datesList.map((d, idx) => (
                    <option key={idx} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                  />
                </div>
              </div>

              {/* Channel or Website URL */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Brand / YouTube / Website URL
                </label>
                <input
                  id="booking-url"
                  type="text"
                  placeholder="https://youtube.com/@yourchannel or https://youragency.com"
                  value={channelUrl}
                  onChange={(e) => setChannelUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                />
              </div>

              <div className="text-[11px] text-neutral-500 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2596be]" />
                Appointment will be automatically synced to connected Google Sheet
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="modal-submit-booking-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-neutral-950 rounded-xl bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-[0_0_20px_rgba(37,150,190,0.2)] transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Syncing with Google Sheet...</span>
                  ) : (
                    <>
                      <span>Confirm Strategy Session</span>
                      <ArrowRight className="w-4 h-4 text-[#2596be]" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2596be]" />
                  No Commitment Required
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#2596be]" />
                  15-Minute Zoom Link
                </span>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 border-2 border-[#2596be] flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#2596be]" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-neutral-900 font-display">
                  Strategy Session Confirmed!
                </h4>
                <p className="text-sm text-neutral-600 mt-1.5 max-w-sm mx-auto">
                  Thank you, <span className="text-neutral-900 font-semibold">{name || 'Creator'}</span>. Your booking has been recorded and synced to our Google Sheet.
                </p>
              </div>

              {/* Call Details Card */}
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-left space-y-2 max-w-md mx-auto">
                <div className="flex items-center justify-between text-xs text-neutral-600">
                  <span>Scheduled Time:</span>
                  <span className="text-neutral-900 font-semibold font-mono">{selectedDate}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-600">
                  <span>Focus Area:</span>
                  <span className="text-[#2596be] font-semibold capitalize">{selectedNiche.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-600">
                  <span>Target Volume:</span>
                  <span className="text-neutral-900 font-medium">{volume} videos/mo</span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-600 border-t border-neutral-200 pt-2">
                  <span>Meeting Link:</span>
                  <span className="text-[#2596be] underline font-mono text-[11px]">meet.google.com/vhg-prod-cal</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-center gap-3">
                {onOpenSheetModal && (
                  <button
                    onClick={onOpenSheetModal}
                    className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-700 hover:text-[#2596be]"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#2596be]" />
                    <span>View Sheet Entry</span>
                  </button>
                )}
                <button
                  id="modal-done-btn"
                  onClick={onClose}
                  className="cursor-pointer px-6 py-2 rounded-xl bg-white border-2 border-[#2596be] text-neutral-900 text-xs font-bold hover:bg-blue-50 shadow-sm"
                >
                  Back to Showcase
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
