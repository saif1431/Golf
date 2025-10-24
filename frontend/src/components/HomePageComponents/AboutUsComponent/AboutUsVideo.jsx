import React from 'react'

function AboutUsVideo() {
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
      <div className="relative py-32 lg:px-22 px-4 z-20 flex flex-col items-start justify-start h-full text-white">
        <h1 className="text-4xl archivo-black-regular md:text-8xl font-bold mb-4">
          WHAT WE
          <br /> STAND FOR
        </h1>
        <button className='btn-primary'>Watch the Video</button>
      </div>
    </div>
  )
}


export default AboutUsVideo
