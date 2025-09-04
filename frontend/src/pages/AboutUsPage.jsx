import React from 'react'
import AboutUsVideo from '../components/AboutUsComponent/AboutUsVideo'
import AboutUsSection1 from '../components/AboutUsComponent/AboutUsSection1'
import CurvedLoop from '../components/ReuseAbleComponent/CurvedLoop'

function AboutUsPage() {
  return (
    <div>
      <AboutUsVideo/>
      <AboutUsSection1/>
      <CurvedLoop curveAmount={10} marqueeText="THE M-SYSTEM IS A GAME CHANGER" />
    </div>
  )
}

export default AboutUsPage
