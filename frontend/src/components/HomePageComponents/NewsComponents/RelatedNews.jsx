import React from 'react'

function RelatedNews() {
  return (
    <div className='my-20'>
 <div className='flex flex-col  items-center justify-between space-y-6 mb-10'>
           <h1 className='text-6xl text-center font-bold archivo-black-regular'>You may also like</h1>
           <button className='py-2 px-6 cursor-pointer border  letter-spacing'>View All</button>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 px-20'>
          <div className='cursor-pointer text-center' >
            <img className='h-60 object-cover' src="https://malaskagolf.com/cdn/shop/articles/L_to_L_is_Your_Full_Swing_Main_Image-min_f3d1ffbb-5707-4cb1-907f-8260f09abbb2.jpg?v=1747837450&width=720" alt="" />
            <h5 className='text-sm mt-3'>May 21, 2025</h5>
            <h2 className='text-xl'>L TO L IS YOUR FULL SWING</h2>
          </div>
          <div className='cursor-pointer text-center'>
            <img className='h-60 object-cover' src="https://malaskagolf.com/cdn/shop/articles/The_Malaska_Move_is_a_Feeling_Image-min_8aea40f7-465d-4baf-8911-32127a6c5e47.jpg?v=1745609731&width=720" alt="" />
            <h5 className='text-sm mt-3'>May 21, 2025</h5>
            <h2 className='text-xl'>THE MALASKA MOVE IS A FEELING</h2>
          </div>
          <div className='cursor-pointer text-center'>
            <img className='h-60 object-cover' src="https://malaskagolf.com/cdn/shop/articles/Right_Hand_In_The_Wrist_Image-min.jpg?v=1739390449&width=720" alt="" />
            <h5 className='text-sm mt-3'>May 21, 2025</h5>
            <h2 className='text-xl'>RIGHT HAND IN THE GRIP</h2>
          </div>
           </div>
 </div>
    </div>
  )
}

export default RelatedNews
