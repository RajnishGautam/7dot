import React, { useState } from 'react'
import {
  MessageCircle,
  Zap,
  Brain,
  Users,
  ArrowRight,
  Code2,
  CheckCircle,
} from 'lucide-react'
import './ChatbotServiceSection.css'

const ChatbotServiceSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <Brain className="w-5 h-5" />, text: 'Advanced AI & NLP' },
    { icon: <Code2 className="w-5 h-5" />, text: 'Custom Development' },
    { icon: <Users className="w-5 h-5" />, text: 'Multi-platform Integration' },
    { icon: <Zap className="w-5 h-5" />, text: 'Real-time Learning' },
  ]

  const benefits = [
    '24/7 Customer Support Automation',
    'Personalized User Interactions',
    'Seamless CRM Integration',
    'Advanced Analytics & Insights',
  ]

  return (
    <section className="chatbot-section">
      <div className="chatbot-container">
        {/* Desktop Layout */}
        <div className="chatbot-grid desktop-layout">
          <div className="chatbot-left">
            <div className="chatbot-heading desktop-heading">
            
              <h2>
                Personalized AI <span>Chatbots</span>
              </h2>
              <p>
                We build intelligent conversational AI solutions tailored to
                your business needs. Our custom chatbots enhance customer
                experience, automate support, and drive engagement through
                natural, meaningful conversations.
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
                  Get Your Custom Chatbot
                  <ArrowRight className="arrow" />
                </button>
              </a>
            </div>
          </div>

          <div className="chatbot-right">
            <img
              src="/services/chatbotilu.png"
              alt="Chatbot illustration"
              className="chatbot-image"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="chatbot-mobile-wrapper">
          <div className="chatbot-heading mobile-heading">
            
            <h2>
              Personalized AI <span>Chatbots</span>
            </h2>
            <p>
              We build intelligent conversational AI solutions tailored to
              your business needs. Our custom chatbots enhance customer
              experience, automate support, and drive engagement through
              natural, meaningful conversations.
            </p>
          </div>

          <img
            src="/services/chatbotilu.png"
            alt="Chatbot illustration"
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
                Get Your Custom Chatbot
                <ArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatbotServiceSection
