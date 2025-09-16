import React, { useEffect } from 'react'
import WebServices from '../components/Develoment/AppServices'

import Process from '../components/Develoment/Process'
import WorkSection from '../components/Develoment/WorkSection'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'

const AppDevelopmentPage = () => {
  return (
    <div>
      <WebServices />
      <WorkSection />
      <Process />
      <HeroWithVideo />
    </div>
  )
}

export default AppDevelopmentPage
