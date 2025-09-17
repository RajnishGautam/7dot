import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logoLight from '../../../assets/logolightmode.png'
import logoDark from '../../../assets/logodarkmode.png'

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains('dark'))
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    setDarkMode(document.body.classList.contains('dark'))

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="brand-section">
            <div className="brand-logo">
              <img
                src={darkMode ? logoDark : logoLight}
                alt="Footer Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="brand-description">
                Digital Tech
            </p>
            <p>SCO 2/3 IT Park, Chandigarh (Panchkula)</p>
          </div>

          {/* Blog Page Section */}
          <div className="pages-section">
            <h3 className="pagesection-title">Pages</h3>
            <ul className="pages-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="contactfooter-section">
            <h3 className="contactfootersection-title">Contact Us</h3>
            <div className="contactfooter-info">
              <div className="contactfooter-item">
                <p>India Branch: 7dot It Solutions</p>
              </div>
              <div className="contactfooter-item">
                <p>Other Location: Punto7X, Mexico</p>
              </div>
              <p className="contactfooter-item">
                Phone: <a href="tel:+917838649867">+91 7838649867</a>
              </p>
              <p className="contactfooter-item">
                Phone: <a href="tel:+917838649867">+52 6634149718</a>
              </p>
              <p className="contactfooter-item">
                Email: <a href="mailto:support@7dotit.solutions">support@7dotit.solutions</a>
              </p>
            </div>
          </div>

          {/* Career Section */}
          <div className="career-section">
            <h3 className="contactsection-title">Career</h3>
            <ul className="career-list">
              <li>
                <a
                  href="https://forms.gle/nQbKTrSjCPJ9bziN8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Training
                </a>
              </li>
              
              <li>
                <a
                  href="https://forms.gle/nQbKTrSjCPJ9bziN8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internship
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/nQbKTrSjCPJ9bziN8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Time Job
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="services-section">
            <h3 className="contactsection-title">Services</h3>
            <ul className="services-list">
              <li>
                <Link to="/digital-marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/branding">UI & UX Designing</Link>
              </li>
              <li>
                <Link to="/branding">Branding & Identity</Link>
              </li>
              <li>
                <Link to="/development">Website Development</Link>
              </li>
              <li>
                <Link to="/development">Mobile App Development</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} 7DotIt. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
