/**
 * Lightweight i18n — no backend, no heavy dependency.
 * A React context holds the active language and exposes:
 *   - `t`     : the typed translation dictionary (RO by default)
 *   - `lang`  : 'ro' | 'en'
 *   - `setLang` / `toggleLang`
 * The choice is persisted to localStorage and reflected on <html lang>.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import ro from './ro'
import en from './en'

export type Lang = 'ro' | 'en'
export type Dictionary = typeof ro

const dictionaries: Record<Lang, Dictionary> = { ro, en }

const STORAGE_KEY = 'tenesi.lang'

interface I18nContextValue {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ro'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ro' || stored === 'en') return stored
  // Fall back to browser preference, defaulting to Romanian.
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'ro'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'ro' ? 'en' : 'ro'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18nContextValue>(
    () => ({ lang, t: dictionaries[lang], setLang, toggleLang }),
    [lang, setLang, toggleLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}
