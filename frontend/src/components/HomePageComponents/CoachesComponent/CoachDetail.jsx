import React from 'react'


import AchievementLogo from '../HomeComponents/AchievementLogo'
import CoachContactForm from './CoachContactForm'

function CoachDetail() {
  return (
    <div>
      <img className='cursor-pointer' src="https://malaskagolf.com/cdn/shop/files/CERT-COACH-Matt-Baker-Banner-1920x750.png?v=1755702958&width=1920" alt="" />
      <AchievementLogo/>

      <div className='flex items-start py-16  bg-white'>
               <div className='max-w-xl mx-auto flex text-center' >
                     <svg
        className="w-12 h-fit text-gray-800 mb-2 -ml-2"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M12.5 6C7.253 6 3 10.253 3 15.5c0 4.142 3.358 7.5 7.5 7.5 2.485 0 4.5-2.015 4.5-4.5 0-2.485-2.015-4.5-4.5-4.5-.828 0-1.5-.672-1.5-1.5S9.672 11 10.5 11c2.485 0 4.5-2.015 4.5-4.5S12.5 6 12.5 6zm13 0C20.253 6 16 10.253 16 15.5c0 4.142 3.358 7.5 7.5 7.5 2.485 0 4.5-2.015 4.5-4.5 0-2.485-2.015-4.5-4.5-4.5-.828 0-1.5-.672-1.5-1.5S22.672 11 23.5 11c2.485 0 4.5-2.015 4.5-4.5S25.5 6 25.5 6z"/>
      </svg>
            <p className='text-lg '> My coaching philosophy is to keep it simple, and build on familiar
movements that help you improve your golf faster.</p>
               </div>
      </div>

      <div className='mt-8 max-w-5xl mx-auto'>
            <h1 className='title uppercase'>Matt Baker - Profile</h1>
            <div className='space-y-5'>
                  <h4 className=' tracking-widest font-bold text-lg'>BIO</h4>
                  <p className='leading-relaxed'>Matt Baker is a dedicated and experienced professional in the world of golf, boasting an impressive 25+ year journey in the sport. With a passion for golf and coaching, Matt has made significant contributions to the golfing community throughout his career. Currently, Matt Baker thrives as a freelance coach, sharing his wealth of knowledge at various venues and golf schools both domestically and overseas. His dedication to the game, combined with his extensive experience and continuous pursuit of excellence, makes Matt a standout figure in the world of golf coaching.</p>
            </div>
            <div className='space-y-5 mt-12'>
                  <h4 className=' tracking-widest font-bold text-lg'> ACHIEVEMENTS</h4>
                  <p className='leading-relaxed'>Matt Baker is a dedicated and experienced professional in the world of golf, boasting an impressive 25+ year journey in the sport. With a passion for golf and coaching, Matt has made significant contributions to the golfing community throughout his career. Currently, Matt Baker thrives as a freelance coach, sharing his wealth of knowledge at various venues and golf schools both domestically and overseas. His dedication to the game, combined with his extensive experience and continuous pursuit of excellence, makes Matt a standout figure in the world of golf coaching.</p>
            </div>
            <div className='space-y-5 mt-12'>
                  <h4 className=' tracking-widest font-bold text-lg'> CERTIFICATIONS</h4>
                  <p className='leading-relaxed'>Matt Baker is a dedicated and experienced professional in the world of golf, boasting an impressive 25+ year journey in the sport. With a passion for golf and coaching, Matt has made significant contributions to the golfing community throughout his career. Currently, Matt Baker thrives as a freelance coach, sharing his wealth of knowledge at various venues and golf schools both domestically and overseas. His dedication to the game, combined with his extensive experience and continuous pursuit of excellence, makes Matt a standout figure in the world of golf coaching.</p>
            </div>

      </div>

      <div className='mt-12 max-w-5xl mx-auto'>
            <h2 className='title uppercase '>Contact</h2>
            <p>To schedule a lesson with Matt Baker, please fill out the form below to send in your request. Virtual Zoom lessons and live lessons at the course are available</p>
            <CoachContactForm/>
      </div>
    </div>
  )
}

export default CoachDetail
