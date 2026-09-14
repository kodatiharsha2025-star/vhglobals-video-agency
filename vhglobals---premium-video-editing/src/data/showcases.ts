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
    label: 'SaaS Explainer Videos / Product Launch Videos / Promo Videos',
    tagline: 'Slick UI animations, cursor dynamics & high-conversion product walkthroughs',
    iconName: 'Laptop'
  },
  {
    id: 'documentary',
    label: 'Documentary Storytelling',
    tagline: 'Cinematic archival pacing, paper textures, and 3D photo parallax',
    iconName: 'Film'
  },
  {
    id: 'talking-head',
    label: 'Talking Head',
    tagline: 'Viral engagement hooks, dynamic typography, and multi-cam punch-in pacing',
    iconName: 'Mic'
  },
  {
    id: 'geo-layer-3',
    label: 'Geo Layer 3 Map Animation',
    tagline: 'Custom 3D satellite topography, flight trajectories & dynamic map animations',
    iconName: 'Globe2'
  }
];

export const SHOWCASE_DATA: Record<NicheId, VideoShowcaseItem[]> = {
  'real-estate': [
    {
      id: 're-level-1-vertical',
      nicheId: 'real-estate',
      nicheLabel: 'Real Estate',
      title: 'Level 1 Real Estate Tour – Clean Architectural Walkthrough',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789312224/level_1_real_estate.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789312224/level_1_real_estate.jpg',
      description: 'Smooth vertical listing walkthrough featuring clean gimbal moves, natural ambient light balance, and fluid transitions between living and outdoor spaces.',
      techniques: [
        'Natural Lighting Grade',
        'Fluid Room Transitions',
        'Stabilized Gimbal Pacing'
      ],
      pacingNote: 'Steady, fluid movement highlighting natural light and open layout.',
      retentionStrategy: 'Engaging entry reveal guiding viewers seamlessly from room to room.',
      metrics: {
        retentionRate: '87.5%',
        avgWatchTime: '32s / 38s',
        resolution: '4K Vertical (60fps)'
      }
    },
    {
      id: 're-level-2-vertical',
      nicheId: 'real-estate',
      nicheLabel: 'Real Estate',
      title: 'Level 2 Real Estate Tour – Dynamic Speed Ramping & Rhythm',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789312220/level_2_real_estate.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789312220/level_2_real_estate.jpg',
      description: 'Cinematic vertical property tour engineered for social discovery. Combines rhythmic beat transitions, whip pans, and punchy feature callouts.',
      techniques: [
        'Speed Ramp Transitions',
        'Audio Beat Synchronization',
        'Social Hook Cadence'
      ],
      pacingNote: 'Upbeat rhythm synchronized to modern chill-hop beat.',
      retentionStrategy: 'Dynamic whip-pan hook within first 2 seconds to maximize viewer engagement.',
      metrics: {
        retentionRate: '89.2%',
        avgWatchTime: '35s / 40s',
        resolution: '1080p Vertical (60fps)'
      }
    },
    {
      id: 're-level-3-vertical',
      nicheId: 'real-estate',
      nicheLabel: 'Real Estate',
      title: 'Level 3 Real Estate Tour – Luxury Cinematic Flagship Cut',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789312252/level_3_real_estate.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789312252/level_3_real_estate.jpg',
      description: 'Flagship vertical luxury showcase with cinematic color science, detailed textural macro inserts, drone aerial integrations, and atmospheric sound design.',
      techniques: [
        'HDR Color Grading',
        'Drone Aerial Flow',
        'Spatial Sound Design'
      ],
      pacingNote: 'Elegant, cinematic pacing tailored for high-end luxury estates.',
      retentionStrategy: 'Dramatic aerial opening shifting into macro architectural details.',
      metrics: {
        retentionRate: '91.4%',
        avgWatchTime: '42s / 46s',
        resolution: '1080p Vertical (60fps)'
      }
    },
    {
      id: 're-level-2-horizontal',
      nicheId: 'real-estate',
      nicheLabel: 'Real Estate',
      title: 'Level 2 Real Estate Showcase – Modern Cinematic Walkthrough',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789312223/level_2_real_estate_horizontal.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789312223/level_2_real_estate_horizontal.jpg',
      description: 'Broad 16:9 cinematic tour highlighting architectural volume, custom finishes, ambient pacing, and landscape integration.',
      techniques: [
        'Architectural Pacing',
        'Horizon Stabilization',
        'MLS-Compliant Cut'
      ],
      pacingNote: 'Steady, ambient room cadence allowing viewers to appreciate room dimensions.',
      retentionStrategy: 'Expansive wide-angle master suite and open-concept living flow.',
      metrics: {
        retentionRate: '86.8%',
        avgWatchTime: '48s / 55s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 're-level-3-horizontal',
      nicheId: 'real-estate',
      nicheLabel: 'Real Estate',
      title: 'Level 3 Real Estate Showcase – High-End Luxury Estate Tour',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789311481/level_3_real_estate_horizontal.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789311481/level_3_real_estate_horizontal.jpg',
      description: 'Ultra-premium wide-angle property film combining drone speed ramping, twilight lighting transitions, and master-suite showcases.',
      techniques: [
        'Golden Hour Aerials',
        'Seamless Parallax Moves',
        'Multi-Floor Pacing'
      ],
      pacingNote: 'Cinematic glide with speed-ramped transitions between indoor and outdoor living.',
      retentionStrategy: 'Stunning opening hero shot followed by intuitive floorplan walkthrough.',
      metrics: {
        retentionRate: '88.9%',
        avgWatchTime: '56s / 65s',
        resolution: '720p HD (60fps)'
      }
    }
  ],
  'saas-explainer': [
    {
      id: 'saas-cludio-crm',
      nicheId: 'saas-explainer',
      nicheLabel: 'SaaS Explainer Videos / Product launch videos / Promo videos',
      title: 'Cludio CRM – Client Workflow, Invoicing & Project Hub',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789310857/cludio_crm.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789310857/cludio_crm.jpg',
      description: 'Engaging workflow explainer for Cludio CRM. Turns spreadsheet and email chaos into an organized client pipeline, instant invoice generator with payment links, and live revenue analytics.',
      techniques: [
        'Interactive Invoice Builder',
        'Spreadsheet to Pipeline Transition',
        'Lead Funnel Revenue Analytics'
      ],
      pacingNote: 'Problem hook transitioning into crisp workflow walkthroughs.',
      retentionStrategy: 'Visualizes client pipeline chaos before unveiling the clean one-click resolution.',
      metrics: {
        retentionRate: '85.4%',
        avgWatchTime: '54s / 62s',
        resolution: '1080p HD'
      }
    },
    {
      id: 'saas-hubspot-best',
      nicheId: 'saas-explainer',
      nicheLabel: 'SaaS Explainer Videos / Product launch videos / Promo videos',
      title: 'HubSpot – Connected CRM, Contact Insights & Sales Engine',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789310848/hubspot_best.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789310848/hubspot_best.jpg',
      description: 'High-octane SaaS promotional video for HubSpot. Highlights the friction of disconnected tools and presents HubSpot as the unified hub for contact insights, deals, emails, and sales.',
      techniques: [
        'App Icon Floating Graphics',
        'Iconic Brand Sunburst Reveal',
        'Contact Activity Dashboard'
      ],
      pacingNote: 'Upbeat energetic visual beat pacing synchronized to music.',
      retentionStrategy: 'Rapid app-sprawl animation connects instantly with operators and sales teams.',
      metrics: {
        retentionRate: '83.7%',
        avgWatchTime: '34s / 40s',
        resolution: '1080p HD'
      }
    },
    {
      id: 'saas-pitch',
      nicheId: 'saas-explainer',
      nicheLabel: 'SaaS Explainer Videos / Product launch videos / Promo videos',
      title: 'Pitch – Next-Gen Career & Talent Network',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789310840/pitch.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789310840/pitch.jpg',
      description: 'Dynamic product launch film for Pitch. Targets candidate and recruiter pain points before unveiling next-gen video profiles, one-click candidate screening, and global networking.',
      techniques: [
        'Split Screen Problem Framing',
        'Floating 3D Device UI Mockups',
        'Candidate Status Filter Tracking'
      ],
      pacingNote: 'Rhythmic cuts during the opening problem montage into smooth reveals.',
      retentionStrategy: 'Empathetic hook sequence captures target job seekers and hiring managers immediately.',
      metrics: {
        retentionRate: '81.9%',
        avgWatchTime: '52s / 60s',
        resolution: '1080p HD'
      }
    },
    {
      id: 'saas-papers',
      nicheId: 'saas-explainer',
      nicheLabel: 'SaaS Explainer Videos / Product launch videos / Promo videos',
      title: '+Papers – Company Creation & Accounting Automation',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789310832/papers.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789310832/papers.jpg',
      description: 'High-energy SaaS promotional video featuring +Papers. Demonstrates company creation, automated compliance, and instantaneous drag-and-drop invoice and receipt uploads with automated status tracking.',
      techniques: [
        'Instant OCR Document Processing',
        'Canary Accent Typography',
        'Fluid Drag-and-Drop Pipeline'
      ],
      pacingNote: 'High-tempo problem setup shifting into clean UI interactions.',
      retentionStrategy: 'Zero-friction value hook followed immediately by live drag-and-drop proof.',
      metrics: {
        retentionRate: '84.6%',
        avgWatchTime: '38s / 45s',
        resolution: '1080p HD'
      }
    },
    {
      id: 'saas-swisscom',
      nicheId: 'saas-explainer',
      nicheLabel: 'SaaS Explainer Videos / Product launch videos / Promo videos',
      title: 'Swisscom Sign – Qualified Electronic Signature Platform',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789310825/swisscom.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789310825/swisscom.jpg',
      description: 'Enterprise B2B SaaS explainer for Swisscom Sign. Details 100% digital, legally valid QES electronic signatures, instant cross-device approval via mobile QR code, and corporate security.',
      techniques: [
        'Dual-Screen Desktop & Mobile Approval',
        'Precision Document Signature Keyframing',
        'Corporate Compliance Trust Badges'
      ],
      pacingNote: 'Authoritative cadence emphasizing enterprise reliability and digital security.',
      retentionStrategy: 'Direct contrast between tedious paper paperwork and instant mobile verification.',
      metrics: {
        retentionRate: '79.3%',
        avgWatchTime: '42s / 50s',
        resolution: '1080p HD'
      }
    },
    {
      id: 'saas-langease',
      nicheId: 'saas-explainer',
      nicheLabel: 'SaaS Explainer Videos / Product launch videos / Promo videos',
      title: 'LangEase – AI Multi-Language Video Localization',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789310822/Lang_Ease.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789310822/Lang_Ease.jpg',
      description: 'Conversion-engineered product demo for LangEase. Demonstrates under-30-second multi-language translation, automated subtitle generation, and synchronized AI voiceovers for global creators.',
      techniques: [
        'Multi-Language Selector Transitions',
        'Waveform & Subtitle Synchronization',
        'Localized Video Output Preview'
      ],
      pacingNote: 'Fast 30-second cadence with 1.2s rapid UI step transitions.',
      retentionStrategy: 'Clear value proposition followed by live timed demonstration.',
      metrics: {
        retentionRate: '86.2%',
        avgWatchTime: '28.4s / 30s',
        resolution: '1080p HD'
      }
    }
  ],
  'documentary': [
    {
      id: 'doc-goan-inquisition',
      nicheId: 'documentary',
      nicheLabel: 'Documentary Storytelling',
      title: 'The Goan Inquisition – Historical Investigative Documentary',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789317171/Copy_of_Goan_Inquisition.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789317171/Copy_of_Goan_Inquisition.jpg',
      description: 'Deep historical narrative exploring the records of the Goan Inquisition. Blends 2.5D archival painting parallax, textured manuscript animations, and atmospheric cinematic sound design.',
      techniques: [
        'Archival Canvas Parallax',
        'Textured Manuscript Motion',
        'Cinematic Tension Sound Design'
      ],
      pacingNote: 'Contemplative narrative cadence shifting into dramatic historical reveals.',
      retentionStrategy: 'High-suspense opening question backed by authentic archival document zooms.',
      metrics: {
        retentionRate: '88.4%',
        avgWatchTime: '48s / 58s',
        resolution: '1440p QHD'
      }
    },
    {
      id: 'doc-poland-history',
      nicheId: 'documentary',
      nicheLabel: 'Documentary Storytelling',
      title: 'Poland: History & Survival – Geopolitical Documentary',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789317177/Copy_of_Poland_documentary.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789317177/Copy_of_Poland_documentary.jpg',
      description: 'Fast-paced historical analysis of Poland\'s geopolitical struggle and territorial evolution through dynamic satellite map routes, vintage war reels, and animated border shifts.',
      techniques: [
        'Dynamic Territory Cartography',
        'Vintage Film Grain & Textures',
        'Dynamic Geographic Pacing'
      ],
      pacingNote: 'Urgent chronological tempo synchronized with dramatic historical score.',
      retentionStrategy: 'Interactive map migration arrows and border redraws preserve intense viewer engagement.',
      metrics: {
        retentionRate: '90.1%',
        avgWatchTime: '52s / 60s',
        resolution: '1080p HD'
      }
    },
    {
      id: 'doc-downfall-brazil',
      nicheId: 'documentary',
      nicheLabel: 'Documentary Storytelling',
      title: 'The Downfall of Brazil – Economic & Political Video Essay',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789317178/Copy_of_The_Downfall_of_Brazil_Documentary_compressed_1.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789317178/Copy_of_The_Downfall_of_Brazil_Documentary_compressed_1.jpg',
      description: 'Comprehensive video essay analyzing modern economic boom-and-bust cycles. Features newspaper headline popouts, statistical motion graphs, and investigative photo montages.',
      techniques: [
        'Newspaper Headline Popouts',
        'Macro Economic Motion Charts',
        'Investigative Photo Montages'
      ],
      pacingNote: 'Rhythmic journalistic storytelling maintaining continuous cognitive momentum.',
      retentionStrategy: 'Bold counter-intuitive economic premise followed by rapid verified data reveals.',
      metrics: {
        retentionRate: '86.9%',
        avgWatchTime: '45s / 54s',
        resolution: '1440p QHD'
      }
    },
    {
      id: 'doc-crime-thriller-story',
      nicheId: 'documentary',
      nicheLabel: 'Documentary Storytelling',
      title: 'Shadows in the Mist – Crime Thriller Documentary Story',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789317164/Copy_of_crime_thriller_documentary_-_story.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789317164/Copy_of_crime_thriller_documentary_-_story.jpg',
      description: 'True-crime investigative thriller editing featuring dark cinematic color grades, tape-recorder audio waveform FX, typewriter text reveals, and atmospheric crime scene pacing.',
      techniques: [
        'Crime Scene 3D Camera Glides',
        'Typewriter Evidence Reveals',
        'Distorted Audio Tape Waveforms'
      ],
      pacingNote: 'Tense, suspense-building rhythmic cuts synchronized to heartbeat bass pulses.',
      retentionStrategy: 'Cliffhanger question setup with forensic visual evidence reveals.',
      metrics: {
        retentionRate: '92.3%',
        avgWatchTime: '55s / 62s',
        resolution: '1080p HD'
      }
    },
    {
      id: 'doc-case-file-investigation',
      nicheId: 'documentary',
      nicheLabel: 'Documentary Storytelling',
      title: 'The Investigation – Forensic Case File Crime Documentary',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://res.cloudinary.com/ht2bpccb/video/upload/v1789317150/Crime_Documentary.mp4',
      fallbackPoster: 'https://res.cloudinary.com/ht2bpccb/video/upload/so_1/v1789317150/Crime_Documentary.jpg',
      description: 'Gripping forensic reconstruction utilizing corkboard red-string connection charts, redacted document highlight animations, and dramatic suspect dossier transitions.',
      techniques: [
        'Corkboard Red-String Graphs',
        'Redacted Document Highlights',
        'Dramatic Dossier Transitions'
      ],
      pacingNote: 'Methodical mystery-solving cadence with impactful milestone reveals.',
      retentionStrategy: 'Step-by-step evidence unmasking keeping the viewer guessing until the final verdict.',
      metrics: {
        retentionRate: '89.7%',
        avgWatchTime: '46s / 52s',
        resolution: '1080p HD'
      }
    }
  ],
  'talking-head': [
    {
      id: 'th-3d-motion-graphics',
      nicheId: 'talking-head',
      nicheLabel: 'Talking Head',
      title: 'Dynamic Graphics & Visual Effects – Talking Head Showcase',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/Z5ncTn87A-U?feature=share',
      fallbackPoster: 'https://img.youtube.com/vi/Z5ncTn87A-U/maxresdefault.jpg',
      description: 'Dynamic vertical talking head edit featuring custom floating assets, animated text typography, punch-in camera zooms, and sound-designed beat synchronization.',
      techniques: [
        '3D Asset Tracking',
        'Dynamic Punch-In Framing',
        'Dynamic Text Callouts'
      ],
      pacingNote: 'Fast-paced rhythmic cadence designed to maximize viewer engagement and watch time.',
      retentionStrategy: 'Immediate visual hook with seamless 3D element integration within the first 2 seconds.',
      metrics: {
        retentionRate: '94.2%',
        avgWatchTime: '44s / 48s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 'th-brand-edit',
      nicheId: 'talking-head',
      nicheLabel: 'Talking Head',
      title: 'Brand Edit – Personal Branding & Visual Authority',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/mG7l9pYFDGg?feature=share',
      fallbackPoster: 'https://img.youtube.com/vi/mG7l9pYFDGg/maxresdefault.jpg',
      description: 'Sleek personal branding edit built for thought leaders and creators. Incorporates crisp typography, smooth motion transitions, branded overlays, and subtle sound effects.',
      techniques: [
        'Signature Brand Color Grading',
        'Dynamic Word Highlighting',
        'Micro-Transitions & Whooshes'
      ],
      pacingNote: 'Authoritative yet dynamic rhythm keeping the speaker clear and commanding.',
      retentionStrategy: 'Bold title hook followed by rapid B-roll cut-ins that eliminate talking head monotony.',
      metrics: {
        retentionRate: '91.8%',
        avgWatchTime: '42s / 46s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 'th-concept-motion',
      nicheId: 'talking-head',
      nicheLabel: 'Talking Head',
      title: 'Motion Graphics – Concept Visualization & Dynamic Pacing',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/uN-NoJWKU6g?feature=share',
      fallbackPoster: 'https://img.youtube.com/vi/uN-NoJWKU6g/maxresdefault.jpg',
      description: 'Concept visualization talking head video translating abstract points into engaging on-screen graphics, vector iconography, and split-second punch-in cuts.',
      techniques: [
        'Abstract Concept Iconography',
        'Sound Effect Layering',
        'Speed Ramped Visuals'
      ],
      pacingNote: 'Energetic cadence synchronizing graphic animations precisely to spoken emphasis words.',
      retentionStrategy: 'Visual explanation of complex topics preventing drop-offs through continuous motion.',
      metrics: {
        retentionRate: '93.5%',
        avgWatchTime: '40s / 44s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 'th-creator-engagement',
      nicheId: 'talking-head',
      nicheLabel: 'Talking Head',
      title: 'Talking Head – Creator Engagement & Visual Flow',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/WvyDSDKS6jY?feature=share',
      fallbackPoster: 'https://img.youtube.com/vi/WvyDSDKS6jY/maxresdefault.jpg',
      description: 'Engaging creator showcase blending seamless camera reframing, animated emoji reactions, animated captions, and modern sound design to build viral momentum.',
      techniques: [
        'Multi-Scale Camera Punch-Ins',
        'Animated Caption Engine',
        'Auditory Pacing Cues'
      ],
      pacingNote: 'Rapid 1.5-second visual resets maintaining active cognitive engagement throughout.',
      retentionStrategy: 'Curiosity-driven hook coupled with persistent visual cues to eliminate scroll-away.',
      metrics: {
        retentionRate: '92.7%',
        avgWatchTime: '38s / 42s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 'th-karlos-typography',
      nicheId: 'talking-head',
      nicheLabel: 'Talking Head',
      title: 'Karlos – Dynamic Typography & High-Energy Talking Head',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/_rE8CLHTr70?feature=share',
      fallbackPoster: 'https://img.youtube.com/vi/_rE8CLHTr70/maxresdefault.jpg',
      description: 'Dynamic vertical talking head video featuring high-impact animated typography, bold color highlights, speed-ramped cutaways, and punchy audio beat accents.',
      techniques: [
        'Dynamic Typography Popouts',
        'Speed-Ramped Cutaways',
        'Impact Sound Design'
      ],
      pacingNote: 'High-energy visual pacing synchronized to spoken emphasis and sound hits.',
      retentionStrategy: 'Rapid text animations and camera punch-ins maintain continuous momentum.',
      metrics: {
        retentionRate: '94.8%',
        avgWatchTime: '45s / 49s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 'th-cinematic-creator',
      nicheId: 'talking-head',
      nicheLabel: 'Talking Head',
      title: 'Talking Head – Cinematic Visuals & Narrative Flow',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/Sqk9GRC-S5k?feature=share',
      fallbackPoster: 'https://i.ytimg.com/vi/Sqk9GRC-S5k/frame0.jpg',
      description: 'Polished talking head edit built with cinematic color grading, smooth micro-zooms, crisp on-screen highlights, and layered atmospheric sound design.',
      techniques: [
        'Cinematic Color Grading',
        'Smooth Micro-Zooms',
        'Layered Audio Design'
      ],
      pacingNote: 'Measured storytelling tempo with expressive visual reinforcements.',
      retentionStrategy: 'Engaging visual hook followed by clear visual accents on key discussion takeaways.',
      metrics: {
        retentionRate: '92.1%',
        avgWatchTime: '41s / 45s',
        resolution: '1080p HD (60fps)'
      }
    }
  ],
  'geo-layer-3': [
    {
      id: 'geo-refuses-normal-time',
      nicheId: 'geo-layer-3',
      nicheLabel: 'Geo Layer 3 Map Animation',
      title: 'This Country Refuses to Use Normal Time – Cartographic Timezone Analysis',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/memwIwPxMDY?si=V6Gz7shKAfAiRCEp',
      fallbackPoster: 'https://img.youtube.com/vi/memwIwPxMDY/maxresdefault.jpg',
      description: 'Engaging vertical 3D map animation exploring unusual geopolitical timezone anomalies and territorial boundaries with dynamic satellite cartography and country highlight shaders.',
      techniques: [
        'Timezone Boundary Projection',
        'Country Highlight Shaders',
        '3D Globe Rotation Cadence'
      ],
      pacingNote: 'High-velocity visual tempo with rapid geographic jump-cuts.',
      retentionStrategy: 'Surprising timezone paradox hooked to instantaneous 3D topographic zoom.',
      metrics: {
        retentionRate: '92.4%',
        avgWatchTime: '46s / 52s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 'geo-river-change-course',
      nicheId: 'geo-layer-3',
      nicheLabel: 'Geo Layer 3 Map Animation',
      title: 'The River America Won’t Let Change Course – Geological Engineering',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/bxwoBuaBg04?si=AI2CzauyndjbUM1t',
      fallbackPoster: 'https://img.youtube.com/vi/bxwoBuaBg04/maxresdefault.jpg',
      description: 'Visual breakdown of the Old River Control Structure preventing the Mississippi River from diverting into the Atchafalaya basin. Utilizes realistic satellite water displacement and 3D terrain elevation.',
      techniques: [
        'Hydrological Vector Routing',
        '3D Satellite Elevation',
        'Satellite Shaded Relief'
      ],
      pacingNote: 'Suspenseful environmental storytelling synchronized to dynamic map reveals.',
      retentionStrategy: 'High-stakes river divergence scenario revealed through animated water flow vectors.',
      metrics: {
        retentionRate: '91.8%',
        avgWatchTime: '48s / 54s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 'geo-ocean-than-land',
      nicheId: 'geo-layer-3',
      nicheLabel: 'Geo Layer 3 Map Animation',
      title: '5 Countries That Own More Ocean Than Land – Maritime EEZ Boundaries',
      formatType: 'Vertical (9:16)',
      aspectRatio: '9:16',
      videoSrc: 'https://youtube.com/shorts/VTuP2A9p_2w?si=IPr8n6tedSOGMTdQ',
      fallbackPoster: 'https://img.youtube.com/vi/VTuP2A9p_2w/maxresdefault.jpg',
      description: '3D planetary globe animation detailing Exclusive Economic Zones (EEZ). Highlights island nations with vast oceanic footprints using glowing boundary shaders and dynamic nautical cartography.',
      techniques: [
        '3D Globe Spatial Rotation',
        'EEZ Maritime Boundary Shaders',
        'Dynamic Depth Elevation'
      ],
      pacingNote: 'Fluid planetary spin with country-by-country boundary highlights.',
      retentionStrategy: 'Unexpected geopolitical paradox hooked to visual territorial expansion.',
      metrics: {
        retentionRate: '90.5%',
        avgWatchTime: '42s / 48s',
        resolution: '1080p HD (60fps)'
      }
    },
    {
      id: 'geo-canada-geography-problem',
      nicheId: 'geo-layer-3',
      nicheLabel: 'Geo Layer 3 Map Animation',
      title: 'Canada Has a Geography Problem Nobody Talks About – Geopolitical Breakdown',
      formatType: 'Horizontal (16:9)',
      aspectRatio: '16:9',
      videoSrc: 'https://youtu.be/NHiJ4X8rwkU?si=I7Da2UuXc2afmyUM',
      fallbackPoster: 'https://img.youtube.com/vi/NHiJ4X8rwkU/maxresdefault.jpg',
      description: 'Comprehensive 16:9 documentary map analysis exploring the Canadian Shield, permafrost corridors, and southern border population density clustering with high-precision 3D elevation models.',
      techniques: [
        'Canadian Shield 3D Displacement',
        'Population Heatmap Shading',
        'Cinematic Topographic Glide'
      ],
      pacingNote: 'Analytical documentary pacing with layered thematic terrain transitions.',
      retentionStrategy: 'Engaging geopolitical puzzle grounded in satellite topographic visualization.',
      metrics: {
        retentionRate: '88.7%',
        avgWatchTime: '62s / 75s',
        resolution: '1080p HD (60fps)'
      }
    }
  ]
};
