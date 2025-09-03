"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


const testimonials = [
  {
    id: 1,
    name: "Bob Toski",
    image: "https://malaskagolf.com/cdn/shop/files/Mike_and_Bob-min.png?v=1699975838&width=540",
    content:
      "Bob Toski is the consummate artist. His hands can paint whatever picture his mind sees. There is a very structured way he learned how to do that. He has shared much of his knowledge with me. It has been invaluable for me as a player and a teacher to talk to and listen to a living legend, both as a player and as a teacher.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "https://malaskagolf.com/cdn/shop/files/Mike_and_Jack-min.png?v=1699975823&width=540",
    content:
      "Working with this team has been transformative for my career. Their expertise and dedication to excellence is unmatched. The structured approach they bring to every project ensures consistent, high-quality results that exceed expectations every time.",
  },
  {
    id: 3,
    name: "Michael Chen",
    image: "https://malaskagolf.com/cdn/shop/files/Mike-and-Ashley-min.png?v=1699975851&width=540",
    content:
      "The knowledge and experience shared here is invaluable. As someone who values continuous learning and growth, I've found their insights to be both practical and inspiring. It's rare to find such a combination of expertise and genuine passion for teaching.",
  },
]

export default function TestimonialSlider2() {
  return (
    <div className="lg:max-w-4xl lg:my-20  mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay    ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12  p-8 lg:p-12 ">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <div className="lg:w-72 h-64  lg:h-72 rounded-lg overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-md archivo-black-regular lg:text-lg      font-bold text-gray-900 mb-6 font-serif">{testimonial.name}</h3>
                <p className="text-gray-700 text-md leading-relaxed font-sans">{testimonial.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-8 gap-2"></div>
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background-color: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .swiper-pagination-bullet-active-custom {
          background-color: #374151;
        }
        
        .testimonial-swiper {
          padding: 0 60px 60px 60px;
        }
        
        @media (max-width: 768px) {
          .testimonial-swiper {
            padding: 0 20px 40px 20px;
          }
        }
      `}</style>
    </div>
  )
}
