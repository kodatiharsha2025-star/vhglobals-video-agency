import { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  Monitor, 
  PhoneCall
} from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import { SHOWCASE_DATA } from '../data/showcases';
import { VideoShowcaseItem } from '../types';

interface StyleShowcaseProps {
  onBookCall: (context?: string) => void;
}

type FormatFilter = 'all' | 'vertical' | 'horizontal';

export default function StyleShowcase({ onBookCall }: StyleShowcaseProps) {
  const [selectedFormat, setSelectedFormat] = useState<FormatFilter>('all');

  // Collect all vertical (9:16) and horizontal (16:9) items across all styles
  const allShowcases: VideoShowcaseItem[] = Object.values(SHOWCASE_DATA).flat();
  const verticalItems = allShowcases.filter(item => item.aspectRatio === '9:16');
  const horizontalItems = allShowcases.filter(item => item.aspectRatio === '16:9');

  return (
    <section id="style-showcase" className="relative py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-[#2596be]/30 text-[#2596be] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
            <span>Signature Video Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight mb-5">
            Choose Your <span className="text-[#2596be]">Style</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
            Experience our high-retention video production across 9:16 Vertical and 16:9 Horizontal cinematic formats.
          </p>

          {/* Clean Format Selector (9:16 Vertical & 16:9 Horizontal) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 shadow-sm">
            <button
              id="format-btn-all"
              onClick={() => setSelectedFormat('all')}
              className={`cursor-pointer px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedFormat === 'all'
                  ? 'bg-white text-neutral-950 shadow-sm border border-neutral-200'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Formats ({allShowcases.length})
            </button>
            <button
              id="format-btn-vertical"
              onClick={() => setSelectedFormat('vertical')}
              className={`cursor-pointer inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedFormat === 'vertical'
                  ? 'bg-white text-neutral-950 shadow-sm border border-neutral-200'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-[#2596be]" />
              <span>9:16 Vertical ({verticalItems.length})</span>
            </button>
            <button
              id="format-btn-horizontal"
              onClick={() => setSelectedFormat('horizontal')}
              className={`cursor-pointer inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedFormat === 'horizontal'
                  ? 'bg-white text-neutral-950 shadow-sm border border-neutral-200'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5 text-[#2596be]" />
              <span>16:9 Horizontal ({horizontalItems.length})</span>
            </button>
          </div>
        </div>

        {/* 9:16 Vertical Layout Section */}
        {(selectedFormat === 'all' || selectedFormat === 'vertical') && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-neutral-200">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-[#2596be]/30 flex items-center justify-center shadow-sm">
                <Smartphone className="w-4 h-4 text-[#2596be]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">
                  9:16 Vertical Layouts
                </h3>
                <p className="text-xs text-neutral-500">
                  Engineered for Instagram Reels, YouTube Shorts, and TikTok high-retention discovery
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {verticalItems.map((item) => (
                <div
                  key={item.id}
                  id={`showcase-card-${item.id}`}
                  className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be] shadow-sm hover:shadow-[0_10px_25px_rgba(37,150,190,0.12)] transition-all"
                >
                  <div>
                    {/* 1. Video Type */}
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#2596be] mb-1">
                        Video Type: {item.nicheLabel} (9:16 Vertical)
                      </div>
                      <h4 className="text-lg font-bold text-neutral-900 font-display line-clamp-2">
                        {item.title}
                      </h4>
                    </div>

                    {/* 2. Video Player */}
                    <div className="mb-5">
                      <VideoPlayer
                        id={item.id}
                        title={item.title}
                        aspectRatio="9:16"
                        videoSrc={item.videoSrc}
                        fallbackPoster={item.fallbackPoster}
                        nicheLabel={item.nicheLabel}
                      />
                    </div>

                    {/* 3. Video Description */}
                    <div className="mb-6">
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Followed directly by: "Book a call" button */}
                  <button
                    id={`book-call-btn-${item.id}`}
                    onClick={() => onBookCall(`Showcase: ${item.title}`)}
                    className="cursor-pointer w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-sm hover:shadow-[0_0_15px_rgba(37,150,190,0.2)] transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-[#2596be]" />
                    <span>Book a call</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 16:9 Horizontal Layout Section */}
        {(selectedFormat === 'all' || selectedFormat === 'horizontal') && (
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-neutral-200">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-[#2596be]/30 flex items-center justify-center shadow-sm">
                <Monitor className="w-4 h-4 text-[#2596be]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 font-display">
                  16:9 Horizontal Layouts
                </h3>
                <p className="text-xs text-neutral-500">
                  Crafted for long-form YouTube documentaries, SaaS sales hero presentations, and MLS listings
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {horizontalItems.map((item) => (
                <div
                  key={item.id}
                  id={`showcase-card-${item.id}`}
                  className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be] shadow-sm hover:shadow-[0_10px_25px_rgba(37,150,190,0.12)] transition-all"
                >
                  <div>
                    {/* 1. Video Type */}
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#2596be] mb-1">
                        Video Type: {item.nicheLabel} (16:9 Horizontal)
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
                        {item.title}
                      </h4>
                    </div>

                    {/* 2. Video Player */}
                    <div className="mb-5">
                      <VideoPlayer
                        id={item.id}
                        title={item.title}
                        aspectRatio="16:9"
                        videoSrc={item.videoSrc}
                        fallbackPoster={item.fallbackPoster}
                        nicheLabel={item.nicheLabel}
                      />
                    </div>

                    {/* 3. Video Description */}
                    <div className="mb-6">
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Followed directly by: "Book a call" button */}
                  <button
                    id={`book-call-btn-${item.id}`}
                    onClick={() => onBookCall(`Showcase: ${item.title}`)}
                    className="cursor-pointer w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-sm hover:shadow-[0_0_15px_rgba(37,150,190,0.2)] transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-[#2596be]" />
                    <span>Book a call</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
