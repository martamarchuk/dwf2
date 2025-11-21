import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Digital Workforce</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Creating tailored AI employees that free your team from repetitive tasks, enabling growth and scalability.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#catalogue" className="text-slate-400 hover:text-white transition-colors duration-200">
                  AI Sales Agents
                </a>
              </li>
              <li>
                <a href="#catalogue" className="text-slate-400 hover:text-white transition-colors duration-200">
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a href="#cta" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="#cta" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Automations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              <li>
                <a href="#catalogue" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="#catalogue" className="text-slate-400 hover:text-white transition-colors duration-200">
                  E-commerce & Retail
                </a>
              </li>
              <li>
                <a href="#catalogue" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Hospitality & Travel
                </a>
              </li>
              <li>
                <a href="#catalogue" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Healthcare & Wellness
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#philosophy" className="text-slate-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#cta" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#cta" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Book a Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Digital Workforce. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
