import React, { useEffect } from 'react'
import WebServices from '../components/Develoment/AppServices'

import Process from '../components/Develoment/Process'
import AppWorkSection from '../components/Develoment/AppWork'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'

const AppDevelopmentPage = () => {
  return (
    <div>
      <WebServices />
      <AppWorkSection />
      <Process />
      <HeroWithVideo />
    </div>
  )
}

export default AppDevelopmentPage
