import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const employees = [
  {
    id: 'ai-sales-agent',
    title: 'AI Sales Agent — DigitalWorkforce.one | Automate Lead Response & Boost Conversions',
    description: 'Discover our AI-powered Sales Agent — instant lead response, automatic qualification, and effortless follow-ups to turn visitors into clients 24/7.',
    keywords: 'AI sales agent, automated lead response, digital workforce, sales automation, chatbot for e-commerce, lead qualification'
  },
  {
    id: 'ecommerce-agent',
    title: 'E-commerce Agent - Digital Workforce',
    description: 'Streamline your e-commerce operations with AI automation for order processing, customer support, and inventory management.',
    keywords: 'e-commerce automation, AI agent, order processing, customer support automation'
  },
  {
    id: 'linkedin-sdr',
    title: 'LinkedIn SDR - Digital Workforce',
    description: 'Automate LinkedIn outreach and lead generation with our AI-powered SDR agent.',
    keywords: 'LinkedIn automation, SDR agent, lead generation, B2B sales automation'
  },
  {
    id: 'telegram-lead-catcher',
    title: 'Telegram Lead Catcher - Digital Workforce',
    description: 'Capture and qualify leads automatically through Telegram with AI automation.',
    keywords: 'Telegram bot, lead capture, messenger automation, customer engagement'
  },
  {
    id: 'dubai-real-estate-case',
    title: 'Dubai Real Estate Case Study - Digital Workforce',
    description: 'See how we helped a Dubai real estate company automate their lead generation and customer engagement.',
    keywords: 'real estate automation, Dubai case study, lead generation, property management'
  },
  {
    id: 'moldyfun-case',
    title: 'MoldyFun Case Study - Digital Workforce',
    description: 'Learn how MoldyFun automated their e-commerce operations with our AI agents.',
    keywords: 'e-commerce case study, automation success story, online store automation'
  },
  {
    id: 'digital-agency-linkedin-case',
    title: 'Digital Agency LinkedIn Case Study - Digital Workforce',
    description: 'Discover how a digital agency automated their LinkedIn outreach and lead generation.',
    keywords: 'digital agency automation, LinkedIn case study, B2B marketing automation'
  },
  {
    id: 'bali-listing-manager-case',
    title: 'Bali Listing Manager Case Study - Digital Workforce',
    description: 'See how we automated property listing management for a Bali real estate company.',
    keywords: 'property management automation, Bali case study, listing automation'
  },
  {
    id: 'bali-telegram-case',
    title: 'Bali Telegram Case Study - Digital Workforce',
    description: 'Learn how a Bali business automated customer communication through Telegram.',
    keywords: 'Telegram automation, Bali case study, customer communication'
  },
  {
    id: 'ai-transcription-case',
    title: 'AI Transcription Case Study - Digital Workforce',
    description: 'See how we implemented AI transcription automation for customer calls and meetings.',
    keywords: 'AI transcription, call transcription, meeting notes automation'
  },
  {
    id: 'instagram-lead-hunter-case',
    title: 'Instagram Lead Hunter Case Study - Digital Workforce',
    description: 'Discover how we automated Instagram lead generation and engagement.',
    keywords: 'Instagram automation, social media lead generation, engagement automation'
  },
  {
    id: 'translatebot-case',
    title: 'TranslateBot Case Study - Digital Workforce',
    description: 'Learn how we built an AI translation bot for multilingual customer support.',
    keywords: 'translation bot, multilingual support, AI translation automation'
  },
  {
    id: 'booking-manager',
    title: 'Booking Manager - Digital Workforce',
    description: 'Automate appointment scheduling and booking management with AI.',
    keywords: 'booking automation, appointment scheduling, calendar management AI'
  },
  {
    id: 'voice-receptionist',
    title: 'Voice Receptionist - Digital Workforce',
    description: 'AI-powered voice receptionist for handling calls and customer inquiries 24/7.',
    keywords: 'AI receptionist, voice automation, call handling, virtual receptionist'
  },
  {
    id: 'sales-copilot',
    title: 'Sales Copilot - Digital Workforce',
    description: 'AI assistant for sales teams to automate CRM updates, follow-ups, and reporting.',
    keywords: 'sales assistant AI, CRM automation, sales productivity tools'
  },
  {
    id: 'pm-assistant',
    title: 'PM Assistant - Digital Workforce',
    description: 'AI project management assistant to automate task tracking and team coordination.',
    keywords: 'project management AI, task automation, team coordination tools'
  },
  {
    id: 'ai-recruiter',
    title: 'AI Recruiter - Digital Workforce',
    description: 'Automate candidate screening, interview scheduling, and recruitment workflows.',
    keywords: 'AI recruiting, candidate screening automation, HR automation'
  },
  {
    id: 'traffic-manager',
    title: 'Traffic Manager - Digital Workforce',
    description: 'AI-powered traffic and campaign management for digital marketing.',
    keywords: 'marketing automation, campaign management, traffic optimization AI'
  },
  {
    id: 'content-generator',
    title: 'Content Generator - Digital Workforce',
    description: 'Automate content creation for social media, blogs, and marketing materials.',
    keywords: 'AI content creation, automated content, copywriting AI, marketing content'
  },
  {
    id: 'knowledge-chatbase',
    title: 'Knowledge Chatbase - Digital Workforce',
    description: 'AI chatbot trained on your company knowledge base for customer support.',
    keywords: 'AI chatbot, knowledge base automation, customer support bot'
  },
  {
    id: 'video-clone',
    title: 'Video Clone - Digital Workforce',
    description: 'Create AI-powered video content with digital avatars and automated video generation.',
    keywords: 'AI video generation, digital avatar, video automation, synthetic media'
  },
  {
    id: 'call-analysis',
    title: 'Call Analysis - Digital Workforce',
    description: 'Automated call recording, transcription, and analysis for quality assurance.',
    keywords: 'call analytics, quality assurance automation, call transcription'
  },
  {
    id: 'kommo-crm-setup',
    title: 'Kommo CRM Setup - Digital Workforce',
    description: 'Professional Kommo CRM setup and automation integration services.',
    keywords: 'Kommo CRM, CRM setup, CRM automation, sales CRM integration'
  },
  {
    id: 'respond-io-setup',
    title: 'Respond.io Setup - Digital Workforce',
    description: 'Expert Respond.io configuration and multi-channel communication automation.',
    keywords: 'Respond.io, multi-channel messaging, customer communication platform'
  },
  {
    id: 'end-to-end-analytics',
    title: 'End-to-End Analytics - Digital Workforce',
    description: 'Comprehensive business analytics and reporting automation.',
    keywords: 'business analytics, automated reporting, data analytics platform'
  },
  {
    id: 'call-tracking',
    title: 'Call Tracking - Digital Workforce',
    description: 'Advanced call tracking and attribution for marketing campaigns.',
    keywords: 'call tracking, marketing attribution, campaign analytics, ROI tracking'
  },
];

// Read the base template
const templatePath = path.resolve(__dirname, 'dist/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

employees.forEach(employee => {
  console.log(`Generating SEO page for ${employee.id}...`);

  const url = `https://digitalworkforce.one/employee/${employee.id}`;

  // Replace individual meta tags and title
  let html = template;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${employee.title}</title>`);

  // Replace or add description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${employee.description}" />`
  );

  // Add keywords after description
  html = html.replace(
    /(<meta name="description" content=".*?" \/>)/,
    `$1\n    <meta name="keywords" content="${employee.keywords}" />\n    <meta name="robots" content="index,follow" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${employee.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${employee.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${url}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${employee.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${employee.description}" />`
  );

  // Create directory
  const dirPath = path.resolve(__dirname, `dist/employee`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Write file
  const filePath = path.resolve(dirPath, `${employee.id}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`✓ Generated ${filePath}`);
});

console.log('\nSEO pages generated successfully!');
