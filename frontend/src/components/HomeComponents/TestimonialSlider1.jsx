import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const       TestimonialSlider1 = () => {
  const testimonials = [
    {
      text: "Mike is more than a teacher of the swing; Mike is a student of it himself, having studied it for many decades. He continually evaluates new theories, ideas, and methods and uses his knowledge of the body to match the right approach to the right person. Mike isn't just a fine teacher; he's also an excellent player.",
      author: "Mark King",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Mike is more than a teacher of the swing; Mike is a student of it himself, having studied it for many decades. He continually evaluates new theories, ideas, and methods and uses his knowledge of the body to match the right approach to the right person. Mike isn't just a fine teacher; he's also an excellent player.",
      author: "Mark King",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Mike is more than a teacher of the swing; Mike is a student of it himself, having studied it for many decades. He continually evaluates new theories, ideas, and methods and uses his knowledge of the body to match the right approach to the right person. Mike isn't just a fine teacher; he's also an excellent player.",
      author: "Mark King",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Mike is more than a teacher of the swing; Mike is a student of it himself, having studied it for many decades. He continually evaluates new theories, ideas, and methods and uses his knowledge of the body to match the right approach to the right person. Mike isn't just a fine teacher; he's also an excellent player.",
      author: "Mark King",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Mike is more than a teacher of the swing; Mike is a student of it himself, having studied it for many decades. He continually evaluates new theories, ideas, and methods and uses his knowledge of the body to match the right approach to the right person. Mike isn't just a fine teacher; he's also an excellent player.",
      author: "Mark King",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Mike is more than a teacher of the swing; Mike is a student of it himself, having studied it for many decades. He continually evaluates new theories, ideas, and methods and uses his knowledge of the body to match the right approach to the right person. Mike isn't just a fine teacher; he's also an excellent player.",
      author: "Mark King",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "Mike is more than a teacher of the swing; Mike is a student of it himself, having studied it for many decades. He continually evaluates new theories, ideas, and methods and uses his knowledge of the body to match the right approach to the right person. Mike isn't just a fine teacher; he's also an excellent player.",
      author: "Mark King",
      title: "Former President and CEO TaylorMade Adidas"
    },
    {
      text: "I've had the very good fortune of working with Mike Malaska for nearly 30 years in my former roles overseeing instruction at Golf Magazine and the Golf Channel. Without any doubt, he has been a pioneer in merging fitness and swing instruction.",
      author: "Lorin Anderson",
      title: "Former Editor-Golf Magazine. Founder of Proponent Group"
    },
    {
      text: "Mike has spent his entire life in golf as a player, teacher, a coach, an innovator and, quite frankly, a giant in the field of golf instruction. His technical knowledge is only exceeded by his desire to guide people on their golf journeys. He's simply that good.",
      author: "Peter Morrice",
      title: "Senior Editor-Golf Digest"
    }
  ];

  return (
    <div className="w-full bg-white mt-12 px-4 py-12">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
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
              <div className={`rounded-xl p-6 md:p-8 transition-all duration-500 h-full 
                ${isActive 
                  ? 'bg-white shadow-xl transform -translate-y-4 scale-105' 
                  : 'bg-gray-100 shadow-lg'}`}
              >
           <div className='flex gap-1'>
              <svg
        className="w-62 h-fit text-gray-800 mb-2 -ml-2"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M12.5 6C7.253 6 3 10.253 3 15.5c0 4.142 3.358 7.5 7.5 7.5 2.485 0 4.5-2.015 4.5-4.5 0-2.485-2.015-4.5-4.5-4.5-.828 0-1.5-.672-1.5-1.5S9.672 11 10.5 11c2.485 0 4.5-2.015 4.5-4.5S12.5 6 12.5 6zm13 0C20.253 6 16 10.253 16 15.5c0 4.142 3.358 7.5 7.5 7.5 2.485 0 4.5-2.015 4.5-4.5 0-2.485-2.015-4.5-4.5-4.5-.828 0-1.5-.672-1.5-1.5S22.672 11 23.5 11c2.485 0 4.5-2.015 4.5-4.5S25.5 6 25.5 6z"/>
      </svg>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                  {testimonial.text}
                </p>
           </div>
                <div className="border-t text-center border-gray-200 pt-4">
                  <p className="text-gray-900 font-bold text-lg">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
        
        {/* Custom pagination container */}
        <div className="testimonial-pagination mt-8 flex justify-center space-x-2"></div>
      </Swiper>

      <style jsx global>{`
        .testimonial-swiper {
          padding-bottom: 40px;
        }
        
        .testimonial-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #cbd5e1;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .testimonial-bullet-active {
          background-color: black;
          transform: scale(1.2);
        }
        
        .swiper-slide {
          transition: all 0.5s ease;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider1;

