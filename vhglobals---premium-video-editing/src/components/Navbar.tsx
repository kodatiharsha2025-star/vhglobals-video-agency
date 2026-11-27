import { useState } from 'react';
import { 
  Menu, 
  X, 
  PhoneCall
} from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onBookCall: (context?: string) => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
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
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50/70 border border-[#2596be]/30 shadow-sm group-hover:border-[#2596be] transition-all overflow-hidden p-1">
            <Logo className="w-8 h-8 object-contain transform group-hover:scale-110 transition-transform" />
          </div>

          <div className="flex items-center">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-neutral-950 flex items-center">
              VH<span className="text-[#2596be]">GLOBALS</span>
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
            href="#style-showcase" 
            id="nav-link-portfolio"
            className="hover:text-[#2596be] transition-colors py-1 relative group"
          >
            Portfolio
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
          <a
            id="nav-book-call-btn"
            href="https://calendly.com/vhstudios-global/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              onBookCall('Navbar Header');
            }}
            className="cursor-pointer relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wide text-neutral-900 rounded-xl bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 text-[#2596be]" />
            <span>Book a call</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="mobile-book-call-quick"
            href="https://calendly.com/vhstudios-global/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              onBookCall('Mobile Header');
            }}
            className="cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-neutral-900 bg-white border border-[#2596be] rounded-lg shadow-sm"
          >
            <PhoneCall className="w-3 h-3 text-[#2596be]" />
            <span>Book</span>
          </a>
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
          <div className="flex flex-col space-y-3 pt-2 text-base font-semibold text-neutral-800">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#2596be] transition-colors"
            >
              Services
            </a>
            <a 
              href="#style-showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#2596be] transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#workflow" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#2596be] transition-colors"
            >
              Workflow
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
            <a
              id="mobile-drawer-book-call-btn"
              href="https://calendly.com/vhstudios-global/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onBookCall('Mobile Drawer');
              }}
              className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 text-sm font-bold text-neutral-900 rounded-xl bg-white border-2 border-[#2596be] hover:bg-blue-50 shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#2596be]" />
              <span>Book a call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
