import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Branding from './pages/branding'
import DigitalMarketing from './pages/marketing'
import Development from './pages/development'
import Blog from './pages/blogpage'
import BlogDetail from './pages/blogdetail'
import ContactPage from './pages/contact'
import About from './pages/aboutus'
import PrivacyPolicy from './pages/privacypolicy'
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    // GA pageview tracking for SPA route changes
    if (window.gtag) {
      window.gtag('config', 'G-MT8Q1ZBJG7', { page_path: location.pathname })
    }
  }, [location])

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/development" element={<Development />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
