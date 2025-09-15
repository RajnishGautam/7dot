import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from './DevelopmentHero'
import WebServices from './WebServices'
import AppServices from './AppServices'
import Process from './Process'
import WorkSection from './WorkSection'
import HeroWithVideo from '../common/Contactsection/Contactsection'
import ChatbotServiceSection from './Chatbot'
import './DevelopmentSection.css'

const DevelopmentSection = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <div>
      <HeroSection />
      <div id="web-services">
        <WebServices />
      </div>
      <WorkSection />
      <div id="app-services">
        <AppServices />
      </div>
      <div id="chatbot-services">
      <ChatbotServiceSection /></div>
      <Process />
      <HeroWithVideo />
    </div>
  )
}

export default DevelopmentSection
