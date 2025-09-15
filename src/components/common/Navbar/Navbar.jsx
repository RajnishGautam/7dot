import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import MoonSunToggle from './MoonSunToggle'
import logoLight from '../../../assets/logolightmode.png'
import logoDark from '../../../assets/logodarkmode.png'
import { FaBars, FaTimes, FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Handle overlay click to close menu
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu()
    }
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

          {/* Desktop Navigation Links */}
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
            <Link
              to="/development"
              className={location.pathname === '/development' ? 'active' : ''}
            >
              SERVICES
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === '/contact' ? 'active' : ''
              }
            >
              CONTACT US
            </Link>
            <Link
              to="/blog"
              onClick={closeMenu}
              className={
                location.pathname === '/blog' ? 'active' : ''
              }
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

      {/* Full Screen Mobile Menu Overlay */}
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
            <Link
              to="/development"
              onClick={closeMenu}
              className={location.pathname === '/development' ? 'active' : ''}
            >
              SERVICES
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={
                location.pathname === '/contact' ? 'active' : ''
              }
            >
              CONTACT US
            </Link>
              <Link
              to="/blog"
              onClick={closeMenu}
              className={
                location.pathname === '/blog' ? 'active' : ''
              }
            >
              BLOGS
            </Link>
          </nav>

          {/* Social Media Icons - Only in Hamburger Menu */}
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