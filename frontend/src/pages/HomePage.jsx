import React from 'react'
import HeroSection from '../components/HomeComponents/HeroSection'
import GolfBanner from '../components/HomeComponents/GolfBanner'
import PricingCard from '../components/HomeComponents/PricingCard'
import GolfSlider from '../components/HomeComponents/GolfHeroSlider'
import AchievementLogo from '../components/HomeComponents/AchievementLogo'
import MSystemCard from '../components/HomeComponents/MSystemCard '
import DiscoverImage from '../components/HomeComponents/DiscoverImage'
import TestimonialSlider from '../components/HomeComponents/TestimonialSlider1'
import MemberTestimonial from '../components/HomeComponents/MemberTestimonial'
import Footer from '../components/ReuseAbleComponent/Footer'
import JoinNowSection from '../components/HomeComponents/JoinNowSection'
import PopularCoaches from '../components/HomeComponents/PopularCoaches'
import TestimonialSlider2 from '../components/HomeComponents/TestimonialSlider2'
import OurPartners from '../components/HomeComponents/OurPartners'
import CurvedLoop from '../components/ReuseAbleComponent/CurvedLoop'
import OurService from '../components/HomeComponents/OurService'
import FeatureCarousel from '../components/HomeComponents/FeatureCarousel'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      {/* <GolfBanner/> */}
      <FeatureCarousel/>
      <PricingCard/>
      <OurService/>
      <GolfSlider/>
      <AchievementLogo/>
      <MSystemCard videoUrl="./Golf2.mp4" />
      <DiscoverImage/>
      <MSystemCard
      title='Join NOW! Train Smarter. Play Stronger'
      subtitle='Defy Elite Athletics delivers research-driven coaching, certified expertise, and proven performance strategies for every athlete.'
      description='Leverage Defy Elite Athletics’ research-based coaching and performance-driven approach, built on certifications in golf development, athletic performance, and sport-specific training. Our programs integrate swing analysis, biomechanics, fitness and mobilization, and golf drills and assessments designed to give athletes a complete and comprehensive path toward improvement.'
      systemDescription='Built on proven principles of performance and golf development, we create a clear roadmap that empowers athletes to train smarter, play stronger, and consistently defy their limits.'
      systemDescription2='Defy Elite Athletics delivers the most comprehensive, science-backed golf performance system available — combining online swing analysis, personalized programming, and full training integration.'
      newDescription='Not just another golf lesson. A science-based, athlete-first system for smarter training and stronger play.'
      testimonial='This is the Defy Performance System'
      videoUrl='/Golf1.mp4'/>

      <TestimonialSlider/>
      <MSystemCard 
      title='ALL SPORTS. ONE SWING.'
      subtitle='Unlock your golf potential through athletic performance.'
      description='At Defy Elite Athletics, we believe the golf swing is built on the same athletic foundations that power every sport. By applying research-backed training methods and movement strategies drawn from multiple disciplines, we help athletes connect strength, mobility, and coordination to their golf performance'
      systemDescription='Whether your background is in baseball, basketball, tennis, hockey, or any other sport, the skills you’ve developed can be harnessed to create a more powerful, consistent, and efficient swing.'
      testimonial='Not just golf lessons a full-spectrum training approach that builds strength, mobility, and skill to help you reach your peak regardless of your sport.'
      videoUrl='./Golf3.mp4'/>
      <MSystemCard 
      title='THE MENTAL GAME'
      subtitle='Golf is a test of focus, patience, and emotional control.'
      description='Every round is about adjusting — not just your swing, but your mindset. By strengthening your ability to concentrate, reset after mistakes, and visualize success, you create the foundation for peak performance.'
      systemDescription='At Defy Elite Athletics, we integrate mental training strategies with performance coaching to help you stay sharp under pressure and bring consistency to every shot.'
      newDescription = 'Train your mind. Unlock your best golf.'
      videoUrl='/Golf1.mp4'/>
<PopularCoaches/>
            <MSystemCard 
      title='Defy Elite Performance System'
      subtitle='Train smarter. Play stronger. Defy your limits'
      description='Golf performance is more than a swing — it’s the integration of body, mind, and preparation. The Defy Elite Performance System provides athletes with a complete framework for development, combining physical training, technical refinement, nutrition guidance, and mental resilience into one powerful progression.'
      systemDescription='With built-in progress tracking, personalized coaching, and corrective exercises, this system helps athletes build consistency and confidence that last. Whether your goal is to compete at a high level or simply play your best golf, the Defy Elite Performance System gives you the roadmap to get there.'

      videoUrl='/Golf1.mp4'/>
     


    </div>
  )
}

export default HomePage
