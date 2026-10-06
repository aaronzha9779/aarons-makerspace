import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import About from './pages/About.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Inspiration from './pages/Inspiration.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Portfolio />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inspiration" element={<Inspiration />} />
      </Routes>
    </>
  )
}
