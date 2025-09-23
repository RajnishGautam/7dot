import React, { useState } from 'react'
import {
  Camera,
  Image,
  Video,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import './ChatbotServiceSection.css'

const PhotoshootServiceSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <Camera className="w-5 h-5" />, text: 'Professional Photography' },
    { icon: <Image className="w-5 h-5" />, text: 'High-Quality Images' },
    { icon: <Video className="w-5 h-5" />, text: 'Cinematic Video Shoots' },
    { icon: <Zap className="w-5 h-5" />, text: 'Creative Lighting & Setup' },
    { icon: <Users className="w-5 h-5" />, text: 'Team & Product Shoots' },
  ]

  const benefits = [
    'Boost your brand visuals',
    'High engagement content for social media',
    'Professional representation for products and services',
    'Creative storytelling through imagery',
    'Consistent visual identity across platforms',
  ]

  const useCases = [
    'Corporate: Team portraits and office coverage',
    'E-commerce: Product photography and lifestyle images',
    'Social Media: Engaging photos and reels',
    'Events: Conferences, launch events, and brand activations',
    'Fashion: Model and portfolio shoots',
  ]

  return (
    <section className="chatbot-section">
      <div className="chatbot-container">
        {/* Desktop Layout */}
        <div className="chatbot-grid desktop-layout">
          <div className="chatbot-left">
            <div className="chatbot-heading desktop-heading">
              <h2>
                Professional <span>Photoshoot Services</span>
              </h2>
              <p>
                We provide high-quality photoshoot services tailored to your brand and business needs. From product photography to corporate portraits, we create visuals that impress and engage your audience.
              </p>
              <p>
                Our team combines creativity, technical expertise, and modern equipment to deliver stunning images and videos that strengthen your brand identity and marketing campaigns.
              </p>
            </div>

            <div className="chatbot-features">
              {features.map((feature, index) => (
                <div key={index} className="chatbot-feature">
                  <div className="chatbot-feature-icon">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="chatbot-benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="chatbot-benefit">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="chatbot-why-choose">
              <h3>Why Choose Our Photoshoot Services?</h3>
              <ul>
                <li>Experienced photographers and videographers</li>
                <li>Creative and professional approach for all projects</li>
                <li>High-resolution content suitable for web and print</li>
                <li>Quick turnaround and end-to-end support</li>
              </ul>
            </div>

            <div className="chatbot-why-choose">
              <h3>Use Cases</h3>
              <ul>
                {useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>

            <div className="chatbot-cta">
              <a
                href="https://wa.me/917838649867"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`chatbot-button ${isHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Book a Photoshoot
                  <ArrowRight className="arrow" />
                </button>
              </a>
            </div>
          </div>

          <div className="chatbot-right">
            <img
              src="/services/photoshoot.png"
              alt="Photoshoot illustration"
              className="chatbot-image"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="chatbot-mobile-wrapper">
          <div className="chatbot-heading mobile-heading">
            <h2>
              Professional <span>Photoshoot Services</span>
            </h2>
            <p>
              Stunning visuals for your brand, products, or events. Our photoshoot services capture your story in high-quality images and videos.
            </p>
          </div>

          <img
            src="/services/photoshoot.png"
            alt="Photoshoot illustration"
            className="chatbot-image"
          />

          <div className="chatbot-features">
            {features.map((feature, index) => (
              <div key={index} className="chatbot-feature">
                <div className="chatbot-feature-icon">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="chatbot-benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="chatbot-benefit">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="chatbot-why-choose">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Creative and professional approach for every project</li>
              <li>High-quality images and videos for marketing</li>
              <li>Flexible packages to suit your needs</li>
              <li>Quick turnaround and reliable service</li>
            </ul>
          </div>

          <div className="chatbot-why-choose">
            <h3>Use Cases</h3>
            <ul>
              {useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </div>

          <div className="chatbot-cta">
            <a
              href="https://wa.me/917838649867"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`chatbot-button ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Book a Photoshoot
                <ArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotoshootServiceSection
