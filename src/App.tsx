import { Routes, Route } from 'react-router-dom'
import { useSmoothScroll } from './lib/useSmoothScroll'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

export default function App() {
  useSmoothScroll()

  return (
    <div className="flex min-h-screen flex-col bg-steel-900">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/despre" element={<About />} />
          <Route path="/servicii" element={<Services />} />
          <Route path="/portofoliu" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
