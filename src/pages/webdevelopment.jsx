import React, { useEffect } from 'react'
import HeroSection from '../components/Develoment/DevelopmentHero'
import WebServices from '../components/Develoment/WebServices'
import Process from '../components/Develoment/Process'
import WorkSection from '../components/Develoment/WorkSection'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'

const WebDevelopmentPage = () => {
  return (
    <div>
      <HeroSection />
      <WebServices />
      <WorkSection />
      <Process />
      <HeroWithVideo />
    </div>
  )
}

export default WebDevelopmentPage
