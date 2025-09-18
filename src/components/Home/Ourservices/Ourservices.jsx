import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Ourservices.css'

const services = [
  {
    id: 1,
    image: '/services/webdevelopment.png',
    gifImage: '/services/webdevelopment.gif',
    title: 'Web Development',
    slogan: 'We create Digital Magic',
    link: '/services/webdevelopment',
  },
  {
    id: 2,
    image: '/services/appdevelopment.png',
    gifImage: '/services/appdevelopment.gif',
    title: 'App Development',
    slogan: 'Mobile apps that scale',
    link: '/services/appdevelopment',
  },
  {
    id: 3,
    image: '/services/chatbot.png',
    gifImage: '/services/chatbot.gif',
    title: 'AI Chatbots',
    slogan: 'Smart solutions for business',
    link: '/services/chatbotdevelopment',
  },
  {
    id: 4,
    image: '/services/leads.png',
    gifImage: '/services/leads.gif',
    title: 'Lead Generation',
    slogan: 'Demand Drives Growth',
    link: '/services/leadgeneration',
  },
  {
    id: 5,
    image: '/services/marketing.png',
    gifImage: '/services/marketing.gif',
    title: 'Digital Marketing',
    slogan: 'Strategies that work',
    link: '/services/digital-marketing',
  },
  {
    id: 6,
    image: '/services/contentwriting.png',
    gifImage: '/services/contentwriting.gif',
    title: 'Content Creation',
    slogan: 'Content that engages',
    link: '/services/contentcreation',
  },
  {
    id: 7,
    image: '/services/branding.png',
    gifImage: '/services/branding.gif',
    title: 'Branding',
    slogan: 'Build your brand identity',
    link: '/services/branding',
  },
  {
    id: 8,
    image: '/services/training.png',
    gifImage: '/services/training.gif',
    title: 'Career & Training',
    slogan: 'Empower your future',
    link: '/services/career',
  },
]

const OurServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="our-services-section">
      <div className="our-services-background-orbs">
        <div className="our-services-orb our-services-orb-1"></div>
        <div className="our-services-orb our-services-orb-2"></div>
        <div className="our-services-orb our-services-orb-3"></div>
      </div>

      <div className="our-services-heading-container">
        
        <h2 className="our-services-section-heading"> <span className='blackword' >OUR</span> SERVICES</h2>
        
      </div>

      <div className="our-services-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="our-services-card fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="our-services-card-glow"></div>

            <img
              src={
                hoveredCard === service.id ? service.gifImage : service.image
              }
              alt={service.title}
              className="our-services-image"
            />

            <div className="our-services-content">
              <h3 className="our-services-title">{service.title}</h3>
              <p className="our-services-slogan">{service.slogan}</p>
              <Link to={service.link}>
                <button className="our-services-read-more-btn">Explore</button>
              </Link>
            </div>

            {/* Mobile clickable overlay */}
            <Link to={service.link} className="our-services-mobile-link"></Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServices
