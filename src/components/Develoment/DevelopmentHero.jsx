import React from 'react'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import './DevelopmentHero.css'

const DevelopmentHeroSection = () => {
  return (
    <div className="devhero-container">
      {/* Background */}
      <div className="devhero-background" />

      {/* Particles */}
      <div className="devparticles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="devparticle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="devhero-content">
        <div className="devhero-text">
          <h1 className="devhero-titleline1">Crafting Your</h1>
          <h1 className="devhero-titleline2">Web Destiny With</h1>
          <h1 className="devhero-titleline3">
            Stunning<span className="devhighlight-text"> Designs</span>
          </h1>
        </div>

        <h2 className="devhero-subtitle">
          We don’t just create websites; we build
          <br />
          websites that turn your visitors into customers.
        </h2>

        <a
          href="https://wa.me/917838649867"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="devcta-button">
            <span>Get Started</span>
            <ArrowRight className="devcta-arrow" />
          </button>
        </a>
      </div>
    </div>
  )
}

export default DevelopmentHeroSection
