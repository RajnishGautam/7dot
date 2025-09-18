import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'
import HorizontalGallery from '../components/Branding/HorizontalGallery'
import LogoDesignWork from '../components/Branding/3d Spinner/LogoDesignWork'

const BrandingSection = () => {
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
      <div id="horizontal-gallery">
        <HorizontalGallery />
      </div>
      <div id="logo-design-work">
        <LogoDesignWork />
      </div>

      <HeroWithVideo />
    </div>
  )
}

export default BrandingSection
