import { useState } from 'react';
import { Clock, X } from 'lucide-react';
import ImageSlider from './ImageSlider';

interface BlogArticleSection {
  type: 'heading' | 'paragraph' | 'image' | 'feature-highlight' | 'slider';
  content: string;
  imageUrl?: string;
  featureTitle?: string;
  images?: string[];
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
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 lg:p-12">
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
                  const hasMultipleImages = section.images && section.images.length > 1;
                  const hasSingleImage = section.images && section.images.length === 1;

                  return (
                    <div key={index} className="my-10 p-4 sm:p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border-2 border-green-200 shadow-md">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-lg font-bold text-lg">
                          ✓
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                          Feature
                        </h3>
                      </div>
                      <p className="text-lg text-slate-800 font-medium mb-6">
                        {section.content}
                      </p>
                      {hasMultipleImages && (
                        <ImageSlider images={section.images!} className="" />
                      )}
                      {hasSingleImage && (
                        <button
                          onClick={() => openModal(section.images![0])}
                          className="w-full rounded-none sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <img
                            src={section.images![0]}
                            alt={section.content}
                            className="w-full h-auto"
                          />
                        </button>
                      )}
                      {section.imageUrl && !section.images && (
                        <button
                          onClick={() => openModal(section.imageUrl!)}
                          className="w-full rounded-none sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <img
                            src={section.imageUrl}
                            alt={section.content}
                            className="w-full h-auto"
                          />
                        </button>
                      )}
                    </div>
                  );
                }

                if (section.type === 'slider' && section.images && section.images.length > 0) {
                  const hasMultipleImages = section.images.length > 1;

                  return (
                    <div key={index} className="my-10">
                      {hasMultipleImages ? (
                        <ImageSlider images={section.images} />
                      ) : (
                        <div className="relative w-full max-w-5xl mx-auto">
                          <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
                            <button
                              onClick={() => openModal(section.images![0])}
                              className="w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                              <img
                                src={section.images[0]}
                                alt={section.content}
                                className="w-full h-full object-contain"
                              />
                            </button>
                          </div>
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

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-slate-900" />
          </button>
          <div className="max-w-7xl max-h-[90vh] overflow-auto">
            <img
              src={modalImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
