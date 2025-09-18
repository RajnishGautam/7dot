import React from 'react'
import './AboutUSP.css'

const AboutUSP = () => {
  const usp = [
    { title: 'Innovative Solutions', icon: '/about/lightbulb.png' },
    { title: 'Results-Driven Strategies', icon: '/about/statistic.png' },
    { title: 'Client-Centered Approach', icon: '/about/arrows.png' },
    { title: 'Local + Global Expertise', icon: '/about/internet.png' },
  ]

  return (
    <section className="aboutusp-section">
      <h2 className="aboutusp-title">What Makes Us <span className='highlight-text'> Different</span></h2>
      <div className="aboutusp-cards">
        {usp.map((item, index) => (
          <div className="aboutusp-card" key={index}>
            <div className="aboutusp-glow"></div>
            <div className="aboutusp-header">
              <img src={item.icon} alt={item.title} className="aboutusp-icon" />
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutUSP
