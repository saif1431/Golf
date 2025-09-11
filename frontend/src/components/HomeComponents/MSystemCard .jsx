import React from 'react';


const MSystemCard = ({ 
  title = "Defy Elite Performance System",
  subtitle = "Your golf swing roadmap to consistency. Just like the Tour Players.",
  description = "The Defy Elite Performance System is a structured, linear progression mode designed to maximize athletic deployment across every dimension — physical, technical, dietary, and mental. Built on evidence-based principles, this system provides athletes with a clear pathway for growth, moving step by step through targeted phases of training and refinement.",
  systemDescription = "Athletes gain access to every tool necessary to track progress, including detailed performance assessments, swing analysis, nutrition tracking, and sport-specific metrics. Combined with comprehensive coaching and corrective strategies, the Defy Elite Performance System ensures measurable improvement, steady progression, and the resilience needed to go beyond your limits.",
  testimonial = "This is the best online golf swing process, period!",
  newDescription = "",
  ctaText = "LEARN MORE",
  videoUrl = "", // You can pass a video URL here
  backgroundColor = "bg-white",
}) => {
  return (
    <div className={` mt-12 bg-black shadow-lg overflow-hidden ${backgroundColor}  lg:max-w-6xl mx-auto`}>
      <div className="md:flex">
        {/* Video Section */}
        <div className="md:flex-shrink-0 md:w-1/2">
          {videoUrl ? (
            <div className="relative  pb-[56.25%] h-full ">
              <video src={videoUrl} 
               autoPlay
        muted
        loop
        playsInline
              controls className="absolute top-0 left-0 w-full object-cover h-full"></video>
            </div>
          ) : (
          <div></div>
          )}
        </div>  
        
        {/* Content Section  */}
        <div className="px-8 space-y-10 py-8 bg-black text-white md:w-1/2">
          
          <h2 className={`text-3xl archivo-black-regular font-bold  mb-2`}>{title}</h2>
          <p className="mt-1 archivo-black-regular text-white text-xl font-medium">{subtitle}</p>

          
          <div className="mt-4">
            <p>{description}</p>
          </div>
          
          <div className="mt-4">
            <p>{systemDescription}</p>
          </div>
          <div className="">
            <p>{newDescription}</p>
          </div>
          
          <div className="mt-4">
            <p className="font-semibold">{testimonial}</p>
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <button className={`px-4 py-2 font-bold text-white rounded btn-primary transition-colors duration-300`}>
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSystemCard;   