import { 
  UserCheck, 
  Cpu, 
  GraduationCap, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/workflow';

interface WorkflowProps {
  onBookCall: (context?: string) => void;
}

export default function Workflow({ onBookCall }: WorkflowProps) {
  const getStepIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-[#2596be]" };
    switch (name) {
      case 'UserCheck':
        return <UserCheck {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="workflow" className="relative py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-[#2596be]/30 text-[#2596be] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2596be]" />
            <span>Operational Rigor</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight mb-5">
            The <span className="text-[#2596be]">Workflow Pipeline</span> Built for Reliability
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Eliminating freelancer ghosting, missed deadlines, and inconsistent quality. We engineered a 5-stage production engine designed for high-velocity creators and modern businesses.
          </p>
        </div>

        {/* 5-Step Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.id}
              id={`workflow-card-step-${step.id}`}
              className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-neutral-200 hover:border-[#2596be] shadow-sm hover:shadow-[0_12px_30px_rgba(37,150,190,0.12)] transition-all duration-300 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header with Step Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/70 border border-[#2596be]/30 flex items-center justify-center group-hover:border-[#2596be] transition-colors shadow-sm">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 font-display mb-2 group-hover:text-[#2596be] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#2596be] mb-4">
                  {step.tagline}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Sub Features */}
                <div className="space-y-2 pt-4 border-t border-neutral-100">
                  {step.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2596be] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors">
                <span>Phase 0{step.id} Guaranteed</span>
                <ArrowRight className="w-4 h-4 text-[#2596be] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-[#2596be]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display">
              Ready to streamline your video post-production?
            </h4>
            <p className="text-sm text-neutral-600 max-w-xl">
              Book a 15-minute strategy call with our creative leads to map out your monthly volume, style guidelines, and dedicated editor match.
            </p>
          </div>

          <button
            id="workflow-bottom-cta-btn"
            onClick={() => onBookCall('Workflow Banner')}
            className="cursor-pointer shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-neutral-900 bg-white border-2 border-[#2596be] hover:bg-blue-50/80 shadow-[0_0_20px_rgba(37,150,190,0.2)] transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#2596be]" />
            <span>Book a call</span>
          </button>
        </div>
      </div>
    </section>
  );
}
