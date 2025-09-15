import React from 'react'
import './AboutAchievements.css'
const AboutAchievements = () => {
  const stats = [
    { number: '120+', label: 'Projects Delivered' },
    { number: '80+', label: 'Happy Clients' },
    { number: '5000+', label: 'Hours of Development' },
    { number: '4.9/5', label: 'Average Rating' },
  ]

  return (
    <section className="about-achievements">
      <h2>Our Achievements</h2>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutAchievements
