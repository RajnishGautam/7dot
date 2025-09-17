import React, { useState } from 'react'
import {
  BookOpen,
  Laptop,
  PenTool,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import './ChatbotServiceSection.css'

const CareerTrainingSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <Laptop className="w-5 h-5" />, text: 'Hands-on Web Development' },
    { icon: <Globe className="w-5 h-5" />, text: 'Digital Marketing Campaigns' },
    { icon: <PenTool className="w-5 h-5" />, text: 'Creative Graphics Design' },
    { icon: <BookOpen className="w-5 h-5" />, text: 'Content Writing Mastery' },
    { icon: <Users className="w-5 h-5" />, text: 'Soft Skills & Communication' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Guaranteed Placement Support' },
  ]

  const benefits = [
    'Industry-Relevant Curriculum designed by experts',
    'Work on Live Projects during training',
    'Personal Mentorship and Career Guidance',
    'Interview Preparation and Resume Building',
    'Internship + Job Placement Assistance',
    'Certification Recognized by Companies',
  ]

  const trainingTypes = [
    'Full-Stack Web Development (MERN / MEAN)',
    'Digital Marketing & SEO',
    'Graphics and UI/UX Design',
    'Content Writing & Blogging',
    'Social Media Marketing',
    'Corporate Soft Skills & Communication',
  ]

  const useCases = [
    'Students: Build job-ready skills for future',
    'Professionals: Upskill or switch career paths',
    'Entrepreneurs: Learn digital tools for growth',
    'Freelancers: Master high-demand services',
    'Job Seekers: Get placement-ready training',
  ]

  return (
    <section className="chatbot-section">
      <div className="chatbot-container">
        {/* Desktop Layout */}
        <div className="chatbot-grid desktop-layout">
          <div className="chatbot-left">
            <div className="chatbot-heading desktop-heading">
              <h2>
                Career <span>Training & Development</span>
              </h2>
              <p>
                We offer career-focused training programs built to make you
                industry-ready. Our courses combine theory, practice, and
                mentorship to help you master in-demand skills and secure
                successful career opportunities.
              </p>
              <p>
                From coding and digital marketing to graphics and soft skills,
                we provide comprehensive training with a focus on real-world
                applications and guaranteed placement support.
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

            {/* Training Types */}
            <div className="chatbot-training-types">
              <h3>Types of Training We Offer</h3>
              <ul>
                {trainingTypes.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="chatbot-why-choose">
              <h3>Who Can Benefit?</h3>
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
                  Start Your Career Training
                  <ArrowRight className="arrow" />
                </button>
              </a>
            </div>
          </div>

          <div className="chatbot-right">
            <img
              src="/services/careertraining.png"
              alt="Career Training illustration"
              className="chatbot-image"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="chatbot-mobile-wrapper">
          <div className="chatbot-heading mobile-heading">
            <h2>
              Career <span>Training</span>
            </h2>
            <p>
              Unlock your potential with job-ready skills, live projects, and
              guaranteed placement support. Our training helps you stand out in
              today’s competitive job market.
            </p>
          </div>

          <img
            src="/services/careertraining.png"
            alt="Career Training illustration"
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

          <div className="chatbot-training-types">
            <h3>Training Programs</h3>
            <ul>
              {trainingTypes.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>

          <div className="chatbot-why-choose">
            <h3>Who Can Join?</h3>
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
                Start Your Career Training
                <ArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerTrainingSection
