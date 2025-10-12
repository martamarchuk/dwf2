import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center gap-3">
            <img src="/logo 4_transparent_bg.png" alt="Digital Workforce Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-slate-900">Digital Workforce</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#catalogue" className="text-slate-900 font-medium hover:text-orange-500 transition-colors duration-200">
              Explore AI Employees
            </a>
            <a href="#philosophy" className="text-slate-900 font-medium hover:text-orange-500 transition-colors duration-200">
              About Us
            </a>
            <a href="#cta" className="text-slate-900 font-medium hover:text-orange-500 transition-colors duration-200">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#cta"
              className="inline-flex items-center px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl shadow-orange-500/30"
            >
              Book a Demo
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#catalogue"
              className="block py-2 text-slate-900 font-medium hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore AI Employees
            </a>
            <a
              href="#philosophy"
              className="block py-2 text-slate-900 font-medium hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#cta"
              className="block py-2 text-slate-900 font-medium hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#cta"
              className="block w-full text-center px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-200 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
