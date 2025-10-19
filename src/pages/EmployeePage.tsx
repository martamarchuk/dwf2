import { MessageSquare } from 'lucide-react';
import EmployeeDetail from '../components/EmployeeDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EmployeePage() {
  const employeeData = {
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
    imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <EmployeeDetail {...employeeData} />
      <Footer />
    </div>
  );
}
