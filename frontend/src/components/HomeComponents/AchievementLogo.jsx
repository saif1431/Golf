import React from 'react'

function AchievementLogo() {
  return (
       <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4 px-4'>
      <img className='w-40 bg-white  p-2' src="/companyLogos/Picture1.png" alt="" />
      <img className='w-40 bg-white  p-2' src="/companyLogos/Picture5.jpg" alt="" />
      <img className='w-40 bg-white  p-2' src="/companyLogos/Picture2.jpg" alt="" />
      <img className='w-40 h-40 bg-white  p-2' src="/companyLogos/Picture3.gif" alt="" />
      <img className='w-40 h-40 object-contain bg-white  p-2' src="/companyLogos/Picture4.png" alt="" />
    </div>
  )
}

export default AchievementLogo
