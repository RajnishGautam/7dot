import React, { useState } from 'react'
import {
  BarChart2,
  Search,
  Globe,
  Type,
  Sparkles,
  FileText,
  Video,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import './ChatbotServiceSection.css'

const DigitalMarketingServiceSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <BarChart2 className="w-5 h-5" />, text: 'Data-Driven Campaigns' },
    { icon: <Search className="w-5 h-5" />, text: 'SEO & Keyword Optimization' },
    { icon: <Globe className="w-5 h-5" />, text: 'Global & Local Marketing Reach' },
    { icon: <Type className="w-5 h-5" />, text: 'Content Marketing Integration' },
    { icon: <Sparkles className="w-5 h-5" />, text: 'Brand Awareness Campaigns' },
    { icon: <FileText className="w-5 h-5" />, text: 'Email Marketing & Automation' },
    { icon: <Video className="w-5 h-5" />, text: 'Video Ads & Social Campaigns' },
  ]

  const benefits = [
    'Increase website traffic and lead generation',
    'Strengthen brand awareness and recognition',
    'Higher search engine rankings for key services',
    'Data-driven campaigns for improved ROI',
    'Enhanced engagement across all digital platforms',
    'Better conversion rates from targeted marketing',
    'Strong presence across search engines and social media',
  ]

  const whyChoose = [
    'Tailored strategies for your business goals',
    'Expert team with multi-industry experience',
    'Data-driven and measurable results',
    'Full-service support from planning to execution',
  ]

  const useCases = [
    'SEO for Local and National Visibility',
    'Social Media Campaigns',
    'PPC & Paid Advertising',
    'Email Marketing & Automation',
    'Analytics & Reporting',
    'Brand Reputation Management',
    'Influencer Collaborations and Promotions',
    'Website Conversion Optimization',
  ]

  return (
    <section className="chatbot-section">
      <div className="chatbot-container">
        {/* Desktop Layout */}
        <div className="chatbot-grid desktop-layout">
          <div className="chatbot-left">
            <div className="chatbot-heading desktop-heading">
              <h2>
                Professional <span>Digital Marketing & SEO</span>
              </h2>
              <p>
                We help businesses boost their online presence, drive traffic, and generate leads through effective digital marketing and SEO strategies. From search engine optimization to social media campaigns, our team delivers measurable results that grow your business.
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
              <h3>Why Choose Our Services?</h3>
              <ul>
                {whyChoose.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
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
                  Get Your Digital Strategy
                  <ArrowRight className="arrow" />
                </button>
              </a>
            </div>
          </div>

          <div className="chatbot-right">
            <img
              src="/services/digital-marketing.png"
              alt="Digital Marketing illustration"
              className="chatbot-image"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="chatbot-mobile-wrapper">
          <div className="chatbot-heading mobile-heading">
            <h2>
              Professional <span>Digital Marketing & SEO</span>
            </h2>
            <p>
              Boost your online visibility and drive results with our expert digital marketing and SEO solutions tailored to your business.
            </p>
          </div>

          <img
            src="/services/digital-marketing.png"
            alt="Digital Marketing illustration"
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
              {whyChoose.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
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
                Get Your Digital Strategy
                <ArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalMarketingServiceSection
