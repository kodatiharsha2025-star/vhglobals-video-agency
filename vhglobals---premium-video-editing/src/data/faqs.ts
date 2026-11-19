export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * FAQ content, written for answer extraction.
 *
 * Format rules, applied to every entry:
 *  - The question uses the phrasing a buyer would actually type.
 *  - The first sentence of the answer is a complete, standalone statement that
 *    makes sense when lifted out of the page on its own. It names VHGLOBALS
 *    rather than saying "we", because "we" means nothing once a sentence is
 *    separated from the site it came from.
 *  - Detail follows the direct answer, never precedes it.
 *
 * These strings are mirrored into the FAQPage JSON-LD in index.html. Structured
 * data must match visible page text, so if you edit an answer here, update the
 * corresponding entry in index.html in the same commit.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-a-retainer',
    question: 'What is a video editing retainer, and how is it different from paying per video?',
    answer:
      'A video editing retainer is a monthly agreement in which a dedicated editor is reserved for your content calendar, rather than you commissioning each video separately. VHGLOBALS assigns one senior editor plus a quality checker who stay on your account, learn your pacing and visual identity, and work to an agreed monthly volume. Per-video pricing means re-briefing a new freelancer each time and re-explaining your style; a retainer means the person editing your footage already knows it. Monthly volume is adjustable, and unused volume rolls over.',
  },
  {
    id: 'how-much-does-it-cost',
    question: 'How much does a video editing retainer cost?',
    answer:
      'VHGLOBALS quotes retainers per engagement rather than from a fixed price list, because cost depends on monthly volume, the formats you need, and how much motion graphics work each video carries. A channel publishing four short-form edits a month and a brokerage publishing twenty listing walkthroughs are different pieces of work. Pricing is scoped on a 15-minute call where monthly volume, turnaround expectations and style requirements are mapped, and you receive a fixed monthly figure before any work begins. There are no per-revision charges inside an agreed retainer.',
  },
  {
    id: 'turnaround-time',
    question: 'What turnaround time can I expect for video editing?',
    answer:
      'VHGLOBALS delivers short-form video drafts within 24 to 48 hours of receiving footage, with a quality-control review completed before delivery. Long-form edits such as YouTube documentaries and multi-camera podcast episodes take longer and are scheduled against your publishing calendar. Priority short-form turnaround inside that 24 to 48 hour window is guaranteed on retainer. Batch releases and unusually large volumes are planned ahead so turnaround holds.',
  },
  {
    id: 'same-editor',
    question: 'Do I get the same video editor every time?',
    answer:
      'Yes. VHGLOBALS assigns one dedicated lead editor to your account who works on every video, rather than routing your footage to whoever is free. That editor adapts to your style guide and presets, and you work with them directly in a shared Slack or Discord channel alongside the creative director. A backup editor is kept on standby for your account so delivery continues uninterrupted if your lead editor is unavailable.',
  },
  {
    id: 'what-is-geolayers-3',
    question: 'What is GeoLayers 3 and what is it used for?',
    answer:
      'GeoLayers 3 is an After Effects plugin used to build animated maps from real-world geographic data, and it is the tool behind the satellite zooms, glowing flight paths and country outlines common in geopolitics and travel videos. VHGLOBALS uses it for real-world DEM terrain elevation modelling, orbital satellite rotations and altitude plunges, country boundary extrusions, point-to-point flight path animations with curved arcs, and location pin drops with radar rings. It is most often commissioned by geopolitical analysis channels, travel documentarians and news visualisers who need a map sequence that matches real geography rather than a generic stock animation.',
  },
  {
    id: 'formats-and-aspect-ratios',
    question: 'What video formats and aspect ratios do you deliver?',
    answer:
      'VHGLOBALS delivers both vertical 9:16 and horizontal 16:9 masters, and reframes each cut intentionally for the platform rather than cropping one export to fit everything. That covers vertical reels, TikToks and Shorts, 16:9 YouTube masters and long-form cutdowns, 4K property tours, MLS-optimised vertical cutdowns, studio podcast edits and keynote highlight reels. Multi-platform aspect ratio alignment and framing validation are part of the quality-control checklist on every delivery.',
  },
  {
    id: 'how-revisions-work',
    question: 'How do revisions work?',
    answer:
      'Revisions are handled inside your shared Slack or Discord channel with the editor who made the cut, so feedback does not pass through a ticket queue or an account manager. Each video is reviewed against a 27-point quality checklist before it reaches you, which is intended to remove the most common revision requests before you see the draft. Revision rounds are tracked and turned around rapidly, and are included in an agreed retainer rather than billed separately.',
  },
  {
    id: 'how-to-get-started',
    question: 'What do you need from me to get started?',
    answer:
      'Getting started with VHGLOBALS takes a 15-minute call to map your monthly volume, style references and turnaround needs, after which you are matched with a lead editor. From there you need three things: your raw footage, any style reference such as an existing video you like, a LUT or a brand style guide, and a shared Slack or Discord channel for day-to-day handoff. The editor adapts to your presets and pacing from the reference material rather than asking you to write a detailed brief for every video.',
  },
  {
    id: 'real-estate-mls',
    question: 'Do you edit real estate listing videos for MLS and social media?',
    answer:
      'Yes. VHGLOBALS edits property video for both MLS listing use and social distribution, delivering a 16:9 master alongside vertical cutdowns from the same shoot. Real estate work covers luxury walkthroughs with seamless doorway match-cuts, drone footage speed ramping and stabilisation, window pull and HDR balancing for bright exteriors, twilight atmospheric enhancement, 3D address and property feature callouts, floor plan motion graphics, and agent intro and outro branding. Clients are typically media production companies, luxury brokerages and high-volume agents.',
  },
  {
    id: 'match-existing-style',
    question: 'Can you match my existing editing style?',
    answer:
      'Yes. VHGLOBALS works from your reference material, so send an existing video, a LUT or a style guide and your editor adapts their presets to match your colour palette, pacing and transition language. Style guide and preset adaptation is part of onboarding rather than an add-on, and because the same editor stays on your account, consistency improves over the first few deliveries rather than resetting each time.',
  },
  {
    id: 'long-form-documentary',
    question: 'Do you edit long-form YouTube documentaries?',
    answer:
      'Yes, documentary editing is one of the five disciplines VHGLOBALS specialises in, covering long-form YouTube videos, micro-documentaries and trailer cutdowns. The work includes 2.5D camera parallax on archival photography, paper rip and vintage film overlays, multi-source document redaction and highlight animations, cinematic archival grading with grain, immersive sound design with ambient tension layers, and investigative lower-third styling. Pacing is engineered for average watch time rather than cut to a fixed length.',
  },
  {
    id: 'scaling-volume',
    question: 'Can you handle a sudden increase in video volume?',
    answer:
      'Yes. VHGLOBALS sizes teams elastically, so a batch release or a sustained increase in publishing cadence is absorbed by adding editors to your account rather than by extending turnaround. Monthly quotas are adjustable and unused volume rolls over, so a quiet month is not wasted and a heavy month does not require renegotiating the retainer. A backup editor on standby covers absence, and large batches are scheduled in advance so the 24 to 48 hour short-form window still holds.',
  },
];
