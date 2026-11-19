/**
 * Content for /outsource-video-editing.
 *
 * This page targets the commercial query "outsource video editing" and the
 * comparison intent behind it. Comparison content is the strongest available
 * asset for being cited by AI answer engines: it is topic-matched, it carries
 * price information, and a table is structured enough to be lifted whole.
 *
 * It is written to be useful even to someone who does not hire VHGLOBALS,
 * including an honest section on when a retainer is the wrong choice. A
 * comparison that never concedes a point reads as marketing and gets skipped.
 * Nothing here claims a VHGLOBALS capability not already stated on the site.
 */

export interface CompareColumn {
  id: string;
  name: string;
  summary: string;
  highlight?: boolean;
}

export interface CompareRow {
  attribute: string;
  values: Record<string, string>;
}

export const COMPARE_COLUMNS: CompareColumn[] = [
  {
    id: 'retainer',
    name: 'Monthly retainer',
    summary: 'A dedicated editor reserved for an agreed monthly volume.',
    highlight: true,
  },
  {
    id: 'marketplace',
    name: 'Freelance marketplace',
    summary: 'Hiring per project from Upwork, Fiverr or similar.',
  },
  {
    id: 'pervideo',
    name: 'Per-video service',
    summary: 'A fixed price per finished video, ordered as needed.',
  },
  {
    id: 'inhouse',
    name: 'In-house editor',
    summary: 'A salaried editor on your own payroll.',
  },
];

export const COMPARE_ROWS: CompareRow[] = [
  {
    attribute: 'Cost model',
    values: {
      retainer: 'Fixed monthly fee for an agreed volume',
      marketplace: 'Per project, varies widely by editor',
      pervideo: 'Fixed price per video, typically $65 to $150',
      inhouse: 'Salary plus software, hardware and overhead',
    },
  },
  {
    attribute: 'Style consistency',
    values: {
      retainer: 'High. Same editor learns your style over time',
      marketplace: 'Low. Re-briefing a new editor each project',
      pervideo: 'Medium. Consistent process, rotating editors',
      inhouse: 'Highest. One person, full context',
    },
  },
  {
    attribute: 'Typical turnaround',
    values: {
      retainer: '24 to 48 hours for short-form',
      marketplace: 'Varies. Depends entirely on the individual',
      pervideo: '24 to 72 hours, queue dependent',
      inhouse: 'Same day, limited by one person capacity',
    },
  },
  {
    attribute: 'Ramp-up time',
    values: {
      retainer: 'Days. Style guide and references at onboarding',
      marketplace: 'Restarts with every new hire',
      pervideo: 'None, but no accumulated context either',
      inhouse: 'Weeks to hire, then weeks to train',
    },
  },
  {
    attribute: 'Scaling a batch release',
    values: {
      retainer: 'Add editors to the account, turnaround holds',
      marketplace: 'Hire more freelancers, quality varies',
      pervideo: 'Order more, subject to queue',
      inhouse: 'Hard ceiling at one person capacity',
    },
  },
  {
    attribute: 'Cover for absence',
    values: {
      retainer: 'Backup editor on standby',
      marketplace: 'None. Editor disappears, work stops',
      pervideo: 'Handled by the provider',
      inhouse: 'None without a second hire',
    },
  },
  {
    attribute: 'Specialist techniques',
    values: {
      retainer: 'Yes, if the provider specialises',
      marketplace: 'Possible but hard to verify before paying',
      pervideo: 'Usually generalist, template driven',
      inhouse: 'Limited to what that person knows',
    },
  },
  {
    attribute: 'Best suited to',
    values: {
      retainer: 'Steady publishing, 8 or more videos a month',
      marketplace: 'One-off projects and experiments',
      pervideo: 'Irregular, low volume output',
      inhouse: 'Very high volume with in-house production',
    },
  },
];

export interface WhenSection {
  heading: string;
  body: string;
}

export const WHEN_SECTIONS: WhenSection[] = [
  {
    heading: 'When a freelance marketplace is the right choice',
    body:
      'If you need one video, or you are still working out what your content should look like, a marketplace is the cheaper and more sensible option. A retainer only pays off once you are publishing on a predictable schedule, because what you are buying is accumulated context about your brand, and there is no context to accumulate from a single project. Marketplaces are also the fastest way to test a style before committing to it.',
  },
  {
    heading: 'When a per-video service is the right choice',
    body:
      'If your output is genuinely irregular, a few videos one month and none the next, per-video pricing avoids paying for volume you do not use. The trade-off is that you rarely get the same editor twice, so your visual identity is maintained by your brief rather than by someone who already knows it. For listing videos and other template-friendly work, that trade-off is often fine.',
  },
  {
    heading: 'When hiring in-house is the right choice',
    body:
      'Past roughly 30 to 40 videos a month, or when you are shooting as well as editing, an in-house editor usually becomes cheaper per video than any outsourced option, and the context they build is unmatched. The costs people underestimate are the hiring time, the ramp-up, the software and hardware, and the fact that a single hire has no cover for holiday, illness or resignation.',
  },
  {
    heading: 'When a retainer is the right choice',
    body:
      'A retainer makes sense when you publish consistently, your style matters enough that re-briefing is expensive, and you need turnaround you can plan around. The value is an editor who already knows your pacing, your presets and your preferences, with the capacity to absorb a batch release without pushing your deadlines. If your volume is unpredictable or very low, one of the other three models will serve you better, and saying so costs us nothing.',
  },
];
