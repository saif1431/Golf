import React from 'react'
import HeroSection from '../components/HomeComponents/HeroSection'
import GolfBanner from '../components/HomeComponents/GolfBanner'
import PricingCard from '../components/HomeComponents/PricingCard'
import GolfSlider from '../components/HomeComponents/GolfHeroSlider'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <GolfBanner/>
      <PricingCard/>
      <GolfSlider/>
    </div>
  )
}

export default HomePage
