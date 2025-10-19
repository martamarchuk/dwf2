import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Share2, CheckCircle, Zap, Users, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import CatalogueSegmentGroup from '@/components/ui/segment-group';
import { EMPLOYEES, EmployeeData } from '../data/employees';

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

  const filteredItems = EMPLOYEES.filter(item => item.category === selectedCategory);

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

function AgentCard(employee: EmployeeData) {
  const {
    id,
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
  } = employee;

  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleShare = () => {
    navigator.clipboard.writeText(shareLink);
  };

  const handleFullStory = () => {
    navigate(`/employee/${id}`);
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
                  <button
                    onClick={handleFullStory}
                    className="flex-1 px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Full Story
                    <ExternalLink className="w-4 h-4" />
                  </button>
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
