import { 
  Building2, 
  Laptop, 
  Film, 
  Mic, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { ServiceOffering } from '../types';

interface ServicesProps {
  onBookCall: (context?: string) => void;
}

export const SERVICES_LIST: ServiceOffering[] = [
  {
    id: 'real-estate',
    title: 'Real Estate Media',
    tagline: 'Luxury walkthroughs, drone speed ramping & architectural motion tracking.',
    targetAudience: 'Media production companies, luxury brokerages & top  real estate agents.',
    formats: ['Vertical Reels', '4K Master Tours', 'MLS Cutdowns'],
    featuresTitle: 'Real Estate Video Editing Features:',
    features: [
      'Seamless doorway match-cuts and whip transitions',
      'Window pull and HDR balancing for vibrant views',
      '3D address and property feature tracking callouts',
      'Twilight sunset atmospheric enhancement',
      'Drone footage speed ramping and stabilization',
      'Cinematic color grading tailored for luxury aesthetics',
      'Dynamic subtitle and caption overlays',
      'Floor plan integration and motion graphics',
      'Agent intro and outro branding segments',
      'MLS-optimized vertical cutdowns',
      'Custom AI-generated property flyover enhancements and environment extensions',
      'Generative AI object removal and cleanup for staging vacant spaces',
      'AI-driven lighting adjustment to automatically transform daytime shots into golden hour lighting',
      'Synthetic voiceover generation and AI audio enhancement for property tours'
    ],
    iconName: 'Building2'
  },
  {
    id: 'saas-explainer',
    title: 'SaaS Explainer Videos / Product Launch Videos / Promo Videos',
    tagline: 'Slick UI animations, cursor dynamics & high-conversion product walkthroughs.',
    targetAudience: 'B2B tech founders, product marketers & venture-backed SaaS startups.',
    formats: ['Website Hero Walkthroughs', 'Product Launch Videos', 'High-Conversion Promo Films'],
    featuresTitle: 'SaaS Video Production Features',
    features: [
      'Fluid cursor auto-tracking with click micro-interactions',
      '3D isometric device mockups and window framing',
      'Dynamic zoom-ins on high-impact value moments',
      'Dynamic typography highlighting product ROI',
      'GeoLayers 3D architecture and integration mapping flyovers',
      'Clean UI screen recording stabilization and cursor smoothing',
      'Feature breakdown callout boxes with animated highlights',
      'Professional audio mixing, sound design, and pacing optimization'
    ],
    iconName: 'Laptop'
  },
  {
    id: 'documentary',
    title: 'Documentary Storytelling',
    tagline: 'Cinematic archival pacing, paper textures, and 3D photo parallax.',
    targetAudience: 'Investigative YouTubers, narrative creators & modern media channels.',
    formats: ['YouTube Long-Form', 'Micro-Docs', 'Trailer Cutdowns'],
    featuresTitle: 'Documentary storytelling production features',
    features: [
      '2.5D camera parallax on archival photography',
      'Custom paper rip, vintage film, and headline overlays',
      'Multi-source document redactions and highlight animations',
      'Pacing architecture engineered for 65%+ average watch time',
      'Cinematic archival photo grading and grain overlays',
      'Immersive sound design, ambient layers, and tension building',
      'Lower-third investigative text styling and map trace animations'
    ],
    iconName: 'Film'
  },
  {
    id: 'talking-head',
    title: 'Talking Head Videos',
    tagline: 'Viral engagement hooks, dynamic typography, and multi-cam punch-in pacing.',
    targetAudience: 'Executive leaders, personal brand creators, coaches & podcast hosts.',
    formats: ['Shorts & TikToks', 'Studio Podcasts', 'Keynote Highlights'],
    featuresTitle: 'Talking head video editing features',
    features: [
      'Dynamic word-by-word animated subtitle typography',
      'Multi-focal punch-in zooms on key thematic words',
      'Pattern interrupt B-roll graphics and context icons',
      'Dead air truncation and conversational rhythm polish',
      'Smart jump-cut smoothing and visual framing adjustments',
      'Sound effect accents on key visual highlights and callouts',
      'Color grading tailored for creator studio lighting and skin tones'
    ],
    iconName: 'Mic'
  },
  {
    id: 'geo-layer-3',
    title: 'Geo Layer 3 Map Animation',
    tagline: 'Custom 3D satellite topography, flight trajectories & dynamic map animations.',
    targetAudience: 'Geopolitical analysis channels, travel documentarians & news visualizers.',
    formats: ['Map Visualizers', 'Geo Shorts', 'Custom After Effects Assets'],
    featuresTitle: 'Geo layer 3 map video editing features',
    features: [
      'Real-world DEM terrain elevation and topography modeling',
      'Glowing brand blue route telemetry vectors',
      'Smooth orbital satellite rotations and altitude plunges',
      'Country boundary extrusions and tactical vector markers',
      'Dynamic point-to-point flight path animations and curved arcs',
      'Custom location pin drops with glowing radar rings',
      'Real-time camera speed ramping during long-distance transitions',
      'Seamless integration with custom UI overlays and screen recordings'
    ],
    iconName: 'Globe2'
  }
];

export default function Services({ onBookCall }: ServicesProps) {
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#2596be]" };
    switch (iconName) {
      case 'Building2':
        return <Building2 {...props} />;
      case 'Laptop':
        return <Laptop {...props} />;
      case 'Film':
        return <Film {...props} />;
      case 'Mic':
        return <Mic {...props} />;
      case 'Globe2':
        return <Globe2 {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight mb-5">
            Specialized Video Editing for <span className="text-[#2596be]">Every Media Format</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            We reject generic editing. Our teams are hand-picked and trained specifically around your niche and storytelling needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be] shadow-sm hover:shadow-[0_12px_30px_rgba(37,150,190,0.12)] transition-all duration-300"
            >
              <div>
                {/* Service Icon with Brand Blue glow */}
                <div className="w-12 h-12 rounded-xl bg-blue-50/70 border border-[#2596be]/30 flex items-center justify-center mb-6 group-hover:border-[#2596be] transition-colors shadow-sm">
                  {renderIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 font-display mb-2 group-hover:text-[#2596be] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-medium text-neutral-500 mb-4 pb-4 border-b border-neutral-100">
                  Targeted for: <span className="text-neutral-700">{service.targetAudience}</span>
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {service.tagline}
                </p>

                {/* Formats Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.formats.map((fmt, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>

                {/* Key Technical Features */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {service.featuresTitle || 'Production Inclusions'}
                  </div>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2596be] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="https://calendly.com/vhstudios-global/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onBookCall(`Service: ${service.title}`);
                }}
                className="cursor-pointer w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-neutral-900 bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-[#2596be] group-hover:shadow-sm transition-all"
              >
                <span>Book a call for {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2596be] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}

          {/* Custom Agency Package Card */}
          <div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-neutral-50 border-2 border-dashed border-[#2596be]/40 hover:border-[#2596be] transition-all shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-[#2596be]/40 flex items-center justify-center mb-6 shadow-sm">
                <Sparkles className="w-6 h-6 text-[#2596be]" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 font-display mb-2">
                Hybrid Multi-Format Retainer
              </h3>

              <p className="text-xs font-medium text-neutral-500 mb-4 pb-4 border-b border-neutral-200">
                Targeted for: <span className="text-neutral-700">Rapid-growth agencies & high-output creators</span>
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Need a combination of vertical shorts, YouTube master cutdowns, and specialized GeoLayers map animations? We assemble a customized editing team tailored specifically to your content calendar.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Custom Retainer Perks
                </div>
                {[
                  'Dedicated Lead Editor + Motion Graphics Specialist',
                  'Shared Slack / Discord channel with creative director',
                  'Guaranteed under 24hours to 48hours turnaround for priority short-form',
                  'Flexible volume rollover & monthly quota adjustments'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2596be] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://calendly.com/vhstudios-global/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onBookCall('Hybrid Multi-Format Retainer');
              }}
              className="cursor-pointer w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-neutral-900 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#2596be]" />
              <span>Book a call for Custom Retainer</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
