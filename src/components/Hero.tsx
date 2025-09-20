import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="home" className="relative bg-slate-900 min-h-[700px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80')`
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900 bg-opacity-60" />

      {/* Top Curved Design */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-10">
        <svg className="relative block w-full h-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,40 900,80 C1050,100 1200,0 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            START ON YOUR BUSINESS
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            begins with the right strategy, strong connections, and access to essential services that can help you. Whether you need expert guidance, reliable service providers, or a platform to connect with potential clients, having the right support system can make all the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-medium">
              Learn More
            </Button>
            <Button className="bg-[#F2B721] hover:bg-[#e0a900] text-slate-900 px-8 py-3 text-lg font-medium">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c4.418 0 8-1.79 8-4V7c0-2.21-3.582-4-8-4S4 4.79 4 7v3c0 2.21 3.582 4 8 4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 10v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recruitment Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connecting businesses with top-tier professionals for various roles. Our streamlined hiring process ensures you get the right talent efficiently.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1B2B6B] rounded-lg p-8 shadow-lg text-center text-white">
              <div className="w-16 h-16 bg-[#F2B721] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#1B2B6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  <circle cx="12" cy="12" r="10" stroke="#1B2B6B" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">IT & Digital Services</h3>
              <p className="text-white text-sm leading-relaxed">
                Empowering businesses with advanced technology solutions, from website development to IT support, ensuring seamless digital transformation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10v6a2 2 0 002 2h14a2 2 0 002-2v-6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 10V6a4 4 0 00-8 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Moving & Logistics Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Efficient and reliable relocation services for businesses and individuals. We handle transportation and logistics with precision and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}