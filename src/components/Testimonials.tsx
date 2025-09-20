import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export function Testimonials() {
  const testimonials = [
    {
      text: "Working with this team has been transformative for our business. Their strategic insights and hands-on approach helped us increase our revenue by 40% in just 6 months.",
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1628657485319-5865d0f2791d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4Mjk4NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      text: "Exceptional service and expertise. They helped us navigate complex market challenges and emerge stronger than ever. Highly recommended!",
      name: "Michael Roberts",
      position: "Founder, Growth Dynamics",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODIyNTAxNHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      text: "Outstanding results! The team's dedication and expertise helped us achieve our goals faster than we thought possible. Truly exceptional.",
      name: "Jennifer Davis",
      position: "Director, Innovation Corp",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4Mjk3Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#F2B721]">WHAT OUR</span>{" "}
            <span className="text-[#1B2B6B]">HAPPY CLIENTS SAY</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover why our customers love working with us! Read real testimonials from satisfied clients who have experienced our top-notch services firsthand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonials-pagination',
            }}
            className="testimonials-swiper max-w-6xl"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 flex gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[280px] h-[340px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed relative">
                      {testimonial.text}
                    </p>
                    <div>
                      <div className="text-[#1B2B6B] text-xl font-bold mb-1">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="testimonials-pagination flex justify-center mt-8 space-x-2"></div>
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