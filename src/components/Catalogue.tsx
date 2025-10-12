import { MessageSquare, ShoppingCart, Clock, Share2, CheckCircle, Globe, Zap } from 'lucide-react';

export default function Catalogue() {
  return (
    <section id="catalogue" className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">
            Ready-to-use Solutions
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            AI Employees Catalogue
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our pre-built digital employees or let us create a custom solution tailored to your business
          </p>
        </div>

        <div className="space-y-8">
          <AgentCard
            badge="Ready-to-use"
            icon={<MessageSquare className="w-12 h-12" />}
            title="Text-based AI Sales Agent for initial client communication"
            subtitle="Inbound Sales Representative (ISR) or Sales Qualification Representative (SQR)"
            description="Handle initial conversations incoming to the business and initiate outgoing conversations with new clients as a response on filled website form or leads generated during marketing campaigns."
            functions={[
              'Responds instantly to all incoming messages',
              'Replies in the same language as the client',
              'Provides product or services consultation and checks product availability',
              'Guides potential clients to the target action: booking a meeting, making a purchase, or requesting a quote',
            ]}
            channels={['Website live chat', 'WhatsApp', 'Telegram', 'Instagram DM', 'Facebook Messenger', 'TikTok DM', 'CRM']}
            industries={['Real Estate', 'Hospitality', 'Travel', 'Wellness & Fitness', 'Healthcare & Clinics']}
            integrationTime="1-3 weeks"
            shareLink="https://digitalworkforce.com/#ai-sales-agent-for-incoming-comminication"
            imageUrl="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
          />

          <AgentCard
            badge="Ready-to-use"
            icon={<ShoppingCart className="w-12 h-12" />}
            title="Full-cycle AI Sales Agent for e-commerce"
            subtitle="In-house shop consultant and top sales agent"
            description="A fully independent, full-cycle, text-based AI Sales Agent designed for e-commerce stores like Shopify. It's like having an in-house sales consultant who never misses a lead 24/7/365 in any language."
            functions={[
              'Responds instantly to all incoming messages from clients',
              'Engages and consults customers about your products',
              'Assists shoppers in choosing the right items',
              'Invites them to place an order and creates orders',
              'Handles the entire checkout process, including delivery details',
              'Issues invoices automatically and provides payment links',
              'Follows up with customers at every stage to close the deal',
            ]}
            channels={['Website live chat', 'WhatsApp', 'Telegram', 'Instagram DM', 'Facebook Messenger', 'TikTok DM']}
            platforms={['Shopify', 'WooCommerce', 'Ecwid']}
            industries={['E-commerce & Retail']}
            integrationTime="2-4 weeks"
            shareLink="https://digitalworkforce.com/#ai-sales-agent-for-incoming-comminication"
            imageUrl="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-slate-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We specialize in building tailored AI employees for your specific business needs.
              Non-AI automations and products available to boost your business.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AgentCardProps {
  badge: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  functions: string[];
  channels: string[];
  industries: string[];
  platforms?: string[];
  integrationTime: string;
  shareLink: string;
  imageUrl: string;
}

function AgentCard({
  badge,
  icon,
  title,
  subtitle,
  description,
  functions,
  channels,
  industries,
  platforms,
  integrationTime,
  shareLink,
  imageUrl,
}: AgentCardProps) {
  const handleShare = () => {
    navigator.clipboard.writeText(shareLink);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                {badge}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-sm text-slate-500 font-medium mb-4">{subtitle}</p>
            <p className="text-slate-600 leading-relaxed">{description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-500" />
              Digital Employee Functions
            </h4>
            <ul className="space-y-2">
              {functions.map((func, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{func}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Digital Habitat
              </h4>
              <div className="flex flex-wrap gap-2">
                {channels.map((channel, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>

            {platforms && (
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  E-commerce Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-300"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Applicable Industries
              </h4>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{integrationTime}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="p-2 text-slate-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="Share link"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <a
                href="#cta"
                className="px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        <div className="relative lg:min-h-full">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
