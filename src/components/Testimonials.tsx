import { CircularTestimonials } from './ui/circular-testimonials';

const testimonials = [
  {
    quote:
      "DigitalWorkforce transformed how we handle customer inquiries. Our AI employee handles routine questions 24/7, allowing our team to focus on complex client needs and strategic growth.",
    name: "Sarah Mitchell",
    designation: "Operations Director, TechFlow Solutions",
    src:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "The custom AI solution handles our property qualification process seamlessly. We've cut response time by 70% and our conversion rates have never been better. It's like having an expert team member who never sleeps.",
    name: "Marcus Chen",
    designation: "CEO, Urban Realty Group",
    src:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "What impressed us most was how they tailored the AI to understand our specific workflows. It integrates perfectly with our existing systems and has become an invaluable part of our operations.",
    name: "Elena Rodriguez",
    designation: "Head of Customer Success, CloudVentures",
    src:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1368&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">
            Client Success Stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Forward-Thinking Businesses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how companies are scaling their operations with AI employees
          </p>
        </div>

        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#0f172a",
              designation: "#64748b",
              testimony: "#334155",
              arrowBackground: "#ea580c",
              arrowForeground: "#ffffff",
              arrowHoverBackground: "#c2410c",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
