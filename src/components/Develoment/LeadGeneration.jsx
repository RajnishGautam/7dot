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

const LeadGenerationSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <Brain className="w-5 h-5" />, text: 'Targeted Audience Research' },
    { icon: <Code2 className="w-5 h-5" />, text: 'Automated Prospect Outreach' },
    { icon: <Users className="w-5 h-5" />, text: 'Multi-Channel Campaigns' },
    { icon: <Zap className="w-5 h-5" />, text: 'AI-Powered Data Insights' },
    { icon: <MessageCircle className="w-5 h-5" />, text: 'Personalized Messaging' },
    { icon: <Users className="w-5 h-5" />, text: 'Lead Nurturing Funnels' },
  ]

  const benefits = [
    'Consistent Stream of Qualified Leads',
    'Improved Conversion Rates',
    'Reduced Marketing Costs',
    'Scalable and Data-Driven Strategies',
    'Better ROI from Sales Campaigns',
    'Improved Brand Visibility and Trust',
  ]

  const useCases = [
    'B2B: Build targeted pipelines for enterprise clients',
    'E-commerce: Drive traffic and boost product sales',
    'Real Estate: Generate buyer and seller leads',
    'Healthcare: Attract new patients and appointments',
    'Education: Enroll more students through campaigns',
    'Finance: Acquire qualified prospects for services',
  ]

  return (
    <section className="chatbot-section">
      <div className="chatbot-container">
        {/* Desktop Layout */}
        <div className="chatbot-grid desktop-layout">
          <div className="chatbot-left">
            <div className="chatbot-heading desktop-heading">
              <h2>
                Smart Business <span>Lead Generation</span>
              </h2>
              <p>
                We deliver customized lead generation strategies designed to
                attract, engage, and convert your ideal customers. Using modern
                tools and proven methods, we help businesses maximize outreach,
                build stronger pipelines, and achieve consistent growth.
              </p>
              <p>
                Our approach combines audience research, automation, and
                personalized engagement across multiple channels including email,
                social media, and paid campaigns. We focus on quality over
                quantity to ensure every lead adds value to your business.
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
              <h3>Why Choose Our Lead Generation Services?</h3>
              <ul>
                <li>Proven track record of delivering high-quality leads</li>
                <li>Customized strategies tailored to your industry</li>
                <li>End-to-end support from prospecting to conversion</li>
                <li>Transparent reporting and measurable results</li>
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
                  Boost Your Lead Generation
                  <ArrowRight className="arrow" />
                </button>
              </a>
            </div>
          </div>

          <div className="chatbot-right">
            <img
              src="/services/leadgeneration.png"
              alt="Lead Generation illustration"
              className="chatbot-image"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="chatbot-mobile-wrapper">
          <div className="chatbot-heading mobile-heading">
            <h2>
              Smart <span>Lead Generation</span>
            </h2>
            <p>
              We design result-oriented lead generation campaigns that focus on
              reaching the right audience, driving meaningful interactions, and
              converting prospects into loyal customers.
            </p>
            <p>
              Our proven methods combine automation, personalization, and
              analytics to give your business an edge over competitors.
            </p>
          </div>

          <img
            src="/services/leadgeneration.png"
            alt="Lead Generation illustration"
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
              <li>Industry-specific targeting and research</li>
              <li>Multi-channel lead generation campaigns</li>
              <li>Focus on quality and long-term relationships</li>
              <li>Data-driven strategies for consistent growth</li>
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
                Boost Your Lead Generation
                <ArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadGenerationSection
