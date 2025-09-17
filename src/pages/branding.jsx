import React, { useState } from 'react'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'
import HorizontalGallery from '../components/Branding/HorizontalGallery'
import LogoDesignWork from '../components/Branding/3d Spinner/LogoDesignWork'

const BrandingSection = () => {
  return (
    <div>
      <LogoDesignWork />
      <HorizontalGallery />
      <HeroWithVideo />
    </div>
  )
}

export default BrandingSection
