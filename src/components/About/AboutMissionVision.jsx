import React from 'react'
import { FaHistory, FaBullseye, FaEye } from 'react-icons/fa'
import './AboutMissionVision.css'

const AboutMissionVision = () => {
  return (
    <section className="aboutmv-section">
      <div className="aboutmv-cards">
        {/* Our Story */}
        <div className="aboutmv-card">
          <div className="aboutmv-glow"></div>
          <div className="aboutmv-header">
            <FaHistory className="aboutmv-icon" />
            <h2>Our Story</h2>
          </div>
          <p>
            7Dot It was founded to empower businesses in India and beyond with
            modern web development, digital marketing, and branding solutions —
            helping startups and enterprises turn ideas into impactful digital
            experiences.
          </p>
        </div>

        {/* Our Mission */}
        <div className="aboutmv-card">
          <div className="aboutmv-glow"></div>
          <div className="aboutmv-header">
            <FaBullseye className="aboutmv-icon" />
            <h2>Our Mission</h2>
          </div>
          <p>
            Our mission is to deliver innovative, scalable, and results-driven
            solutions that help businesses thrive online—strengthening their
            presence, connecting with audiences, and driving sustainable growth
          </p>
        </div>

        {/* Our Vision */}
        <div className="aboutmv-card">
          <div className="aboutmv-glow"></div>
          <div className="aboutmv-header">
            <FaEye className="aboutmv-icon" />
            <h2>Our Vision</h2>
          </div>
          <p>
            To become India’s leading digital agency, driving global businesses
            towards growth with creativity and technology.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMissionVision
