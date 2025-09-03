import React from 'react'

function PopularCoaches() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto my-20 px-5 text-center'>
        <h1 className='lg:text-5xl text-4xl archivo-black-regular font-bold'>COACHES WORLDWIDE</h1>
        <p className='text-lg'>Our coaches come from different backgrounds, with various skill sets in the game.</p>
        <p className='text-lg'>They are like-minded as they all have a fascination and passion for golf and coaching, helping others reach their potential.</p>
        <button className='btn-primary'>SEE OUR COACHES</button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto gap-4'>
        <div className='w-100%'>
          <img className='w-full' src="/images/coach1.jpg" alt="" />
        </div>
        <div>
          <img className='w-full' src="/images/coach2.jpg" alt="" />
          <img className='w-full' src="/images/coach3.jpg" alt="" />
        </div>
      </div>
         <div className='flex flex-col items-center justify-center gap-4 max-w-7xl mx-auto my-20 px-5 text-center'>
        <h1 className='text-5xl archivo-black-regular font-bold'>NO MORE EXCUSES</h1>
        <p className='text-lg'>Get Malaska Golf instantly on your desktop, laptop, or mobile device and get the access you need to simplify your swing and improve your game.</p>
      
        <button className='btn-primary'>SIGN UP NOW</button>
      </div>
      <div className='lg:max-w-7xl mx-auto'>
        <img className='w-full h-full' src="https://malaskagolf.com/cdn/shop/files/All-Devices-Image-min.jpg?v=1694386765&width=1600" alt="" />
      </div>
    </div>
  )
}

export default PopularCoaches
