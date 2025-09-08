import React from 'react'

function ProductVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your own .mp4 file later
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
          GET
          <br /> THE GOLF
          <br /> GEAR
        </h1>
        <button className='btn-primary'>Watch the Video</button>
      </div>
    </div>
  )
}



export default ProductVideo
