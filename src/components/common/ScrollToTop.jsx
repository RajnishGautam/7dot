// ScrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ offset = 0 }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Delay ensures page content renders first
    setTimeout(() => {
      // Scroll the window
      window.scrollTo({ top: 0 + offset, left: 0, behavior: 'auto' })

      // Scroll any scrollable wrapper if exists
      const scrollable = document.querySelector('body')
      if (scrollable) scrollable.scrollTop = 0 + offset
    }, 0)
  }, [pathname, offset])

  return null
}

export default ScrollToTop
