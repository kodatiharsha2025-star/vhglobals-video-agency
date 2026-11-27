import { WorkflowCard } from '../types';

export const WORKFLOW_STEPS: WorkflowCard[] = [
  {
    id: 1,
    title: 'Dedicated Video Editor',
    tagline: 'Hand-picked talent focused exclusively on your brand output.',
    description: 'Stop wasting time onboarding new editors every week. Secure a dedicated professional focused entirely on your content calendar, pacing style, and visual identity.',
    iconName: 'UserCheck',
    badge: 'Step 01 / Alignment',
    features: [
      'Same editor every single day',
      'Direct Slack and Discord integration',
      'Custom style guide and preset adaptation',
      'Immediate feedback loop calibration',
      'Exclusive editor assigned to your brand',
      'Real-time team chat workspace sync',
      'Rapid revision and adjustment tracking',
      'Zero freelance onboarding overhead'
    ]
  },
  {
    id: 2,
    title: 'Ongoing Skill Development',
    tagline: 'Staying ahead of platform trends through weekly education.',
    description: 'Great editing requires constant evolution. Our editors participate in structured weekly workshops to master new visual plugins, audience psychology principles, and modern editing trends.',
    iconName: 'GraduationCap',
    badge: 'Step 02 / Skill Mastery',
    features: [
      'Weekly audits',
      'Weekly YouTube engagement & watch-time dissection',
      'Advanced 3D camera tracking workshops',
      'Dynamic typography & pacing mastery',
      'Short-form hook & engagement optimization'
    ]
  },
  {
    id: 3,
    title: 'Final Polish Inspection',
    tagline: 'Strict editorial standards enforced on every single video.',
    description: 'Every video undergoes a detailed audit by experienced supervisors to catch minor flaws, tighten pacing dead zones, and maximize viewer engagement.',
    iconName: 'ShieldCheck',
    badge: 'Step 03 / Quality Check',
    features: [
      '27-point rigorous quality checklist',
      'Pacing & audience engagement analysis',
      'Pixel-perfect visual rhythm & polish',
      'Zero-fluff narrative review',
      'Multi-platform aspect ratio alignment and framing validation',
      'Color grading and skin-tone consistency verification'
    ]
  },
  {
    id: 4,
    title: 'Built for Scale',
    tagline: 'High-volume output capabilities built for expanding enterprises.',
    description: 'Never let editing become your content bottleneck. Our flexible workforce scales up instantly to handle large batch releases and aggressive publishing schedules.',
    iconName: 'TrendingUp',
    badge: 'Step 04 / Expansion',
    features: [
      'Guaranteed under 24hours to 48hours draft turnarounds for Short form video editing',
      'Backup editor redundancy standby',
      'Elastic team sizing on demand'
    ]
  }
];
