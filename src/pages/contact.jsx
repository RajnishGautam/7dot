import React, { useState, useEffect } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import videoLight from '../../src/assets/contactvideolight.mp4'
import videoDark from '../../src/assets/contactvideodark.mp4'
import '../components/Marketing/ContactPage.css'

const ContactPage = () => {
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

    // Send data to Google Apps Script (no-cors, same as HeroWithVideo)
    fetch(
      'https://script.google.com/macros/s/AKfycbz0aQnc0qQc7sFhmuuDm8obbL9i5PgcPu7-LgO2a3UL3ccgYVRtXgLo-xpks4AlEWkGrg/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ name, email, phone, message }),
        headers: { 'Content-Type': 'application/json' },
      }
    ).catch((err) => console.error('Error sending form data:', err))
  }

  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <div className="header-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">Ready to start your next project?</p>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Let's Start a Conversation</h2>
            <p>
              We're here to help you bring your ideas to life. Whether you have
              a question about our services or want to discuss your next
              project, we're just a message away.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <div>
                  <h4>WhatsApp</h4>
                  <h5>
                    <a
                      href="https://wa.me/917838649867"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +52 663 414 9718
                    </a>
                  </h5>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <h5>
                    <a href="mailto:hello@punto7x.com">hello@punto7x.com</a>
                  </h5>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Office</h4>
                  <h5>
                    <a
                      href="https://maps.app.goo.gl/yiQKcGmciooLWZZz5?g_st=ipc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Central 12925 A, Col. Hipódromo Dos,
                      <br />
                      Tijuana BC, México 22195
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/share/1CRjRz1M3j/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/7dot_it_solutions?igsh=MTNpMHozYm13cHd0aA=="
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/917838649867"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/company/7dot-it-soln/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                required
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="6"
              ></textarea>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>

            {showSuccess && (
              <div className="success-message">
                Thank you! We have received your message and will get back to
                you soon.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <a
        href="https://maps.app.goo.gl/yiQKcGmciooLWZZz5?g_st=ipc"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', textDecoration: 'none' }}
      >
        <section className="map-section">
          <div className="map-container">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.3580426912733!2d-117.01004672467225!3d32.5149461995101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9486d5d3f9d1f%3A0x7c3a6b0e29f8ed3b!2sCentral%2012925%20A%2C%20Col.%20Hip%C3%B3dromo%20Dos%2C%20Tijuana%2C%20B.C.%2C%20M%C3%A9xico%2022195!5e0!3m2!1sen!2sus!4v1724160000000!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0, pointerEvents: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </a>
    </div>
  )
}

export default ContactPage
