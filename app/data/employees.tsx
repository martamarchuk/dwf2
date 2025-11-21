import { MessageSquare, ShoppingCart, Briefcase, Linkedin, Home, Video, Instagram, Calendar, Phone, Headset, ClipboardList, UserCheck, Target, Image, BookOpen, VideoIcon, PhoneCall, Settings, TrendingUp, Gauge, Globe } from 'lucide-react';

export interface EmployeeData {
  id: string;
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

export const EMPLOYEES: EmployeeData[] = [
  {
    id: 'ai-sales-agent',
    category: 'Ready-to-use',
    badge: 'Ready-to-use',
    icon: <MessageSquare className="w-12 h-12" />,
    title: 'AI Sales Agent for initial client communication',
    subtitle: 'Inbound Sales Representative',
    description: 'Handle initial conversations and qualify leads 24/7',
    functions: ['Instant responses', 'Multi-language support', 'Lead qualification'],
    channels: ['Website', 'WhatsApp', 'Telegram'],
    industries: ['Real Estate', 'Healthcare'],
    integrationTime: '1-3 weeks',
    shareLink: 'https://digitalworkforce.one/#ai-sales-agent',
    imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'ecommerce-agent',
    category: 'Ready-to-use',
    badge: 'Ready-to-use',
    icon: <ShoppingCart className="w-12 h-12" />,
    title: 'AI Sales Agent for e-commerce',
    subtitle: 'E-commerce Sales Agent',
    description: 'Automated sales agent for Shopify stores',
    functions: ['Product consultation', 'Order creation', 'Payment links'],
    channels: ['Instagram', 'WhatsApp', 'Website'],
    platforms: ['Shopify'],
    industries: ['E-commerce'],
    integrationTime: '1-3 weeks',
    shareLink: 'https://digitalworkforce.one/#ecommerce-agent',
    imageUrl: 'https://images.pexels.com/photos/4065137/pexels-photo-4065137.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function getEmployeeById(id: string): EmployeeData | undefined {
  return EMPLOYEES.find(emp => emp.id === id);
}
