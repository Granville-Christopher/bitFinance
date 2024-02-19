// import FeatureCard from '@/components/featurecard'
import AboutUs from '@/components/about'
import SecondSection from '../components/secondsection'
import HeroSection from '@/components/hero'
import Testimonies from '@/components/testimonies'
import Contact from '@/components/contact'
import TradingViewWidget from '@/components/livechart'
// import AppSlider from '@/components/swiper'
// import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutUs/>
      <SecondSection/>
      {/* <TradingViewWidget/> */}
      <Testimonies/>
      <Contact/>
    </main>
  )
}
