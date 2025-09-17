import VideoSection from '../components/Home/Video/Video'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'
import WhyUs3DCards from '../components/Home/Whyus/Whyus'
import PartnersMarquee from '../components/Home/PartnersMarquee/PartnersMarquee'
import OurServices from '../components/Home/Ourservices/Ourservices'
import Testimonials from '../components/Home/Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <VideoSection />
      <WhyUs3DCards />
      <PartnersMarquee />
      <OurServices />
      <Testimonials />
      <HeroWithVideo />
    </div>
  )
}

export default Home
