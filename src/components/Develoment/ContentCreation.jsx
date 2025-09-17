import React, { useState } from 'react'
import {
  PenTool,
  Image as ImageIcon,
  Video,
  Type,
  ArrowRight,
  CheckCircle,
  Sparkles,
  FileText,
} from 'lucide-react'
import './ChatbotServiceSection.css'

const ContentCreationServiceSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <PenTool className="w-5 h-5" />, text: 'Engaging Copywriting' },
    { icon: <ImageIcon className="w-5 h-5" />, text: 'Creative Graphic Design' },
    { icon: <Video className="w-5 h-5" />, text: 'High-Quality Video Content' },
    { icon: <Type className="w-5 h-5" />, text: 'SEO-Optimized Blogs' },
  ]

  const benefits = [
    'Boost your brand visibility',
    'Attract and retain customers',
    'Multi-format content for all platforms',
    'Consistent and professional storytelling',
  ]

  const whyChoose = [
    'Tailored content strategies for your audience',
    'Creative team with multi-industry expertise',
    'Data-driven content for measurable results',
    'Full-service support from concept to delivery',
  ]

  const useCases = [
    'Social Media: Eye-catching posts and reels',
    'Websites: SEO-friendly blogs and articles',
    'Marketing: Ad copies and brand campaigns',
    'Education: Tutorials, guides, and e-learning content',
  ]

  return (
    <section className="chatbot-section">
      <div className="chatbot-container">
        {/* Desktop Layout */}
        <div className="chatbot-grid desktop-layout">
          <div className="chatbot-left">
            <div className="chatbot-heading desktop-heading">
              <h2>
                Professional <span>Content Creation</span>
              </h2>
              <p>
                We craft compelling, creative, and high-impact content that
                helps your brand stand out. From copywriting and graphics to
                videos and blogs, our team delivers content that inspires and
                drives engagement across every platform.
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

            {/* Why Choose Us */}
            <div className="chatbot-why-choose">
              <h3>Why Choose Our Content Creation?</h3>
              <ul>
                {whyChoose.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
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
                  Get Your Custom Content
                  <ArrowRight className="arrow" />
                </button>
              </a>
            </div>
          </div>

          <div className="chatbot-right">
            <img
              src="/services/contentcreation.png"
              alt="Content creation illustration"
              className="chatbot-image"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="chatbot-mobile-wrapper">
          <div className="chatbot-heading mobile-heading">
            <h2>
              Professional <span>Content Creation</span>
            </h2>
            <p>
              Our creative experts deliver impactful content across text,
              design, and video to boost your brand presence and connect
              meaningfully with your audience.
            </p>
          </div>

          <img
            src="/services/contentcreation.png"
            alt="Content creation illustration"
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

          {/* Why Choose Us */}
          <div className="chatbot-why-choose">
            <h3>Why Choose Us?</h3>
            <ul>
              {whyChoose.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
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
                Get Your Custom Content
                <ArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentCreationServiceSection
