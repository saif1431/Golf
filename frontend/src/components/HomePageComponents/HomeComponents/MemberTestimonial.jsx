import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const MemberTestimonial = () => {
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
      <h1 className='lg:text-5xl text-3xl font-bold text-center archivo-black-regular mb-8'>WHAT OUR MEMBERS ARE SAYING</h1>
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
              <div className={`rounded-xl mt-6 p-6 md:p-8 transition-all duration-500 h-full 
                ${isActive 
                  ? 'bg-white shadow-xl transform -translate-y-4 scale-105' 
                  : 'bg-gray-100 shadow-lg'}`}
              >
                {/* Stars */}
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                    </svg>
                  ))}
                </div>
                {/* Short Review */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                  Great experience, highly recommended!
                </p>
                {/* Client image and name */}
                <div className="flex flex-col items-center mt-6">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full mb-2 object-cover border-2 border-gray-300"
                  />
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



export default MemberTestimonial
