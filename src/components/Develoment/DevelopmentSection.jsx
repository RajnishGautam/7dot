import Process from './Process'
import OurServices from '../Home/Ourservices/Ourservices'
import HeroWithVideo from '../common/Contactsection/Contactsection'
import './DevelopmentSection.css'

const DevelopmentSection = () => {
  return (
    <div className="development-section">
      <OurServices />
      <Process />
      <HeroWithVideo />
    </div>
  )
}

export default DevelopmentSection
