import { Clock, CheckCircle, Zap, Users, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import ContactForm from './ContactForm';
import BlogArticle from './BlogArticle';

interface BlogArticleSection {
  type: 'heading' | 'paragraph' | 'image' | 'feature-highlight';
  content: string;
  imageUrl?: string;
  featureTitle?: string;
}

interface BlogArticleData {
  title: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  readTime: string;
  sections: BlogArticleSection[];
}

interface EmployeeDetailProps {
  id: string;
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
  blogArticle?: BlogArticleData;
}

export default function EmployeeDetail({
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
  imageUrl,
  category,
  blogArticle,
}: EmployeeDetailProps) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => {
    if (id === 'moldyfun-case') {
      return [
        imageUrl,
        '/projects/moldyfun/website_full.png',
        '/projects/moldyfun/kommo_pipeline.png',
        '/projects/moldyfun/kommo_lead_full screen.png'
      ];
    }
    return [imageUrl];
  }, [id, imageUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, []);

  const handleBackToCatalogue = () => {
    navigate('/#catalogue');
  };

  const handlePrevImage = () => {
    console.log('Previous clicked, current:', currentImageIndex, 'total images:', images.length);
    setCurrentImageIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      console.log('New index:', newIndex);
      return newIndex;
    });
  };

  const handleNextImage = () => {
    console.log('Next clicked, current:', currentImageIndex, 'total images:', images.length);
    setCurrentImageIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      console.log('New index:', newIndex);
      return newIndex;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
        <img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none"></div>

        <button
          onClick={handlePrevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-200 z-20 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-200 z-20 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                console.log('Dot clicked, setting index to:', index);
                setCurrentImageIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                index === currentImageIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 pointer-events-none">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4 pointer-events-auto">
              <div className="p-4 bg-white/95 backdrop-blur-sm text-orange-600 rounded-2xl">
                {icon}
              </div>
              <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                {badge}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg pointer-events-auto">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              AI Employees
            </span>
            <span className="mx-2">/</span>
            <span className="text-slate-400">{category.split(' (')[0]}</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{title}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {description}
              </p>
            </div>

            {badge !== 'Classic Solution' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-slate-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-slate-500 font-semibold mb-2">
                      Human role synonym for digital employee
                    </p>
                    <p className="text-xl text-slate-900 font-medium">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="w-7 h-7 text-orange-500" />
                {badge === 'Classic Solution' ? 'Functions or What We Do' : 'Digital Employee Functions'}
              </h2>
              <div className="grid gap-4">
                {functions.map((func, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-200 border border-slate-100"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{func}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 sticky top-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Digital Habitat
                </h3>
                <div className="flex flex-wrap gap-2">
                  {channels.map((channel, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              {platforms && (
                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    E-commerce Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((platform, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-300"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Applicable Industries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <Clock className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-orange-600 font-semibold mb-1">Integration Time</p>
                    <p className="text-lg text-slate-900 font-bold">{integrationTime}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <a
                  href="#cta"
                  className="block w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg text-center"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {blogArticle && (
          <BlogArticle
            title={blogArticle.title}
            author={blogArticle.author}
            readTime={blogArticle.readTime}
            sections={blogArticle.sections}
          />
        )}

        <div id="cta">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
