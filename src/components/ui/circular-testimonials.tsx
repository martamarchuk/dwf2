import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: {
    name?: string;
    designation?: string;
    testimony?: string;
    arrowBackground?: string;
    arrowForeground?: string;
    arrowHoverBackground?: string;
  };
  fontSizes?: {
    name?: string;
    designation?: string;
    quote?: string;
  };
}

export function CircularTestimonials({
  testimonials,
  autoplay = false,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
        <div className="flex flex-col items-center text-center">
          <img
            src={currentTestimonial.src}
            alt={currentTestimonial.name}
            className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-orange-100"
          />

          <blockquote
            className="text-xl lg:text-2xl text-slate-700 mb-8 italic leading-relaxed"
            style={{ color: colors.testimony, fontSize: fontSizes.quote }}
          >
            "{currentTestimonial.quote}"
          </blockquote>

          <div className="mb-6">
            <p
              className="text-2xl font-bold text-slate-900 mb-1"
              style={{ color: colors.name, fontSize: fontSizes.name }}
            >
              {currentTestimonial.name}
            </p>
            <p
              className="text-lg text-slate-600"
              style={{ color: colors.designation, fontSize: fontSizes.designation }}
            >
              {currentTestimonial.designation}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: colors.arrowBackground || '#ea580c',
                color: colors.arrowForeground || '#ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.arrowHoverBackground || '#c2410c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.arrowBackground || '#ea580c';
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: colors.arrowBackground || '#ea580c',
                color: colors.arrowForeground || '#ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.arrowHoverBackground || '#c2410c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.arrowBackground || '#ea580c';
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-orange-500 w-8' : 'bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
