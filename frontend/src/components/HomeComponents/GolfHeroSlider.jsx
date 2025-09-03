import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const GolfSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample data for slides
  const slides = [
    {
      id: 1,
      image: 'https://malaskagolf.com/cdn/shop/files/Mike-Credentials-Banner-A-min.png?v=1694444043&width=1920',
      title: "2011 PGA NATIONAL TEACHER OF THE YEAR",

      textColor: "text-white"
    },
    {
      id: 2,
      image: 'https://malaskagolf.com/cdn/shop/files/Mike-Credentials-Banner-B-min.png?v=1694444052&width=1920',
      title: "GOLF DIGEST LEGEND OF GOLF INSTRUCTION",
      textColor: "text-white"
    }
  ];

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full ">
      {/* <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Golf Digest Slider</h1> */}
      
      <div className="relative  overflow-hidden shadow-2xl">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-screen flex items-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}
              >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0  bg-opacity-40"></div>
                {/* Text content on the left, vertically centered */}
                <div className={`relative z-10 lg:pl-10 pl-6 lg:max-w-[60%] ${slide.textColor}`}>
                  <h2 className="text-4xl archivo-black-regular md:text-6xl lg:w-[65%] w-[90%]  font-bold mb-2 text-start">{slide.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom pagination indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-white' : 'bg-gray-300'
              }`}
              onClick={() => swiperInstance && swiperInstance.slideTo(index)}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #4ade80;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default GolfSlider;