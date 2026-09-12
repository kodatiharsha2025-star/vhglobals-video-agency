import { NicheId, VideoShowcaseItem } from '../types';

export interface NicheTab {
  id: NicheId;
  label: string;
  tagline: string;
  iconName: string;
}

export const NICHE_TABS: NicheTab[] = [
  {
    id: 'real-estate',
    label: 'Real Estate',
    tagline: 'Luxury walkthroughs, drone speed ramping & architectural motion tracking',
    iconName: 'Building2'
  },
  {
    id: 'saas-explainer',
    label: 'SaaS Explainer',
    tagline: 'Slick UI animations, cursor dynamics & high-conversion product walkthroughs',
    iconName: 'Laptop'
  },
  {
    id: 'documentary',
    label: 'Documentary',
    tagline: 'Cinematic archival pacing, paper textures, and 3D photo parallax',
    iconName: 'Film'
  },
  {
    id: 'talking-head',
    label: 'Talking Head',
    tagline: 'Viral retention hooks, kinetic typography, and multi-cam punch-in pacing',
    iconName: 'Mic'
  },
  {
    id: 'geo-layer-3',
    label: 'Geo Layer 3',
    tagline: 'Custom 3D satellite topography, flight trajectories & dynamic map animations',
    iconName: 'Globe2'
  }
];

export const SHOWCASE_DATA: Record<NicheId, VideoShowcaseItem[]> = {
  'real-estate': [
    {
      id: 're-vertical',
      nicheId: 'real-estate',
      nicheLabel: 'Real Estate',
      title: 'Modern Beverly Hills Villa Tour (9:16 Vertical)',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      description: 'Engineered for high-intent Instagram Reels and TikTok discovery. Utilizes seamless match-cuts through door frames, rhythmic speed-ramping, precision window exposure pull balancing to preserve exterior views, and fluid spatial transitions between living areas and outdoor amenities.',
      techniques: [
        'Speed Ramping & Whip Transitions',
        'Window Pull & HDR Balancing',
        '3D Address & Price Callout Motion Tracking',
        'Architectural Horizon Micro-Stabilization'
      ],
      pacingNote: '1.4s average cut duration in initial 5-second hook; slows to 2.8s for master suite and pool reveals.',
      retentionStrategy: 'Initial visual question hook ("Is this $14M view worth it?") paired with rapid exterior-to-interior jump cut reduces drop-off within the critical first 3 seconds by 42%.',
      metrics: {
        retentionRate: '78.4%',
        avgWatchTime: '26.8s / 32s',
        resolution: '4K Ultra HD (60fps)'
      }
    },
    {
      id: 're-horizontal',
      nicheId: 'real-estate',
      nicheLabel: 'Real Estate',
      title: 'Architectural Waterfront Estate Master Showcase (16:9 Horizontal)',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      description: 'Long-form cinematic property film tailored for YouTube, luxury brokerage websites, and MLS listings. Features stabilized FPV drone flythroughs, clean lower-third architectural specs, seamless room-by-room journey mapping, and dynamic sky enhancements.',
      techniques: [
        'Dual-Pass Anamorphic Letterboxing',
        'FPV Drone Micro-Jitter Stabilization',
        'Minimalist Typography for Specs & Acreage',
        'Dynamic Sky Replacement & Twilight Lighting Alignment'
      ],
      pacingNote: 'Smooth, continuous breathing room with 4.5s average shot lengths matching classical acoustic cadence.',
      retentionStrategy: 'Progressive room revelation structured like a narrative story keeps serious buyers watching through the final outdoor patio closing sequence.',
      metrics: {
        retentionRate: '68.2%',
        avgWatchTime: '3m 14s / 4m 05s',
        resolution: '4K DCI (24fps)'
      }
    }
  ],
  'saas-explainer': [
    {
      id: 'saas-vertical',
      nicheId: 'saas-explainer',
      nicheLabel: 'SaaS Explainer',
      title: 'FinTech AI Mobile Experience Teaser (9:16 Vertical)',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      description: 'High-velocity short-form demo highlighting complex data workflows in 30 seconds. Features stylized device 3D mockups, kinetic button press animations, smooth cursor auto-snapping, and auto-zoom focus to turn static software into a fluid product journey.',
      techniques: [
        'Smooth Cursor Motion & Snap Trajectories',
        '3D Device Mockup Renders',
        'Kinetic Text Callouts with Keyframe Scaling',
        'Auto-Zoom Focus on Critical UI Interactions'
      ],
      pacingNote: 'Snappy 0.8s micro-cuts on repetitive setup steps, expanding to 2.2s on key metric output dashboard.',
      retentionStrategy: 'Zero-fluff opening displaying the final time-saving outcome before breaking down the 3 simple steps to achieve it.',
      metrics: {
        retentionRate: '82.1%',
        avgWatchTime: '24.5s / 30s',
        resolution: '1080x1920 60fps'
      }
    },
    {
      id: 'saas-horizontal',
      nicheId: 'saas-explainer',
      nicheLabel: 'SaaS Explainer',
      title: 'Enterprise AI Workflow Platform Deep Dive (16:9 Horizontal)',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      description: 'High-converting product walkthrough for landing page sections and sales demos. Blends high-resolution screen recordings with 3D isometric node diagrams, dynamic camera zooms on key features, and clean visual feature demonstrations.',
      techniques: [
        'Isometric 3D Architecture Visualizations',
        'Bezier Curve Smoothed Cursor Tracking',
        'Seamless Dark-to-Light Theme Morphing',
        'Multi-step User Flow Keyframing'
      ],
      pacingNote: 'Purposeful 3.2s cadence balancing technical comprehension with momentum.',
      retentionStrategy: 'Visual problem/solution contrast within the first 12 seconds; uses animated data charts to prove ROI.',
      metrics: {
        retentionRate: '71.5%',
        avgWatchTime: '2m 35s / 3m 15s',
        resolution: '4K UHD (60fps)'
      }
    }
  ],
  'documentary': [
    {
      id: 'doc-vertical',
      nicheId: 'documentary',
      nicheLabel: 'Documentary',
      title: 'Forgotten Silicon Valley Heist: Micro-Doc (9:16 Vertical)',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
      description: 'Vertical storytelling crafted for Shorts, Reels, and TikTok history and investigative creators. Combines analog CRT monitor scanlines, fast archival photo pans, paper rip textures, and dramatic pacing tension.',
      techniques: [
        '2.5D Parallax on Vintage Black & White Photographs',
        'Newspaper Headline Cutouts & Highlight Effects',
        'Film Grain & Analog Halation Overlays',
        'Rapid Archival Document Montages'
      ],
      pacingNote: 'Aggressive 1.1s cut pacing during question setup, relaxing to 2.4s for the historical reveal.',
      retentionStrategy: 'Loop-friendly ending where the concluding sentence seamlessly connects back into the opening thesis sentence.',
      metrics: {
        retentionRate: '86.7%',
        avgWatchTime: '48.2s / 55s',
        resolution: '1080x1920 (24fps)'
      }
    },
    {
      id: 'doc-horizontal',
      nicheId: 'documentary',
      nicheLabel: 'Documentary',
      title: 'The Secret Economy of Megacities: Long-Form Video Essay (16:9 Horizontal)',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'Premium YouTube documentary editing inspired by top investigative channels. Features multi-layered archival collages, custom 3D projection maps, contextual document callouts, and meticulous non-linear narrative structuring.',
      techniques: [
        'Multi-plane 3D Camera Projection & Depth of Field',
        'Custom Document Redaction & Highlighter Animations',
        'Cinematic 2.39:1 Aspect Ratio Framing',
        'Layered Archival Collages & Kinetic Timelines'
      ],
      pacingNote: 'Dynamic ebb-and-flow: fast-paced 1.8s evidence montages contrasting with reflective 5s scenic statements.',
      retentionStrategy: 'Open narrative loops introduced at the 4-minute and 8-minute marks prevent standard YouTube viewer drop-off spikes.',
      metrics: {
        retentionRate: '62.9%',
        avgWatchTime: '9m 12s / 14m 20s',
        resolution: '4K UHD (24fps)'
      }
    }
  ],
  'talking-head': [
    {
      id: 'th-vertical',
      nicheId: 'talking-head',
      nicheLabel: 'Talking Head',
      title: 'High-Authority Founder Insight Short (9:16 Vertical)',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      description: 'Maximum-retention short-form talking head editing for founders, coaches, and creators. Highlights include word-by-word dynamic kinetic captions with custom emphasis, subtle punch-ins at key words, relevant visual B-roll popups, and tight silence truncation.',
      techniques: [
        'Dynamic Word-by-Word Kinetic Subtitles',
        'Multi-Focal Punch-In Zooms (100% to 115%)',
        'Contextual Icon & B-Roll Popups',
        'Eye-Tracking Re-Centering & Headroom Correction'
      ],
      pacingNote: 'Continuous visual changes every 1.5 - 2.0 seconds ensuring the viewer never sees a static frame.',
      retentionStrategy: 'Bold opening statement coupled with instant on-screen icon animation holds 91% of viewers past the 3-second mark.',
      metrics: {
        retentionRate: '84.3%',
        avgWatchTime: '34.2s / 40s',
        resolution: '1080x1920 (60fps)'
      }
    },
    {
      id: 'th-horizontal',
      nicheId: 'talking-head',
      nicheLabel: 'Talking Head',
      title: 'Executive Studio Authority Production (16:9 Horizontal)',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
      description: 'Studio-grade horizontal talking head editing for podcasts, YouTube channels, and investor presentations. Multi-camera switching synced to speech pauses, intelligent silence trimming, balanced camera perspectives, and clean minimal lower thirds.',
      techniques: [
        '3-Camera Multi-Cam Seamless Angle Switching',
        'Automated Breath & Dead Air Pacing Polish',
        'Multi-angle Framing Alignment',
        'Clean Editorial Chapter Cards & Section Dividers'
      ],
      pacingNote: 'Natural conversational rhythm with camera switches occurring on speaker emphasis points every 3 to 6 seconds.',
      retentionStrategy: 'Supporting graphs, quotes, and motion graphics appear right when audience attention naturally wavers.',
      metrics: {
        retentionRate: '67.4%',
        avgWatchTime: '7m 45s / 11m 30s',
        resolution: '4K UHD (30fps)'
      }
    }
  ],
  'geo-layer-3': [
    {
      id: 'geo-vertical',
      nicheId: 'geo-layer-3',
      nicheLabel: 'Geo Layer 3',
      title: 'Geopolitical Maritime Conflict Route (9:16 Vertical)',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
      description: 'Specialized 3D cartographic animation built inside After Effects with GeoLayers 3 and Mapbox terrain. Features vertical high-angle globe rotations, glowing neon path lines, animated tactical radar markers, and satellite zoom-ins from orbit to street level.',
      techniques: [
        'GeoLayers 3 Real-World Digital Elevation Models (DEM)',
        'Glowing Brand Blue (#2596be) Flight Paths & Waypoints',
        'Dynamic Camera Depth of Field with Atmospheric Shading',
        'Topographic Contour Tracking'
      ],
      pacingNote: 'High-intensity 1.2s camera movement acceleration keeping eye moving along the strategic path.',
      retentionStrategy: 'Instant high-altitude zoom to an unexpected geographical bottleneck creates instant curiosity.',
      metrics: {
        retentionRate: '88.1%',
        avgWatchTime: '39.8s / 45s',
        resolution: '1080x1920 (60fps)'
      }
    },
    {
      id: 'geo-horizontal',
      nicheId: 'geo-layer-3',
      nicheLabel: 'Geo Layer 3',
      title: 'Global Trade Chokepoints & Supply Line Crisis (16:9 Horizontal)',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      fallbackPoster: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
      description: 'Broadcast-grade cinematic map visualizer for analytical YouTube channels and investigative features. Features 3D topographic relief shading, custom stylized boundaries, ship trajectory telemetry, territory heatmaps, and orbital satellite flyovers.',
      techniques: [
        'Custom Mapbox Vector Styling with Topographic Contours',
        'Complex Multi-Point Spline Camera Sweeps',
        'Country Boundary Extrusions & Choropleth Shading',
        'Realistic Night Lights & Atmospheric Sun Flare'
      ],
      pacingNote: 'Deliberate, high-gravity 4.2s orbital rotations allowing viewers to digest strategic geography.',
      retentionStrategy: 'Interactive split-screen comparing historical 1970 routes against present-day shipping paths drives high comment engagement and full video completion.',
      metrics: {
        retentionRate: '74.2%',
        avgWatchTime: '5m 50s / 7m 40s',
        resolution: '4K UHD (60fps)'
      }
    }
  ]
};
