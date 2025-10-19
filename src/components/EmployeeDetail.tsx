import { Clock, CheckCircle, Zap, Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ContactForm from './ContactForm';

interface EmployeeDetailProps {
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
  imageUrl: string;
  category: string;
}

export default function EmployeeDetail({
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
  imageUrl,
  category,
}: EmployeeDetailProps) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToCatalogue = () => {
    navigate('/#catalogue');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button
            onClick={handleBackToCatalogue}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Explore all AI Employees
          </button>
          <nav className="mt-4 text-sm text-slate-600">
            <span className="hover:text-orange-500 cursor-pointer" onClick={handleBackToCatalogue}>
              Catalogue
            </span>
            <span className="mx-2">/</span>
            <span className="text-slate-400">{category.split(' (')[0]}</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{title}</span>
          </nav>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="relative h-96 w-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-white/95 backdrop-blur-sm text-orange-600 rounded-2xl">
                  {icon}
                </div>
                <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  {badge}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {title}
              </h1>
            </div>
          </div>

          <div className="p-8 lg:p-12 space-y-8">
            {badge !== 'Classic Solution' && (
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                <Users className="w-6 h-6 text-slate-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-slate-500 font-semibold mb-1">
                    Human role synonym for digital employee
                  </p>
                  <p className="text-lg text-slate-900 font-medium">
                    {subtitle}
                  </p>
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-500" />
                {badge === 'Classic Solution' ? 'Functions or What We Do' : 'Digital Employee Functions'}
              </h2>
              <div className="grid gap-4">
                {functions.map((func, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{func}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Digital Habitat
                </h3>
                <div className="flex flex-wrap gap-3">
                  {channels.map((channel, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              {platforms && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    E-commerce Platforms
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {platforms.map((platform, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-300"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Applicable Industries
                </h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-full border border-slate-200"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 bg-orange-50 rounded-2xl border border-orange-200">
                <Clock className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="text-sm text-orange-600 font-semibold mb-1">Integration Time</p>
                  <p className="text-lg text-slate-900 font-bold">{integrationTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
