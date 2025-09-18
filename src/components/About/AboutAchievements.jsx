import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import './AboutAchievements.css'

const AboutAchievements = () => {
  const stats = [
    { number: 120, label: 'Projects Delivered' },
    { number: 80, label: 'Happy Clients' },
    { number: 5000, label: 'Hours of Development' },
    { number: 4.9, label: 'Average Rating', decimals: 1 },
  ]

  // Use intersection observer
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  })

  return (
    <section className="about-achievements" ref={ref}>
      <h2>Our <span className='highlight-text'>Achievements</span></h2>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>
              {inView ? (
                <CountUp 
                  start={0} 
                  end={item.number} 
                  duration={2} 
                  decimals={item.decimals || 0} 
                  suffix={
                    item.label === 'Average Rating' ? '/5' : '+'
                  }
                />
              ) : 0}
            </h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutAchievements
