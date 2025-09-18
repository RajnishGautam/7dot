import React, { useState, useEffect } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa'
import videoLight from '../../../assets/contactvideolight.mp4'
import videoDark from '../../../assets/contactvideodark.mp4'
import './Contactsection.css'

const HeroWithVideo = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  )
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains('dark'))
    })
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const phone = formData.get('phone').trim().replace(/\s+/g, '')
    const message = formData.get('message').trim()

    // Basic validation
    if (!name || !email || !phone) {
      alert('Please fill all required fields: Name, Email, and Phone Number.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return
    }
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number with optional country code.')
      return
    }

    // Show success message immediately
    setShowSuccess(true)
    e.target.reset()
    setTimeout(() => setShowSuccess(false), 3000)

    // Send data to Google Apps Script (no-cors)
    fetch(
      'https://script.google.com/macros/s/AKfycbz0aQnc0qQc7sFhmuuDm8obbL9i5PgcPu7-LgO2a3UL3ccgYVRtXgLo-xpks4AlEWkGrg/exec',
      {
        method: 'POST',
        mode: 'no-cors', // avoids CORS error
        body: JSON.stringify({ name, email, phone, message }),
        headers: { 'Content-Type': 'application/json' },
      }
    ).catch((err) => console.error('Error sending form data:', err))
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Social Icons */}
        <div className="hero-socials">
          <a
            href="https://www.facebook.com/share/1CRjRz1M3j/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/7dot_it_solutions?igsh=MTNpMHozYm13cHd0aA=="
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/917838649867"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/company/7dot-it-soln/"
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn"
          >
            <FaLinkedin />
          </a>

          <div className="social-scroll">
            <div className="scroll-dot" />
            <div className="scroll-line" />
          </div>
        </div>

        {/* Text Content */}
        <div className="hero-left">
          <div className="tagline">
            <div className="tagline-line"></div>
            <div className="tagline-dot"></div>
            <div className="tagline-text">Get In Touch</div>
          </div>

          <p className="hero-desc">
            We'd love to hear from you. Fill out the form and our team will get
            back to you shortly.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              rows="5"
            ></textarea>
            <button type="submit" className="submitform-button">
              Send Message
            </button>
          </form>

          {showSuccess && (
            <div className="popup-message">
              Thank you! We have received your message.
            </div>
          )}
        </div>

        {/* Video */}
        <div className="hero-right">
          <video
            className="hero-video"
            src={darkMode ? videoDark : videoLight}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  )
}

export default HeroWithVideo
