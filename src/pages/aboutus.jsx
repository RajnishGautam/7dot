import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutMissionVision from '../components/About/AboutMissionVision'
import AboutUSP from '../components/About/AboutUSP'
import ProcessSection from '../components/Develoment/Process'
import AboutAchievements from '../components/About/AboutAchievements'
import OurServices from '../components/Home/Ourservices/Ourservices'

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutMissionVision />
      <AboutUSP />
      <AboutAchievements />
      <OurServices />
      <ProcessSection />
    </div>
  )
}

export default About
