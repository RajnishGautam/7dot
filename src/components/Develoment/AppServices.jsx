import React, { useState, useEffect, useRef } from 'react'
import './AppServices.css'

const AppServices = () => {
  const [currentApp, setCurrentApp] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef(null)
  const [time, setTime] = useState('')

  // 1. Create a ref to hold the interval ID
  const intervalRef = useRef(null)

  const appTypes = [
    {
      id: 1,
      title: 'Native iOS Apps',
      description:
        'Stunning iOS applications with native performance and Apple design guidelines',
      features: [
        'SwiftUI',
        'App Store',
        'Optimized',
        'Apple Eco',
      ],
      mockupColor: '#8e1616',
      bgGradient: 'linear-gradient(135deg, #007AFF, #5856D6)',
    },
    {
      id: 2,
      title: 'Android Apps',
      description:
        'Powerful Android applications with Material Design and Google services integration',
      features: [
        'Kotlin/Java',
        'Designs',
        'Best Services',
        'Play Store',
      ],
      mockupColor: '#8e1616',
      bgGradient: 'linear-gradient(135deg, #34A853, #4285F4)',
    },
    {
      id: 3,
      title: 'Cross-Platform',
      description:
        'One codebase, multiple platforms. React Native and Flutter applications',
      features: [
        'React Native',
        'Flutter',
        'Reusability',
        'Faster ',
      ],
      mockupColor: '#8e1616',
      bgGradient: 'linear-gradient(135deg, #61DAFB, #21759B)',
    },
    {
      id: 4,
      title: 'Enterprise Apps',
      description:
        'Scalable enterprise mobile solutions with advanced security and integration',
      features: [
        'Security',
        'APIs',
        'Scalable',
        'Admin ',
      ],
      mockupColor: '#861616',
      bgGradient: 'linear-gradient(135deg, #FF6B35, #F7931E)',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const progress = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
        )
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      )
    }

    updateTime() // run once immediately
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer) // cleanup on unmount
  }, [])

  useEffect(() => {
    // 2. Store the interval ID in the ref
    intervalRef.current = setInterval(() => {
      setCurrentApp((prev) => (prev + 1) % appTypes.length)
    }, 4000)

    // The cleanup function will still clear the interval on unmount
    return () => clearInterval(intervalRef.current)
  }, [])

  // 3. Create a handler function to stop the interval and set the new app
  const handleTabClick = (index) => {
    // Stop the automatic slideshow
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    // Set the app to the one the user clicked
    setCurrentApp(index)
  }

  return (
    <section className="app-services-section" ref={sectionRef}>
      <div
        className="parallax-bg"
        style={{ transform: `translateY(${scrollProgress * 100}px)` }}
      >
        <div className="floating-devices">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`floating-device device-${i}`}>
              📱
            </div>
          ))}
        </div>
      </div>

      <div className="app-services-container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="appsection-title">
            <span className="setion-title">
  <span className="process-section__highlight">MOBILE APP</span> DEVELOPMENT
</span>

          </h2>
          <p className="section-subtitle">
            Creating mobile experiences that users love and businesses need
          </p>
        </div>

        <div className="app-showcase">
          <div className="mockup-container">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div
                    className="app-interface"
                    style={{
                      background: appTypes[currentApp].bgGradient,
                      '--accent-color': appTypes[currentApp].mockupColor,
                    }}
                  >
                    <div className="status-bar">
                      <span className="time">{time}</span>
                      <div className="status-icons">
                        <span className="signal">📶</span>
                        <span className="wifi">📶</span>
                        <span className="battery">🔋</span>
                      </div>
                    </div>

                    <div className="app-header">
                      <h3>{appTypes[currentApp].title}</h3>
                      <div className="header-icon">⚡</div>
                    </div>

                    <div className="app-content">
                      <div className="app-content-card">
                        <div className="app-card-icon">🚀</div>
                        <div className="app-card-text">
                          <div className="app-card-title"></div>
                          <div className="app-card-subtitle"></div>
                        </div>
                      </div>
                      <div className="app-content-card">
                        <div className="app-card-icon">⭐</div>
                        <div className="app-card-text">
                          <div className="app-card-title"></div>
                          <div className="app-card-subtitle"></div>
                        </div>
                      </div>
                      <div className="app-content-card">
                        <div className="app-card-icon">💎</div>
                        <div className="app-card-text">
                          <div className="app-card-title"></div>
                          <div className="app-card-subtitle"></div>
                        </div>
                      </div>
                    </div>

                    <div className="app-navigation">
                      <div className="nav-dot active"></div>
                      <div className="nav-dot"></div>
                      <div className="nav-dot"></div>
                      <div className="nav-dot"></div>
                    </div>
                  </div>
                </div>
                <div className="phone-button"></div>
              </div>

              <div className="phone-glow"></div>
              <div className="interaction-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
          </div>

          <div className="app-details">
            <div className="app-selector">
              {appTypes.map((app, index) => (
                <button
                  key={app.id}
                  className={`app-tab ${currentApp === index ? 'active' : ''}`}
                  // 4. Use the new handler in the onClick event
                  onClick={() => handleTabClick(index)}
                  style={{ '--tab-color': app.mockupColor }}
                >
                  <span className="tab-title">{app.title}</span>
                  <div className="tab-indicator"></div>
                </button>
              ))}
            </div>
            <div
              className="app-info"
              style={{ '--tab-color': appTypes[currentApp].mockupColor }}
            >
              <h3 className="app-title">{appTypes[currentApp].title}</h3>
              <p className="app-description">
                {appTypes[currentApp].description}
              </p>

              <div className="app-features">
                {appTypes[currentApp].features.map((feature, index) => (
                  <div key={index} className="feature-tag">
                    {/* <span className="feature-icon"></span> */}
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className="app-cta"
                style={{ '--cta-color': appTypes[currentApp].mockupColor }}
                onClick={() => {
                  window.open('https://wa.me/917838649867', '_blank')
                }}
              >
                <span>Get Started</span>
                <div className="cta-glow"></div>
              </button>
            </div>
          </div>
        </div>
          
      </div>
    </section>
  )
}

export default AppServices
