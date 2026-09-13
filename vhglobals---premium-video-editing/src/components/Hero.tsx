import { 
  TrendingUp, 
  PhoneCall, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onBookCall: (context?: string) => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white">
      {/* Background Radial Glow with strictly brand blue #2596be */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] brand-gradient-radial pointer-events-none -z-10" />
      
      {/* Subtle light grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-[#2596be]/40 text-[#2596be] text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2596be] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2596be]"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
            <span>Premium Video Editing</span>
            <span className="w-1 h-1 rounded-full bg-[#2596be]" />
            <span className="text-neutral-600 font-medium">VHGlobals Production</span>
          </div>

          {/* Headline: YOUR CONTENT . ELEVATED. */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 font-display uppercase leading-[1.08] mb-6">
            YOUR CONTENT <span className="text-[#2596be] inline-block transform hover:scale-105 transition-transform">.</span> ELEVATED<span className="text-[#2596be]">.</span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Professional editing for real estate media companies and agents, social media content editing for brands, SaaS explainer videos for companies, documentary & geo layer 3 map animation for YouTubers. <span className="text-neutral-900 font-semibold">Cinematic quality. Consistent results.</span>
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              id="hero-book-call-btn"
              href="https://calendly.com/vhstudios-global/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onBookCall('Hero Primary CTA');
              }}
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-[0_0_25px_rgba(37,150,190,0.25)] hover:shadow-[0_0_35px_rgba(37,150,190,0.4)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#2596be]"
            >
              <PhoneCall className="w-5 h-5 text-[#2596be]" />
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4 text-[#2596be]" />
            </a>

            <a
              href="#style-showcase"
              id="hero-explore-showcase-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-[#2596be]/60 transition-all shadow-sm"
            >
              <span>Explore Showcases</span>
              <TrendingUp className="w-4 h-4 text-[#2596be]" />
            </a>
          </div>

          {/* Key Agency Performance Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/50 transition-all text-center shadow-sm">
              <div className="text-xl sm:text-2xl font-bold font-display text-neutral-900 mb-1 leading-tight">
                under 24hours to 48hours
              </div>
              <div className="text-xs text-neutral-500 font-medium">Turnaround Time</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/50 transition-all text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-1">
                100<span className="text-[#2596be]">%</span>
              </div>
              <div className="text-xs text-neutral-500 font-medium">Client Retention</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/50 transition-all text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-1">
                100<span className="text-[#2596be]">M+</span>
              </div>
              <div className="text-xs text-neutral-500 font-medium">Organic Views Generated</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/50 transition-all text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-1">
                100<span className="text-[#2596be]">%</span>
              </div>
              <div className="text-xs text-neutral-500 font-medium">Dedicated Lead Editors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
