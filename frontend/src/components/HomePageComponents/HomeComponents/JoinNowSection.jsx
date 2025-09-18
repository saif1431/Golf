import React from 'react'

function JoinNowSection() {
  return (
    <div className='max-w-7xl lg:px-16 flex flex-col md:flex-row items-center justify-center gap-10 mx-auto my-20 px-5'>
      <div className='lg:w-[60%] w-full' >
            <img src="https://malaskagolf.com/cdn/shop/files/MG-Worldwide-Members_Map-min.jpg?v=1693060517&width=1080" alt="" />
            </div>
    <div className='lg:w-[40%] w-full space-y-7'>
      <h2 className='text-2xl font-bold archivo-black-regular'>Become A Member Today!</h2>
    <h3 className='lg:text-5xl text-3xl font-bold archivo-black-regular'>JOIN THE MALASKA GOLF MOVEMENT</h3>
    <p className=''>Discover the Best Online Golf Instruction, bar none. The M-System is the most robust and easy-to-understand golf swing process available for beginners, weekend warriors, and low handicappers to simplify their swing and improve their game.
</p>
<button className='btn-primary '>Sign Up Now</button>
    </div>
    </div>
  )
}

export default JoinNowSection
