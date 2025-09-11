import React from 'react'

function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Golf1.mp4" 
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative py-20 lg:px-22 px-4 z-20 flex flex-col items-start justify-start h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Science-Driven Training.
          <br /> Evidence-Based Coaching.
          <br /> Elite Athletic Performance.
        </h1>
        <p className="text-lg md:text-xl">
          Your complete resource hub for smarter training and peak performance.
        </p>
      </div>
    </div>
  )
}

export default HeroSection