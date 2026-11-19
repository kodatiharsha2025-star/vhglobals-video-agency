import { useState } from 'react';
import {
  Building2, Laptop, Film, Mic, Globe2,
  CheckCircle2, ChevronRight, ChevronDown, ArrowRight, PhoneCall, Sparkles,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCallModal from '../components/BookCallModal';
import VideoPlayer from '../components/VideoPlayer';
import { SERVICES_LIST } from '../components/Services';
import { SHOWCASE_DATA } from '../data/showcases';
import { FAQ_ITEMS } from '../data/faqs';
import { NICHE_PAGES, NichePage as NichePageData } from '../data/niches';

const CALENDLY = 'https://calendly.com/vhstudios-global/30min';

const ICONS: Record<string, typeof Building2> = {
  Building2, Laptop, Film, Mic, Globe2,
};

interface Props {
  page: NichePageData;
}

/**
 * A niche landing page.
 *
 * Everything on this page is drawn from the same data the homepage uses:
 * SERVICES_LIST for the feature breakdown, SHOWCASE_DATA for the videos,
 * FAQ_ITEMS for the questions. The homepage keeps all five niches as tabs and
 * is unchanged. These pages exist as direct entry points for search traffic,
 * so somebody arriving from a query about one discipline lands on that
 * discipline rather than on whichever tab happens to be open by default.
 *
 * FAQ answers render visibly here but carry no FAQPage schema. That markup
 * lives once, on the homepage, where all twelve questions appear together.
 * Repeating the same FAQ markup across six URLs risks being read as
 * duplicated structured data.
 */
export default function NichePage({ page }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [sourceContext, setSourceContext] = useState('');

  const openBookCall = (context?: string) => {
    setSourceContext(context || `Niche page: ${page.navLabel}`);
    setModalOpen(true);
  };

  const service = SERVICES_LIST.find((s) => s.id === page.nicheId);
  const videos = SHOWCASE_DATA[page.nicheId] ?? [];
  const faqs = page.faqIds
    .map((id) => FAQ_ITEMS.find((f) => f.id === id))
    .filter((f): f is (typeof FAQ_ITEMS)[number] => Boolean(f));
  const others = NICHE_PAGES.filter((p) => p.slug !== page.slug);
  const Icon = service ? ICONS[service.iconName] ?? Sparkles : Sparkles;

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#2596be] selection:text-white font-sans">
      <Navbar onBookCall={openBookCall} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-10 pb-16 md:pt-16 md:pb-20 bg-white overflow-hidden">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 -z-10"
          />

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
                <li className="text-neutral-800">{page.navLabel}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-11 h-11 rounded-xl bg-blue-50 border border-[#2596be]/30 flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5 text-[#2596be]" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-[#2596be] uppercase">
                  {videos.length} {videos.length === 1 ? 'showcase edit' : 'showcase edits'}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-6">
                {page.h1}
              </h1>

              <p className="text-lg text-neutral-700 leading-relaxed mb-5">{page.intro}</p>

              <p className="text-base text-neutral-600 leading-relaxed mb-8">
                {page.audienceNote}
              </p>

              {service && (
                <div className="flex flex-wrap gap-2 mb-9">
                  {service.formats.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-50 text-neutral-700 border border-neutral-200"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openBookCall(`${page.navLabel} page: primary CTA`);
                  }}
                  className="cursor-pointer inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl text-base font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-5 h-5 text-[#2596be]" />
                  <span>Book a call</span>
                  <ArrowRight className="w-4 h-4 text-[#2596be]" />
                </a>

                <a
                  href="#showcase"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-[#2596be]/60 transition-all"
                >
                  <span>See the edits</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Capability breakdown */}
        {service && (
          <section className="py-20 bg-white border-t border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-4">
                  What is included
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">{service.tagline}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-2.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2596be] shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Showcase */}
        {videos.length > 0 && (
          <section id="showcase" className="py-20 bg-white border-t border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-4">
                  {page.navLabel} edits
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Every edit below was produced in-house. Each breakdown lists the techniques used.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {videos.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/50 shadow-sm hover:shadow transition-all"
                  >
                    <div>
                      <div className="mb-4">
                        <VideoPlayer
                          id={item.id}
                          title={item.title}
                          aspectRatio={item.aspectRatio}
                          videoSrc={item.videoSrc}
                          fallbackPoster={item.fallbackPoster}
                          nicheLabel={item.nicheLabel}
                        />
                      </div>

                      <h3 className="text-sm font-semibold text-neutral-900 leading-snug mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.techniques?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {item.techniques.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs bg-neutral-50 text-neutral-700 border border-neutral-200 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-neutral-100">
                      <a
                        href={CALENDLY}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          openBookCall(`${page.navLabel}: ${item.title}`);
                        }}
                        className="cursor-pointer w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-[#2596be] hover:bg-[#1f7c9e] shadow-sm hover:shadow transition-all"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Book a call</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ subset */}
        {faqs.length > 0 && (
          <section className="py-20 bg-white border-t border-neutral-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-10">
                Questions about {page.navLabel.toLowerCase()} editing
              </h2>

              <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
                {faqs.map((item) => (
                  <details key={item.id} className="group py-5">
                    <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                      <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-[#2596be] transition-colors">
                        {item.question}
                      </h3>
                      <ChevronDown className="shrink-0 w-5 h-5 mt-0.5 text-[#2596be] transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 pr-9 text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>

              <p className="mt-8 text-sm text-neutral-500">
                More answers on the{' '}
                <a href="/#faq" className="text-[#2596be] font-semibold hover:underline">
                  full FAQ
                </a>
                .
              </p>
            </div>
          </section>
        )}

        {/* Cross-links to the other niches */}
        <section className="py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mb-3">
              Other editing disciplines
            </h2>
            <p className="text-base text-neutral-600 mb-10">
              Or compare all five side by side on the{' '}
              <a href="/#style-showcase" className="text-[#2596be] font-semibold hover:underline">
                main showcase
              </a>
              .
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {others.map((other) => {
                const otherService = SERVICES_LIST.find((s) => s.id === other.nicheId);
                const OtherIcon = otherService ? ICONS[otherService.iconName] ?? Sparkles : Sparkles;
                return (
                  <a
                    key={other.slug}
                    href={`/${other.slug}`}
                    className="group flex flex-col p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be]/60 shadow-sm hover:shadow transition-all"
                  >
                    <span className="w-10 h-10 rounded-xl bg-blue-50 border border-[#2596be]/30 flex items-center justify-center mb-4">
                      <OtherIcon className="w-5 h-5 text-[#2596be]" />
                    </span>
                    <span className="text-base font-bold text-neutral-900 mb-1.5 group-hover:text-[#2596be] transition-colors">
                      {other.navLabel}
                    </span>
                    <span className="text-xs text-neutral-600 leading-relaxed">
                      {otherService?.tagline}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#2596be]">
                      View details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer onBookCall={openBookCall} />

      <BookCallModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedNiche={page.nicheId}
        sourceContext={sourceContext}
      />
    </div>
  );
}
