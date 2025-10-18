import { useState } from 'react';
import { MessageSquare, ShoppingCart, Clock, Share2, CheckCircle, Globe, Zap, Users, Briefcase, Rocket, ChevronDown, ChevronUp, Linkedin, Home, Video, Instagram, Calendar } from 'lucide-react';
import CatalogueSegmentGroup from '@/components/ui/segment-group';

const CATEGORIES = [
  'Ready-to-use (4)',
  'Case studies (8)',
  'Upcoming AI employees (2)',
  'Classic automations (1)',
];

export default function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  const handleCategoryChange = (details: { value: string }) => {
    setSelectedCategory(details.value);
  };

  const catalogueItems = getCatalogueItems();
  const filteredItems = catalogueItems.filter(item => item.category === selectedCategory);

  return (
    <section id="catalogue" className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">
            Complete Solutions
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Explore AI Employees
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our pre-built digital employees or let us create a custom solution tailored to your business
          </p>
        </div>

        <CatalogueSegmentGroup
          value={selectedCategory}
          onValueChange={handleCategoryChange}
          options={CATEGORIES}
        />

        <div className="space-y-8">
          {filteredItems.map((item, index) => (
            <AgentCard key={index} {...item} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-slate-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Need a custom solution?
            </h3>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              We specialize in building custom AI employees to increase sales and lower operating costs
            </p>
            <a
              href="#cta"
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors duration-200"
            >
              Let's Talk ROI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function getCatalogueItems(): AgentCardProps[] {
  return [
    {
      category: 'Ready-to-use (4)',
      badge: 'Ready-to-use',
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Text-based AI Sales Agent for initial client communication',
      subtitle: 'Inbound Sales Representative (ISR) or Sales Qualification Representative (SQR)',
      description: 'Handle initial conversations incoming to the business and initiate outgoing conversations with new clients as a response on filled website form or leads generated during marketing campaigns.',
      functions: [
        'Responds instantly to all incoming messages',
        'Replies in the same language as the client',
        'Provides product or services consultation and checks product availability',
        'Guides potential clients to the target action: booking a meeting, making a purchase, or requesting a quote',
      ],
      channels: ['Website live chat', 'WhatsApp', 'Telegram', 'Instagram DM', 'Facebook Messenger', 'TikTok DM', 'CRM'],
      industries: ['Real Estate', 'Hospitality', 'Travel', 'Wellness & Fitness', 'Healthcare & Clinics'],
      integrationTime: '1-3 weeks',
      shareLink: 'https://digitalworkforce.one/#ai-sales-agent-for-incoming-comminication',
      imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Ready-to-use (4)',
      badge: 'Ready-to-use',
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'Full-cycle AI Sales Agent for e-commerce',
      subtitle: 'In-house shop consultant and top sales agent',
      description: 'A fully independent, full-cycle, text-based AI Sales Agent designed for e-commerce stores like Shopify in any DM or website chat.',
      functions: [
        'Responds instantly to all incoming messages from clients on any DM, WhatsApp or website chat',
        'Engages and consults customers about your products',
        'Assists shoppers in choosing the right items',
        'Invites them to place an order',
        'Creates orders and handles the entire checkout process, including delivery details',
        'Issues invoices automatically and providing payment links',
        'Follows-up with customers at every stage of the sales funnel to close the deal',
      ],
      channels: ['Website live chat', 'WhatsApp', 'Telegram', 'Instagram DM', 'Facebook Messenger', 'TikTok DM'],
      platforms: ['Shopify', 'WooCommerce', 'Ecwid'],
      industries: ['E-commerce & Retail'],
      integrationTime: '1-3 weeks',
      shareLink: 'https://digitalworkforce.one/#full-cycle-ecommerce-agent',
      imageUrl: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Ready-to-use (4)',
      badge: 'Ready-to-use',
      icon: <Linkedin className="w-12 h-12" />,
      title: 'AI LinkedIn SDR',
      subtitle: 'Sales Development Representative',
      description: 'AI LinkedIn SDR finds and engages target clients on LinkedIn, automatically initiating contact and handling conversations from the first message to qualification. It manages dozens of conversations simultaneously, responds instantly, and is available 24/7.',
      functions: [
        'Finds profiles',
        'Filters whom to contact',
        'Creates and sends connection requests',
        'Creates and sends follow-up sequences',
        'Carries the conversation',
        'Books meetings directly into your calendar',
      ],
      channels: ['LinkedIn', 'Calendly', 'Google Calendar', 'CRM'],
      industries: ['IT & Software (SaaS, startups, B2B software)', 'Marketing & Digital Agencies', 'Consulting & Training', 'Financial Services', 'Recruiting & HR Tech', 'Real Estate', 'Medical Technology & Supplies', 'Manufacturing & Distribution', 'Logistics & Transportation', 'Education & EdTech'],
      integrationTime: '1-2 weeks',
      shareLink: 'https://digitalworkforce.one/#linkedin-sdr',
      imageUrl: 'https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Ready-to-use (4)',
      badge: 'Ready-to-use',
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Telegram lead catcher from public group chats and initiating conversations qualification AI agent',
      subtitle: 'Lead Generation & Qualification Specialist',
      description: 'It scans public group chats, instantly spotting relevant requests and starting conversations with potential clients. It qualifies leads by asking the right questions and passes only warm prospects to your sales team, all while handling multiple chats 24/7.',
      functions: [
        'Scans Telegram groups for buyer intent',
        'Starts and maintains smart conversations automatically',
        'Qualifies leads through adaptive questions',
        'Follows up with non-responsive prospects',
        'Transfers only warm leads to CRM',
        'Works 24/7 across multiple chats simultaneously',
      ],
      channels: ['Telegram', 'CRM'],
      industries: ['Real Estate', 'Recruiting & HR', 'Digital Marketing Agencies', 'Education & EdTech', 'Fitness & Wellness', 'Travel & Hospitality', 'Finance & Investments'],
      integrationTime: '1-2 weeks',
      shareLink: 'https://digitalworkforce.one/#telegram-lead-catcher',
      imageUrl: 'https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Case studies (8)',
      badge: 'Case Study',
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Dubai Real Estate Agency: AI Sales Agent took over lead qualification and meeting scheduling',
      subtitle: 'Inbound Sales Representative (ISR) or Sales Qualification Representative (SQR)',
      description: 'The AI Sales Agent at a Dubai real estate agency took over lead qualification and scheduling Zoom meetings, leaving top agents to focus on closing deals with qualified leads.',
      functions: [
        '100% of incoming messages handled without losses',
        'Time to first response: instant, 24/7',
        'Share of qualified leads reaching meetings: +40%',
        'Top agents spend their time only on clients with high purchase potential',
        'Responds instantly 24/7 to all incoming messages',
        'Communicates with clients in their own language',
        'Qualifies leads based on predefined criteria',
        'Automatically guides qualified prospects to book a Zoom meeting with top agents',
      ],
      channels: ['WhatsApp', 'Instagram DM', 'Website live chat'],
      platforms: ['Kommo CRM'],
      industries: ['Real Estate'],
      integrationTime: '2-3 weeks',
      shareLink: 'https://digitalworkforce.one/#case-study-dubai-real-estate',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Case studies (8)',
      badge: 'Case Study',
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'MoldyFun Shopify Store: AI Sales Agent increased sales by automating incoming inquiries',
      subtitle: 'Senior Sales Representative, Account Executive, Deal Closer',
      description: 'A fully independent, full-cycle, text-based AI Sales Agent increased sales for the Shopify store MoldyFun by automating incoming inquiries and guiding customers through to purchase.',
      functions: [
        'Response time to clients dropped from several hours to instant 24/7',
        'Conversion from inquiries to orders increased by 35%',
        'Now 100% of clients complete purchases without manager involvement',
        'Responds instantly to all incoming messages',
        'Replies in the customer\'s language and generates invoices in their local currency',
        'Assists clients in selecting products and guides them through to payment',
        'Sends automatic follow-ups to ensure the deal is closed',
      ],
      channels: ['Instagram DM', 'Website live chat'],
      platforms: ['Shopify', 'Kommo CRM'],
      industries: ['E-commerce & Retail'],
      integrationTime: '2-3 weeks',
      shareLink: 'https://digitalworkforce.one/#case-study-moldyfun',
      imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Case studies (8)',
      badge: 'Case Study',
      icon: <Linkedin className="w-12 h-12" />,
      title: 'Digital Agency: AI LinkedIn SDR automated outreach and lead generation, booking meetings with qualified prospects',
      subtitle: 'Sales Development Representative (SDR)',
      description: 'The agency needed a steady flow of B2B clients, but manual LinkedIn outreach was taking too much time and effort. Sales reps couldn\'t scale personalized communication, and sales opportunities were slipping away due to slow responses and a lack of systematic follow-ups.',
      functions: [
        'Scans LinkedIn to find suitable profiles',
        'Automatically sends personalized connection requests',
        'Waits for the invitation to be accepted',
        'Generates and sends a personalized message sequence to get a reply',
        'Engages in real-time conversations, adapting to the prospect\'s profile information and product context',
        'Keeps the person engaged and warm in interest',
        'Guides warm prospects to schedule meetings directly with the agency\'s sales team',
      ],
      channels: ['LinkedIn', 'Calendly', 'Kommo CRM'],
      industries: ['Marketing & Digital Agencies'],
      integrationTime: '2-3 weeks',
      shareLink: 'https://digitalworkforce.one/#case-study-digital-agency-linkedin',
      imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Case studies (8)',
      badge: 'Case Study',
      icon: <Home className="w-12 h-12" />,
      title: 'Bali Homes Rental Concierge Service: Fully Automated Listing Manager scaled property database',
      subtitle: 'Listing Manager for Real Estate Business',
      description: 'The concierge service was expanding quickly, but listing managers couldn\'t keep up with contacting property owners and agents to add new listings. Collecting details about villas, negotiating terms, and uploading properties into the internal real estate database required too much manual effort. All of these tasks were transferred to a fully automated Listing Manager, which dramatically accelerated business growth.',
      functions: [
        'Automatically contacts property owners and agents',
        'Gathers all apartment details (photos, descriptions, pricing)',
        'Negotiates cooperation terms on behalf of the company',
        'Uploads and updates listings directly in the company\'s real estate database',
      ],
      channels: ['WhatsApp', 'Telegram', 'Google Spreadsheets', 'Google Drive'],
      industries: ['Real Estate', 'Hospitality', 'Travel'],
      integrationTime: '2-3 weeks',
      shareLink: 'https://digitalworkforce.one/#case-study-bali-listing-manager',
      imageUrl: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Case studies (8)',
      badge: 'Case Study',
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Bali Home Rental Service: Telegram Lead Catcher Automated Client Acquisition',
      subtitle: 'Lead Generation & Qualification Specialist',
      description: 'The company relied on Telegram groups to find new villa rental leads, but managers couldn\'t monitor multiple chats around the clock. The Telegram Lead Catcher AI changed this completely – it scans public groups for buyer intent, starts smart conversations automatically, and qualifies prospects through adaptive questions. Only warm leads are transferred to the CRM. Operating 24/7 across dozens of chats, the system ensures no potential client goes unnoticed and delivers a steady flow of qualified leads without manual effort.',
      functions: [
        'Scans Telegram groups for buyer intent',
        'Starts and maintains smart conversations automatically',
        'Qualifies leads through adaptive questions',
        'Transfers only warm leads to CRM',
        'Works 24/7 across multiple chats simultaneously',
      ],
      channels: ['Telegram', 'CRM'],
      industries: ['Real Estate', 'Hospitality', 'Travel'],
      integrationTime: '2-3 weeks',
      shareLink: 'https://digitalworkforce.one/#case-study-bali-telegram-lead-catcher',
      imageUrl: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Case studies (8)',
      badge: 'Case Study',
      icon: <Video className="w-12 h-12" />,
      title: 'AI Transcription of Video Meetings and Automation of Follow-Up Actions',
      subtitle: 'Meeting assistant, secretary',
      description: 'The agency held dozens of client and internal meetings each week, but key insights and next steps often got lost in unstructured notes. The AI Transcription Assistant now records every Zoom or Google Meet call, transcribes by speaker, identifies meeting type, and instantly generates summaries, a draft of the offer and quotation, or creates follow-up tasks. As a result, post-meeting processing time dropped by over 80%.',
      functions: [
        'Saves video meeting recordings in the correct Google Drive folder',
        'Transcribes conversations with clear speaker separation',
        'Automatically identifies the meeting type based on content (sales, internal, client review, etc.)',
        'Generates action items such as task lists, offers, or summaries, depending on the meeting type',
      ],
      channels: ['Zoom', 'Google Meet', 'Google Drive', 'Telegram', 'Slack'],
      industries: ['Marketing & Digital Agencies', 'Consulting & Training', 'IT & Software', 'Real Estate'],
      integrationTime: '2-3 weeks',
      shareLink: 'https://digitalworkforce.one/#case-study-ai-transcription',
      imageUrl: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Case studies (8)',
      badge: 'Case Study',
      icon: <Instagram className="w-12 h-12" />,
      title: 'MoldyFun Shopify Store: Instagram Hashtag Lead Hunter automated influencer collaborations',
      subtitle: 'Influencer Outreach and Partnership Manager',
      description: 'The instagram store wanted to grow brand visibility and reach new audiences through influencer partnerships, by offering free product. But manually searching for creators on Instagram took too much time. The AI-powered Instagram Hashtag Lead Hunter now finds potential clients and influencers by scanning relevant hashtags, analyzes their profiles, and initiates collaboration outreach automatically.',
      functions: [
        'Searches Instagram for relevant hashtags to identify potential influencers',
        'Analyzes creator profiles and audience relevance',
        'Initiates collaboration messages automatically',
        'Follows up to maintain conversation until agreement',
        'Transfers accepted collaborations to CRM or spreadsheet',
      ],
      channels: ['Instagram', 'Google Spreadsheets', 'CRM'],
      platforms: ['Shopify'],
      industries: ['E-commerce & Retail', 'Fashion & Beauty', 'Food & Beverage'],
      integrationTime: '2-3 weeks',
      shareLink: 'https://digitalworkforce.one/#case-study-instagram-lead-hunter',
      imageUrl: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Case studies (8)',
      badge: 'Case Study',
      icon: <Globe className="w-12 h-12" />,
      title: 'TranslateBot.io: AI Voice-to-Text + Translation Bot for Telegram',
      subtitle: 'Multilingual Communication Assistant',
      description: 'In multilingual group chats, people struggled to communicate smoothly — especially when some members spoke different languages or preferred voice messages. TranslateBot.io solved this communication gap completely. The AI-powered Telegram bot automatically transcribes voice messages into text, translates them into the desired language, and even generates voice-overs in the recipient\'s language. It works directly inside Telegram chats with no need for installation or switching apps. Teams, families, and communities can now chat freely and understand each other instantly in over 70 languages, all powered by AI automation.',
      functions: [
        'Converts voice messages to text instantly in group or private chats',
        'Translates all messages between 70+ supported languages',
        'Generates voice-overs in both directions for seamless communication',
        'Works automatically 24/7 without additional setup',
        'Ensures data privacy',
      ],
      channels: ['Telegram', 'WhatsApp (coming soon)'],
      industries: ['All Industries', 'Remote Teams', 'International Business', 'Education', 'Travel & Hospitality'],
      integrationTime: '1-2 weeks',
      shareLink: 'https://digitalworkforce.one/#case-study-translatebot',
      imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (2)',
      badge: 'Coming Soon',
      icon: <Rocket className="w-12 h-12" />,
      title: 'Voice-enabled AI Sales Agent',
      subtitle: 'Next generation conversational AI',
      description: 'Our upcoming voice-enabled AI agent will handle phone calls, voice messages, and voice-based customer interactions with natural, human-like conversations in multiple languages.',
      functions: [
        'Natural voice conversations with customers',
        'Handles inbound and outbound calls automatically',
        'Real-time language translation during calls',
        'Seamless integration with existing phone systems',
      ],
      channels: ['Phone calls', 'Voice messages', 'WhatsApp voice', 'Telegram voice'],
      industries: ['Real Estate', 'Hospitality', 'Travel', 'Healthcare & Clinics', 'Financial Services'],
      integrationTime: 'Q2 2026',
      shareLink: 'https://digitalworkforce.one/#voice-ai-agent',
      imageUrl: 'https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (2)',
      badge: 'Coming Soon',
      icon: <Calendar className="w-12 h-12" />,
      title: 'AI Reservation & Booking Manager for Travel & Rental Services',
      subtitle: 'Reservation & Booking Manager',
      description: 'Travel and rental businesses often work with suppliers who don\'t provide API access or portal integration, so availability must be requested manually by messaging each supplier individually. A manager typically writes to a specific hotel, villa owner, DMC, or activity provider via WhatsApp or email, waits for confirmation, follows up if needed, and then copies the result into the internal system. The AI Availability Check Manager replaces this manual communication – it prepares the request, sends it to the correct supplier, waits for the response, issues reminders if there is no reply, and records the received availability and pricing in Google Sheets or CRM.',
      functions: [
        'Receives request details and identifies which supplier to contact',
        'Drafts and sends availability inquiry via WhatsApp or email',
        'Tracks unanswered messages and sends follow-up reminders',
        'Extracts key data (dates, price, terms, policy) from supplier response',
        'Records results into Google Sheets and/or CRM',
        'Notifies the manager when confirmation is received',
      ],
      channels: ['WhatsApp', 'Telegram', 'Email', 'Google Sheets', 'CRM', 'Booking system'],
      industries: ['Travel Agencies & Tour Operators', 'Hospitality (Hotels, Resorts, Villas)', 'Transportation & Car Rentals', 'Concierge & Lifestyle Services', 'Adventure & Activity Providers', 'Destination Management Companies (DMCs)', 'Event & Group Travel Services'],
      integrationTime: 'Q3 2026',
      shareLink: 'https://digitalworkforce.one/#ai-booking-manager',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Classic automations (1)',
      badge: 'Automation',
      icon: <Zap className="w-12 h-12" />,
      title: 'Business Process Automation Suite',
      subtitle: 'Streamline operations without AI',
      description: 'Classic automation tools that integrate with your existing systems to automate repetitive tasks, data entry, reporting, and workflow management without requiring AI implementation.',
      functions: [
        'Automated data entry and processing',
        'Scheduled report generation and distribution',
        'Workflow automation across multiple platforms',
        'Integration with CRM, ERP, and other business tools',
      ],
      channels: ['Email', 'Slack', 'Microsoft Teams', 'CRM systems'],
      platforms: ['Zapier', 'Make', 'N8n', 'Custom integrations'],
      industries: ['All Industries'],
      integrationTime: '1-2 weeks',
      shareLink: 'https://digitalworkforce.one/#automation-suite',
      imageUrl: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];
}

interface AgentCardProps {
  category: string;
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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(shareLink);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
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
            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
          </div>

          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: isExpanded ? '2000px' : '0px' }}
          >
            <div className="space-y-6">
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    <span className="text-slate-500 font-semibold">Human role synonym for digital employee</span>
                    <br />
                    {subtitle}
                  </p>
                </div>
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
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-full transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isExpanded ? (
              <>
                Show less
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Read more
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        <div className="relative min-h-[400px] lg:min-h-full">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
