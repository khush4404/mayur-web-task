// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export function Services() {
  const services = [
    {
      title: "Domestic Water Supply",
      description: "We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that supports every team member to perform beyond records.",
      image: "/water-supply.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#1a365d" />
          <path d="M16 8C16 8 22 16 16 24C10 16 16 8 16 8Z" fill="#fff" />
        </svg>
      )
    },
    {
      title: "Motor Control Centres (MCC)",
      description: "We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that supports every team member to perform beyond records.",
      image: "/mcc.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#1a365d" />
          <path d="M16 10V22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Pump Stations",
      description: "We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that supports every team member to perform beyond records.",
      image: "/pump-station.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#1a365d" />
          <rect x="12" y="12" width="8" height="8" rx="2" fill="#fff" />
        </svg>
      )
    },
    {
      title: "Domestic Water Supply",
      description: "We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that supports every team member to perform beyond records.",
      image: "/water-supply.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#1a365d" />
          <path d="M16 8C16 8 22 16 16 24C10 16 16 8 16 8Z" fill="#fff" />
        </svg>
      )
    },
    {
      title: "Motor Control Centres (MCC)",
      description: "We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that supports every team member to perform beyond records.",
      image: "/mcc.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#1a365d" />
          <path d="M16 10V22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Pump Stations",
      description: "We strongly believe that success is based on pro-active and dedicated teamwork in a professional and ethical environment that supports every team member to perform beyond records.",
      image: "/pump-station.png",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#1a365d" />
          <rect x="12" y="12" width="8" height="8" rx="2" fill="#fff" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-amber-500">OUR</span>{" "}
            <span className="text-slate-900">SERVICES</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide a wide range of professional services, connecting you with trusted experts in recruitment, IT support, cleaning, and removal services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.services-pagination',
            }}
            className="testimonials-swiper max-w-6xl"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center pb-8 pt-0" style={{ minHeight: 420 }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="-mt-8 mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="px-6 text-center flex-1 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-[#1a365d] mb-3 mt-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button className="px-6 py-2 text-sm font-medium text-[#1a365d] hover:text-amber-500 transition-colors">
                      View Service →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="services-pagination flex justify-center mt-8 space-x-2"></div>
        </div>
      </div>
      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #E2E8F0 !important;
          opacity: 1 !important;
          width: 14px !important;
          height: 14px !important;
          margin: 0 6px !important;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #F2B721 !important;
        }
      `}</style>
    </section>
  );
}