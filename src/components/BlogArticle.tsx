import { Clock, X } from 'lucide-react';
import { useState } from 'react';

interface BlogArticleSection {
  type: 'heading' | 'paragraph' | 'image' | 'feature-highlight';
  content: string;
  imageUrl?: string;
  featureTitle?: string;
}

interface BlogArticleProps {
  title: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  readTime: string;
  sections: BlogArticleSection[];
}

export default function BlogArticle({ title, author, readTime, sections }: BlogArticleProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
    <article className="w-full py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 lg:p-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200">
            <img
              src={author.avatarUrl}
              alt={author.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-100"
            />
            <div>
              <p className="text-lg font-semibold text-slate-900">{author.name}</p>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4" />
                <span>{readTime} read</span>
              </div>
            </div>
          </div>

          <div className="relative h-80 lg:h-96 mb-12 rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            {sections.map((section, index) => {
              if (section.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6 first:mt-0">
                    {section.content}
                  </h2>
                );
              }

              if (section.type === 'paragraph') {
                return (
                  <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6">
                    {section.content}
                  </p>
                );
              }

              if (section.type === 'image' && section.imageUrl) {
                return (
                  <div key={index} className="my-10 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={section.imageUrl}
                      alt={section.content}
                      className="w-full h-auto"
                    />
                  </div>
                );
              }

              if (section.type === 'feature-highlight') {
                return (
                  <div key={index} className="my-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-xl font-bold text-xl">
                          ✓
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                          {section.content}
                        </h3>
                      </div>
                    </div>
                    {section.imageUrl && (
                      <div
                        className="w-full cursor-pointer group"
                        onClick={() => openLightbox(section.imageUrl!)}
                      >
                        <img
                          src={section.imageUrl}
                          alt={section.content}
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </article>

    {lightboxImage && (
      <div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={closeLightbox}
      >
        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
          aria-label="Close"
        >
          <X className="w-8 h-8 text-white" />
        </button>
        <img
          src={lightboxImage}
          alt="Full size"
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
}
