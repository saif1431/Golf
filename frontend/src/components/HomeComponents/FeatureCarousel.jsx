"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Example feature data
const features = [
  {
    title: "Fast Performance",
    tagline: "Speed that powers your workflow",
    narrative: "Our platform ensures blazing fast load times and smooth navigation.",
    logo: "/assets/performance-logo.png",
  },
  {
    title: "Secure Payments",
    tagline: "Your trust, our priority",
    narrative: "Transactions are protected with bank-grade encryption and security.",
    logo: "/assets/payment-logo.png",
  },
  {
    title: "24/7 Support",
    tagline: "We’ve got your back",
    narrative: "Get help anytime from our professional support team.",
    logo: "/assets/support-logo.png",
  },
];

export default function FeatureCarousel() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Key Features
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="rounded-2xl"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
              <img
                src={feature.logo}
                alt={feature.title}
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-2">{feature.narrative}</p>
              <span className="text-indigo-600 font-medium">
                {feature.tagline}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
