import React from 'react';


const MSystemCard = ({ 
  title = "LEARN THE M-SYSTEM",
  subtitle = "Your golf swing roadmap to consistency. Just like the Tour Players.",
  description = "This is a skill development process, an easy-to understand video swing series from M1 to M5 that provides the proven, fundamental building blocks to simplify your",
  systemDescription = "The M-System is a swing process tailored for golfers at all levels. You will find the consistency and confidence you've been seeking. While you may not be on Tour, you'll certainly feel like it.",
  testimonial = "This is the best online golf swing process, period!",
  newDescription = "",
  ctaText = "LEARN MORE",
  videoUrl = "", // You can pass a video URL here
  backgroundColor = "bg-white",
}) => {
  return (
    <div className={` mt-12 bg-black shadow-lg overflow-hidden ${backgroundColor}  max-w-6xl mx-auto`}>
      <div className="md:flex">
        {/* Video Section */}
        <div className="md:flex-shrink-0 md:w-1/2">
          {videoUrl ? (
            <div className="relative pb-[56.25%] h-full ">
              <iframe 
                className="absolute object-cover top-0 left-0 w-[100%] h-full"
                src={videoUrl}
                title="M-System video"
                frameBorder="0"
                muted
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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