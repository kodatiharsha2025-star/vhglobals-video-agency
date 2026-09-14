import { useEffect, useRef, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Calendar
} from 'lucide-react';
import { Logo } from './Logo';
import { NicheId } from '../types';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedNiche?: NicheId | string;
  sourceContext?: string;
}

export default function BookCallModal({
  isOpen,
  onClose,
  sourceContext
}: BookCallModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const CALENDLY_URL = 'https://calendly.com/vhstudios-global/30min';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Dynamically ensure Calendly widget script is loaded
      const existingScript = document.getElementById('calendly-widget-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'calendly-widget-script';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If Calendly already exists on window, re-init if available
        const win = window as unknown as { Calendly?: { initInlineWidget?: (opts: { url: string; parentElement: HTMLElement | null }) => void } };
        if (win.Calendly?.initInlineWidget && containerRef.current) {
          try {
            win.Calendly.initInlineWidget({
              url: CALENDLY_URL,
              parentElement: containerRef.current
            });
          } catch (e) {
            console.log('Calendly re-init note:', e);
          }
        }
      }
    } else {
      document.body.style.overflow = 'unset';
      setIsIframeLoaded(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      id="book-call-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="book-call-modal-dialog"
        className="relative w-full max-w-3xl bg-white border-2 border-[#2596be] rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-5 sm:px-6 py-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50/70 border border-[#2596be]/30 flex items-center justify-center shadow-sm overflow-hidden p-1">
              <Logo className="w-8 h-8 object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
                  Book a Strategy Call
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#2596be] border border-[#2596be]/30">
                  Calendly Live
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                {sourceContext ? `Inquiring about: ${sourceContext}` : 'Lock in a 1-on-1 strategy call with our creative leads.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="modal-open-calendly-external"
              title="Open Calendly in new tab"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 hover:border-[#2596be] hover:text-[#2596be] transition-colors shadow-sm"
            >
              <span>Open in Calendly</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2596be]" />
            </a>

            <button
              id="modal-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
              className="cursor-pointer p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5 text-[#2596be]" />
            </button>
          </div>
        </div>

        {/* Modal Body with Embedded Calendly Widget */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-white relative">
          {/* Badge & Quick Details */}
          <div className="flex items-center justify-between px-3 py-2 mb-2 bg-blue-50/50 rounded-xl border border-[#2596be]/20 text-xs text-neutral-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2596be]" />
              <span className="font-semibold text-neutral-800">Direct Editorial Alignment</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-500">
              <Calendar className="w-3.5 h-3.5 text-[#2596be]" />
              <span>Synced with Google Calendar & Zoom</span>
            </div>
          </div>

          {/* Calendly Inline Widget Container */}
          <div className="relative w-full rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner min-h-[680px]">
            {/* Direct Calendly Iframe Embed guaranteeing instant interaction */}
            <iframe
              src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : '')}&embed_type=Inline&hide_event_type_details=1&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=2596be`}
              width="100%"
              height="700"
              frameBorder="0"
              title="Select a Date & Time - Calendly"
              onLoad={() => setIsIframeLoaded(true)}
              className="w-full h-[700px] border-0"
              style={{ minWidth: '320px' }}
            />

            {/* Official Calendly inline widget element as provided in user request */}
            <div 
              ref={containerRef}
              className="calendly-inline-widget hidden" 
              data-url={CALENDLY_URL} 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Direct Link Footnote */}
          <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 px-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#2596be]" />
              <span>Synced with Google Calendar & Zoom</span>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#2596be] hover:underline inline-flex items-center gap-1"
            >
              <span>Direct Link: calendly.com/vhstudios-global/30min</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
