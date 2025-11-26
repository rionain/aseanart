import { Wrench, Sparkles, Clock, Award } from 'lucide-react';

export default function ServiceHighlight() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Professional Furniture Services
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Beyond crafting beautiful furniture, we offer comprehensive furniture services
              including restoration, repair, and maintenance. Our skilled craftsmen breathe
              new life into your cherished pieces using traditional techniques and sustainable practices.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-900 p-3 rounded-lg flex-shrink-0">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expert Restoration
                  </h3>
                  <p className="text-gray-600">
                    Restore antique and damaged furniture to its former glory with our meticulous restoration services
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-900 p-3 rounded-lg flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Custom Refinishing
                  </h3>
                  <p className="text-gray-600">
                    Professional refinishing services to revitalize and protect your teak furniture
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-900 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Timely Service
                  </h3>
                  <p className="text-gray-600">
                    Quick turnaround times without compromising on quality craftsmanship
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-900 p-3 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Quality Guarantee
                  </h3>
                  <p className="text-gray-600">
                    Every service backed by our commitment to excellence and customer satisfaction
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/services"
              className="inline-block bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-800 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Learn About Our Services
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5974042/pexels-photo-5974042.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Furniture craftsman at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-3xl font-bold text-amber-900 mb-1">15+ Years</p>
              <p className="text-gray-600">of expertise in teak furniture craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
