export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <p className="text-2xl lg:text-3xl font-bold text-slate-900 leading-relaxed">
              We believe the more "universal" an IT solution claims to be, the less value it brings to a particular business
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              That's why we build custom solutions – designed around your company's unique processes
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Each solution is shaped around the way your business actually works, so AI technology and automation
              become the foundation for growth and scalability
            </p>
          </div>

          <div className="flex justify-end items-center gap-4 pt-8 border-t border-slate-200">
            <img
              src="/igor-70x70.jpg"
              alt="Igor Palatkevich"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-right">
              <p className="font-semibold text-slate-900">Igor Palatkevich</p>
              <p className="text-sm text-slate-500">CEO, Solution Architect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
