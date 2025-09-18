import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from "lucide-react";

const TestimonialSlider1 = () => {
  const testimonials = [
    {
      text: "With Steven you get polite communication, exceptional understanding of golf biomechanics and even a weekly planner of how to fine tune your swing. I'm actually a little surprised at the quality of service for the price! All major issues are identified and a detailed description of how to improve each issue is provided. If you're anyone who is on the fence about doing this, rest assured the service is quality.",
      author: "Tom Golf",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "The attention to detail Steven gives your swing and the resources he gives are unparalleled. Not only am I happy with the purchase, I’ll be buying another session in the next month or two after working on the drills he gave me. Can’t recommend more highly.",
      author: "Tony_ace3",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Steven provided crisp feedback around items in my golf swing that I have struggled with for years. His explanation was very easy to understand and he provided actionable drills for me to implement so I can address swing faults. It is evident Steven possesses a deep understanding of how the body moves throughout the swing.",
      author: "akg312",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Great analysis, thorough and critical with a lot of demonstration and pointers received. Honestly can’t find a better for value in terms of golf lessons/analysis anywhere else",
      author: "Johnpaul1235",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Deep in depth analysis and excellent drill suggestions for improving weak points in the swing",
      author: "- Dylan_fogarty",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "This was fantastic! He really knows his stuff and gave great information. Highly recommend",
      author: "- tonynguyen321",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Steven provided a comprehensive swing analysis, and drills to help work on the changes needed. Really pleased with the outcome, highly recommend",
      author: "Bobsarjo",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "If you want to improve your golf swing, you need to get in touch with this guy! Great guy with a deep understanding when it comes to biomechanics in a golf swing.",
      author: "Kev981",
      title: "Former Editor-Golf Magazine. Founder of Proponent Group"
    },
    {
      text: "Went above and beyond, thats all i have to say, great info, explanation, drills in depth analysis.",
      author: "darkouzelac",
      title: "Senior Editor-Golf Digest"
    },
    {
      text: "extremely happy with my delivery. great in depth analysis that I am excited to learn from and put into practice. breaking down the different points in my swing was very helpful.",
      author: "- Jxlcreation",
      title: "Senior Editor-Golf Digest"
    },

  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-green-50 mt-12 lg:px-12 px-6 py-12">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Default: 1 slide on small screens
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },   // 1 slide for screens >= 640px
          1024: { slidesPerView: 3, spaceBetween: 30 },  // 3 slides for screens >= 1024px
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.testimonial-pagination',
          bulletClass: 'testimonial-bullet',
          bulletActiveClass: 'testimonial-bullet-active',
        }}
        speed={800}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className={`relative bg-white rounded-2xl border-l-8 border-blue-400 shadow-lg p-8 flex flex-col h-full transition-all duration-500
                ${isActive ? 'scale-105 shadow-2xl' : 'opacity-80'}`}>
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-blue-300 absolute -top-5 -left-5 bg-white rounded-full p-2 shadow" />
                {/* Testimonial text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic mt-4">
                  {testimonial.text}
                </p>
                {/* Author section */}
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4 shadow">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">{testimonial.author}</p>
                    
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        {/* Custom pagination container */}
        <div className="testimonial-pagination mt-8 flex justify-center space-x-4"></div>
      </Swiper>

      <style jsx global>{`
        .testimonial-swiper {
          padding-bottom: 40px;
        }
        .testimonial-bullet {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #a5b4fc;
          border-radius: 50%;
          margin: 0 8px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .testimonial-bullet-active {
          background-color: #2563eb;
          transform: scale(1.25);
        }
        .swiper-slide {
          transition: all 0.5s;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider1;

