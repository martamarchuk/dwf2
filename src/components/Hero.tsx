import { MessageSquare, Send, CheckCircle, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                Tailored-made digital AI employees
              </p>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Let AI handle the repetitive, while your team delivers the remarkable
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                At DigitalWorkforce, we create AI employees that free your team from repetitive tasks.
                They take over routine operations, communication, client requests, qualification, and support –
                so your team can stay focused on growth, sales, and strategy.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Scalability of your business</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Faster production</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Cutting expenses</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl shadow-orange-500/30"
              >
                Book a Demo
              </a>
              <a
                href="#catalogue"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                Explore AI Employees
              </a>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Integrates with your channels</p>
              <div className="flex flex-wrap gap-6 items-center">
                <ChannelBadge icon={<MessageSquare />} label="WhatsApp" />
                <ChannelBadge icon={<Send />} label="Telegram" />
                <ChannelBadge icon={<Globe />} label="Website Chat" />
                <ChannelBadge icon={<MessageSquare />} label="Instagram" />
                <ChannelBadge icon={<MessageSquare />} label="Facebook" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 space-y-6">
              <ChatBubble
                message="Hi! I'm interested in your real estate services"
                incoming
              />
              <ChatBubble
                message="Hello! I'd be happy to help you find your perfect property. Are you looking to buy or rent?"
                outgoing
              />
              <ChatBubble
                message="Looking to buy a 3-bedroom apartment"
                incoming
              />
              <ChatBubble
                message="Great! I have several options available. Would you like to schedule a viewing this week? I can check our calendar right now."
                outgoing
              />
              <div className="flex items-center gap-2 px-4 py-3 bg-green-50 rounded-xl border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium text-green-800">Meeting scheduled for Thursday 2 PM</span>
              </div>
            </div>

            <div className="absolute -z-0 -top-8 -right-8 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -z-0 -bottom-8 -left-8 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
      <div className="text-slate-600 w-4 h-4">{icon}</div>
      <span className="text-xs font-medium text-slate-700">{label}</span>
    </div>
  );
}

function ChatBubble({ message, incoming, outgoing }: { message: string; incoming?: boolean; outgoing?: boolean }) {
  return (
    <div className={`flex ${outgoing ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs px-4 py-3 rounded-2xl ${
          incoming
            ? 'bg-slate-100 text-slate-900 rounded-tl-sm'
            : 'bg-orange-500 text-white rounded-tr-sm'
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
