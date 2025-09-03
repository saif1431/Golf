import React from 'react'

function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <iframe
        className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover"
        src="https://www.youtube.com/embed/lD85fWONKnk?autoplay=1&mute=1&controls=0&loop=1&playlist=lD85fWONKnk&modestbranding=1&showinfo=0&rel=0"
        title="MALASKA GOLF LANDING PAGE"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ zIndex: 1 }}
      ></iframe>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative py-20 px-22 z-20 flex flex-col items-start justify-start h-full text-white">
        <h1 className="text-4xl md:text-6xl  font-bold mb-4">
        Science-Driven Training.
        <br /> Evidence-Based Coaching.
        <br /> Elite Athletic Performance.
        </h1>
        <p className="text-lg md:text-xl">Your complete resource hub for smarter training and peak performance.</p>
      </div>
    </div>
  )
}

export default HeroSection