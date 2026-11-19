import { useState } from 'react';
import { ChevronRight, ArrowRight, PhoneCall, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCallModal from '../components/BookCallModal';
import { COMPARE_COLUMNS, COMPARE_ROWS, WHEN_SECTIONS } from '../data/compare';
import { NICHE_PAGES } from '../data/niches';

const CALENDLY = 'https://calendly.com/vhstudios-global/30min';

export const COMPARE_PAGE = {
  slug: 'outsource-video-editing',
  navLabel: 'Outsourcing guide',
  title: 'Outsource Video Editing: Retainer vs Freelancers vs In-House | VHGLOBALS',
  metaDescription:
    'The four ways to outsource video editing compared on cost, consistency, turnaround and scaling: monthly retainer, freelance marketplace, per-video service and hiring in-house.',
  h1: 'Outsourcing video editing: four models compared',
  intro:
    'There are four realistic ways to get video edited without doing it yourself: a monthly retainer with a dedicated editor, hiring per project from a freelance marketplace, paying a fixed price per finished video, or hiring in-house. Which one is cheapest depends almost entirely on how consistently you publish.',
};

export default function ComparePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sourceContext, setSourceContext] = useState('');

  const openBookCall = (context?: string) => {
    setSourceContext(context || 'Outsourcing guide');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#2596be] selection:text-white font-sans">
      <Navbar onBookCall={openBookCall} />

      <main className="flex-grow">
        <section className="relative pt-10 pb-14 md:pt-16 md:pb-16 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                <li>
                  <a href="/" className="hover:text-[#2596be] transition-colors">
                    Video editing
                  </a>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                </li>
                <li className="text-neutral-800">{COMPARE_PAGE.navLabel}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-6">
                {COMPARE_PAGE.h1}
              </h1>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">{COMPARE_PAGE.intro}</p>
              <p className="text-base text-neutral-600 leading-relaxed">
                Below is an honest comparison, including the cases where a retainer is the wrong
                answer. VHGLOBALS runs the retainer model, so read the table with that in mind, but
                the trade-offs described are real ones.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
              <table className="w-full min-w-[860px] border-collapse text-left">
                <caption className="sr-only">
                  Video editing outsourcing models compared on cost, consistency, turnaround,
                  ramp-up, scaling, absence cover, specialist techniques and best fit.
                </caption>
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-500 w-[180px]">
                      Criterion
                    </th>
                    {COMPARE_COLUMNS.map((col) => (
                      <th
                        key={col.id}
                        scope="col"
                        className={`p-4 align-top ${col.highlight ? 'bg-blue-50/60' : ''}`}
                      >
                        <span
                          className={`block text-sm font-bold mb-1 ${
                            col.highlight ? 'text-[#2596be]' : 'text-neutral-900'
                          }`}
                        >
                          {col.name}
                        </span>
                        <span className="block text-xs font-normal text-neutral-500 leading-snug">
                          {col.summary}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr
                      key={row.attribute}
                      className={`border-b border-neutral-100 last:border-0 ${
                        i % 2 === 1 ? 'bg-neutral-50/40' : ''
                      }`}
                    >
                      <th scope="row" className="p-4 text-sm font-semibold text-neutral-800 align-top">
                        {row.attribute}
                      </th>
                      {COMPARE_COLUMNS.map((col) => (
                        <td
                          key={col.id}
                          className={`p-4 text-sm text-neutral-600 align-top leading-snug ${
                            col.highlight ? 'bg-blue-50/40 text-neutral-800' : ''
                          }`}
                        >
                          {row.values[col.id]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              Per-video price range reflects published rates from providers in this market as of
              November 2026, not a VHGLOBALS quote.
            </p>
          </div>
        </section>

        {/* When each model wins */}
        <section className="py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-10">
              Which model fits your situation
            </h2>

            <div className="space-y-8">
              {WHEN_SECTIONS.map((s) => (
                <div key={s.heading}>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2.5">{s.heading}</h3>
                  <p className="text-base text-neutral-600 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What a retainer includes here */}
        <section className="py-20 bg-white border-t border-neutral-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-6">
              What the VHGLOBALS retainer includes
            </h2>

            <ul className="space-y-3 mb-10">
              {[
                'One dedicated senior editor assigned to your account',
                'A quality checker reviewing every delivery against a 27-point checklist',
                '24 to 48 hour turnaround on short-form drafts',
                'Shared Slack or Discord channel with the creative director',
                'Style guide and preset adaptation during onboarding',
                'Backup editor on standby for absence cover',
                'Flexible monthly volume with rollover',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2596be] shrink-0 mt-1" />
                  <span className="text-base text-neutral-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openBookCall('Outsourcing guide CTA');
                }}
                className="cursor-pointer inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl text-base font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5 text-[#2596be]" />
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4 text-[#2596be]" />
              </a>
            </div>
          </div>
        </section>

        {/* Links to the disciplines */}
        <section className="py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mb-10">
              Editing disciplines
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {NICHE_PAGES.map((p) => (
                <a
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/60 shadow-sm hover:shadow transition-all"
                >
                  <span className="text-base font-bold text-neutral-900 mb-3 group-hover:text-[#2596be] transition-colors">
                    {p.navLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2596be]">
                    View details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onBookCall={openBookCall} />

      <BookCallModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedNiche="real-estate"
        sourceContext={sourceContext}
      />
    </div>
  );
}
