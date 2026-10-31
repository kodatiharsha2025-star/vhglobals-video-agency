import { 
  PhoneCall
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onBookCall: (context?: string) => void;
}

export default function Footer({ onBookCall }: FooterProps) {
  return (
    <footer id="site-footer" className="relative bg-white border-t border-neutral-200 text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Info & Upward Growth Arrow Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50/70 border border-[#2596be]/30 shadow-sm overflow-hidden p-1">
                <Logo className="w-8 h-8 object-contain" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-neutral-950">
                VH<span className="text-[#2596be]">GLOBALS</span>
              </span>
            </div>

            <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
              Elevating content for real estate media companies, SaaS pioneers, investigative documentary creators, talking head thought leaders, and cartographic GeoLayer storytellers worldwide.
            </p>
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
                <a href="#style-showcase" className="hover:text-[#2596be] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-[#2596be] transition-colors">
                  The Workflow Pipeline
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2596be] transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Niches Covered (with all color grading and sound design text removed) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-display">
              Production Niches
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Real Estate',
                'SaaS Product Explainer',
                'Product Launch Videos',
                'Promo Videos',
                'Documentary Video Essays',
                'Talking Head',
                'Geo Layer 3 Maps'
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
              <a
                id="footer-book-call-btn"
                href="https://calendly.com/vhstudios-global/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onBookCall('Footer CTA');
                }}
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50 shadow-sm transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#2596be]" />
                <span>Book a call</span>
              </a>
            </div>
          </div>
        </div>

        {/* Agency Copyright */}
        <div className="pt-8 border-t border-neutral-200 text-xs text-neutral-500">
          © 2026 VHGLOBALS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
