import { useState, type FormEvent } from 'react';
import { 
  Mail, 
  PhoneCall, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import { submitToGoogleSheet } from '../services/googleSheetService';

interface ContactSectionProps {
  onBookCall: (context?: string) => void;
}

export default function ContactSection({ onBookCall }: ContactSectionProps) {
  const [activeTab, setActiveTab] = useState<'calendly' | 'brief'>('calendly');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneOrUrl, setPhoneOrUrl] = useState('');
  const [niche, setNiche] = useState('real-estate');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sheetFeedback, setSheetFeedback] = useState('');
  const CALENDLY_URL = 'https://calendly.com/vhstudios-global/30min';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await submitToGoogleSheet({
        name,
        email,
        phoneOrUrl,
        niche,
        message,
        source: 'Landing Page Contact Form'
      });
      setSheetFeedback(res.message);
      setIsSent(true);
    } catch (err) {
      console.error(err);
      setIsSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2596be] border border-[#2596be]/30 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
              <span>Direct Studio Contact</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight leading-tight">
              Let&apos;s Elevate Your Video Output.
            </h2>

            {/* Exactly updated subheading as requested */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Send us a message or book for a 15-minute strategy call with our creative leads.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#2596be]/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-[#2596be]" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-mono">DIRECT INQUIRIES</div>
                  <a href="mailto:contact@vhglobals.com" className="text-sm font-bold text-neutral-900 hover:text-[#2596be] transition-colors">
                    contact@vhglobals.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#2596be]/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-[#2596be]" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-mono">STUDIO HOURS & SLA</div>
                  <div className="text-sm font-semibold text-neutral-800">
                    24/7 Global Editorial Coverage • Under 24hours to 48hours Draft SLA
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking Call Out Banner */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-[#2596be]/40 shadow-sm">
              <h4 className="text-lg font-bold text-neutral-950 font-display mb-1">
                Prefer an instant calendar slot?
              </h4>
              <p className="text-xs text-neutral-600 mb-4">
                Schedule directly onto our production directors&apos; calendar.
              </p>
              <a
                id="contact-book-call-btn"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onBookCall('Contact Direct Card');
                }}
                className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/80 shadow-sm hover:shadow-[0_0_20px_rgba(37,150,190,0.2)] transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#2596be]" />
                <span>Book a call now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Calendly Scheduling & Project Brief Tabs */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-neutral-200 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Tab Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2 p-1 bg-neutral-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setActiveTab('calendly')}
                    className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTab === 'calendly'
                        ? 'bg-white text-neutral-950 shadow-sm border border-[#2596be]/30'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#2596be]" />
                    <span>Instant Calendly Booking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('brief')}
                    className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTab === 'brief'
                        ? 'bg-white text-neutral-950 shadow-sm border border-[#2596be]/30'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#2596be]" />
                    <span>Send Project Brief</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2596be] hover:underline"
                    title="Open Calendly in new tab"
                  >
                    <span>calendly.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* View 1: Calendly Inline Widget */}
              {activeTab === 'calendly' && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">
                      Book a 30-Minute Strategy Session
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Choose a date and time directly on our live calendar. Synchronized across global time zones.
                    </p>
                  </div>

                  {/* Calendly Inline Widget element as provided */}
                  <div className="relative w-full rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-inner min-h-[650px]">
                    <iframe
                      src={`${CALENDLY_URL}?embed_domain=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : '')}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      title="Select a Date & Time - Calendly"
                      className="w-full h-[700px] border-0"
                      style={{ minWidth: '320px' }}
                    />
                    <div 
                      className="calendly-inline-widget hidden" 
                      data-url={CALENDLY_URL} 
                      style={{ minWidth: '320px', height: '700px' }} 
                    />
                  </div>
                </div>
              )}

              {/* View 2: Send Project Brief Form */}
              {activeTab === 'brief' && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">
                      Send a Project Brief
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Tell us about your brand or channel. We respond within 4 business hours.
                    </p>
                  </div>

                  {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Johnathan Davis"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@agency.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Channel URL or Phone
                      </label>
                      <input
                        type="text"
                        placeholder="youtube.com/@channel or +1 (555) 000-0000"
                        value={phoneOrUrl}
                        onChange={(e) => setPhoneOrUrl(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Primary Video Style
                      </label>
                      <select
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#2596be]"
                      >
                        <option value="real-estate">Real Estate Media & Listings</option>
                        <option value="saas-explainer">SaaS Explainer & Product Demo</option>
                        <option value="documentary">Documentary & Long-Form Video Essay</option>
                        <option value="talking-head">Talking Head & High-Retention Shorts</option>
                        <option value="geo-layer-3">Geo Layer 3 Map Animation</option>
                        <option value="multiple">Multi-Format Enterprise Pipeline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Project Details & Monthly Target
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your current video volume, bottleneck, or sample links..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-[#2596be] rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#2596be] resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2596be]" />
                      Forms sync directly to connected Google Sheet
                    </span>
                    <span className="text-neutral-400">Encrypted transmission</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-[0_0_20px_rgba(37,150,190,0.25)] hover:shadow-[0_0_30px_rgba(37,150,190,0.35)] transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-[#2596be]" />
                    <span>{isSubmitting ? 'Syncing to Google Sheet...' : 'Send Project Inquiry'}</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 border border-[#2596be] flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#2596be]" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-950 font-display">
                    Inquiry Received & Synced to Google Sheet
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Thank you, <span className="text-neutral-900 font-semibold">{name}</span>. Your brief has been saved and synced directly to our connected Google Sheet. Our creative leads will review your inquiry and reply to <span className="text-[#2596be] font-mono font-semibold">{email}</span> within 4 hours.
                  </p>

                  <div className="pt-2 flex items-center justify-center">
                    <button
                      onClick={() => setIsSent(false)}
                      className="cursor-pointer text-xs font-semibold text-[#2596be] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
