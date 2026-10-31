export type NicheId = 'real-estate' | 'saas-explainer' | 'documentary' | 'talking-head' | 'geo-layer-3';

export type AspectRatio = '9:16' | '16:9';

export interface VideoShowcaseItem {
  id: string;
  nicheId: NicheId;
  nicheLabel: string;
  title: string;
  formatType: 'Vertical (9:16)' | 'Horizontal (16:9)';
  aspectRatio: AspectRatio;
  videoSrc: string;
  fallbackPoster?: string;
  description: string;
  techniques: string[];
  pacingNote: string;
  retentionStrategy: string;
  metrics: {
    retentionRate: string;
    avgWatchTime: string;
    resolution: string;
  };
}

export interface ServiceOffering {
  id: NicheId;
  title: string;
  tagline: string;
  targetAudience: string;
  formats: string[];
  featuresTitle?: string;
  features: string[];
  iconName: string;
}

export interface WorkflowCard {
  id: number;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  badge: string;
}

export interface BookingModalState {
  isOpen: boolean;
  nicheId?: NicheId;
  sourceContext?: string;
}
