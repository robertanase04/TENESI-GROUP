import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../../i18n'
import { IconMenu, IconClose, IconSilo } from '../ui/icons'

const links = [
  { to: '/', key: 'home' as const, end: true },
  { to: '/despre', key: 'about' as const },
  { to: '/servicii', key: 'services' as const },
  { to: '/portofoliu', key: 'portfolio' as const },
  { to: '/contact', key: 'contact' as const },
]

function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n()
  return (
    <div
      className={`flex items-center gap-1 border border-steel-700 p-0.5 font-display text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language"
    >
      {(['ro', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
            lang === l
              ? 'bg-safety-500 text-steel-950'
              : 'text-steel-400 hover:text-steel-100'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-steel-800 bg-steel-950/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-tenesi flex h-16 items-center justify-between md:h-20">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-2.5" aria-label="TENESI GROUP — Acasă">
          <IconSilo className="h-7 w-7 text-safety-500 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="font-display text-lg font-bold tracking-tight text-steel-100">
            TENESI<span className="text-safety-500"> GROUP</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `relative font-display text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-safety-500 after:transition-all after:duration-300 ${
                      isActive
                        ? 'text-steel-100 after:w-full'
                        : 'text-steel-400 after:w-0 hover:text-steel-100 hover:after:w-full'
                    }`
                  }
                >
                  {t.nav[l.key]}
                </NavLink>
              </li>
            ))}
          </ul>
          <LangToggle />
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-xs">
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="text-steel-100"
          >
            {open ? <IconClose className="h-7 w-7" /> : <IconMenu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-steel-800 bg-steel-950/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-tenesi flex flex-col py-4">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `block border-b border-steel-800/60 py-3.5 font-display text-base font-medium ${
                        isActive ? 'text-safety-500' : 'text-steel-200'
                      }`
                    }
                  >
                    {t.nav[l.key]}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4">
                <Link to="/contact" className="btn-primary w-full">
                  {t.nav.cta}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
