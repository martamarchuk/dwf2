import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, ShoppingCart, Clock, Share2, CheckCircle, Globe, Zap, Users, Briefcase, Rocket, ChevronDown, ChevronUp, Linkedin, Home, Video, Instagram, Calendar, Phone, Headset, ClipboardList, UserCheck, Target, Image, BookOpen, VideoIcon, PhoneCall, Settings, TrendingUp, Gauge, ExternalLink } from 'lucide-react';
import CatalogueSegmentGroup from '@/components/ui/segment-group';

const CATEGORIES = [
  'Ready-to-use (4)',
  'Case studies (8)',
  'Upcoming AI employees (10)',
  'Classic Solutions (4)',
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
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
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
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <Phone className="w-12 h-12" />,
      title: 'AI Voice Receptionist or Voice Concierge AI',
      subtitle: 'Receptionist / Call Center Operator',
      description: 'AI Voice Receptionist instantly answers all incoming calls, speaking naturally with clients 24/7. It can provide information, check availability, schedule appointments or bookings, route calls to the right person, and capture caller details. At the same time, it manages multiple calls simultaneously, never misses a lead, and delivers a consistent, professional customer experience.',
      functions: [
        'Answers calls instantly, 24/7',
        'Greets clients and provides initial consultation',
        'Checks availability, schedules bookings or appointments',
        'Collects and logs caller details into CRM',
        'Handles multiple calls simultaneously without delays',
        'Provides multilingual support for international clients',
      ],
      channels: ['Telephony (VoIP, SIP, PBX systems)', 'CRM & Booking systems', 'Calendar integrations (Google Calendar, Outlook)'],
      industries: ['Healthcare & Clinics', 'Beauty & Wellness', 'Hospitality (Hotels, Resorts)', 'Real Estate', 'Automotive & Car Dealerships', 'Legal & Consulting', 'Travel & Concierge Services'],
      integrationTime: 'Q2 2026',
      shareLink: 'https://digitalworkforce.one/#ai-voice-receptionist',
      imageUrl: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <Headset className="w-12 h-12" />,
      title: 'AI Sales Co-pilot / AI Sales Operations Assistant',
      subtitle: 'Virtual Assistant',
      description: 'In many sales teams, managers lose leads not because of poor selling skills but because of disorganisation. Follow-ups are missed, CRM data is outdated, next steps are not scheduled, and the pipeline becomes unclear. The AI Sales Co-pilot acts as a proactive internal assistant for the salesperson: it monitors every deal in the pipeline, prompts the next action at the right time, asks for meeting outcomes, updates CRM automatically, and ensures no contact is ever forgotten. It lives inside WhatsApp, Telegram, or Slack as a chat-based assistant and drives the salesperson through their workflow step by step.',
      functions: [
        'Proactively monitors all active deals and alerts when a lead is stalling',
        'Suggests what to do or what to write next based on context',
        'Asks the salesperson for meeting outcomes and logs them into CRM',
        'Ensures every lead has a scheduled next step or task',
        'Updates CRM automatically with statuses and notes',
        'Generates a morning priority list with the most important actions for the day',
        'Produces an end-of-day recap (completed tasks + next actions)',
        'Keeps the pipeline clean, structured, and up-to-date for management visibility',
      ],
      channels: ['WhatsApp', 'Telegram', 'Slack', 'CRM', 'Google Sheets', 'Calendly / Google Calendar'],
      industries: ['Real Estate', 'B2B SaaS & IT', 'Marketing & Digital Agencies', 'Consulting & Professional Services', 'Financial Services', 'E-commerce & Retail'],
      integrationTime: 'Q3 2026',
      shareLink: 'https://digitalworkforce.one/#ai-sales-copilot',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <ClipboardList className="w-12 h-12" />,
      title: 'AI Project Management Assistant',
      subtitle: 'Project Management Assistant or Junior PM',
      description: 'Most project managers spend the majority of their time coordinating people instead of managing the project. They constantly chase updates, ask for task statuses, remind team members about deadlines, and manually update PM tools. As a result, they lose focus on goals and slip into low-level coordination. The AI Project Management Assistant removes this burden by handling task-level communication, daily prioritisation, effort estimations, and structured reporting. The PM keeps the strategy — the AI handles the micro-coordination.',
      functions: [
        'Proactively collects status updates from team members directly in chat',
        'Logs all updates into the task/project management system',
        'Requests effort and duration estimations for new or ongoing tasks',
        'Builds individual daily priority lists for each team member',
        'Asks the PM for weekly / sprint goals and aligns task priority with them',
        'Tracks deadlines and sends reminders when a task is delayed',
        'Escalates blockers or dependency issues to the PM',
        'Generates structured daily / weekly summaries for the PM',
        'Keeps the task board clean, structured, and always up to date',
      ],
      channels: ['Asana, Trello, ClickUp, Jira', 'Slack / MS Teams / Telegram / WhatsApp'],
      industries: ['IT & Software Development', 'Marketing & Digital Agencies', 'Consulting & Professional Services', 'Construction & Architecture', 'Creative Studios', 'Event Management'],
      integrationTime: 'Q4 2026',
      shareLink: 'https://digitalworkforce.one/#ai-pm-assistant',
      imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <UserCheck className="w-12 h-12" />,
      title: 'AI Pre-Screening Recruiter (Voice & Text)',
      subtitle: 'Recruiter / Talent Acquisition Specialist (first-stage)',
      description: 'High-volume hiring usually collapses at the very first step: processing hundreds of applicants manually is slow, repetitive, and forces HR teams to spend time collecting basic information instead of actually recruiting. The AI Recruiter automates the initial stage of the hiring process by handling the first contact with candidates over voice or text, asking structured screening questions, collecting essential information, and scheduling interviews with HR. It is designed for mass-market roles and early-stage screening — not for senior or executive positions.',
      functions: [
        'Handles incoming applications instantly and 24/7 via voice or chat',
        'Conducts first-step screening conversations using predefined questions',
        'Provides job details, salary range, schedule, and work conditions',
        'Collects structured candidate data for HR review',
        'Filtering can be enabled or disabled depending on role requirements',
        'Schedules interviews directly into HR calendars',
        'Sends reminders to reduce interview no-shows',
        'Updates ATS or HR database with candidate status and transcript',
      ],
      channels: ['Phone (VoIP / SIP / PBX)', 'WhatsApp / Telegram / Messenger', 'ATS systems', 'Google / Outlook Calendars', 'HRIS or CRM'],
      industries: ['Retail & E-commerce', 'Hospitality: hotels, restaurants', 'Logistics & Transportation', 'Manufacturing', 'Healthcare support roles', 'Call centers and BPO', 'Seasonal or event-based hiring'],
      integrationTime: 'Q3 2026',
      shareLink: 'https://digitalworkforce.one/#ai-recruiter',
      imageUrl: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <Target className="w-12 h-12" />,
      title: 'AI Paid Traffic Manager (Autonomous Media Buyer) for Meta Ads',
      subtitle: 'Media Buyer / Performance Marketing Manager',
      description: 'Most advertising budgets are lost not because of bad strategy, but because campaign optimization is slow or inconsistent. Human media buyers check results periodically, while performance can change hour by hour. The AI Paid Traffic Manager acts as a fully autonomous media buyer for Meta Ads: it creates campaigns, optimizes budgets in real time, tests variations, scales winners, and pauses underperformers automatically. It maintains the target CPA/ROAS without human supervision and sends daily performance summaries. Creatives and ad copy can be generated by the system or uploaded by the client.',
      functions: [
        'Creates and launches campaigns inside Meta Ads',
        'Generates and tests ad copy variations',
        'Optimizes targeting, placements, and bidding autonomously',
        'Reallocates budget toward winning campaigns in real time',
        'Scales profitable ad sets and pauses weak ones',
        'Maintains KPI thresholds such as CPA/ROAS',
        'Sends daily performance reports to the business owner or marketing lead',
        'Supports basic creative generation for rapid testing',
      ],
      channels: ['Meta Ads (Facebook / Instagram)', 'Meta Ads Manager analytics', 'Google Sheets or dashboard reporting'],
      industries: ['E-commerce and D2C', 'Real estate lead generation', 'Travel and rentals', 'Coaches / info products / education', 'Clinics / medspa / wellness', 'Local services'],
      integrationTime: 'Q4 2026',
      shareLink: 'https://digitalworkforce.one/#ai-traffic-manager',
      imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <Image className="w-12 h-12" />,
      title: 'AI Content Generator for Social Media',
      subtitle: 'Content Creator or Social Media Content Producer',
      description: 'Most companies struggle to post consistently because content creation takes time — especially when every visual and caption must be produced manually. The AI Content Generator automates the creation of ready-to-post social media content, generating both visuals and post texts from scratch. It is designed for fast, high-volume content production, making it ideal for daily social posting and campaign support without overloading a marketing team.',
      functions: [
        'Suggests ideas for content based on guidelines',
        'Generates visuals and post texts from scratch based on custom created guidelines and product line',
        'Adapts tone, style, and format for each social platform',
        'Produces content in bulk for faster execution and consistent posting',
        'Creates hashtag sets and CTA variations',
        'Helps maintain daily or high-volume posting cadence',
      ],
      channels: ['Instagram', 'Facebook', 'TikTok', 'X', 'LinkedIn', 'Google Drive / Sheets'],
      industries: ['E-commerce and product brands', 'Travel and hospitality', 'Real Estate', 'Beauty and wellness', 'Education and online courses', 'Agencies managing multiple clients'],
      integrationTime: 'Q2 2026',
      shareLink: 'https://digitalworkforce.one/#ai-content-generator',
      imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <BookOpen className="w-12 h-12" />,
      title: 'AI Company Knowledge Chatbase (Internal)',
      subtitle: 'Knowledge Manager / Internal Trainer',
      description: 'In most companies, knowledge is scattered across Google Drive, chats, and outdated documents. New employees constantly ask the same questions, and senior staff spend time re-explaining procedures instead of doing their work. The AI Company Knowledge Chatbase centralizes internal knowledge and makes it instantly accessible through chat, allowing team members to query SOPs, policies, workflows, and instructions in natural language. It shortens onboarding time, reduces repetitive internal questions, and keeps operational knowledge consistent across the team.',
      functions: [
        'Converts internal documents into a searchable AI knowledge hub',
        'Answers employee questions in natural language using company data',
        'Explains procedures and SOPs step by step',
        'Updates itself when new documents are added or changed',
        'Reduces dependency on senior staff for repeated clarifications',
        'Helps onboard new hires faster through self-service learning',
      ],
      channels: ['Google Drive', 'Notion / Confluence', 'Slack / MS Teams / Telegram'],
      industries: ['Financial & corporate services', 'IT & SaaS companies', 'Healthcare & medical providers', 'Hotels, resorts & travel operators', 'Manufacturing & industrial', 'Retail & franchise networks', 'Education & training organizations'],
      integrationTime: 'Q2 2026',
      shareLink: 'https://digitalworkforce.one/#ai-knowledge-chatbase',
      imageUrl: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <VideoIcon className="w-12 h-12" />,
      title: 'AI Video Content Generator based on AI Clone of the Founder/Spokesperson',
      subtitle: 'Video Content Creator / On-camera Spokesperson',
      description: 'Most companies struggle with video production because it requires a spokesperson, recording time, and consistent on-camera performance. The AI Video Content Generator solves this by using an AI video clone of a real person – producing short-form social media videos with their voice, face, and communication style. It ingests your prepared scripts and turns them into ready-to-post videos for multiple platforms without filming sessions or manual editing. This allows businesses to scale personal, authentic video content with almost zero production effort.',
      functions: [
        'Uses a realistic AI clone of the spokesperson to generate videos from your scripts',
        'Produces videos in multiple formats (Reels, Stories, TikTok, Shorts, 9:16/1:1/16:9)',
        'Adapts messaging, captions, and post text per platform',
        'Generates hook and angle variations from the same script for testing',
        'Maintains consistent brand presence without recurring filming',
        'Supports fast, high-volume content production',
      ],
      channels: ['Instagram', 'TikTok', 'Facebook', 'YouTube Shorts', 'LinkedIn', 'Internal media storage'],
      industries: ['Personal brands', 'Coaches and online educators', 'Real estate', 'E-commerce', 'Travel and hospitality', 'Health & beauty'],
      integrationTime: 'Q3 2026',
      shareLink: 'https://digitalworkforce.one/#ai-video-clone',
      imageUrl: 'https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Upcoming AI employees (10)',
      badge: 'Upcoming AI employees',
      icon: <PhoneCall className="w-12 h-12" />,
      title: 'AI Call Analysis for Sales and Support Departments',
      subtitle: 'Call Analyst / Quality Control Specialist',
      description: 'Most companies record calls but never fully review them, which means valuable insights about customer objections, service issues, and sales opportunities are lost. The AI Call Analysis system automatically records, transcribes, and analyzes every conversation from sales and support teams. It identifies key topics, sentiment, and call outcomes, helping managers understand performance quality without listening to entire calls. This makes it possible to monitor consistency, detect recurring problems, and improve service quality using real call data.',
      functions: [
        'Records and transcribes phone conversations automatically',
        'Detects customer sentiment, intent, and satisfaction level',
        'Compare call with guidelines of sales department and produces recommendations',
        'Identifies sales opportunities, objections, and missed signals',
        'Highlights recurring client issues across multiple calls',
        'Generates structured summaries with key takeaways',
        'Produces analytics dashboards for call quality and performance trends',
        'Syncs transcripts and summaries back to CRM for full context',
      ],
      channels: ['IP Telephony / VoIP systems', 'CRM (Kommo, HubSpot, Salesforce)', 'Google Drive / Google Sheets', 'Slack / Telegram'],
      industries: ['Sales & support teams', 'Real estate agencies and property management', 'Travel & hospitality businesses', 'E-commerce & retail', 'Healthcare & clinics', 'Financial services and insurance'],
      integrationTime: 'Q4 2026',
      shareLink: 'https://digitalworkforce.one/#ai-call-analysis',
      imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Classic Solutions (4)',
      badge: 'Classic Solution',
      icon: <Settings className="w-12 h-12" />,
      title: 'Kommo CRM Setup + All Communication Channels in One Interface',
      subtitle: 'Multi-Channel CRM Setup',
      description: 'Most CRMs are used only as a database, while communication still happens in WhatsApp, Telegram, Instagram, or email — making it impossible to track client interactions properly. Kommo is one of the few CRM systems that natively supports full multi-channel communication, allowing all client conversations to live in one interface. We integrate Kommo CRM into your business and connect all messaging channels, so every lead, message, and follow-up is recorded automatically and never lost.',
      functions: [
        'Set up Kommo CRM tailored to the sales process of your business',
        'Connect WhatsApp, Telegram, Instagram DM, Email, and website forms directly into CRM',
        'Ensure all conversations are logged under the correct contact automatically',
        'Configure pipelines and deal stages so no lead gets lost between steps',
        'Add reminders and basic follow-up logic to improve response time',
        'Provide onboarding to ensure the team adopts the new workflow',
      ],
      channels: ['Kommo CRM', 'WhatsApp / Telegram / Instagram DM / Email', 'Landing pages / web forms', 'Google Sheets or analytics connectors'],
      industries: ['Real estate & property management', 'Travel & hospitality', 'E-commerce & product brands', 'Medical / wellness / clinics', 'Service-based businesses & agencies'],
      integrationTime: '1-2 weeks',
      shareLink: 'https://digitalworkforce.one/#kommo-crm-setup',
      imageUrl: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Classic Solutions (4)',
      badge: 'Classic Solution',
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Omni-Channel Communication Hub (Respond.io Setup)',
      subtitle: 'Unified Communication Platform',
      description: 'Most businesses handle conversations across multiple apps – WhatsApp, Instagram, email, TikTok, Messenger – which leads to lost messages, slow replies, and no visibility into client history. Respond.io brings all communication channels into a single interface, allowing sales and support teams to answer faster with full context. We implement and configure the platform so every inquiry is captured automatically and routed to the right manager, with conversation history stored in one place. This setup becomes the communication backbone that later allows AI assistants and automation to be added on top of it.',
      functions: [
        'Create a unified inbox for chats, calls, and emails',
        'Capture leads automatically from Meta Click-to-Chat and TikTok ads',
        'Provide two-way messaging from a single interface',
        'Store full message history per client, regardless of channel',
        'Log and centralize calls and voice messages',
        'Enable instant internal handoff between managers or departments',
      ],
      channels: ['Email', 'WhatsApp', 'Facebook Messenger', 'Instagram DM', 'TikTok Messages', 'Web chat widgets & landing pages'],
      industries: ['Real estate & property management', 'E-commerce & retail', 'Automotive sales & services', 'Education & online courses', 'Healthcare & clinics', 'Beauty & wellness', 'Consulting & agencies', 'Financial services & insurance'],
      integrationTime: '1-2 weeks',
      shareLink: 'https://digitalworkforce.one/#respond-io-setup',
      imageUrl: 'https://images.pexels.com/photos/5324986/pexels-photo-5324986.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Classic Solutions (4)',
      badge: 'Classic Solution',
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Tailor-Made End-to-End Analytics for Meta & Google Paid Traffic',
      subtitle: 'Revenue-Based Attribution Analytics',
      description: 'Most agencies claim to deliver end-to-end analytics, but in reality they only track leads — not revenue — because building a real data bridge between ad accounts, CRM, and messaging channels is technically complex. This solution unifies Meta and Google Ads data with real deal outcomes from your CRM, including attribution for leads coming directly from DMs on Instagram, Facebook, or WhatsApp. With full visibility from first click (or first message) to final payment, budget decisions are made on profit, not assumptions.',
      functions: [
        'Connect Meta & Google Ads data with CRM sales outcomes',
        'Track the full journey: click → DM → lead → sale',
        'Attribute revenue even from chat-based leads (DM-origin tracking)',
        'Automatically calculate CAC and cost per paying client',
        'Build dashboards by campaign, audience, keyword, or source',
        'Provide real-time ROI visibility for budget decisions',
        'Build custom reports based on business logic and KPIs',
        'Send Slack / Telegram notifications on KPI changes or regular KPI snapshots',
      ],
      channels: ['Meta Ads', 'Google Ads', 'CRM (Kommo, HubSpot, Salesforce, etc)', 'Google Sheets or custom analytics dashboards', 'Messaging attribution (Instagram / Facebook / WhatsApp DMs)'],
      industries: ['E-commerce & retail', 'Real estate & property development', 'Education & online courses', 'Automotive sales & services', 'Finance & insurance', 'Healthcare & aesthetic clinics', 'SaaS & subscription businesses', 'Marketing & advertising agencies'],
      integrationTime: '2-3 weeks',
      shareLink: 'https://digitalworkforce.one/#end-to-end-analytics',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Classic Solutions (4)',
      badge: 'Classic Solution',
      icon: <Gauge className="w-12 h-12" />,
      title: 'Call Tracking & Phone Lead Attribution',
      subtitle: 'Phone Call Attribution System',
      description: 'Phone calls are often the highest-intent leads, but most companies cannot attribute which campaign or source actually generated the call. As a result, phone-based conversions are treated as "blind spots" in marketing analytics. We implement call tracking using static and dynamic numbers so every incoming call is tied to a specific traffic source, campaign, or keyword. This enables full attribution for offline and online ads, giving a clear view of which channels actually produce paying clients.',
      functions: [
        'Assign unique tracking numbers to offline and online ad sources',
        'Use dynamic number substitution for online traffic attribution',
        'Attribute each call to campaign, keyword, or UTM',
        'Automatically record and transcribe phone conversations',
        'Save call data + traffic source + transcript into a clean Google Sheet',
        'Push call events into analytics and CRM for complete visibility',
        'Show which campaigns deliver real paying customers — not just clicks',
      ],
      channels: ['IP telephony / VoIP', 'CRM', 'Google Sheets for structured logging & transcripts', 'Offline and online advertising channels', 'Google Analytics (optional)'],
      industries: ['Real estate & property sales', 'Travel & hospitality', 'Automotive sales & services', 'Healthcare & clinics', 'Wellness and SPA', 'Education & course enrollments', 'Home services & field operations', 'Marketing & advertising agencies'],
      integrationTime: '1-2 weeks',
      shareLink: 'https://digitalworkforce.one/#call-tracking',
      imageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
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
  const navigate = useNavigate();

  const handleShare = () => {
    navigator.clipboard.writeText(shareLink);
  };

  const handleFullStory = () => {
    if (title === 'Text-based AI Sales Agent for initial client communication') {
      navigate('/employee/ai-sales-agent');
    }
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
              {badge !== 'Classic Solution' && (
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
              )}

              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  {badge === 'Classic Solution' ? 'Functions or What We Do' : 'Digital Employee Functions'}
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

              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{integrationTime}</span>
                  </div>
                  <button
                    onClick={handleShare}
                    className="p-2 text-slate-400 hover:text-orange-500 transition-colors duration-200"
                    aria-label="Share link"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  {title === 'Text-based AI Sales Agent for initial client communication' && (
                    <button
                      onClick={handleFullStory}
                      className="flex-1 px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Full Story
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                  <a
                    href="#cta"
                    className="flex-1 px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg text-center"
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
