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

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <GolfBanner/>
      <PricingCard/>
      <OurService/>
      <GolfSlider/>
      <AchievementLogo/>
      <MSystemCard videoUrl="./Golf2.mp4" />
      <DiscoverImage/>
      <MSystemCard
      title='JOIN MALASKA GOLF'
      subtitle='Learn from one of the World’s Best Player Coach with over 50+ years’ experience.'
      description='Leverage Mike Malaskas vast golf expertise and unparalleled insights into the swing gained from tutoring under Joe Nichols and collaborating with legends like Jim Flick and Jack Nicklaus. With 400,000+ lessons and experience in PGA Tour Events'
      systemDescription='Malaska Golf provides the clearest path to simplify your swing and unlock your potential. Access the worlds best, easy-to-understand swing content, online lessons, and golf programs.'
      videoUrl='/Golf1.mp4'/>

      <TestimonialSlider/>
      <MSystemCard 
      title='ALL SPORTS CONNECT'
      subtitle='Unleash your golf swing potential through athletic connections.'
      description='Mike Malaska has harnessed extensive physiological knowledge through collaboration with anatomical physiologist Pete Egoscue and engagement in diverse sports. Their work with professional athletes across various disciplines allowed Mike to recognize the synergy that connects all sports.'
      systemDescription='Whether you’ve played baseball, tennis, basketball, hockey, bowling, ping pong, or almost any sport, you can leverage the skills acquired.'
      videoUrl='./Golf3.mp4'/>

      <MemberTestimonial/>
      <MSystemCard 
      title='PLAY THE GAME'
      subtitle='Golf is an artistic expression of yourself through the game.'
      description='Golf is a game of emotions and adjustments. It’s learning how to read yourself, both physically and mentally, to pick the best shot to hit and get the most out of it.'
      systemDescription='Discover your golf path, and put a plan together to get the most out of who you are as a player. Learn how to manage your own game and all the variables the golf gods offer.'
      newDescription = 'You will see remarkable results in a short period, as Mike shares his knowledge of the golf course.'
      videoUrl='/Golf1.mp4'/>
<JoinNowSection/>
<PopularCoaches/>
 <MSystemCard 
      title='PLAY THE GAME'
      subtitle='Golf is an artistic expression of yourself through the game.'
      description='Golf is a game of emotions and adjustments. It’s learning how to read yourself, both physically and mentally, to pick the best shot to hit and get the most out of it.'
      systemDescription='Discover your golf path, and put a plan together to get the most out of who you are as a player. Learn how to manage your own game and all the variables the golf gods offer.'
      newDescription = 'You will see remarkable results in a short period, as Mike shares his knowledge of the golf course.'
      videoUrl='/Golf1.mp4'/>
      <TestimonialSlider2/>
        <MSystemCard videoUrl="./Golf2.mp4" />
        <OurPartners/>


    </div>
  )
}

export default HomePage
