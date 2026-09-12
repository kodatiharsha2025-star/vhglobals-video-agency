import { useState } from 'react';
import { 
  TrendingUp, 
  Menu, 
  X, 
  PhoneCall, 
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';

interface NavbarProps {
  onBookCall: (context?: string) => void;
  onOpenSheetModal?: () => void;
}

export default function Navbar({ onBookCall, onOpenSheetModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="site-header" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo with Stylized Upward Blue Growth Arrow */}
        <a 
          href="#" 
          id="nav-logo"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 rounded-lg p-1"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50/60 border border-[#2596be]/40 shadow-sm group-hover:border-[#2596be] transition-all">
            <div className="relative flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#2596be] transform group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#2596be] animate-ping opacity-75" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl tracking-tight text-neutral-900 flex items-center">
                VH<span className="text-[#2596be]">Globals</span>
              </span>
              {/* Tagline Badge */}
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2596be] border border-[#2596be]/30">
                <Sparkles className="w-2.5 h-2.5 text-[#2596be]" />
                Premium Video Editing
              </span>
            </div>
            <span className="sm:hidden text-[10px] font-medium tracking-wide text-[#2596be]">
              Premium Video Editing
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-700">
          <a 
            href="#services" 
            id="nav-link-services"
            className="hover:text-[#2596be] transition-colors py-1 relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2596be] transition-all group-hover:w-full" />
          </a>
          <a 
            href="#workflow" 
            id="nav-link-workflow"
            className="hover:text-[#2596be] transition-colors py-1 relative group"
          >
            Workflow
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2596be] transition-all group-hover:w-full" />
          </a>
          <a 
            href="#style-showcase" 
            id="nav-link-showcase"
            className="hover:text-[#2596be] transition-colors py-1 relative group"
          >
            Style Showcase
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2596be] transition-all group-hover:w-full" />
          </a>
          <a 
            href="#contact" 
            id="nav-link-contact"
            className="hover:text-[#2596be] transition-colors py-1 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2596be] transition-all group-hover:w-full" />
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenSheetModal && (
            <button
              onClick={onOpenSheetModal}
              title="Google Sheet Integration Status"
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/80 rounded-xl border border-neutral-200 transition-colors"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#2596be]" />
              <span className="hidden lg:inline">Google Sheet</span>
            </button>
          )}

          <button
            id="nav-book-call-btn"
            onClick={() => onBookCall('Navbar Header')}
            className="cursor-pointer relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wide text-neutral-900 rounded-xl bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-sm hover:shadow-[0_0_20px_rgba(37,150,190,0.25)] transition-all transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 text-[#2596be]" />
            <span>Book a call</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenSheetModal && (
            <button
              onClick={onOpenSheetModal}
              aria-label="Google Sheet"
              className="p-1.5 rounded-lg border border-neutral-200 text-neutral-700 bg-neutral-50"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#2596be]" />
            </button>
          )}
          <button
            id="mobile-book-call-quick"
            onClick={() => onBookCall('Mobile Header')}
            className="cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-neutral-900 bg-white border border-[#2596be] rounded-lg shadow-sm"
          >
            <PhoneCall className="w-3 h-3 text-[#2596be]" />
            <span>Book</span>
          </button>
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#2596be]" /> : <Menu className="w-6 h-6 text-[#2596be]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-white border-b border-neutral-200 px-6 py-5 space-y-4 shadow-lg">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#2596be] border border-[#2596be]/30">
            <Sparkles className="w-3 h-3 text-[#2596be]" />
            Premium Video Editing
          </div>
          <div className="flex flex-col space-y-3 pt-2 text-base font-semibold text-neutral-800">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#2596be] transition-colors"
            >
              Services
            </a>
            <a 
              href="#workflow" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#2596be] transition-colors"
            >
              Workflow
            </a>
            <a 
              href="#style-showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#2596be] transition-colors"
            >
              Style Showcase
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#2596be] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-3">
            <button
              id="mobile-drawer-book-call-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall('Mobile Drawer');
              }}
              className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 text-sm font-bold text-neutral-900 rounded-xl bg-white border-2 border-[#2596be] hover:bg-blue-50 shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#2596be]" />
              <span>Book a call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
