import { 
  TrendingUp, 
  Sparkles, 
  Youtube, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Globe, 
  ArrowUp,
  PhoneCall,
  FileSpreadsheet
} from 'lucide-react';

interface FooterProps {
  onBookCall: (context?: string) => void;
  onOpenSheetModal?: () => void;
}

export default function Footer({ onBookCall, onOpenSheetModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="relative bg-white border-t border-neutral-200 text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Info & Upward Growth Arrow Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-[#2596be]/40 shadow-sm">
                <TrendingUp className="w-5 h-5 text-[#2596be] stroke-[2.5]" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-neutral-900">
                VH<span className="text-[#2596be]">Globals</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#2596be] border border-[#2596be]/30">
                <Sparkles className="w-2.5 h-2.5 text-[#2596be]" />
                Premium Video Editing
              </span>
            </div>

            <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
              Elevating content for real estate media companies, SaaS pioneers, investigative documentary creators, talking head thought leaders, and cartographic GeoLayer storytellers worldwide.
            </p>

            {/* Social Media Handles */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Connect With Our Studio
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  id="footer-social-youtube"
                  aria-label="VHGlobals YouTube"
                  className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#2596be] flex items-center justify-center transition-all shadow-sm"
                >
                  <Youtube className="w-4 h-4 text-[#2596be]" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  id="footer-social-twitter"
                  aria-label="VHGlobals X / Twitter"
                  className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#2596be] flex items-center justify-center transition-all shadow-sm"
                >
                  <Twitter className="w-4 h-4 text-[#2596be]" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  id="footer-social-linkedin"
                  aria-label="VHGlobals LinkedIn"
                  className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#2596be] flex items-center justify-center transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-[#2596be]" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  id="footer-social-instagram"
                  aria-label="VHGlobals Instagram"
                  className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#2596be] flex items-center justify-center transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-[#2596be]" />
                </a>
                <a
                  href="https://vhglobals.com"
                  target="_blank"
                  rel="noreferrer"
                  id="footer-social-network"
                  aria-label="VHGlobals Global Network"
                  className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-[#2596be] flex items-center justify-center transition-all shadow-sm"
                >
                  <Globe className="w-4 h-4 text-[#2596be]" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-display">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#services" className="hover:text-[#2596be] transition-colors">
                  Services & Specialties
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-[#2596be] transition-colors">
                  The Workflow Pipeline
                </a>
              </li>
              <li>
                <a href="#style-showcase" className="hover:text-[#2596be] transition-colors">
                  Style Showcase (9:16 & 16:9)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2596be] transition-colors">
                  Contact Studio
                </a>
              </li>
              {onOpenSheetModal && (
                <li>
                  <button 
                    onClick={onOpenSheetModal} 
                    className="hover:text-[#2596be] transition-colors inline-flex items-center gap-1.5 text-neutral-600 text-left"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#2596be]" />
                    <span>Google Sheet Integration</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Niches Covered (with all color grading and sound design text removed) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-display">
              Production Niches
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Real Estate 9:16 & 16:9',
                'SaaS Product Explainer',
                'Documentary Video Essays',
                'Talking Head Retention',
                'Geo Layer 3 Maps',
                'Kinetic Subtitles',
                '3D Motion Graphics'
              ].map((n, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-700 hover:border-[#2596be]/50 transition-colors"
                >
                  {n}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <button
                id="footer-book-call-btn"
                onClick={() => onBookCall('Footer CTA')}
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50 shadow-sm transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#2596be]" />
                <span>Book a call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Agency Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 VHGlobals Media Group. All rights reserved. Cinematic quality. Consistent results.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-800 cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              id="scroll-to-top-btn"
              className="cursor-pointer flex items-center gap-1.5 text-neutral-600 hover:text-[#2596be] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#2596be]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
