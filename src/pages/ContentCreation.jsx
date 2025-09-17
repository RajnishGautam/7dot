import React, { useEffect } from 'react'
import ContentCreationServiceSection from '../components/Develoment/ContentCreation'
import Process from '../components/Develoment/Process'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'

const ContentCreationPage = () => {
  return (
    <div>
      <ContentCreationServiceSection />
      <Process />
      <HeroWithVideo />
    </div>
  )
}

export default ContentCreationPage
