import React from 'react'

function BrowseProShop() {
  return (
    <div className='my-20'>
      <h1 className='text-6xl text-center font-bold archivo-black-regular'>Browse the ProShop</h1>

      <div className='grid grid-cols-4 gap-5 mt-10 px-20'>
      <div className='bg-gray-300'> 
              <div style={{backgroundImage: "url('https://malaskagolf.com/cdn/shop/files/InvisibleSwingeBook-min.jpg?v=1700096263&width=540')", backgroundSize: 'cover'}} className='h-80 flex items-end justify-center bg-gray-300 transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <h1 className='bg-gray-300 mb-6 w-fit px-6 leading-relaxed py-2  text-xl font-semibold'>E BOOK       </h1>
      </div>
      </div>
      <div className='bg-gray-300'> 
              <div style={{backgroundImage: "url('https://malaskagolf.com/cdn/shop/files/ROTEXMotion-Floor-ModelThumnail1-min.jpg?v=1698771095&width=540')", backgroundSize: 'cover'}} className='h-80 flex items-end justify-center bg-gray-300 transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <h1 className='bg-gray-300 mb-6 w-fit px-6 leading-relaxed py-2  text-xl font-semibold'>GOLF TECH       </h1>
      </div>
      </div>
      <div className='bg-gray-300'> 
              <div style={{backgroundImage: "url('https://malaskagolf.com/cdn/shop/files/BFVenom2Back-min.jpg?v=1732656080&width=540')", backgroundSize: 'cover'}} className='h-80 flex items-end justify-center bg-gray-300 transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <h1 className='bg-gray-300 mb-6 w-fit px-6 leading-relaxed py-2  text-xl font-semibold'>RECOVERY       </h1>
      </div>
      </div>
      <div className='bg-gray-300'> 
              <div style={{backgroundImage: "url('https://malaskagolf.com/cdn/shop/files/AdidasCorePerformanceMaxCap-min.jpg?v=1700096382&width=540')", backgroundSize: 'cover'}} className='h-80 flex items-end justify-center bg-gray-300 transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <h1 className='bg-gray-300 mb-6 w-fit px-6 leading-relaxed py-2  text-xl font-semibold'>APPAREL       </h1>
      </div>
      </div>
      </div>
    </div>
  )
}

export default BrowseProShop
