import React, { useEffect } from 'react'

import WebServices from '../components/Develoment/WebServices'
import Process from '../components/Develoment/Process'
import WorkSection from '../components/Develoment/WorkSection'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'

const WebDevelopmentPage = () => {
  return (
    <div className='WebService-Page' style={{ paddingTop: '4rem' }}>
      <WebServices />
      <WorkSection />
      
      <Process />
      <HeroWithVideo />
    </div>
  )
}

export default WebDevelopmentPage
