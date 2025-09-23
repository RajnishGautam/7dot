import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutMissionVision from '../components/About/AboutMissionVision'
import AboutUSP from '../components/About/AboutUSP'
import ProcessSection from '../components/Develoment/Process'
import AboutAchievements from '../components/About/AboutAchievements'
import OurServices from '../components/Home/Ourservices/Ourservices'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'
import CEOSection from '../components/About/CEOSection'

const About = () => {
  return (
    <div className="about-page" style={{ paddingBottom: '3rem' }}>
      <AboutHero />
      <CEOSection />
      <AboutMissionVision />
      <AboutUSP />
      <AboutAchievements />
      <OurServices />
      <ProcessSection />
      <HeroWithVideo />
    </div>
  )
}

export default About
