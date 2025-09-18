"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Updated feature data based on golf-related images
const features = [
  {
    title: "Remote Golf Coaching",
    tagline: "Perfect your swing from anywhere",
    narrative: "Get personalized golf instruction and feedback from certified pros without leaving your home or local course.",
    logo: "/featureImg/remote-golf.png",
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Personal Training",
    tagline: "Fitness tailored for golfers",
    narrative: "Specialized fitness programs designed to improve your golf performance, flexibility, and overall strength.",
    logo: "/featureImg/remote-pt.png",
    gradient: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-100",
  },
  {
    title: "Premium Subscription",
    tagline: "Unlock your full potential",
    narrative: "Access unlimited lessons, exclusive content, and priority support with our comprehensive membership plan.",
    logo: "/featureImg/subscription.png",
    gradient: "from-purple-500 to-pink-600",
    iconBg: "bg-purple-100",
  },
  {
    title: "Swing Drills Library",
    tagline: "Practice makes perfect",
    narrative: "Extensive collection of proven drills and exercises to refine your technique and build muscle memory.",
    logo: "/featureImg/Swing Drills.png",
    gradient: "from-orange-500 to-red-600",
    iconBg: "bg-orange-100",
  },
  {
    title: "Advanced Swing Analysis",
    tagline: "Data-driven improvement",
    narrative: "Cutting-edge video analysis and biomechanical insights to identify and correct swing flaws with precision.",
    logo: "/featureImg/swing-analysis.png",
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-100",
  },
];

export default function FeatureCarousel() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
          Elevate Your Game
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover powerful tools and expert guidance designed to transform your golf experience
        </p>
      </div>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-gray-400',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-indigo-600'
        }}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="!pb-16"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-80 flex flex-col border border-gray-100 hover:border-gray-200 hover:-translate-y-2">
              {/* Icon Container */}
              <div className={`${feature.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <img
                  src={feature.logo}
                  alt={feature.title}
                  className="h-10 w-10 object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                  {feature.narrative}
                </p>
                
                <div className={`inline-flex items-center text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text font-semibold text-lg`}>
                  {feature.tagline}
                  <svg className="ml-2 w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}