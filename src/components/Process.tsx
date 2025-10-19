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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Process – Fast, Simple, Subscription-based
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We make AI integration simple — strategy, implementation, and continuous improvement in just three steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white border-2 border-orange-500 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-orange-500" strokeWidth={1.5} />
                </div>

                <div className="mb-2">
                  <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>

                <div className="space-y-3">
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

        <div className="text-center">
          <p className="text-lg font-medium text-slate-700">
            Here's how companies are already scaling with AI Employees
          </p>
        </div>
      </div>
    </section>
  );
}
