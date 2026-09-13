import { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Monitor, 
  PhoneCall,
  Building2,
  Laptop,
  Film,
  Mic,
  Globe2,
  LayoutGrid,
  Filter,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import { SHOWCASE_DATA } from '../data/showcases';
import { VideoShowcaseItem, NicheId } from '../types';

interface StyleShowcaseProps {
  onBookCall: (context?: string) => void;
}

type FormatFilter = 'all' | '9:16' | '16:9';

interface CategoryFilterItem {
  id: 'all' | NicheId;
  label: string;
  icon: typeof LayoutGrid;
  tagline: string;
}

const CATEGORY_FILTERS: CategoryFilterItem[] = [
  { 
    id: 'all', 
    label: 'All Styles', 
    icon: LayoutGrid, 
    tagline: 'Explore our complete signature portfolio across all high-retention editing disciplines' 
  },
  { 
    id: 'real-estate', 
    label: 'Real Estate', 
    icon: Building2, 
    tagline: 'Luxury estate walkthroughs, drone speed ramping & architectural horizon stabilization' 
  },
  { 
    id: 'saas-explainer', 
    label: 'SaaS Explainer Videos / Product launch videos / Promo videos', 
    icon: Laptop, 
    tagline: 'Slick UI animations, rapid cursor dynamics & high-conversion product launch demos' 
  },
  { 
    id: 'documentary', 
    label: 'Documentary Storytelling', 
    icon: Film, 
    tagline: 'Cinematic archival pacing, 2.5D photo parallax & high-tension narrative journalism' 
  },
  { 
    id: 'talking-head', 
    label: 'Talking Head', 
    icon: Mic, 
    tagline: 'Viral retention hooks, kinetic subtitle animations & multi-cam jump punch-in pacing' 
  },
  { 
    id: 'geo-layer-3', 
    label: 'Geo Layer 3 Map Animation', 
    icon: Globe2, 
    tagline: 'Custom 3D satellite topography, flight trajectories & dynamic geopolitical cartography' 
  },
];

export default function StyleShowcase({ onBookCall }: StyleShowcaseProps) {
  // Default to 'talking-head' showcase
  const [selectedCategory, setSelectedCategory] = useState<'all' | NicheId>('talking-head');
  const [selectedFormat, setSelectedFormat] = useState<FormatFilter>('all');

  // Flatten all showcases across categories
  const allShowcases: VideoShowcaseItem[] = useMemo(() => {
    return Object.values(SHOWCASE_DATA).flat();
  }, []);

  // Filter items based on active category
  const categoryItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return allShowcases;
    }
    return SHOWCASE_DATA[selectedCategory] || [];
  }, [selectedCategory, allShowcases]);

  // Counts for the current category
  const count916 = useMemo(() => {
    return categoryItems.filter(item => item.aspectRatio === '9:16').length;
  }, [categoryItems]);

  const count169 = useMemo(() => {
    return categoryItems.filter(item => item.aspectRatio === '16:9').length;
  }, [categoryItems]);

  // Filtered items based on active format
  const displayedItems = useMemo(() => {
    if (selectedFormat === 'all') {
      return categoryItems;
    }
    return categoryItems.filter(item => item.aspectRatio === selectedFormat);
  }, [categoryItems, selectedFormat]);

  const activeCategoryObj = CATEGORY_FILTERS.find(c => c.id === selectedCategory) || CATEGORY_FILTERS[0];

  return (
    <section id="style-showcase" className="relative py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-[#2596be]/30 text-[#2596be] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
            <span>Signature Video Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight mb-4">
            Choose Your <span className="text-[#2596be]">Style</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Select a specific niche portfolio below, and switch between <span className="font-semibold text-neutral-900">9:16</span> and <span className="font-semibold text-neutral-900">16:9</span> aspect ratios to view our specialized video buckets.
          </p>
        </div>

        {/* Niche Selection Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {CATEGORY_FILTERS.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              const totalCount = cat.id === 'all' 
                ? allShowcases.length 
                : (SHOWCASE_DATA[cat.id]?.length || 0);

              return (
                <button
                  key={cat.id}
                  id={`niche-tab-${cat.id}`}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    // If switching to SaaS explainer (which only has 16:9), auto-switch to 16:9 if current was 9:16
                    if (cat.id === 'saas-explainer' && selectedFormat === '9:16') {
                      setSelectedFormat('16:9');
                    }
                  }}
                  className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                    isActive
                      ? 'bg-blue-50 text-[#2596be] border-[#2596be] shadow-sm font-bold scale-[1.02]'
                      : 'bg-white text-neutral-600 border-neutral-200 hover:border-[#2596be]/50 hover:text-neutral-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#2596be]' : 'text-neutral-500'}`} />
                  <span className="text-left">{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    isActive ? 'bg-[#2596be] text-white' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {totalCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Niche Portfolio Header & Dual 9:16 / 16:9 Aspect Ratio Buttons */}
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-5 sm:p-7 mb-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Current Niche Details */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-[#2596be]/30 flex items-center justify-center shadow-sm shrink-0 mt-0.5">
                <activeCategoryObj.icon className="w-6 h-6 text-[#2596be]" />
              </div>
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">
                    {activeCategoryObj.label}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#2596be]/10 text-[#2596be] border border-[#2596be]/30">
                    {categoryItems.length} {categoryItems.length === 1 ? 'Video' : 'Videos'} Available
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                  {activeCategoryObj.tagline}
                </p>
              </div>
            </div>

            {/* 9:16 & 16:9 Ratio Filter Buttons in this Specific Niche */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5 text-[#2596be]" />
                <span>Aspect Ratio:</span>
              </div>

              <div className="inline-flex p-1 rounded-xl bg-white border border-neutral-200 shadow-sm gap-1">
                {/* 9:16 Button */}
                <button
                  id="ratio-btn-9-16"
                  onClick={() => setSelectedFormat('9:16')}
                  className={`cursor-pointer inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedFormat === '9:16'
                      ? 'bg-[#2596be] text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                  title="Filter to 9:16 Vertical video bucket"
                >
                  <Smartphone className={`w-4 h-4 ${selectedFormat === '9:16' ? 'text-white' : 'text-[#2596be]'}`} />
                  <span>9:16</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    selectedFormat === '9:16' ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {count916}
                  </span>
                </button>

                {/* 16:9 Button */}
                <button
                  id="ratio-btn-16-9"
                  onClick={() => setSelectedFormat('16:9')}
                  className={`cursor-pointer inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedFormat === '16:9'
                      ? 'bg-[#2596be] text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                  title="Filter to 16:9 Horizontal video bucket"
                >
                  <Monitor className={`w-4 h-4 ${selectedFormat === '16:9' ? 'text-white' : 'text-[#2596be]'}`} />
                  <span>16:9</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    selectedFormat === '16:9' ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {count169}
                  </span>
                </button>

                {/* All Formats Button */}
                <button
                  id="ratio-btn-all"
                  onClick={() => setSelectedFormat('all')}
                  className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedFormat === 'all'
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                  title="View all format buckets for this niche"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>All ({categoryItems.length})</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Items Bucket Display */}
        {displayedItems.length > 0 ? (
          <div className={`grid gap-8 ${
            // Single 9:16 card -> centered vertical container
            displayedItems.length === 1 && displayedItems[0].aspectRatio === '9:16'
              ? 'grid-cols-1 max-w-lg mx-auto'
              : displayedItems.length === 1
                ? 'grid-cols-1 max-w-4xl mx-auto'
                : displayedItems.length === 2
                  ? 'grid-cols-1 lg:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
          }`}>
            {displayedItems.map((item) => {
              const isVertical = item.aspectRatio === '9:16';
              return (
                <div
                  key={item.id}
                  id={`showcase-card-${item.id}`}
                  className="group flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be] shadow-sm hover:shadow-[0_8px_30px_rgba(37,150,190,0.12)] transition-all"
                >
                  <div>
                    {/* Video Header: Title & Aspect Ratio Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h4 className="text-base sm:text-lg font-bold text-neutral-900 font-display line-clamp-2">
                        {item.title}
                      </h4>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border shrink-0 ${
                        isVertical
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-blue-50 text-[#2596be] border-[#2596be]/30'
                      }`}>
                        {item.aspectRatio}
                      </span>
                    </div>

                    {/* Video Player (Default Frame Thumbnail & Basic Player Controls) */}
                    <div className="mb-4">
                      <VideoPlayer
                        id={item.id}
                        title={item.title}
                        aspectRatio={item.aspectRatio}
                        videoSrc={item.videoSrc}
                        fallbackPoster={item.fallbackPoster}
                        nicheLabel={item.nicheLabel}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    {/* Key Retention Highlights */}
                    {item.techniques && item.techniques.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.techniques.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs bg-neutral-50 text-neutral-700 border border-neutral-200 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Book a call button */}
                  <div className="pt-3 border-t border-neutral-100">
                    <a
                      id={`book-call-btn-${item.id}`}
                      href="https://calendly.com/vhstudios-global/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        onBookCall(`Portfolio: ${item.title} (${item.aspectRatio})`);
                      }}
                      className="cursor-pointer w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-[#2596be] hover:bg-[#1f7c9e] shadow-sm hover:shadow-[0_4px_14px_rgba(37,150,190,0.3)] transition-all"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Book a call</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : categoryItems.length === 0 ? (
          /* Empty category notice when all videos in this niche are deleted/empty */
          <div className="text-center py-16 px-6 rounded-2xl bg-neutral-50 border border-dashed border-neutral-300 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-[#2596be]/30 flex items-center justify-center mx-auto mb-4 text-[#2596be]">
              <activeCategoryObj.icon className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-neutral-900 mb-2">
              No Videos in {activeCategoryObj.label} Currently
            </h4>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              The showcase videos in this section have been removed. Ready for new project uploads or custom client video edits.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                id="empty-category-book-call-btn"
                href="https://calendly.com/vhstudios-global/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onBookCall(`New project inquiry for ${activeCategoryObj.label}`);
                }}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#2596be] hover:bg-[#1f7c9e] shadow-sm hover:shadow-[0_0_15px_rgba(37,150,190,0.3)] transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Call for Custom Edits</span>
              </a>
            </div>
          </div>
        ) : (
          /* Empty format bucket notice (e.g. if selecting 9:16 in SaaS explainer) */
          <div className="text-center py-16 px-6 rounded-2xl bg-neutral-50 border border-dashed border-neutral-300 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-[#2596be]/30 flex items-center justify-center mx-auto mb-4 text-[#2596be]">
              {selectedFormat === '9:16' ? <Smartphone className="w-7 h-7" /> : <Monitor className="w-7 h-7" />}
            </div>
            <h4 className="text-lg font-bold text-neutral-900 mb-2">
              No {selectedFormat} Videos in this Bucket Currently
            </h4>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              Our {activeCategoryObj.label} videos are currently available in {selectedFormat === '9:16' ? '16:9' : '9:16'}. We also create custom {selectedFormat} versions upon request.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                id="switch-format-btn"
                onClick={() => setSelectedFormat(selectedFormat === '9:16' ? '16:9' : '9:16')}
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#2596be] hover:bg-[#1f7c9e] shadow-sm transition-all"
              >
                {selectedFormat === '9:16' ? <Monitor className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
                <span>View {selectedFormat === '9:16' ? `16:9 Videos (${count169})` : `9:16 Videos (${count916})`}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                id="empty-book-call-btn"
                onClick={() => onBookCall(`Custom ${selectedFormat} request for ${activeCategoryObj.label}`)}
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-neutral-800 bg-white border border-neutral-300 hover:border-[#2596be] transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#2596be]" />
                <span>Request Custom {selectedFormat} Cut</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
