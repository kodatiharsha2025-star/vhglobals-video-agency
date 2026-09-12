import { 
  TrendingUp, 
  PhoneCall, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Zap
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
            <button
              id="hero-book-call-btn"
              onClick={() => onBookCall('Hero Primary CTA')}
              className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-[0_0_25px_rgba(37,150,190,0.25)] hover:shadow-[0_0_35px_rgba(37,150,190,0.4)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#2596be]"
            >
              <PhoneCall className="w-5 h-5 text-[#2596be]" />
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4 text-[#2596be]" />
            </button>

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/50 transition-all text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-1">
                24-48<span className="text-[#2596be]">h</span>
              </div>
              <div className="text-xs text-neutral-500 font-medium">Draft Turnaround</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/50 transition-all text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-1">
                99.4<span className="text-[#2596be]">%</span>
              </div>
              <div className="text-xs text-neutral-500 font-medium">Client Retention</div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/50 transition-all text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-900 mb-1">
                65<span className="text-[#2596be]">M+</span>
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

        {/* Cinematic Studio Production Console Showcase Graphic */}
        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl p-1 bg-gradient-to-b from-[#2596be]/30 via-neutral-200 to-neutral-100 shadow-[0_10px_35px_rgba(37,150,190,0.15)]">
            <div className="rounded-xl bg-white border border-neutral-200 overflow-hidden shadow-sm">
              {/* Studio Console Header */}
              <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-xs font-mono text-neutral-600 hidden sm:inline">
                    VHGlobals_Master_Timeline_v4.2.prproj
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-[#2596be] bg-blue-50 border border-[#2596be]/30 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2596be] animate-pulse" />
                    4K PRORES 422 HQ
                  </span>
                  <span className="text-xs text-neutral-500 font-mono hidden md:inline">
                    00:03:24:18
                  </span>
                </div>
              </div>

              {/* Master Reel Preview Area */}
              <div className="relative aspect-video w-full max-h-[460px] bg-neutral-950 overflow-hidden group">
                <video
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                  poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
                  muted
                  playsInline
                  autoPlay
                  loop
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* In-Frame Live Editorial Stats */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                  <div className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md border border-[#2596be]/50 text-xs font-bold text-neutral-900 flex items-center gap-2 shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-[#2596be]" />
                    <span>Real-Time Retention Engine</span>
                  </div>
                  <div className="text-[11px] font-mono text-white bg-black/60 px-2 py-0.5 rounded">
                    Peak Drop-off Mitigation: +38%
                  </div>
                </div>

                {/* Live Timeline Cuts Visualizer Track */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 hidden sm:block shadow-lg">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-600 mb-1.5">
                    <span className="text-[#2596be] font-bold flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#2596be]" />
                      V1: 4K Narrative Cut
                    </span>
                    <span className="text-neutral-500 font-medium">A1-A8: Master Narrative Audio Track</span>
                  </div>

                  {/* Multi-track timeline representation */}
                  <div className="space-y-1">
                    {/* Video track */}
                    <div className="h-4 bg-neutral-100 rounded flex gap-0.5 overflow-hidden p-0.5 border border-neutral-200">
                      <div className="h-full w-[20%] bg-[#2596be] rounded-sm text-[9px] text-white flex items-center px-1 font-mono font-bold">HOOK</div>
                      <div className="h-full w-[35%] bg-[#2083a6] rounded-sm text-[9px] text-white flex items-center px-1 font-mono">VALUE_BUILD</div>
                      <div className="h-full w-[25%] bg-[#2596be] rounded-sm text-[9px] text-white flex items-center px-1 font-mono font-bold">CLIMAX</div>
                      <div className="h-full w-[20%] bg-[#1a6e8c] rounded-sm text-[9px] text-white flex items-center px-1 font-mono">CTA_OUTRO</div>
                    </div>
                    {/* Audio track */}
                    <div className="h-2.5 bg-neutral-100 rounded flex gap-0.5 overflow-hidden p-0.5 border border-neutral-200">
                      <div className="h-full w-[15%] bg-[#2596be]/60 rounded-sm"></div>
                      <div className="h-full w-[30%] bg-[#2596be]/40 rounded-sm"></div>
                      <div className="h-full w-[40%] bg-[#2596be]/70 rounded-sm"></div>
                      <div className="h-full w-[15%] bg-[#2596be]/50 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
