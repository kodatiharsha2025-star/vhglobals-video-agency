import { HelpCircle, ChevronDown, PhoneCall, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faqs';

interface FaqProps {
  onBookCall: (context?: string) => void;
}

/**
 * Uses native <details>/<summary> rather than JS-driven accordion state.
 * Collapsed answers stay in the DOM, so every answer is present in the served
 * HTML and available to search crawlers and answer engines. It also works
 * without JavaScript and is keyboard accessible with no extra handlers.
 */
export default function Faq({ onBookCall }: FaqProps) {
  return (
    <section id="faq" className="relative py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-blue-50 border border-[#2596be]/20">
            <HelpCircle className="w-3.5 h-3.5 text-[#2596be]" />
            <span className="text-xs font-semibold tracking-wide text-[#2596be] uppercase">
              Common questions
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight mb-5">
            Video editing questions, answered
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            How retainers work, what turnaround to expect, which formats we deliver, and
            what we need from you to start.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} id={item.id} className="group py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2596be] rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug group-hover:text-[#2596be] transition-colors">
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

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-sm text-neutral-500 mb-5">
            Something specific to your channel or listings not covered here?
          </p>

          <a
            href="https://calendly.com/vhstudios-global/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              onBookCall('FAQ Section CTA');
            }}
            className="cursor-pointer inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl text-base font-bold text-neutral-950 bg-white border-2 border-[#2596be] hover:bg-blue-50/70 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#2596be]"
          >
            <PhoneCall className="w-5 h-5 text-[#2596be]" />
            <span>Book a call</span>
            <ArrowRight className="w-4 h-4 text-[#2596be]" />
          </a>
        </div>
      </div>
    </section>
  );
}
