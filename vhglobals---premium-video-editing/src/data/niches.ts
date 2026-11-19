import { NicheId } from '../types';

export interface NichePage {
  /** URL path segment. Changing a slug after indexing costs rankings, so treat these as fixed. */
  slug: string;
  /** Keys into SERVICES_LIST and SHOWCASE_DATA. */
  nicheId: NicheId;
  /** Short label used in navigation and cross-links. */
  navLabel: string;
  /** <title>. Keyword first, brand last: the keyword is what gets matched and read in results. */
  title: string;
  metaDescription: string;
  h1: string;
  /**
   * The extractable opening. Written as a complete standalone statement that
   * names VHGLOBALS, because answer engines lift the first self-contained
   * sentence they find and "we" carries no attribution once separated from
   * the page. Kept to roughly 40-60 words.
   */
  intro: string;
  /** Second paragraph: who commissions this work. Adds the audience terms buyers search with. */
  audienceNote: string;
  /** FAQ ids from src/data/faqs.ts, most relevant to this niche first. */
  faqIds: string[];
}

export const NICHE_PAGES: NichePage[] = [
  {
    slug: 'real-estate-video-editing',
    nicheId: 'real-estate',
    navLabel: 'Real estate',
    title: 'Real Estate Video Editing Service | VHGLOBALS',
    metaDescription:
      'Real estate video editing with a dedicated editor. Luxury walkthroughs, drone speed ramping, twilight enhancement and MLS vertical cutdowns, delivered in 24 to 48 hours.',
    h1: 'Real estate video editing',
    intro:
      'VHGLOBALS edits real estate video on a monthly retainer, delivering luxury property walkthroughs, drone sequences and MLS-ready cutdowns with short-form drafts in 24 to 48 hours. One dedicated editor handles every listing, so pacing and colour stay consistent across a whole portfolio rather than changing with whoever was free that week.',
    audienceNote:
      'Commissioned by real estate media production companies, luxury brokerages and high-volume agents who publish listings on a steady cadence and need both a 16:9 master for MLS and vertical cuts for social from the same shoot.',
    faqIds: [
      'real-estate-mls',
      'turnaround-time',
      'formats-and-aspect-ratios',
      'same-editor',
      'how-much-does-it-cost',
    ],
  },
  {
    slug: 'saas-explainer-videos',
    nicheId: 'saas-explainer',
    navLabel: 'SaaS explainers',
    title: 'SaaS Explainer & Product Launch Video Editing | VHGLOBALS',
    metaDescription:
      'SaaS explainer and product launch video editing. Cursor tracking, 3D device mockups, UI screen-recording stabilisation and ROI typography, on a monthly retainer.',
    h1: 'SaaS explainer and product launch video editing',
    intro:
      'VHGLOBALS edits SaaS explainer and product launch video, turning raw screen recordings into walkthroughs that hold attention: fluid cursor tracking with click micro-interactions, 3D isometric device mockups, and typography that puts product ROI on screen. Work runs on a monthly retainer with a dedicated editor, and short-form drafts arrive in 24 to 48 hours.',
    audienceNote:
      'Commissioned by B2B tech founders, product marketers and venture-backed SaaS startups who need website hero walkthroughs, launch films and promo cuts without hiring an in-house motion designer.',
    faqIds: [
      'what-is-a-retainer',
      'turnaround-time',
      'match-existing-style',
      'how-revisions-work',
      'how-much-does-it-cost',
    ],
  },
  {
    slug: 'documentary-video-editing',
    nicheId: 'documentary',
    navLabel: 'Documentary',
    title: 'Documentary Video Editing for YouTube | VHGLOBALS',
    metaDescription:
      'Documentary video editing for YouTube. Archival photo parallax, paper and film overlays, document redaction animations and pacing engineered for average watch time.',
    h1: 'Documentary video editing for YouTube',
    intro:
      'VHGLOBALS edits long-form documentary video for YouTube, building sequences from archival material with 2.5D camera parallax on stills, paper rip and vintage film overlays, and multi-source document redaction animations. Pacing is engineered for average watch time rather than cut to a fixed length, with immersive sound design layered underneath.',
    audienceNote:
      'Commissioned by investigative YouTubers, narrative creators and media channels producing long-form video essays, micro-documentaries and trailer cutdowns.',
    faqIds: [
      'long-form-documentary',
      'turnaround-time',
      'same-editor',
      'how-to-get-started',
      'how-much-does-it-cost',
    ],
  },
  {
    slug: 'talking-head-video-editing',
    nicheId: 'talking-head',
    navLabel: 'Talking head',
    title: 'Talking Head & Short-Form Video Editing | VHGLOBALS',
    metaDescription:
      'Talking head and short-form video editing. Word-by-word animated subtitles, multi-focal punch-ins, pattern-interrupt B-roll and dead-air truncation, in 24 to 48 hours.',
    h1: 'Talking head and short-form video editing',
    intro:
      'VHGLOBALS edits talking head video for short-form and long-form publishing, with word-by-word animated subtitle typography, multi-focal punch-in zooms on key words, pattern-interrupt B-roll and dead-air truncation that tightens conversational rhythm. Short-form drafts are delivered in 24 to 48 hours on a monthly retainer with one dedicated editor.',
    audienceNote:
      'Commissioned by executives, personal brand creators, coaches and podcast hosts publishing Shorts, Reels and TikToks alongside studio podcast episodes and keynote highlight reels.',
    faqIds: [
      'formats-and-aspect-ratios',
      'turnaround-time',
      'scaling-volume',
      'same-editor',
      'how-much-does-it-cost',
    ],
  },
  {
    slug: 'geolayers-3-map-animation',
    nicheId: 'geo-layer-3',
    navLabel: 'GeoLayers 3 maps',
    title: 'GeoLayers 3 Map Animation Service | VHGLOBALS',
    metaDescription:
      'GeoLayers 3 map animation in After Effects. Real DEM terrain modelling, orbital satellite rotations, country boundary extrusions and animated flight paths.',
    h1: 'GeoLayers 3 map animation',
    intro:
      'VHGLOBALS builds animated maps in After Effects with the GeoLayers 3 plugin, using real-world DEM terrain elevation data rather than generic stock animation. That covers orbital satellite rotations and altitude plunges, country boundary extrusions, point-to-point flight paths with curved arcs, and location pin drops with glowing radar rings.',
    audienceNote:
      'Commissioned by geopolitical analysis channels, travel documentarians and news visualisers who need map sequences that match real geography, and who often need custom After Effects assets they can reuse across a series.',
    faqIds: [
      'what-is-geolayers-3',
      'how-to-get-started',
      'turnaround-time',
      'match-existing-style',
      'how-much-does-it-cost',
    ],
  },
];

export const NICHE_BY_SLUG = Object.fromEntries(
  NICHE_PAGES.map((p) => [p.slug, p])
) as Record<string, NichePage>;

export const SLUG_BY_NICHE_ID = Object.fromEntries(
  NICHE_PAGES.map((p) => [p.nicheId, p.slug])
) as Record<NicheId, string>;
