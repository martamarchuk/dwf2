import { MessageCircle, CheckCircle, Puzzle, TrendingUp } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: 'Step 01',
    title: 'Free Consultation',
    description: [
      'We identify your bottlenecks and map where automation will bring the highest ROI',
      'You leave the call with clarity: what will be automated, how fast, and what outcomes to expect',
    ],
    icon: MessageCircle,
  },
  {
    step: 'Step 02',
    title: 'We Build Your AI Employee',
    description: [
      'We design and implement a solution tailored to your processes — based on your stack, workflows, and business logic',
      'It becomes a natural extension of how your team works',
    ],
    icon: Puzzle,
  },
  {
    step: 'Step 03',
    title: 'Continuous Improvement & Growth',
    description: [
      'We monitor performance, enhance capabilities, and expand the automation scope as your needs evolve',
      'Your AI Employee becomes more valuable over time — not a static one-off setup',
    ],
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Process – Fast, Simple, Subscription-based
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We make AI integration simple — strategy, implementation, and continuous improvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4 w-full">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-orange-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-1">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {step.description.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-sm text-slate-600 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
