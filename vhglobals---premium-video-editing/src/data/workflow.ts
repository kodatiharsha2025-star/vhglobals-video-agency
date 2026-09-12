import { WorkflowCard } from '../types';

export const WORKFLOW_STEPS: WorkflowCard[] = [
  {
    id: 1,
    title: 'Dedicated Editor',
    tagline: 'Embedded in your team. Learns your style and workflow.',
    description: 'No revolving door of freelancers. You get matched with a top-tier dedicated video editor who aligns with your brand voice, editing guidelines, and pacing requirements. They become an organic extension of your creative unit.',
    iconName: 'UserCheck',
    badge: 'Step 01 / Alignment',
    features: [
      'Same editor every single day',
      'Direct Slack / Discord integration',
      'Style guide & preset adaptation',
      'Immediate feedback loop calibration'
    ]
  },
  {
    id: 2,
    title: 'Pro Infrastructure',
    tagline: 'High-end workstations, professional plugin ecosystem, secure cloud systems.',
    description: 'Our editors operate on enterprise-grade hardware with dual RTX 4090 / M3 Max rigs, gigabit fiber storage, licensed Mister Horse / Boris FX / GeoLayers suites, and encrypted enterprise Frame.io cloud workflows.',
    iconName: 'Cpu',
    badge: 'Step 02 / Hardware & Tech',
    features: [
      '10Gbps NVMe cloud storage transfer',
      'Licensed GeoLayers 3 & After Effects plugins',
      'High-throughput NVMe RAID workstations',
      'Enterprise Frame.io automated sync'
    ]
  },
  {
    id: 3,
    title: 'Continuous Training',
    tagline: 'Weekly sessions to keep skills sharp and up-to-date.',
    description: 'Video algorithms and storytelling aesthetics shift constantly. Every editor participates in weekly masterclasses on retention analytics, dynamic 3D typography, pacing psychology, and emerging visual storytelling techniques.',
    iconName: 'GraduationCap',
    badge: 'Step 03 / Skill Mastery',
    features: [
      'Weekly YouTube retention dissection',
      'Advanced 3D camera tracking workshops',
      'Dynamic typography & pacing mastery',
      'Short-form hook retention optimization'
    ]
  },
  {
    id: 4,
    title: 'Creative Oversight',
    tagline: 'Senior leadership reviews every project to ensure quality.',
    description: 'Before any cut reaches your review inbox, our Senior Art Directors and Lead Editors run a meticulous 27-point QA check—inspecting pacing rhythm, frame transitions, typo-free captions, and overall brand fidelity.',
    iconName: 'ShieldCheck',
    badge: 'Step 04 / QA Review',
    features: [
      '27-point rigorous quality checklist',
      'Pacing & hook retention analysis',
      'Pixel-perfect visual rhythm & polish',
      'Zero-fluff narrative review'
    ]
  },
  {
    id: 5,
    title: 'Built for Scale',
    tagline: 'Consistent volume and reliable support for growing companies.',
    description: 'Whether you need 4 long-form YouTube documentaries per month or 40 high-velocity vertical reels every week, we scale your editing team seamlessly without contract lockouts or operational friction.',
    iconName: 'TrendingUp',
    badge: 'Step 05 / Expansion',
    features: [
      'Guaranteed 24-48h draft turnarounds',
      'Unlimited revisions until approved',
      'Backup editor redundancy standby',
      'Elastic team sizing on demand'
    ]
  }
];
