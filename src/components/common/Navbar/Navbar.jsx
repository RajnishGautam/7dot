import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import MoonSunToggle from './MoonSunToggle'
import logoLight from '../../../assets/logolightmode.png'
import logoDark from '../../../assets/logodarkmode.png'
import { FaBars, FaTimes, FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  // Track open dropdown for mobile
  const [openDropdown, setOpenDropdown] = useState(null)

  const location = useLocation()

// Services data
const servicesData = [
  { name: 'Branding', path: '/branding', image: '/services/branding.png' },
  { name: 'AI Chatbots', path: '/chatbotdevelopment', image: '/services/chatbot.png' },
  { name: 'Web Development', path: '/webdevelopment', image: '/services/webdevelopment.png' },
  { name: 'Lead Generation', path: '/leadgeneration', image: '/services/leads.png' },
  { name: 'Content Creation', path: '/contentcreation', image: '/services/contentwriting.png' },
  { name: 'Digital Marketing', path: '/digital-marketing', image: '/services/marketing.png' },
  { name: 'Career & Training', path: '/career', image: '/services/training.png' },
  { name: 'Mobile App Development', path: '/appdevelopment', image: '/services/appdevelopment.png' }
]

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  // Close menu & dropdown on route change
  useEffect(() => {
    setMenuOpen(false)
    setServicesDropdownOpen(false)
    setOpenDropdown(null)
  }, [location])

  // Handle overlay click to close menu
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu()
    }
  }

  // Desktop services dropdown
  const handleServicesMouseEnter = () => setServicesDropdownOpen(true)
  const handleServicesMouseLeave = () => setServicesDropdownOpen(false)

  // Mobile dropdown toggle
  const toggleMobileDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src={darkMode ? logoDark : logoLight}
              alt="Logo"
              className="logo-img"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="navbar-links desktop-only">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              HOME
            </Link>

            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              ABOUT US
            </Link>

            {/* Services Dropdown */}
            <div
              className="navbar-dropdown"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              SERVICES
              <FiChevronDown className={`dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`} />

              <div className={`navbar-dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
                {servicesData.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`dropdown-item ${location.pathname === service.path ? 'active' : ''}`}
                  >
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="dropdown-item-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <span className="dropdown-item-text">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              CONTACT US
            </Link>
            <Link
              to="/blog"
              className={location.pathname === '/blog' ? 'active' : ''}
            >
              BLOGS
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="navbar-actions desktop-only">
            <button
              className="navbar-contact"
              onClick={() =>
                window.open('https://wa.me/917838649867', '_blank')
              }
            >
              <span className="contact-content"> WhatsApp Now </span>
            </button>

            <MoonSunToggle darkMode={darkMode} onToggle={toggleDarkMode} />
          </div>

          {/* Mobile Actions */}
          <div className="navbar-actions mobile-only">
            <MoonSunToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            <div
              className="hamburger-icon"
              onClick={toggleMenu}
              role="button"
              tabIndex={0}
              aria-label="Toggle Menu"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleMenu()
              }}
            >
              <FaBars />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={handleOverlayClick}
      >
        <button
          className="menu-close"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        <div className="mobile-menu-content">
          <nav className="mobile-menu-links">
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === '/' ? 'active' : ''}
            >
              HOME
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              ABOUT US
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="mobile-dropdown">
              <div
                className="mobile-dropdown-trigger"
                onClick={() => toggleMobileDropdown('services')}
              >
                SERVICES
                <FiChevronDown
                  className={`mobile-dropdown-arrow ${openDropdown === 'services' ? 'open' : ''}`}
                />
              </div>

              <div className={`mobile-sub-items ${openDropdown === 'services' ? 'open' : ''}`}>
                {servicesData.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={closeMenu}
                    className={`mobile-sub-item ${location.pathname === service.path ? 'active' : ''}`}
                  >
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="mobile-sub-item-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={closeMenu}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              CONTACT US
            </Link>
            <Link
              to="/blog"
              onClick={closeMenu}
              className={location.pathname === '/blog' ? 'active' : ''}
            >
              BLOGS
            </Link>
          </nav>

          {/* Mobile Socials */}
          <div className="hambergsocial">
            <a
              href="https://www.facebook.com/share/1CRjRz1M3j/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/917838649867"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/7dot_it_solutions?igsh=MTNpMHozYm13cHd0aA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/7dot-it-soln/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar